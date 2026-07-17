import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Minus, Plus, Check } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { Eyebrow } from "@/components/shared/Eyebrow";
import { Button } from "@/components/ui/button";
import { formatUSD } from "@/lib/utils";

const CORE_FIRST = 1899;
const CORE_ADDL = 1499;
const PRIOR_AUTH = 15;

/** Tiered volume fee: declines as unique-patient count grows. */
function volumeFee(patients: number): number {
  let v = 0;
  v += Math.min(patients, 250) * 4.0; //   1–250   @ $4.00
  v += Math.min(Math.max(patients - 250, 0), 500) * 3.0; // 251–750 @ $3.00
  v += Math.min(Math.max(patients - 750, 0), 750) * 2.25; // 751–1,500 @ $2.25
  v += Math.max(patients - 1500, 0) * 1.75; //             1,501+  @ $1.75
  return v;
}

function Stepper({
  label,
  rate,
  sub,
  value,
  onChange,
  step,
  min,
  max,
}: {
  label: string;
  rate: string;
  sub: string;
  value: number;
  onChange: (next: number) => void;
  step: number;
  min: number;
  max: number;
}) {
  const clamp = (n: number) => Math.max(min, Math.min(max, n));
  return (
    <div>
      <div className="mb-1 flex items-baseline justify-between gap-4">
        <div className="text-[15.5px] font-semibold text-navy">{label}</div>
        <div className="text-[12.5px] text-ink/80">{rate}</div>
      </div>
      <div className="mb-3.5 text-[13px] text-ink/80">{sub}</div>
      <div className="flex items-center gap-4">
        <button
          type="button"
          aria-label={`Decrease ${label}`}
          onClick={() => onChange(clamp(value - step))}
          className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-xl border border-navy/20 bg-paper text-navy transition hover:border-navy/40 active:scale-95"
        >
          <Minus className="h-[18px] w-[18px]" />
        </button>
        <div className="flex-1 text-center font-serif text-3xl font-semibold tracking-tight text-navy tabular-nums">
          {value.toLocaleString("en-US")}
        </div>
        <button
          type="button"
          aria-label={`Increase ${label}`}
          onClick={() => onChange(clamp(value + step))}
          className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-xl border border-navy/20 bg-paper text-navy transition hover:border-navy/40 active:scale-95"
        >
          <Plus className="h-[18px] w-[18px]" />
        </button>
      </div>
    </div>
  );
}

