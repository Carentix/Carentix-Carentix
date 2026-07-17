"use client";

import { useEffect } from "react";

const SERIF = "var(--font-source-serif), 'Source Serif 4', serif";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // In production this is where you'd forward to your error reporter.
    console.error(error);
  }, [error]);

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
      <h1 style={{ fontFamily: SERIF, fontWeight: 500, fontSize: "clamp(26px, 4vw, 40px)", color: "#13294B", letterSpacing: "-0.03em", margin: "0 0 12px", maxWidth: "22ch", textWrap: "balance" }}>
        Something went wrong.
      </h1>
      <p style={{ fontSize: 16, lineHeight: 1.6, color: "#4A4A45", margin: "0 0 32px", maxWidth: "48ch" }}>
        An unexpected error occurred. You can try again, or head back to the homepage.
      </p>
      <div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
        <button
          onClick={() => reset()}
          className="cx-gold cx-mag"
          style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#FEC539", color: "#13294B", fontWeight: 600, fontSize: 15.5, padding: "14px 26px", border: "none", borderRadius: 999, cursor: "pointer" }}
        >
          Try again
        </button>
        <a
          href="/"
          className="cx-mag"
          style={{ display: "inline-flex", alignItems: "center", textDecoration: "none", color: "#13294B", fontWeight: 600, fontSize: 15.5, padding: "14px 26px", borderRadius: 999, border: "1px solid rgba(19,41,75,0.2)" }}
        >
          Back to homepage
        </a>
      </div>
    </main>
  );
}
