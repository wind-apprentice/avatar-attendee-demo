// ============================================================
// people.js — meeting participants (one tile each)
// ============================================================
// key      = the name used in script.js ("who": "Ian")
// role     = shown on the tile ("Ian · CSM")
// color    = tile circle colour
// browserVoice/pitch/rate = placeholder voice when there is no mp3
// tts      = voices used by tools/generate_audio.py
var PEOPLE = {
  Ian:    { role: "CSM",     color: "#8e44ad", browserVoice: 0, pitch: 1.0,  rate: 1.0,
            tts: { edge: "en-US-GuyNeural",         openai: "onyx" } },
  Jenny:  { role: "OPS",     color: "#d35400", browserVoice: 1, pitch: 1.15, rate: 1.0,
            tts: { edge: "en-US-JennyNeural",       openai: "nova" } },
  Edward: { role: "Finance", color: "#2471a3", browserVoice: 2, pitch: 0.9,  rate: 1.0,
            tts: { edge: "en-GB-RyanNeural",        openai: "echo" } },
};
if (typeof module !== "undefined") module.exports = { PEOPLE };
