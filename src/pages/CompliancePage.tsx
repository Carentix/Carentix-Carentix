import { Link } from "@tanstack/react-router";
import { Check, Minus, FileSignature, GraduationCap, ShieldCheck, Eye } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { Eyebrow } from "@/components/shared/Eyebrow";
import { Button } from "@/components/ui/button";
import { useScrollTop } from "@/hooks/useScrollTop";
import { useDocumentHead } from "@/hooks/useDocumentHead";

const PILLARS = [
  {
    icon: FileSignature,
    title: "Legal foundation",
    points: [
      "BAA signed before any PHI access — legally liable, not just contractually",
      "Independent Contractor Agreement with sub-BA obligations",
      "Standalone HIPAA Confidentiality & Security Agreement",
    ],
  },
  {
    icon: GraduationCap,
    title: "Training specific enough to mean something",
    points: [
      "8 named modules, from Privacy Rule obligations to EHR documentation",
      "80% minimum score required on every module",
      "Annual refresher training, mandatory",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Technical safeguards",
    points: [
      "Company-managed devices only — no personal laptops",
      "Mandatory VPN + MFA on all work accounts",
      "MDM with encryption and remote wipe; no PHI on personal cloud",
    ],
  },
  {
    icon: Eye,
    title: "Operational oversight",
    points: [
      "1:8 supervisor ratio with daily check-ins",
      "Documented 5-stage incident response program",
      "Cyber liability insurance; 6-year record retention",
    ],
  },
];

const MODULES = [
  { n: "1", title: "What Is HIPAA?", tag: "Foundation" },
  { n: "2", title: "Protected Health Information", tag: "Foundation" },
  { n: "3", title: "The Privacy Rule — Daily Obligations", tag: "Privacy" },
  { n: "4", title: "The Security Rule — Technical Safeguards", tag: "Security" },
  { n: "5", title: "Breach Recognition & Reporting", tag: "Incident Response" },
  { n: "6", title: "Device & Remote Work Security", tag: "Security" },
  { n: "7", title: "Clinical Operations Basics", tag: "Clinical" },
  { n: "8", title: "EHR Navigation & Documentation Standards", tag: "Clinical" },
];

const COMPARISON: { label: string; competitor: boolean; carentix: boolean }[] = [
  { label: "Training curriculum published", competitor: false, carentix: true },
  { label: "Training standard disclosed", competitor: false, carentix: true },
  { label: "BAA before commitment", competitor: false, carentix: true },
  { label: "Device policy specifics", competitor: false, carentix: true },
  { label: "Incident response program", competitor: false, carentix: true },
  { label: "Replacement guarantee", competitor: false, carentix: true },
  { label: "Cyber insurance", competitor: false, carentix: true },
  { label: "Compliance record retention", competitor: false, carentix: true },
];

export function CompliancePage() {
  useScrollTop();
  useDocumentHead({
    title: "HIPAA Compliance & Security Architecture — Carentix",
    description:
      "How Carentix protects PHI: signed BAAs before any access, role-based least-privilege controls, named training modules, audited workflows, and supervised teams. Compliance is the product.",
    path: "/compliance",
    image: "/images/hero-compliance.webp",
  });

  return (
    <>
      <PageHero
        image="/images/hero-compliance.webp"
        imageAlt="Secure handling of protected health information"
        eyebrow="Compliance is the product"
        title={
          <>
            HIPAA isn't a checkbox for us. It's the entire{" "}
            <span className="text-gold">architecture.</span>
          </>
        }
        lead="Most vendors say “HIPAA-compliant” and stop there. Here is the legal, technical, and operational architecture that phrase is supposed to mean — in full."
      >
        <div className="flex flex-wrap gap-4">
          {[
            ["8/8", "modules"],
            ["80%", "pass mark"],
            ["100%", "managed devices"],
            ["5-day", "replacement"],
          ].map(([v, l]) => (
            <div
              key={v}
              className="rounded-2xl border border-paper/15 bg-paper/5 px-5 py-3"
            >
              <div className="font-serif text-2xl font-semibold text-gold">{v}</div>
              <div className="text-xs text-paper/60">{l}</div>
            </div>
          ))}
        </div>
      </PageHero>

      {/* Objection handler */}
      <section className="bg-paper px-8 py-20 md:py-28">
        <div className="mx-auto max-w-[900px]">
          <Reveal>
            <div className="font-serif text-[clamp(24px,3.4vw,40px)] font-medium leading-tight tracking-[-0.03em] text-navy">
              “Is it safe to have someone overseas handling my patients'
              information?”
            </div>
            <p className="mt-6 text-[17px] leading-relaxed text-ink">
              HIPAA has a <strong className="text-navy">safeguard</strong>{" "}
              requirement, not a geography requirement. The entire infrastructure
              — legal agreements, managed devices, VPN, MFA, supervision, and
              incident response — meets and exceeds what a U.S.-based employee
              would be held to. Safety comes from the architecture, not the zip
              code.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Four pillars */}
      <section className="bg-paper-warm px-8 py-20 md:py-28">
        <div className="mx-auto max-w-site">
          <Reveal className="mb-12 max-w-[640px]">
            <Eyebrow className="mb-5">The four pillars</Eyebrow>
            <h2 className="font-serif text-[clamp(30px,4vw,52px)] font-medium leading-tight tracking-[-0.035em] text-navy text-balance">
              Four pillars, each documented.
            </h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {PILLARS.map((p) => (
              <Reveal
                key={p.title}
                className="rounded-3xl border border-navy/10 bg-paper p-8 md:p-10"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-sage/12 text-sage">
                  <p.icon className="h-7 w-7" strokeWidth={1.8} />
                </div>
                <h3 className="mb-5 font-serif text-2xl font-semibold tracking-tight text-navy">
                  {p.title}
                </h3>
                <ul className="flex flex-col gap-3.5">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-[18px] w-[18px] shrink-0 text-sage" strokeWidth={2.2} />
                      <span className="text-[15px] leading-normal text-ink">{pt}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Training curriculum */}
      <section className="bg-paper px-8 py-20 md:py-28">
        <div className="mx-auto max-w-site">
          <Reveal className="mb-12 max-w-[640px]">
            <Eyebrow className="mb-5">The curriculum</Eyebrow>
            <h2 className="font-serif text-[clamp(30px,4vw,52px)] font-medium leading-tight tracking-[-0.035em] text-navy text-balance">
              Eight named modules. 80% to pass. Every year.
            </h2>
          </Reveal>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-navy/12 bg-navy/12 sm:grid-cols-2">
            {MODULES.map((m) => (
              <Reveal
                key={m.n}
                className="flex items-center gap-4 bg-paper p-6"
              >
                <span className="font-serif text-3xl font-semibold text-gold-dark">
                  {m.n}
                </span>
                <div>
                  <div className="font-serif text-[17px] font-semibold text-navy">
                    {m.title}
                  </div>
                  <div className="mt-1 text-[11.5px] font-semibold uppercase tracking-wide text-sage-text">
                    {m.tag}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Breach transparency */}
      <section className="relative overflow-hidden bg-navy-deep px-8 py-20 text-paper md:py-28">
        <div className="pointer-events-none absolute -right-32 -top-40 h-[520px] w-[520px] animate-drift rounded-full bg-[radial-gradient(circle,rgba(91,140,123,0.18),transparent_64%)]" />
        <div className="relative mx-auto max-w-site">
          <Reveal className="mb-12 max-w-[720px]">
            <Eyebrow tone="gold" className="mb-5 [&>span:last-child]:text-paper/70">
              If something ever goes wrong
            </Eyebrow>
            <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-tight tracking-[-0.035em] text-paper text-balance">
              No program eliminates all risk. What matters is the response.
            </h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Immediate activation",
              "Formal investigation",
              "Prompt notification",
              "Corrective action & documentation",
            ].map((s, i) => (
              <Reveal
                key={s}
                className="rounded-2xl border border-paper/12 bg-paper/[0.04] p-6"
              >
                <div className="mb-3 font-serif text-2xl font-semibold text-gold">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="text-[15px] font-medium text-paper">{s}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-paper-warm px-8 py-20 md:py-28">
        <div className="mx-auto max-w-[900px]">
          <Reveal className="mb-10 max-w-[600px]">
            <h2 className="font-serif text-[clamp(28px,4vw,46px)] font-medium leading-tight tracking-[-0.035em] text-navy text-balance">
              What most vendors don't put in writing.
            </h2>
          </Reveal>
          <Reveal className="overflow-hidden rounded-2xl border border-navy/12 bg-paper">
            <div className="grid grid-cols-[1fr_auto_auto] items-center gap-4 border-b border-navy/12 px-6 py-4 text-[12px] font-semibold uppercase tracking-wide text-ink/70">
              <div />
              <div className="w-24 text-center">Typical</div>
              <div className="w-24 text-center text-navy">Carentix</div>
            </div>
            {COMPARISON.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-[1fr_auto_auto] items-center gap-4 border-b border-navy/[0.08] px-6 py-4 last:border-b-0"
              >
                <div className="text-[15px] text-navy">{row.label}</div>
                <div className="flex w-24 justify-center">
                  <Minus className="h-5 w-5 text-ink/40" />
                </div>
                <div className="flex w-24 justify-center">
                  <Check className="h-5 w-5 text-sage" strokeWidth={2.4} />
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-paper px-8 py-20 md:py-28">
        <Reveal className="mx-auto max-w-[900px] rounded-[32px] bg-navy px-8 py-16 text-center text-paper md:px-16">
          <h2 className="mx-auto max-w-[20ch] font-serif text-[clamp(28px,4vw,48px)] font-medium leading-tight tracking-[-0.04em] text-balance">
            Want to see it before you sign anything?
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3.5">
            <Button asChild variant="gold" size="lg">
              <Link to="/" hash="contact">
                Schedule a call <span aria-hidden>→</span>
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
              {/* No PDF asset ships with the site yet — this requests it by
                  email rather than linking to a file that would 404. Swap for
                  a real /downloads/… href once the overview is published. */}
              <a href="mailto:compliance@carentix.com?subject=Request%3A%20Compliance%20Overview%20(PDF)">
                Request the Compliance Overview (PDF)
              </a>
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
