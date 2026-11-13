#!/usr/bin/env python3
"""Generate one mp3 per "speak" line in content/script.js -> audio/<id>.mp3

Usage:
  pip install edge-tts            # free Microsoft neural voices (default)
  python tools/generate_audio.py
  python tools/generate_audio.py --provider openai      # needs OPENAI_API_KEY
  python tools/generate_audio.py --only 04_ian --force  # regenerate one line

Voices per person come from content/people.js (tts.edge / tts.openai).
Keep each speak step on ONE line in script.js so this script can find it.
"""
import argparse, asyncio, json, os, re, sys, urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SCRIPT = ROOT / "content" / "script.js"
PEOPLE = ROOT / "content" / "people.js"
OUT = ROOT / "audio"

def js_str(field, line):
    m = re.search(field + r'\s*:\s*(["\'`])(.*?)(?<!\\)\1', line)
    return m.group(2) if m else None

def load_lines():
    lines = []
    for raw in SCRIPT.read_text(encoding="utf-8").splitlines():
        if re.search(r'type\s*:\s*["\']speak["\']', raw):
            sid, who, text = js_str("id", raw), js_str("who", raw), js_str("text", raw)
            if sid and who and text:
                lines.append({"id": sid, "who": who, "text": text.replace("${O}", "Neo")})
            else:
                print(f"! skipped (needs id, who, text on one line): {raw.strip()[:80]}")
    return lines

def load_voices():
    src = PEOPLE.read_text(encoding="utf-8")
    voices = {}
    for m in re.finditer(r'(\w+)\s*:\s*\{(.*?)tts\s*:\s*\{(.*?)\}', src, re.S):
        name, tts = m.group(1), m.group(3)
        voices[name] = {k: v for k, v in re.findall(r'(\w+)\s*:\s*"([^"]+)"', tts)}
    return voices

async def edge(text, voice, path):
    import edge_tts
    await edge_tts.Communicate(text, voice).save(str(path))

def openai(text, voice, path):
    key = os.environ.get("OPENAI_API_KEY") or sys.exit("Set OPENAI_API_KEY first")
    body = json.dumps({"model": os.environ.get("OPENAI_TTS_MODEL", "gpt-4o-mini-tts"),
                       "voice": voice, "input": text, "format": "mp3"}).encode()
    req = urllib.request.Request("https://api.openai.com/v1/audio/speech", data=body,
                                 headers={"Authorization": f"Bearer {key}", "Content-Type": "application/json"})
    with urllib.request.urlopen(req) as r:
        path.write_bytes(r.read())

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--provider", choices=["edge", "openai"], default="edge")
    ap.add_argument("--only", help="generate a single id, e.g. 04_ian")
    ap.add_argument("--force", action="store_true", help="overwrite existing files")
    a = ap.parse_args()
    OUT.mkdir(exist_ok=True)
    voices = load_voices()
    for ln in load_lines():
        if a.only and ln["id"] != a.only:
            continue
        path = OUT / f'{ln["id"]}.mp3'
        if path.exists() and not a.force:
            print(f"= {path.name} exists (use --force to redo)"); continue
        voice = voices.get(ln["who"], {}).get(a.provider)
        if not voice:
            sys.exit(f'No {a.provider} voice for {ln["who"]} in people.js')
        print(f'+ {path.name}  [{ln["who"]} · {voice}]  {ln["text"]}')
        if a.provider == "edge":
            asyncio.run(edge(ln["text"], voice, path))
        else:
            openai(ln["text"], voice, path)
    print("done")

if __name__ == "__main__":
    main()
