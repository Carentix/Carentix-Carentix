export default function Loading() {
  return (
    <main
      style={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 18,
        background: "#FAFAF7",
        padding: "160px 32px",
      }}
    >
      <svg width="60" height="34" viewBox="0 0 100 56" fill="none" aria-hidden="true">
        <circle cx="35" cy="28" r="14.5" fill="none" stroke="#13294B" strokeWidth="5.4" opacity="0.9" />
        <circle cx="65" cy="28" r="14.5" fill="none" stroke="#13294B" strokeWidth="5.4" opacity="0.9" />
        <circle cx="50" cy="28" r="8.5" fill="#FAFAF7" />
        <rect x="47" y="20.5" width="6" height="15" rx="1.8" fill="#FEC539" />
        <rect x="42.5" y="25" width="15" height="6" rx="1.8" fill="#FEC539" />
      </svg>
      <span
        style={{
          fontFamily: "var(--font-inter), 'Inter', system-ui, sans-serif",
          fontSize: 14,
          color: "#4A4A45",
          letterSpacing: "0.02em",
        }}
      >
        Loading…
      </span>
    </main>
  );
}
