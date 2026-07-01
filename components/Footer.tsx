"use client";

import Link from "next/link";
import { FOOTER_COLS } from "@/lib/site";

const bottomLinkStyle = {
  textDecoration: "none",
  color: "rgba(250,250,247,0.55)",
} as const;

export default function Footer() {
  return (
    <footer
      style={{
        background: "#0C1E3C",
        color: "rgba(250,250,247,0.7)",
        padding: "clamp(56px, 6vw, 84px) 32px 34px",
      }}
    >
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "minmax(240px, 1.6fr) repeat(3, minmax(140px, 1fr))",
            gap: 40,
            paddingBottom: 46,
            borderBottom: "1px solid rgba(250,250,247,0.1)",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 11,
                marginBottom: 18,
              }}
            >
              <svg width="50" height="28" viewBox="0 0 100 56" fill="none">
                <circle cx="35" cy="28" r="14.5" fill="none" stroke="#FAFAF7" strokeWidth="5.4" />
                <circle cx="65" cy="28" r="14.5" fill="none" stroke="#FAFAF7" strokeWidth="5.4" />
                <circle cx="50" cy="28" r="8.5" fill="#0C1E3C" />
                <rect x="47" y="20.5" width="6" height="15" rx="1.8" fill="#FEC539" />
                <rect x="42.5" y="25" width="15" height="6" rx="1.8" fill="#FEC539" />
              </svg>
              <span
                style={{
                  fontFamily: "var(--font-source-serif), 'Source Serif 4', serif",
                  fontWeight: 600,
                  fontSize: 22,
                  color: "#FAFAF7",
                }}
              >
                Carentix
              </span>
            </div>
            <p style={{ fontSize: "14.5px", lineHeight: 1.6, maxWidth: 320, margin: 0 }}>
              A managed, compliant operations partner — so your providers can focus
              entirely on patient care.
            </p>
          </div>

          {FOOTER_COLS.map((col) => (
            <div key={col.heading}>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#FAFAF7",
                  marginBottom: 18,
                }}
              >
                {col.heading}
              </div>
              <ul
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="cx-link-u"
                      style={{
                        textDecoration: "none",
                        color: "rgba(250,250,247,0.7)",
                        fontSize: 14,
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p
          style={{
            margin: "24px 0 0",
            fontSize: 12,
            lineHeight: 1.6,
            color: "rgba(250,250,247,0.4)",
            maxWidth: "100ch",
          }}
        >
          Carentix&trade; and the Carentix logo are trademarks of Carentix LLC. This
          site is provided for general informational purposes and does not constitute
          a binding offer; any engagement is governed by a separately executed Master
          Services Agreement and, where applicable, a Business Associate Agreement,
          which control in the event of any conflict.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 14,
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 20,
            fontSize: 13,
            color: "rgba(250,250,247,0.55)",
          }}
        >
          <div>
            &copy; 2026 Carentix LLC &middot; 30 N Gould St, STE R, Sheridan, WY 82801,
            USA
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
            <Link href="/privacy-policy" style={bottomLinkStyle}>
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" style={bottomLinkStyle}>
              Terms of Service
            </Link>
            <Link href="/hipaa-compliance" style={bottomLinkStyle}>
              HIPAA
            </Link>
            <Link href="/business-associate-agreement" style={bottomLinkStyle}>
              BAA
            </Link>
            <Link href="/accessibility" style={bottomLinkStyle}>
              Accessibility
            </Link>
            <button
              onClick={() =>
                window.dispatchEvent(new CustomEvent("cx-open-cookie-prefs"))
              }
              style={{
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
                font: "inherit",
                color: "rgba(250,250,247,0.55)",
              }}
            >
              Cookie preferences
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
