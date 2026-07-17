import { type ReactNode } from "react";
import { Eyebrow } from "@/components/shared/Eyebrow";
import { Reveal } from "@/components/shared/Reveal";

/**
 * Cinematic interior-page hero: full-bleed photo behind a navy scrim,
 * with an eyebrow, title, and optional lead paragraph.
 */
export function PageHero({
  image,
  imageAlt,
  eyebrow,
  title,
  lead,
  children,
}: {
  image: string;
  imageAlt: string;
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-deep text-paper">
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full animate-ken-burns object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(12,30,60,0.95) 0%, rgba(12,30,60,0.9) 42%, rgba(12,30,60,0.72) 74%, rgba(12,30,60,0.58) 100%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-site px-8 pb-16 pt-[150px] md:pb-24 md:pt-[220px]">
        <Reveal className="max-w-[760px]">
          <Eyebrow tone="gold" className="mb-6 [&>span:last-child]:text-paper/70">
            {eyebrow}
          </Eyebrow>
          <h1 className="max-w-[20ch] font-serif text-[clamp(38px,5.6vw,74px)] font-medium leading-[1.02] tracking-[-0.04em] text-paper text-balance">
            {title}
          </h1>
          {lead ? (
            <p className="mt-6 max-w-[56ch] text-[clamp(16.5px,1.3vw,19px)] leading-relaxed text-paper/80">
              {lead}
            </p>
          ) : null}
          {children ? <div className="mt-8">{children}</div> : null}
        </Reveal>
      </div>
    </section>
  );
}
