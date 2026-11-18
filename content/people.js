// ============================================================
// people.js — meeting participants (one tile each, plus the Avatar)
// ============================================================
// key      = the name used in script.js ("who": "Ian")
// role     = shown on the tile ("Ian · CSM")
// color    = tile circle colour
// tts      = voices used by tools/generate_audio.py (edge-tts / OpenAI)
// browserVoiceNames = preferred built-in browser voices (placeholder when an mp3 is missing);
//                     the first name found on this computer is used
var PEOPLE = {
  Ian:    { role: "CSM",     color: "#8e44ad",
            tts: { edge: "en-US-AvaNeural",   openai: "nova" },          // female voice
            browserVoiceNames: ["Samantha", "Google US English", "Aria", "Ava", "Zira"], browserVoice: 0, pitch: 1.05, rate: 1.0 },
  Edward: { role: "Finance", color: "#2471a3",
            tts: { edge: "en-US-AndrewNeural", openai: "onyx" },         // male voice
            browserVoiceNames: ["Daniel", "Google UK English Male", "Guy", "Andrew", "David"], browserVoice: 1, pitch: 0.95, rate: 1.0 },
};
if (typeof module !== "undefined") module.exports = { PEOPLE };
