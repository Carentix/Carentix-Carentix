"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandLogo } from "./Brand";
import { NAV_LINKS, CTA } from "@/lib/site";

/** Routes whose hero is a dark photo — the nav sits transparent over them until scrolled. */
const DARK_HERO_ROUTES = new Set([
  "/privacy-policy",
  "/terms-of-service",
  "/hipaa-compliance",
  "/business-associate-agreement",
  "/careers",
  "/accessibility",
]);

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled((window.scrollY || 0) > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Reset scrolled state when navigating between routes.
  useEffect(() => {
    setScrolled((window.scrollY || 0) > 40);
    setMenuOpen(false);
  }, [pathname]);

  const overDarkHero = DARK_HERO_ROUTES.has(pathname) && !scrolled && !menuOpen;
  const linkColor = overDarkHero ? "rgba(250,250,247,0.92)" : "#13294B";

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: overDarkHero ? "transparent" : "rgba(250,250,247,0.78)",
        backdropFilter: overDarkHero ? "none" : "saturate(180%) blur(16px)",
        WebkitBackdropFilter: overDarkHero ? "none" : "saturate(180%) blur(16px)",
        borderBottom: overDarkHero ? "1px solid rgba(250,250,247,0.14)" : "1px solid rgba(19,41,75,0.07)",
        transition: "background 0.3s ease, border-color 0.3s ease",
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
        <BrandLogo light={overDarkHero} />
        <div id="cx-navlinks" style={{ display: "flex", alignItems: "center", gap: 34 }}>
          {NAV_LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="cx-link-u"
              style={{ textDecoration: "none", color: linkColor, fontSize: "14.5px", fontWeight: 450, transition: "color 0.3s ease" }}
            >
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
            border: `1px solid ${overDarkHero ? "rgba(250,250,247,0.3)" : "rgba(19,41,75,0.16)"}`,
            background: overDarkHero ? "transparent" : "#FAFAF7",
            borderRadius: 12,
            cursor: "pointer",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20">
            <path
              d="M3 6h14M3 10h14M3 14h14"
              stroke={overDarkHero ? "#FAFAF7" : "#13294B"}
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
              style={{ textDecoration: "none", color: "#13294B", fontSize: 16, fontWeight: 500, padding: "13px 8px", borderBottom: "1px solid rgba(19,41,75,0.07)" }}
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
