import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

const SERIF = "var(--font-source-serif), 'Source Serif 4', serif";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        background: "#FAFAF7",
        padding: "160px 32px 120px",
      }}
    >
      <div style={{ fontFamily: SERIF, fontWeight: 600, fontSize: "clamp(64px, 12vw, 120px)", color: "#13294B", letterSpacing: "-0.04em", lineHeight: 1 }}>
        404
      </div>
      <h1 style={{ fontFamily: SERIF, fontWeight: 500, fontSize: "clamp(24px, 3.5vw, 36px)", color: "#13294B", letterSpacing: "-0.02em", margin: "20px 0 12px", maxWidth: "22ch", textWrap: "balance" }}>
        We couldn&rsquo;t find that page.
      </h1>
      <p style={{ fontSize: 16, lineHeight: 1.6, color: "#4A4A45", margin: "0 0 32px", maxWidth: "46ch" }}>
        The page may have moved. Let&rsquo;s get you back to somewhere useful.
      </p>
      <Link
        href="/"
        className="cx-gold cx-mag"
        style={{ display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "none", background: "#FEC539", color: "#13294B", fontWeight: 600, fontSize: 15.5, padding: "14px 26px", borderRadius: 999 }}
      >
        Back to homepage <span>→</span>
      </Link>
    </main>
  );
}
