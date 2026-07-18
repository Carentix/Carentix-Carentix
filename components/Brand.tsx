import Link from "next/link";

/** Carentix wordmark + infinity/cross logomark, ported verbatim from the approved design. */
export function BrandMark({
  width = 50,
  height = 28,
  light = false,
}: {
  width?: number;
  height?: number;
  light?: boolean;
}) {
  const stroke = light ? "#FAFAF7" : "#13294B";
  const center = light ? "#0C1E3C" : "#FAFAF7";
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 56"
      fill="none"
      aria-label="Carentix infinity and cross mark"
    >
      <circle cx="35" cy="28" r="14.5" fill="none" stroke={stroke} strokeWidth="5.4" />
      <circle cx="65" cy="28" r="14.5" fill="none" stroke={stroke} strokeWidth="5.4" />
      <circle cx="50" cy="28" r="8.5" fill={center} />
      <rect x="47" y="20.5" width="6" height="15" rx="1.8" fill="#FEC539" />
      <rect x="42.5" y="25" width="15" height="6" rx="1.8" fill="#FEC539" />
    </svg>
  );
}

export function BrandLogo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 11,
        textDecoration: "none",
      }}
    >
      <BrandMark light={light} />
      <span
        style={{
          fontFamily: "var(--font-source-serif), 'Source Serif 4', serif",
          fontWeight: 600,
          fontSize: 22,
          color: light ? "#FAFAF7" : "#13294B",
          letterSpacing: "-0.015em",
        }}
      >
        Carentix
      </span>
    </Link>
  );
}
