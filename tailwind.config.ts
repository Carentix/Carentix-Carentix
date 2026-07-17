import type { Config } from "tailwindcss";

/**
 * Carentix design tokens.
 * Navy #13294B and Gold #FEC539 are the two anchoring colors; everything else supports them.
 */
const config: Config = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1320px" },
    },
    extend: {
      colors: {
        // ---- Brand ----
        navy: {
          DEFAULT: "#13294B", // primary — headers, nav, hero
          deep: "#0C1E3C", // section navy
          900: "#081428", // footer / deepest
        },
        gold: {
          DEFAULT: "#FEC539", // accent — CTAs, highlights
          // Gold text on a light bg. Only ever used at large display sizes
          // (≥30px), where AA needs 3:1 — this clears it at 4.68:1 on paper.
          // The former #B8902A measured 2.84:1 and failed even that bar.
          dark: "#8A6D1F",
        },
        sage: {
          DEFAULT: "#5B8C7B", // calm clinical accent — fills, checkmarks, icons
          // Small sage text (eyebrows, tags, inline links). The DEFAULT is
          // 3.66:1 on paper — fine for icons (3:1) but short of the 4.5:1
          // normal-text bar. This is 7.25:1 and was already in use as a
          // literal in the home hero badge before being promoted to a token.
          text: "#3C5A50",
        },
        paper: {
          DEFAULT: "#FAFAF7", // page background
          warm: "#F3F0E8", // section alternate
          dim: "#EDE7D8", // deeper alternate
        },
        ink: {
          DEFAULT: "#4A4A45", // body text
          soft: "#3A4A55", // muted heading-adjacent text
        },
        // ---- shadcn semantic tokens (map to CSS vars) ----
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
      },
      fontFamily: {
        serif: ['"Source Serif 4"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      maxWidth: {
        site: "1320px",
      },
      keyframes: {
        "reveal-up": {
          from: { opacity: "0", transform: "translateY(26px)" },
          to: { opacity: "1", transform: "none" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(28px,-22px) scale(1.08)" },
        },
        "ken-burns": {
          "0%": { transform: "scale(1.06) translate(0,0)" },
          "100%": { transform: "scale(1.14) translate(-1.5%, -1.5%)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "reveal-up": "reveal-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
        drift: "drift 24s ease-in-out infinite",
        "ken-burns": "ken-burns 18s ease-out both",
        "accordion-down": "accordion-down 0.3s ease-out",
        "accordion-up": "accordion-up 0.3s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
