// ============================================================
// calendar.js — scene 1 (the calendar with conflicting meetings)
// ============================================================
var CALENDAR = {
  title: "Neo’s Calendar",
  date: "Thursday, Dec 10",
  banner: "⚠ 3 meetings overlap at 14:00",
  columns: ["Customer & Sales", "Projects", "Training"],   // 3 column headers
  hours: ["13:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
  sendLabel: "🤖 Send Avatar Attendee",                    // button text
  sentLabel: "Avatar dispatched",                           // button text after the click

  // col: 1–3 · start: hours after the first row (1.0 = 14:00) · len: hours
  // conflict: red style + "Conflict" badge · send: shows the Send button (exactly one event)
  events: [
    { col: 1, start: 1.0, len: 1.0,  title: "Customer X Design Review", meta: "14:00–15:00 · Taipei office", conflict: true },
    { col: 2, start: 1.0, len: 0.75, title: "Q4 Delivery Sync",         meta: "14:00–14:45 · Online meeting", conflict: true, send: true },
    { col: 3, start: 1.0, len: 1.0,  title: "PSOC Edge Training",       meta: "14:00–15:00 · Room 16F",      conflict: true },
    { col: 1, start: 3.0, len: 0.5,  title: "1:1 with manager",         meta: "16:00–16:30" },
    { col: 2, start: 0.0, len: 0.5,  title: "Lunch & learn",            meta: "13:00–13:30" },
  ],
};
if (typeof module !== "undefined") module.exports = { CALENDAR };
