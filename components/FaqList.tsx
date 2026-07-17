"use client";

import { useState } from "react";

const SERIF = "var(--font-source-serif), 'Source Serif 4', serif";

export default function FaqList({
  faqs,
}: {
  faqs: { q: string; a: string }[];
}) {
  const [open, setOpen] = useState(-1);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={i} style={{ borderTop: "1px solid rgba(19,41,75,0.14)" }}>
            <div
              className="cx-faq-row"
              role="button"
              tabIndex={0}
              aria-expanded={isOpen}
              aria-label={f.q}
              onClick={() => setOpen(isOpen ? -1 : i)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setOpen(isOpen ? -1 : i);
                }
              }}
              style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 18, padding: "24px 0" }}
            >
              <span style={{ fontFamily: SERIF, fontWeight: 600, fontSize: 18, color: "#13294B", lineHeight: 1.3, letterSpacing: "-0.01em" }}>{f.q}</span>
              <span className="cx-faq-plus" style={{ flex: "0 0 auto", color: "#5B8C7B", transform: isOpen ? "rotate(135deg)" : "none" }}>
                <svg width="16" height="16" viewBox="0 0 16 16"><path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
              </span>
            </div>
            {isOpen && (
              <div style={{ overflow: "hidden", animation: "cxFadeUp 0.4s cubic-bezier(0.16,1,0.3,1)" }}>
                <p style={{ margin: 0, padding: "0 0 26px", fontSize: 15, lineHeight: 1.62, color: "#4A4A45", maxWidth: "68ch" }}>{f.a}</p>
              </div>
            )}
          </div>
        );
      })}
      <div style={{ borderTop: "1px solid rgba(19,41,75,0.14)" }} />
    </div>
  );
}
