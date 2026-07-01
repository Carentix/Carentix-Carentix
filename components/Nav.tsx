"use client";

import Link from "next/link";
import { useState } from "react";
import { BrandLogo } from "./Brand";
import { NAV_LINKS, CTA } from "@/lib/site";

const linkStyle = {
  textDecoration: "none",
  color: "#13294B",
  fontSize: "14.5px",
  fontWeight: 450,
} as const;

const mobileLinkStyle = {
  textDecoration: "none",
  color: "#13294B",
  fontSize: 16,
  fontWeight: 500,
  padding: "13px 8px",
  borderBottom: "1px solid rgba(19,41,75,0.07)",
} as const;

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "rgba(250,250,247,0.78)",
        backdropFilter: "saturate(180%) blur(16px)",
        WebkitBackdropFilter: "saturate(180%) blur(16px)",
        borderBottom: "1px solid rgba(19,41,75,0.07)",
      }}
    >
      <nav
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "16px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        <BrandLogo />
        <div
          id="cx-navlinks"
          style={{ display: "flex", alignItems: "center", gap: 34 }}
        >
          {NAV_LINKS.map((l) => (
            <Link key={l.label} href={l.href} className="cx-link-u" style={linkStyle}>
              {l.label}
            </Link>
          ))}
          <Link
            href={CTA.href}
            className="cx-gold cx-mag"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 7,
              textDecoration: "none",
              background: "#FEC539",
              color: "#13294B",
              fontWeight: 600,
              fontSize: "14.5px",
              padding: "11px 20px",
              borderRadius: 999,
            }}
          >
            {CTA.label} <span style={{ fontSize: 15 }}>→</span>
          </Link>
        </div>
        <button
          id="cx-burger"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
          style={{
            display: "none",
            alignItems: "center",
            justifyContent: "center",
            width: 44,
            height: 44,
            border: "1px solid rgba(19,41,75,0.16)",
            background: "#FAFAF7",
            borderRadius: 12,
            cursor: "pointer",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20">
            <path
              d="M3 6h14M3 10h14M3 14h14"
              stroke="#13294B"
              strokeWidth="1.7"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </nav>
      {menuOpen && (
        <div
          id="cx-mobilemenu"
          style={{
            margin: "0 16px",
            padding: "10px 16px 18px",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            background: "#FAFAF7",
            border: "1px solid rgba(19,41,75,0.08)",
            borderRadius: 18,
            boxShadow: "0 20px 44px rgba(19,41,75,0.14)",
            animation: "cxFadeUp 0.3s ease",
          }}
        >
          {NAV_LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={mobileLinkStyle}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href={CTA.href}
            onClick={() => setMenuOpen(false)}
            style={{
              textAlign: "center",
              textDecoration: "none",
              background: "#FEC539",
              color: "#13294B",
              fontWeight: 600,
              fontSize: 16,
              padding: 14,
              borderRadius: 999,
              marginTop: 10,
            }}
          >
            {CTA.label} →
          </Link>
        </div>
      )}
    </header>
  );
}
