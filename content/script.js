// ============================================================
// script.js — the whole demo, step by step (runs top to bottom)
// Step types: see README.md → "Step reference"
// Example meeting: Ian and Edward sync on the AI agent project; Neo can't attend.
// ============================================================
var O = (typeof CONFIG !== "undefined" ? CONFIG : require("./config.js").CONFIG).OWNER;

var SCRIPT = [
  // ---------- Scene 1: calendar ----------
  { type: "wait", ms: 1500 },
  { type: "cal_click" },
  { type: "toast", text: "🤖 Avatar is joining “AI Agent Project Sync”…", ms: 1800 },
  { type: "scene", to: "main" },

  // ---------- Scene 2: avatar joins ----------
  { type: "clock", t: "14:00" },
  { type: "join", who: "Ian" }, { type: "join", who: "Edward" },
  { type: "wait", ms: 800 },
  { type: "join", who: "avatar" },
  { type: "chat_sys", text: "Neo’s Avatar (AI) joined" },
  { type: "chat", from: "avatar", text: `Hi everyone, I’m ${O}’s AI avatar. ${O} can’t join today, so I’ll take notes and pass your questions to him. His answers will appear here.` },

  // ---------- "Anything to say first?" ----------
  { type: "phone_typing", ms: 1100 },
  { type: "phone", html: `👋 I’ve joined <b>AI Agent Project Sync</b> (14:00–14:30) for you.\nAnything you’d like me to tell the group first?`, buttons: ["Nothing for now"] },
  { type: "phone_reply", text: "Tell them I added English speaker notes to every slide." },
  { type: "phone", html: "✅ Posted in the meeting chat." },
  { type: "chat", from: "avatar", text: `Message from ${O}: English speaker notes have been added to every slide.` },

  // ---------- Meeting, part 1 ----------
  { type: "speak", id: "01_ian",    who: "Ian",    text: "Thanks, Neo. Let’s go through the AI agent project. The slides are due to HR on November thirtieth." },
  { type: "speak", id: "02_edward", who: "Edward", text: "I’ve finished the business impact numbers. We estimate about four hours a week per person in meetings where a summary would be enough." },
  { type: "speak", id: "03_ian",    who: "Ian",    text: "Great. Neo, is the demo video ready? And which voices are we using?" },

  // ---------- Digest #1 ----------
  { type: "skip", big: "⏩ Digest interval", small: "Every 3 minutes (configurable) · 14:03", clock: "14:03" },
  { type: "phone_typing", ms: 1300 },
  { type: "phone", html:
`<h4>🕑 Digest · 14:00–14:03</h4><span class="sec">Key points</span>• <b>Ian:</b> Slides are due to HR on Nov 30
• <b>Edward:</b> Impact estimate is ~4 h/week per person in summary-only meetings
<span class="sec">❓ Questions for you</span><span class="q">Q1 · Ian:</span> Is the demo video ready? Which voices are we using?`,
    buttons: ["Yes", "Not yet", "Join meeting"] },
  { type: "phone_tap", label: "Not yet" },
  { type: "phone_reply", text: "Q1: Draft is done. Final cut with AI voices on Friday." },
  { type: "phone", html: "✅ Posted in the meeting chat, tagging Ian." },
  { type: "chat", from: "avatar", text: `<span class="mention">@Ian</span> Q: Is the demo video ready? Which voices are we using?<br><b>${O}:</b> The draft is done. The final cut with AI-generated voices will be ready on Friday.` },

  // ---------- Meeting, part 2 ----------
  { type: "speak", id: "04_ian",    who: "Ian",    text: "Perfect, thanks Neo. Then we can rehearse next Tuesday." },

  // ---------- Ask from the phone: Neo sends a question into the meeting ----------
  { type: "clock", t: "14:05" },
  { type: "phone_reply", text: "Ask Edward: can you put the 4-hour estimate and its source on slide 6 by Thursday?" },
  { type: "phone_typing", ms: 900 },
  { type: "phone", html: "📨 Sending your question to the meeting chat now. I’ll tell you when Edward answers." },
  { type: "chat_typing", ms: 1200 },
  { type: "chat", from: "avatar", variant: "ask", tag: "Question from Neo", text: `<span class="mention">@Edward</span> Can you put the 4-hour estimate and its source on slide 6 by Thursday?`, ms: 1800 },
  { type: "speak", id: "05_edward", who: "Edward", text: "Sure, Neo. I’ll add the estimate and the source to slide six by Thursday." },
  { type: "phone_typing", ms: 1000 },
  { type: "phone", html: "💬 <b>Edward answered</b> (14:05)\n“Sure. I’ll add the estimate and the source to slide 6 by Thursday.”", buttons: ["👍 Thanks", "Ask a follow-up"] },
  { type: "phone_tap", label: "👍 Thanks" },
  { type: "chat", from: "avatar", text: `Thanks, Edward. ${O} has the answer.` },

  // ---------- Meeting ends ----------
  { type: "speak", id: "06_ian",    who: "Ian",    text: "Great. Rehearsal is next Tuesday at three. Thanks, everyone." },
  { type: "clock", t: "14:07" },
  { type: "chat", from: "avatar", text: `Thanks, all. I’ll send ${O} the summary.` },
  { type: "leave", who: "Ian" }, { type: "leave", who: "Edward" },
  { type: "chat_sys", text: "Meeting ended" },

  // ---------- Final summary ----------
  { type: "phone_typing", ms: 1500 },
  { type: "phone", html:
`<h4>📋 Summary · AI Agent Project Sync</h4>14:00–14:07 · Ian, Edward
<span class="sec">Decisions</span>• Slides go to HR on Nov 30
• Rehearsal next Tuesday at 15:00
<span class="sec">Action items</span>• <b>Edward:</b> add the 4 h/week estimate and its source to slide 6 by Thu
• <b>You:</b> final demo video with AI voices by Fri
<span class="sec">Q&amp;A with you</span>• Ian asked: demo video ready? → <i>Draft done; final cut Fri</i>
• You asked Edward: estimate on slide 6 by Thu? → <i>Yes</i>` },
  { type: "wait", ms: 3500 },
  { type: "endcard" },
];
if (typeof module !== "undefined") module.exports = { SCRIPT };
