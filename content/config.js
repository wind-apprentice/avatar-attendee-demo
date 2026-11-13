// ============================================================
// config.js — global settings (names, titles, audio options)
// ============================================================
var CONFIG = {
  OWNER: "Neo",                         // the person who can't attend
  AVATAR_NAME: "Neo’s Avatar",          // name shown on the avatar tile and in chat
  meetingTitle: "Q4 Delivery Sync",     // top-left of the meeting window
  startClock: "14:00",                  // clock at the start (changed later by {type:"clock"} steps)

  botName: "Avatar Attendee",           // phone chat header
  botSubtitle: "bot · working for Neo",

  // Voice files: audio/<id>.mp3 for every "speak" step that has an id.
  // If a file is missing, the browser's built-in voice reads the line instead.
  useAudioFiles: true,
  audioDir: "audio",

  watermark: "Concept demo · simulated UI",
  endCard: {
    title: "Avatar Attendee",
    subtitle: "Can’t attend? Stay in the loop.",
    footnote: "Concept demo · simulated UI · Group 3",
  },
};
if (typeof module !== "undefined") module.exports = { CONFIG };
