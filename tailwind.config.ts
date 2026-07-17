import type { Config } from "tailwindcss";

/**
 * Design tokens extracted verbatim from the approved Carentix homepage
 * (the canonical source of truth). Do not alter these values — they define
 * the approved brand palette, type, and rhythm.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Approved brand palette
        paper: "#FAFAF7", // warm off-white background
        ink: "#13294B", // primary navy
        "ink-dark": "#0C1E3C", // navy hover / pressed
        gold: "#FEC539", // accent
        body: "#4A4A45", // default body text
        // Discipline accents (from the "What we handle" selector)
        "disc-scheduling": "#C2683E",
        "disc-scribing": "#5B8C7B",
        "disc-priorauth": "#3E78C2",
        "disc-referral": "#B8902A",
        "disc-records": "#13294B",
        "disc-comms": "#7A5BA6",
      },
      fontFamily: {
        serif: ["var(--font-source-serif)", "Source Serif 4", "serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        shell: "1320px",
      },
      keyframes: {
        cxDrift: {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(28px,-22px) scale(1.08)" },
        },
        cxFadeUp: {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "none" },
        },
      },
      animation: {
        cxDrift: "cxDrift 18s ease-in-out infinite",
        cxFadeUp: "cxFadeUp 0.3s ease",
      },
    },
  },
  plugins: [],
};

export default config;
