"use client";

import { useEffect, useState } from "react";

/**
 * Cookie consent banner, ported from the approved design's logic:
 *  - honors Global Privacy Control (auto essential-only, shows a notice)
 *  - persists choice in localStorage under "cx-cookie-consent"
 *  - re-openable via the footer's "Cookie preferences" button
 */
export default function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [gpcDetected, setGpcDetected] = useState(false);

  useEffect(() => {
    try {
      const gpc = !!(navigator as Navigator & { globalPrivacyControl?: boolean })
        .globalPrivacyControl;
      const stored = localStorage.getItem("cx-cookie-consent");
      if (gpc && !stored) localStorage.setItem("cx-cookie-consent", "essential-only");
      setGpcDetected(gpc);
      setOpen(!stored);
    } catch {
      setOpen(true);
    }

    const reopen = () => setOpen(true);
    window.addEventListener("cx-open-cookie-prefs", reopen);
    return () => window.removeEventListener("cx-open-cookie-prefs", reopen);
  }, []);

  const setConsent = (v: string) => {
    try {
      localStorage.setItem("cx-cookie-consent", v);
    } catch {
      /* no-op */
    }
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie preferences"
      style={{
        position: "fixed",
        left: 16,
        right: 16,
        bottom: 16,
        zIndex: 200,
        display: "flex",
        justifyContent: "center",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          pointerEvents: "auto",
          width: "100%",
          maxWidth: 560,
          background: "#FAFAF7",
          border: "1px solid rgba(19,41,75,0.14)",
          borderRadius: 20,
          boxShadow: "0 28px 64px rgba(12,30,60,0.28)",
          padding: "24px 26px",
          animation: "cxFadeUp 0.4s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-source-serif), 'Source Serif 4', serif",
            fontWeight: 600,
            fontSize: 18,
            color: "#13294B",
            marginBottom: 8,
          }}
        >
          Your privacy choices
        </div>
        <p
          style={{
            fontSize: "13.5px",
            lineHeight: 1.58,
            color: "#4A4A45",
            margin: "0 0 16px",
          }}
        >
          We use essential cookies to run this site and, with your consent, optional
          analytics cookies to understand usage. We honor Global Privacy Control
          signals. See our{" "}
          <a
            href="/privacy-policy#cookies"
            className="cx-link-u"
            style={{ color: "#13294B", fontWeight: 600, textDecoration: "none" }}
          >
            Cookie &amp; Privacy Policy
          </a>
          .
        </p>
        {gpcDetected && (
          <div
            style={{
              display: "flex",
              gap: 10,
              alignItems: "flex-start",
              background: "rgba(91,140,123,0.12)",
              border: "1px solid rgba(91,140,123,0.28)",
              borderRadius: 12,
              padding: "11px 13px",
              marginBottom: 16,
            }}
          >
            <span style={{ color: "#3C5A50", flex: "0 0 auto", marginTop: 1 }}>
              <svg width="15" height="15" viewBox="0 0 18 18" fill="none">
                <path
                  d="M3 9.5l4 4 8-9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span style={{ fontSize: "12.5px", lineHeight: 1.45, color: "#3C5A50" }}>
              A Global Privacy Control signal was detected. Optional cookies are off by
              default and your opt-out is honored.
            </span>
          </div>
        )}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          <button
            onClick={() => setConsent("accepted-all")}
            className="cx-gold"
            style={{
              flex: 1,
              minWidth: 140,
              background: "#FEC539",
              color: "#13294B",
              fontWeight: 600,
              fontSize: 14,
              padding: "12px 18px",
              border: "none",
              borderRadius: 999,
              cursor: "pointer",
            }}
          >
            Accept all
          </button>
          <button
            onClick={() => setConsent("essential-only")}
            style={{
              flex: 1,
              minWidth: 140,
              background: "#FAFAF7",
              color: "#13294B",
              fontWeight: 600,
              fontSize: 14,
              padding: "12px 18px",
              border: "1px solid rgba(19,41,75,0.2)",
              borderRadius: 999,
              cursor: "pointer",
            }}
          >
            Essential only
          </button>
        </div>
      </div>
    </div>
  );
}
