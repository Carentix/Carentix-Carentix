import { cn } from "@/lib/utils";

/** Small hairline + label used above section headings. */
export function Eyebrow({
  children,
  tone = "sage",
  className,
}: {
  children: React.ReactNode;
  tone?: "sage" | "gold";
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span
        className={cn(
          "h-px w-[34px]",
          tone === "sage" ? "bg-sage" : "bg-gold/60",
        )}
      />
      <span
        className={cn(
          "text-[12.5px] font-medium tracking-wide",
          tone === "sage" ? "text-sage" : "text-paper/70",
        )}
      >
        {children}
      </span>
    </div>
  );
}
