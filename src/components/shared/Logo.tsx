import { cn } from "@/lib/utils";

/**
 * Carentix mark — an infinity/continuity symbol (two interlocking rings)
 * with a gold medical cross centered on the crossover.
 *
 * `tone` sets the ring color: navy on light backgrounds, paper on dark.
 * `centerFill` should match the surface the logo sits on so the cross reads cleanly.
 */
export function LogoMark({
  className,
  tone = "navy",
  centerFill = "#FAFAF7",
}: {
  className?: string;
  tone?: "navy" | "paper";
  centerFill?: string;
}) {
  const ring = tone === "navy" ? "#13294B" : "#FAFAF7";
  return (
    <svg
      viewBox="0 0 100 56"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="35" cy="28" r="14.5" fill="none" stroke={ring} strokeWidth="5.4" />
      <circle cx="65" cy="28" r="14.5" fill="none" stroke={ring} strokeWidth="5.4" />
      <circle cx="50" cy="28" r="8.5" fill={centerFill} />
      <rect x="47" y="20.5" width="6" height="15" rx="1.8" fill="#FEC539" />
      <rect x="42.5" y="25" width="15" height="6" rx="1.8" fill="#FEC539" />
    </svg>
  );
}

export function Logo({
  tone = "navy",
  centerFill,
}: {
  tone?: "navy" | "paper";
  centerFill?: string;
}) {
  return (
    <span className="flex items-center gap-3">
      <LogoMark
        className="h-7 w-[50px]"
        tone={tone}
        centerFill={centerFill ?? (tone === "navy" ? "#FAFAF7" : "#0C1E3C")}
      />
      <span
        className={cn(
          "font-serif text-[22px] font-semibold tracking-tight",
          tone === "navy" ? "text-navy" : "text-paper",
        )}
      >
        Carentix
      </span>
    </span>
  );
}
