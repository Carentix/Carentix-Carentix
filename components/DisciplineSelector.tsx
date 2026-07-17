"use client";

import { useState } from "react";

const SERIF = "var(--font-source-serif), 'Source Serif 4', serif";
const ic = (p: string) =>
  `<svg width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;

const discData = [
  { idx: "01", title: "Scheduling & access", color: "#C2683E", iconBg: "rgba(194,104,62,0.14)", tint: "rgba(194,104,62,0.05)", border: "rgba(194,104,62,0.2)", blob: "rgba(194,104,62,0.1)", desc: "Our team owns the calendar end-to-end so the front desk can breathe and the schedule stays full.", icon: ic('<rect x="3" y="4" width="18" height="17" rx="2"/><path d="M3 9h18M8 2v4M16 2v4"/><circle cx="12" cy="15" r="2" fill="currentColor" stroke="none"/>'), tasks: ["Cancellations and gaps filled in real time", "Confirmations and reminders that cut no-shows", "A schedule someone finally owns"] },
  { idx: "02", title: "Clinical scribing", color: "#5B8C7B", iconBg: "rgba(91,140,123,0.16)", tint: "rgba(91,140,123,0.05)", border: "rgba(91,140,123,0.22)", blob: "rgba(91,140,123,0.12)", desc: "Accurate, structured notes drafted in your EHR so providers sign off instead of typing past 9pm.", icon: ic('<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>'), tasks: ["Notes ready for sign-off before the provider leaves", "Consistent documentation standards", "Evenings back, not spent charting"] },
  { idx: "03", title: "Prior authorizations", color: "#3E78C2", iconBg: "rgba(62,120,194,0.14)", tint: "rgba(62,120,194,0.05)", border: "rgba(62,120,194,0.2)", blob: "rgba(62,120,194,0.1)", desc: "Submitted, tracked, and chased so treatment and service never stall on paperwork and patients aren't left waiting.", icon: ic('<path d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5Z"/><path d="m9 12 2 2 4-4"/>'), tasks: ["Prompt submissions, tracked to approval", "Faster turnaround than chasing it in-house", "Patients start treatment sooner"] },
  { idx: "04", title: "Referral coordination", color: "#B8902A", iconBg: "rgba(184,144,42,0.16)", tint: "rgba(184,144,42,0.06)", border: "rgba(184,144,42,0.24)", blob: "rgba(184,144,42,0.12)", desc: "Routed to the right specialists with the loop closed on every single one — nothing slips.", icon: ic('<circle cx="6" cy="12" r="3"/><circle cx="18" cy="5" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 10.6 6.8-4M8.6 13.4l6.8 4"/>'), tasks: ["Routed to the right specialist, first time", "Nothing slips through the cracks", "Closed-loop tracking on every referral"] },
  { idx: "05", title: "Records & ROI", color: "#13294B", iconBg: "rgba(19,41,75,0.1)", tint: "rgba(19,41,75,0.035)", border: "rgba(19,41,75,0.16)", blob: "rgba(19,41,75,0.08)", desc: "Records requests and release-of-information handled cleanly, accurately, and on time.", icon: ic('<path d="M4 4h7l2 3h7v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z"/><path d="M8 13h8M8 16h5"/>'), tasks: ["Requests fulfilled accurately and on time", "Compliant release-of-information handling", "No more backlog on the front desk"] },
  { idx: "06", title: "Patient communications", color: "#7A5BA6", iconBg: "rgba(122,91,166,0.14)", tint: "rgba(122,91,166,0.05)", border: "rgba(122,91,166,0.2)", blob: "rgba(122,91,166,0.1)", desc: "Messages, reminders, and follow-ups answered with a warm, on-brand voice that sounds like your practice.", icon: ic('<path d="M21 11.5a8.4 8.4 0 0 1-9 8.4L3 21l1.1-3.5A8.4 8.4 0 1 1 21 11.5Z"/><path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01"/>'), tasks: ["Timely, warm replies to every message", "Follow-ups that keep patients engaged", "A voice that sounds like your practice"] },
];

export default function DisciplineSelector() {
  const [active, setActive] = useState(0);
  const d = discData[active];
  return (
    <div className="cx-disc-grid" style={{ display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: "clamp(32px, 5vw, 72px)", alignItems: "start" }}>
      <div style={{ borderTop: "1px solid rgba(19,41,75,0.14)" }}>
        {discData.map((row, i) => {
          const on = i === active;
          return (
            <div
              key={row.idx}
              className="cx-disc-row"
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
              style={{ display: "flex", alignItems: "center", gap: "clamp(16px, 3vw, 36px)", padding: "clamp(18px, 2.4vw, 30px) 0", borderBottom: "1px solid rgba(19,41,75,0.14)", paddingLeft: on ? 14 : 0 }}
            >
              <span className="cx-disc-num" style={{ fontFamily: SERIF, fontSize: 15, fontWeight: 600, color: on ? row.color : "#13294B", opacity: on ? 1 : 0.3, width: 26, flex: "0 0 auto" }}>{row.idx}</span>
              <span className="cx-disc-name" style={{ fontFamily: SERIF, fontWeight: 500, fontSize: "clamp(23px, 3.2vw, 44px)", lineHeight: 1.04, letterSpacing: "-0.025em", color: on ? "#13294B" : "rgba(19,41,75,0.4)" }}>{row.title}</span>
              <span style={{ marginLeft: "auto", flex: "0 0 auto", color: row.color, opacity: on ? 1 : 0, transition: "opacity 0.3s ease" }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </span>
            </div>
          );
        })}
      </div>

      <div className="cx-disc-detail" style={{ position: "sticky", top: 110 }}>
        <div style={{ background: d.tint, border: `1px solid ${d.border}`, borderRadius: 24, padding: "clamp(28px, 3vw, 40px)", position: "relative", overflow: "hidden", transition: "background 0.5s ease, border-color 0.5s ease" }}>
          <div aria-hidden style={{ position: "absolute", top: -50, right: -40, width: 170, height: 170, borderRadius: "47% 53% 44% 56% / 55% 48% 52% 45%", background: d.blob, transition: "background 0.5s ease" }} />
          <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 26 }}>
            <div style={{ width: 60, height: 60, borderRadius: 17, background: d.iconBg, display: "flex", alignItems: "center", justifyContent: "center", color: d.color, transition: "background 0.5s ease, color 0.5s ease" }}>
              <span dangerouslySetInnerHTML={{ __html: d.icon }} />
            </div>
            <span style={{ fontFamily: SERIF, fontSize: 40, fontWeight: 600, color: d.color, opacity: 0.22, letterSpacing: "-0.02em" }}>{d.idx}</span>
          </div>
          <div style={{ position: "relative", fontFamily: SERIF, fontWeight: 600, fontSize: 25, color: "#13294B", marginBottom: 12, letterSpacing: "-0.015em" }}>{d.title}</div>
          <p style={{ position: "relative", fontSize: 15, lineHeight: 1.6, color: "#4A4A45", margin: "0 0 24px" }}>{d.desc}</p>
          <div style={{ position: "relative", fontSize: "11.5px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: d.color, marginBottom: 14 }}>What it takes off your plate</div>
          <ul style={{ position: "relative", listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
            {d.tasks.map((task, j) => (
              <li key={j} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <span style={{ flex: "0 0 auto", color: d.color, marginTop: 1 }}><svg width="17" height="17" viewBox="0 0 18 18" fill="none"><path d="M3 9.5l4 4 8-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
                <span style={{ fontSize: "14.5px", lineHeight: 1.5, color: "#13294B" }}>{task}</span>
              </li>
            ))}
          </ul>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, justifyContent: "center", marginTop: 18, fontSize: "12.5px", color: "#4A4A45" }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#5B8C7B" }} /> Most practices lean on 2–3 of these from day one
        </div>
      </div>
    </div>
  );
}
