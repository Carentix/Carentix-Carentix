import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { Eyebrow } from "@/components/shared/Eyebrow";
import { DISCIPLINES } from "@/data/home";
import { cn } from "@/lib/utils";

/** Signature interactive section: an editorial index of disciplines with a
 *  synced detail panel that re-themes to the active discipline's accent. */
export function Capabilities() {
  const [active, setActive] = useState(0);
  const d = DISCIPLINES[active];
  const Icon = d.icon;

  return (
    <section id="capabilities" className="bg-paper px-8 py-20 md:py-[156px]">
      <div className="mx-auto max-w-site">
        <Reveal className="mb-12 max-w-[800px] md:mb-[76px]">
          <Eyebrow className="mb-[22px]">One partner, a complete operations team</Eyebrow>
          <h2 className="font-serif text-[clamp(34px,5vw,64px)] font-medium leading-[1.02] tracking-[-0.035em] text-navy text-balance">
            Everything your front and back office runs on — handled.
          </h2>
          <p className="mt-5 max-w-[60ch] text-[17px] leading-relaxed text-ink">
            You don't hire a person; you partner with a team that's trained across
            six operational disciplines and accountable as one.{" "}
            <span className="font-medium text-navy">
              Hover any discipline to see what it takes off your plate.
            </span>
          </p>
        </Reveal>

        <div className="grid items-start gap-8 md:grid-cols-[1.15fr_0.85fr] md:gap-[72px]">
          {/* Index */}
          <div className="border-t border-navy/15">
            {DISCIPLINES.map((item, i) => {
              const on = i === active;
              return (
                <button
                  key={item.idx}
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={cn(
                    "flex w-full items-center gap-4 border-b border-navy/15 py-5 text-left transition-all duration-300 md:gap-9 md:py-[30px]",
                    on ? "pl-3.5" : "pl-0",
                  )}
                >
                  <span
                    className="w-[26px] shrink-0 font-serif text-[15px] font-semibold transition-all"
                    style={{
                      color: on ? item.textColor : "#13294B",
                      opacity: on ? 1 : 0.3,
                    }}
                  >
                    {item.idx}
                  </span>
                  <span
                    className="font-serif text-[clamp(23px,3.2vw,44px)] font-medium leading-[1.04] tracking-[-0.025em] transition-colors"
                    style={{ color: on ? "#13294B" : "rgba(19,41,75,0.4)" }}
                  >
                    {item.title}
                  </span>
                  <ArrowRight
                    className="ml-auto h-6 w-6 shrink-0 transition-opacity"
                    style={{ color: item.textColor, opacity: on ? 1 : 0 }}
                  />
                </button>
              );
            })}
          </div>

          {/* Detail panel */}
          <div className="md:sticky md:top-28">
            <div
              className="relative overflow-hidden rounded-3xl border p-7 transition-colors duration-500 md:p-10"
              style={{ background: d.tint, borderColor: d.border }}
            >
              <div
                className="absolute -right-10 -top-12 h-[170px] w-[170px] transition-colors duration-500"
                style={{
                  background: d.blob,
                  borderRadius: "47% 53% 44% 56% / 55% 48% 52% 45%",
                }}
              />
              <div className="relative mb-6 flex items-center justify-between">
                <div
                  className="flex h-[60px] w-[60px] items-center justify-center rounded-[17px] transition-colors duration-500"
                  style={{ background: d.iconBg, color: d.color }}
                >
                  <Icon className="h-[27px] w-[27px]" strokeWidth={1.8} />
                </div>
                <span
                  className="font-serif text-[40px] font-semibold tracking-tight"
                  style={{ color: d.color, opacity: 0.22 }}
                >
                  {d.idx}
                </span>
              </div>
              <div className="relative mb-3 font-serif text-[25px] font-semibold tracking-[-0.015em] text-navy">
                {d.title}
              </div>
              <p className="relative mb-6 text-[15px] leading-relaxed text-ink">
                {d.desc}
              </p>
              <div
                className="relative mb-3.5 text-[11.5px] font-semibold uppercase tracking-[0.08em]"
                style={{ color: d.textColor }}
              >
                What it takes off your plate
              </div>
              <ul className="relative flex flex-col gap-3">
                {d.tasks.map((task) => (
                  <li key={task} className="flex items-start gap-3">
                    <Check
                      className="mt-0.5 h-[17px] w-[17px] shrink-0"
                      style={{ color: d.textColor }}
                      strokeWidth={2.4}
                    />
                    <span className="text-[14.5px] leading-normal text-navy">
                      {task}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-[18px] flex items-center justify-center gap-2 text-[12.5px] text-ink">
              <span className="h-1.5 w-1.5 rounded-full bg-sage" />
              Most practices lean on 2–3 of these from day one
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
