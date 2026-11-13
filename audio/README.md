# audio/

One mp3 per spoken line, named after the line's `id` in `content/script.js`:

```
audio/01_ian.mp3
audio/02_jenny.mp3
...
```

Generate them with `python tools/generate_audio.py`, or drop in your own recordings with the same names.
A missing file is fine: the browser's built-in voice reads that line instead.
