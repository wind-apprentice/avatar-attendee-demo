// ============================================================
// script.js — the whole demo, step by step (runs top to bottom)
// Step types: see README.md → "Step reference"
// ============================================================
var O = (typeof CONFIG !== "undefined" ? CONFIG : require("./config.js").CONFIG).OWNER;

var SCRIPT = [
  // ---------- Scene 1: calendar ----------
  { type: "wait", ms: 1500 },
  { type: "cal_click" },
  { type: "toast", text: "🤖 Avatar is joining “Q4 Delivery Sync”…", ms: 1800 },
  { type: "scene", to: "main" },

  // ---------- Scene 2: avatar joins ----------
  { type: "clock", t: "14:00" },
  { type: "join", who: "Ian" }, { type: "join", who: "Jenny" }, { type: "join", who: "Edward" },
  { type: "wait", ms: 800 },
  { type: "join", who: "avatar" },
  { type: "chat_sys", text: "Neo’s Avatar (AI) joined" },
  { type: "chat", from: "avatar", text: `Hi everyone, I’m ${O}’s AI avatar. ${O} can’t join today, so I’ll take notes and pass your questions to him. His answers will appear here.` },

  // ---------- "Anything to say first?" ----------
  { type: "phone_typing", ms: 1100 },
  { type: "phone", html: `👋 I’ve joined <b>Q4 Delivery Sync</b> (14:00–14:45) for you.\nAnything you’d like me to tell the group first?`, buttons: ["Nothing for now"] },
  { type: "phone_reply", text: "Tell them the EMC test report will be ready this Friday." },
  { type: "phone", html: "✅ Posted in the meeting chat." },
  { type: "chat", from: "avatar", text: `Message from ${O}: the EMC test report will be ready this Friday.` },

  // ---------- Meeting, part 1 ----------
  { type: "speak", id: "01_ian",    who: "Ian",    text: "Thanks. Let’s start. Customer X wants to bring their order forward." },
  { type: "speak", id: "02_jenny",  who: "Jenny",  text: "From OPS, December capacity for this part is about three thousand pieces." },
  { type: "speak", id: "03_edward", who: "Edward", text: "On pricing, we keep the current quote for this quarter." },
  { type: "speak", id: "04_ian",    who: "Ian",    text: "Neo, can we pull five thousand pieces into December? Is sample validation on track?" },

  // ---------- Digest #1 ----------
  { type: "skip", big: "⏩ Digest interval", small: "Every 3 minutes (configurable) · 14:03", clock: "14:03" },
  { type: "phone_typing", ms: 1300 },
  { type: "phone", html:
`<h4>🕑 Digest · 14:00–14:03</h4><span class="sec">Key points</span>• <b>Ian:</b> Customer X wants to pull their order forward
• <b>Jenny:</b> December capacity is about 3K pcs
• <b>Edward:</b> Current quote stays this quarter
<span class="sec">❓ Questions for you</span><span class="q">Q1 · Ian:</span> Can we pull 5K pcs into December? Is sample validation on track?`,
    buttons: ["Yes", "No", "Join meeting"] },
  { type: "phone_tap", label: "No" },
  { type: "phone_reply", text: "Q1: No. EMC test ends Dec 20, first week of January works." },
  { type: "phone", html: "✅ Posted in the meeting chat, tagging Ian." },
  { type: "chat", from: "avatar", text: `<span class="mention">@Ian</span> Q: Can we pull 5K pcs into December?<br><b>${O}:</b> Not possible. The EMC test ends on Dec 20; the first week of January works.` },

  // ---------- Meeting, part 2 ----------
  { type: "speak", id: "05_ian",    who: "Ian",    text: "Got it, thanks Neo. Jenny, can we reserve January capacity instead?" },
  { type: "speak", id: "06_jenny",  who: "Jenny",  text: "Yes. I’ll confirm January capacity by Friday." },
  { type: "speak", id: "07_edward", who: "Edward", text: "I’ll update the forecast once that’s confirmed." },
  { type: "speak", id: "08_ian",    who: "Ian",    text: "Great. That’s all for today. Thanks, everyone." },

  // ---------- Meeting ends ----------
  { type: "clock", t: "14:07" },
  { type: "chat", from: "avatar", text: `Thanks, all. I’ll send ${O} the summary.` },
  { type: "leave", who: "Ian" }, { type: "leave", who: "Jenny" }, { type: "leave", who: "Edward" },
  { type: "chat_sys", text: "Meeting ended" },

  // ---------- Final summary ----------
  { type: "phone_typing", ms: 1500 },
  { type: "phone", html:
`<h4>📋 Summary · Q4 Delivery Sync</h4>14:00–14:07 · Ian, Jenny, Edward
<span class="sec">Decisions</span>• Customer X pull-in moves to the first week of January
• Pricing unchanged this quarter
<span class="sec">Action items</span>• <b>Jenny:</b> confirm January capacity by Fri
• <b>Edward:</b> update the forecast
• <b>You:</b> share the EMC test report by Fri
<span class="sec">Q&amp;A with you</span>• Ian: pull 5K pcs into Dec? → <i>No, EMC ends Dec 20; Jan works</i>` },
  { type: "wait", ms: 3500 },
  { type: "endcard" },
];
if (typeof module !== "undefined") module.exports = { SCRIPT };