export function PricingCalculator() {
  // Defaults reset on every mount/reload — no persistence, by design.
  const [providers, setProviders] = useState(1);
  const [patients, setPatients] = useState(200);
  const [priorAuths, setPriorAuths] = useState(10);

  const { core, volume, premium, total, blended, annualSave } = useMemo(() => {
    const core = CORE_FIRST + (providers - 1) * CORE_ADDL;
    const volume = volumeFee(patients);
    const premium = priorAuths * PRIOR_AUTH;
    const total = core + volume + premium;
    const blended = patients > 0 ? volume / patients : 0;
    const annualSave = Math.round(core * 12 * 0.1);
    return { core, volume, premium, total, blended, annualSave };
  }, [providers, patients, priorAuths]);

  return (
    <section id="pricing" className="bg-paper px-8 py-20 md:py-[156px]">
      <div className="mx-auto max-w-site">
        <Reveal className="mb-11 max-w-[760px] md:mb-16">
          <Eyebrow className="mb-[22px]">Fair, usage-based pricing</Eyebrow>
          <h2 className="mb-5 font-serif text-[clamp(34px,5vw,60px)] font-medium leading-[1.02] tracking-[-0.035em] text-navy text-balance">
            You only pay for the practice you actually run.
          </h2>
          <p className="max-w-[58ch] text-[17px] leading-relaxed text-ink">
            A core fee for your dedicated team — $1,899 for your first provider,
            $1,499 for each additional — a tiered rate per unique patient (never
            per visit) that declines as you grow, and premium services only when
            you use them. Move the numbers below to see your estimate.
          </p>
        </Reveal>

        <Reveal className="grid overflow-hidden rounded-[26px] border border-navy/10 shadow-[0_30px_64px_rgba(19,41,75,0.1)] md:grid-cols-[1.1fr_0.9fr]">
          {/* Controls */}
          <div className="bg-paper p-7 md:p-12">
            <div className="mb-7 font-serif text-[21px] font-semibold text-navy">
              Estimate your monthly cost
            </div>
            <div className="flex flex-col gap-[26px]">
              <Stepper
                label="Providers"
                rate="$1,899 first · $1,499 each add'l"
                sub="Physicians, NPs, or PAs on the account"
                value={providers}
                onChange={setProviders}
                step={1}
                min={1}
                max={25}
              />
              <Stepper
                label="Unique patients / month"
                rate="Tiered · $4.00 → $1.75"
                sub="Billed once per patient — the rate declines as volume grows"
                value={patients}
                onChange={setPatients}
                step={25}
                min={0}
                max={4000}
              />
              <Stepper
                label="Prior authorizations / month"
                rate="$15 each"
                sub="A premium service — billed only when used"
                value={priorAuths}
                onChange={setPriorAuths}
                step={5}
                min={0}
                max={400}
              />
            </div>
          </div>

          {/* Result */}
          <div className="relative flex flex-col overflow-hidden bg-navy p-7 text-paper md:p-12">
            <div className="pointer-events-none absolute -right-24 -top-28 h-[360px] w-[360px] animate-drift rounded-full bg-[radial-gradient(circle,rgba(254,197,57,0.14),transparent_64%)]" />
            <div className="relative">
              <div className="mb-3 text-[12.5px] font-semibold uppercase tracking-wide text-paper/60">
                Estimated monthly
              </div>
              <div className="font-serif text-[clamp(52px,7vw,76px)] font-bold leading-none tracking-[-0.03em] text-gold">
                {formatUSD(total)}/mo
              </div>
              <div className="mt-2 text-[13.5px] text-paper/60">
                per month, all-in for this scenario
              </div>

              <div className="mt-8 flex flex-col">
                {[
                  {
                    label:
                      providers === 1
                        ? "Core · 1 provider"
                        : `Core · $1,899 + ${providers - 1} × $1,499`,
                    value: formatUSD(core),
                  },
                  {
                    label: `Volume · ${patients} patients (~${formatUSD(blended)}/ea)`,
                    value: formatUSD(volume),
                  },
                  {
                    label: `Premium · ${priorAuths} prior auths × $15`,
                    value: formatUSD(premium),
                  },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex items-baseline justify-between gap-4 border-t border-paper/15 py-3.5"
                  >
                    <div className="text-sm text-paper/80">{row.label}</div>
                    <div className="font-serif text-lg font-semibold text-paper">
                      {row.value}
                    </div>
                  </div>
                ))}
                <div className="border-t border-paper/15" />
              </div>

              <div className="mt-5 flex items-center gap-2.5 rounded-xl border border-sage/30 bg-sage/[0.18] px-3.5 py-3">
                <Check className="h-4 w-4 shrink-0 text-sage" strokeWidth={2.4} />
                <span className="text-[13px] leading-snug text-paper/90">
                  Pay annually and save {formatUSD(annualSave)}/yr — 10% off the
                  core fee, plus 5% off premium services.
                </span>
              </div>
            </div>

            <Button asChild variant="gold" className="relative mt-6 self-start">
              <Link to="/" hash="contact">
                Get an exact quote <span aria-hidden>→</span>
              </Link>
            </Button>
          </div>
        </Reveal>

        <Reveal
          as="p"
          className="mt-[22px] flex flex-wrap gap-[22px] text-[13px] text-ink"
        >
          <span>
            <strong className="text-navy">Setup fee</strong> $299–$499 — waived
            with a 6-month commitment
          </span>
          <span>
            <strong className="text-navy">Annual billing</strong> 10% off the
            core fee
          </span>
          <span>
            <strong className="text-navy">No</strong> per-appointment padding or
            long-term lock-in
          </span>
        </Reveal>
      </div>
    </section>
  );
}
