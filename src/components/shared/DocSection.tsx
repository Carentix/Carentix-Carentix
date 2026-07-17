import { type ReactNode } from "react";
import { Reveal } from "@/components/shared/Reveal";
import { Eyebrow } from "@/components/shared/Eyebrow";

/** A titled content block used to build the legal / policy document pages. */
export function DocSection({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <Reveal as="section" className="border-t border-navy/12 py-10 md:py-14">
      {eyebrow ? <Eyebrow className="mb-4">{eyebrow}</Eyebrow> : null}
      <h2 className="mb-5 font-serif text-[clamp(24px,3vw,36px)] font-medium leading-tight tracking-[-0.03em] text-navy text-balance">
        {title}
      </h2>
      <div className="prose-doc max-w-[68ch] space-y-4 text-[15.5px] leading-relaxed text-ink">
        {children}
      </div>
    </Reveal>
  );
}
