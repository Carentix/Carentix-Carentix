import { Link } from "@tanstack/react-router";
import { Check, Clock } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/Reveal";
import { Eyebrow } from "@/components/shared/Eyebrow";
import { Capabilities } from "@/components/home/Capabilities";
import { PricingCalculator } from "@/components/home/PricingCalculator";
import { useScrollTop } from "@/hooks/useScrollTop";
import { useDocumentHead } from "@/hooks/useDocumentHead";
import { PAGE_SEO } from "@/lib/site";
import {
  AFTER_ITEMS,
  BEFORE_ITEMS,
  CAPABILITY_TAGS,
  COMPLIANCE_STATS,
  FAQS,
  STEPS,
} from "@/data/home";

export function HomePage() {
  useScrollTop();
  useDocumentHead(PAGE_SEO.home);

  return (
    <>
      {/* ============================= HERO ============================= */}
      <section id="top" className="relative overflow-hidden bg-navy-deep">
        <img
          src="/images/hero-home.png"
          alt="A physician in an unhurried, attentive moment with a patient"
          className="absolute inset-0 h-full w-full animate-ken-burns object-cover object-[80%_center]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(97deg, rgba(250,250,247,0.98) 0%, rgba(250,250,247,0.96) 26%, rgba(250,250,247,0.74) 48%, rgba(250,250,247,0.24) 70%, rgba(250,250,247,0) 100%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-site px-8 pb-16 pt-[148px] md:pb-[104px] md:pt-[236px]">
          <div className="max-w-[630px]">
            <Reveal className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-sage/30 bg-sage/10 px-[15px] py-2 md:mb-10">
              <span className="h-[7px] w-[7px] rounded-full bg-sage" />
              <span className="text-[13px] font-medium text-[#3C5A50]">
                Your healthcare operations partner
              </span>
            </Reveal>

            <h1 className="max-w-[15ch] font-serif text-[clamp(40px,5.8vw,82px)] font-medium leading-[1.01] tracking-[-0.04em] text-navy text-balance">
              <Reveal as="span" className="block">
                You built your practice to care for{" "}
                <span className="relative whitespace-nowrap text-gold-dark">
                  patients
                  <svg
                    viewBox="0 0 200 14"
                    preserveAspectRatio="none"
                    aria-hidden
                    className="absolute -bottom-[0.08em] left-0 h-[0.16em] w-full overflow-visible"
                  >
                    <path
                      d="M3 9 C 55 3, 150 3, 197 8"
                      fill="none"
                      stroke="#FEC539"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </Reveal>
              <Reveal as="span" className="block" delay={80}>
                — not paperwork.
              </Reveal>
            </h1>

            <Reveal
              as="p"
              delay={120}
              className="mt-6 max-w-[48ch] text-[clamp(16.5px,1.3vw,19px)] font-normal leading-relaxed text-ink-soft md:mt-8"
            >
              Carentix is your operations partner — a dedicated, supervised care
              team that owns the administrative work, so you can give patients
              your full attention.
            </Reveal>

            <Reveal
              delay={160}
              className="mt-7 flex flex-wrap items-center gap-3.5 md:mt-9"
            >
              <Button asChild variant="gold">
                <Link to="/" hash="contact">
                  Schedule a call <span aria-hidden>→</span>
                </Link>
              </Button>
              <Button asChild variant="link">
                <Link to="/" hash="capabilities">
                  See what we handle
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>

        {/* Capability strip */}
        <Reveal className="relative z-10 border-y border-navy/10 bg-paper/90 backdrop-blur-sm backdrop-saturate-150">
          <div className="mx-auto flex max-w-site flex-wrap items-center gap-x-6 gap-y-3.5 px-8 py-5">
            <span className="text-[11.5px] font-semibold uppercase tracking-[0.12em] text-sage">
              Our team handles
            </span>
            {CAPABILITY_TAGS.map((tag) => (
              <span key={tag} className="inline-flex items-center gap-[22px]">
                <span className="text-[15px] font-medium text-navy">{tag}</span>
                <span className="h-[5px] w-[5px] rounded-full bg-navy/20" />
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ===================== RECLAIMED TIME ===================== */}
      <section className="relative overflow-hidden bg-navy-deep text-paper">
        <div className="pointer-events-none absolute -right-32 -top-40 h-[560px] w-[560px] animate-drift rounded-full bg-[radial-gradient(circle,rgba(254,197,57,0.12),transparent_62%)]" />
        <div className="relative mx-auto max-w-site px-8 py-20 md:py-[156px]">
          <div className="grid items-center gap-8 md:grid-cols-2 md:gap-16">
            <div>
              <Reveal
                as="div"
                className="font-serif text-[clamp(96px,16vw,224px)] font-semibold leading-[0.82] tracking-[-0.05em] text-gold"
              >
                14<span className="text-[0.34em] tracking-[-0.02em]"> hrs</span>
              </Reveal>
              <Reveal
                as="p"
                className="mt-6 max-w-[32ch] font-serif text-[clamp(18px,1.5vw,22px)] leading-snug text-paper/80"
              >
                handed back to your clinical staff every single week — the time
                burnout takes and patient care never gets.
              </Reveal>
            </div>
            <Reveal className="flex flex-col">
              {[
                { label: "Average prior-auth turnaround", value: "1.4 days" },
                { label: "Client practices that renew", value: "98%" },
                { label: "Replacement guarantee", value: "5-day" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex items-baseline justify-between gap-5 border-t border-paper/15 py-6"
                >
                  <div className="max-w-[24ch] text-[15px] text-paper/70">
                    {s.label}
                  </div>
                  <div className="whitespace-nowrap font-serif text-[clamp(34px,4vw,48px)] font-semibold tracking-tight text-paper">
                    {s.value}
                  </div>
                </div>
              ))}
              <div className="border-t border-paper/15" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===================== THE SHIFT (before/after) ===================== */}
      <section className="bg-paper-warm px-8 py-20 md:py-[156px]">
        <div className="mx-auto max-w-[1120px]">
          <Reveal className="mb-12 max-w-[760px] md:mb-[72px]">
            <h2 className="font-serif text-[clamp(34px,5vw,64px)] font-medium leading-[1.02] tracking-[-0.035em] text-navy text-balance">
              The same clinic, two very different weeks.
            </h2>
          </Reveal>
          <div className="grid overflow-hidden rounded border border-navy/[0.12] bg-navy/[0.12] md:grid-cols-2 md:gap-px">
            {/* Today */}
            <Reveal className="bg-paper-warm p-7 md:p-12">
              <div className="mb-7 inline-flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-ink/40" />
                <span className="text-xs font-semibold uppercase tracking-[0.08em] text-ink/70">
                  A typical week, today
                </span>
              </div>
              <ul className="flex flex-col gap-5">
                {BEFORE_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="mt-[9px] h-[7px] w-[7px] shrink-0 rounded-full bg-ink/30" />
                    <span className="text-base leading-normal text-ink">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-t border-ink/15 pt-[22px] font-serif text-lg text-ink">
                Nobody truly owns it.
              </div>
            </Reveal>
            {/* With Carentix */}
            <Reveal className="relative overflow-hidden bg-navy p-7 text-paper md:p-12">
              <div className="pointer-events-none absolute -right-14 -top-20 h-[240px] w-[240px] rounded-full bg-[radial-gradient(circle,rgba(91,140,123,0.3),transparent_66%)]" />
              <div className="relative mb-7 inline-flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-gold" />
                <span className="text-xs font-semibold uppercase tracking-[0.08em] text-gold">
                  With Carentix as your partner
                </span>
              </div>
              <ul className="relative flex flex-col gap-5">
                {AFTER_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <Check
                      className="mt-0.5 h-[18px] w-[18px] shrink-0 text-sage"
                      strokeWidth={2.2}
                    />
                    <span className="text-base leading-normal text-paper/90">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="relative mt-8 border-t border-paper/15 pt-[22px] font-serif text-lg text-paper">
                One accountable team owns all of it.
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===================== REALITY BAND ===================== */}
      <section className="relative overflow-hidden bg-navy-deep">
        <img
          src="/images/home-dashboard.png"
          alt="The administrative reality of a busy practice — paperwork, phones, and waiting rooms"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(12,30,60,0.5) 0%, rgba(12,30,60,0.55) 45%, rgba(12,30,60,0.9) 100%)",
          }}
        />
        <div className="relative z-10 mx-auto flex min-h-[clamp(360px,52vw,560px)] max-w-site items-end px-8 pb-12 pt-32 md:pb-[76px] md:pt-[260px]">
          <Reveal className="max-w-[640px]">
            <Eyebrow tone="gold" className="mb-5 [&>span:last-child]:text-paper/70">
              The weight you're carrying
            </Eyebrow>
            <h2 className="font-serif text-[clamp(28px,4vw,50px)] font-medium leading-[1.08] tracking-[-0.03em] text-paper text-balance">
              Every unworked task is a patient waiting, a note unfinished, an
              evening lost.
            </h2>
            <p className="mt-5 max-w-[52ch] text-[clamp(16px,1.3vw,18px)] leading-relaxed text-paper/80">
              The paperwork doesn't stop when the last patient leaves. Carentix
              picks it up — so it stops living on your desk.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===================== CAPABILITIES ===================== */}
      <Capabilities />

      {/* ===================== PROCESS ===================== */}
      <section id="process" className="bg-paper-warm px-8 py-20 md:py-[156px]">
        <div className="mx-auto max-w-site">
          <Reveal className="mb-12 max-w-[720px] md:mb-[72px]">
            <h2 className="font-serif text-[clamp(34px,5vw,64px)] font-medium leading-[1.02] tracking-[-0.035em] text-navy text-balance">
              From first call to fully embedded, in four steps.
            </h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step) => (
              <Reveal
                key={step.num}
                className="rounded-[20px] border border-navy/[0.09] bg-paper p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_28px_54px_rgba(19,41,75,0.13)]"
              >
                <div className="mb-6 flex items-baseline gap-3">
                  <span className="font-serif text-[52px] font-semibold leading-none tracking-[-0.03em] text-navy">
                    {step.num}
                  </span>
                  <span className="rounded-full bg-sage/[0.12] px-2.5 py-1 text-[11px] font-semibold text-sage">
                    {step.tag}
                  </span>
                </div>
                <div className="mb-2.5 font-serif text-xl font-semibold tracking-tight text-navy">
                  {step.title}
                </div>
                <p className="text-[14.5px] leading-normal text-ink">{step.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== PRICING ===================== */}
      <PricingCalculator />

      {/* ===================== COMPLIANCE TEASER ===================== */}
      <section
        id="compliance"
        className="relative overflow-hidden bg-navy-deep px-8 py-20 text-paper md:py-[156px]"
      >
        <div className="pointer-events-none absolute -bottom-44 -left-32 h-[540px] w-[540px] animate-drift rounded-full bg-[radial-gradient(circle,rgba(91,140,123,0.18),transparent_64%)]" />
        <div className="relative mx-auto max-w-site">
          <Reveal>
            <Eyebrow tone="gold" className="mb-7 [&>span:last-child]:text-paper/70">
              Compliance is the product
            </Eyebrow>
          </Reveal>
          <Reveal
            as="h2"
            className="mb-11 max-w-[18ch] font-serif text-[clamp(34px,5.4vw,70px)] font-medium leading-none tracking-[-0.04em] text-paper text-balance md:mb-16"
          >
            HIPAA isn't a checkbox for us. It's the entire{" "}
            <span className="text-gold">architecture.</span>
          </Reveal>
          <Reveal className="grid overflow-hidden rounded border border-paper/15 bg-paper/15 sm:grid-cols-2 md:grid-cols-3 md:gap-px lg:grid-cols-5">
            {COMPLIANCE_STATS.map((c) => (
              <div key={c.value} className="bg-navy-deep p-7">
                <div className="font-serif text-[clamp(34px,4vw,48px)] font-semibold leading-none tracking-tight text-gold">
                  {c.value}
                </div>
                <div className="mt-3.5 text-[13.5px] leading-snug text-paper/70">
                  {c.label}
                </div>
              </div>
            ))}
          </Reveal>
          <Reveal>
            <Button asChild variant="link" className="mt-10 text-gold">
              <Link to="/compliance">
                See the full compliance architecture <span aria-hidden>→</span>
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* ===================== TESTIMONIAL + TEAM ===================== */}
      <section className="bg-paper px-8 py-20 md:py-[146px]">
        <div className="mx-auto max-w-[1080px]">
          <Reveal className="grid items-center gap-7 md:grid-cols-[auto_1fr] md:gap-[52px]">
            <div className="flex h-[clamp(110px,16vw,168px)] w-[clamp(110px,16vw,168px)] shrink-0 items-center justify-center rounded-full bg-paper-warm text-center text-[11px] font-medium text-ink/50">
              Client photo
            </div>
            <div>
              <blockquote className="font-serif text-[clamp(22px,3vw,38px)] font-medium leading-[1.28] tracking-[-0.02em] text-navy text-pretty">
                “<span className="text-navy/55">
                  Placeholder quote — replace with a real client testimonial.
                </span>{" "}
                Speak to hours reclaimed, the relief of one accountable partner,
                and what changed for the providers and their patients.”
              </blockquote>
              <div className="mt-6 flex flex-wrap items-center gap-3.5">
                <div className="text-[15px] font-semibold text-navy">
                  [ Client name ]{" "}
                  <span className="font-normal text-ink">— [ Title, Practice ]</span>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-sage/[0.12] px-2.5 py-1 text-xs font-semibold text-sage">
                  <span className="h-1.5 w-1.5 rounded-full bg-sage" />
                  Replace before launch
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== FAQ ===================== */}
      <section id="faq" className="bg-paper-warm px-8 py-20 md:py-[156px]">
        <div className="mx-auto grid max-w-[1080px] items-start gap-9 md:grid-cols-2 md:gap-[72px]">
          <Reveal className="md:sticky md:top-28">
            <Eyebrow className="mb-[22px]">Answered plainly</Eyebrow>
            <h2 className="mb-5 font-serif text-[clamp(30px,4vw,52px)] font-medium leading-[1.04] tracking-[-0.035em] text-navy text-balance">
              The things practices ask before they say yes.
            </h2>
            <Button asChild variant="link">
              <Link to="/" hash="contact">
                Still unsure? Book a 20-minute call →
              </Link>
            </Button>
          </Reveal>
          <Reveal>
            <Accordion type="single" collapsible className="w-full border-b border-navy/15">
              {FAQS.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`}>
                  <AccordionTrigger>{f.q}</AccordionTrigger>
                  <AccordionContent>{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* ===================== FINAL CTA ===================== */}
      <section id="contact" className="bg-paper px-8 py-20 md:py-[166px]">
        <Reveal className="relative mx-auto max-w-[1180px] overflow-hidden rounded-[32px] bg-navy px-8 py-16 text-center text-paper md:px-20 md:py-24">
          <div className="pointer-events-none absolute -top-40 left-1/2 h-[700px] w-[700px] -translate-x-1/2 animate-drift rounded-full bg-[radial-gradient(circle,rgba(254,197,57,0.13),transparent_60%)]" />
          <div className="relative">
            <h2 className="mx-auto max-w-[20ch] font-serif text-[clamp(32px,5vw,62px)] font-medium leading-[1.02] tracking-[-0.04em] text-paper text-balance">
              Your providers got into medicine for the patients. Let's protect
              that.
            </h2>
            <p className="mx-auto mt-5 max-w-[52ch] text-lg leading-relaxed text-paper/80">
              A 20-minute call. A real estimate for your practice. No scripts, no
              pressure — you decide.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3.5">
              <Button asChild variant="gold" size="lg">
                <Link to="/" hash="contact">
                  Schedule a call <span aria-hidden>→</span>
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <Link to="/" hash="capabilities">
                  See what we handle
                </Link>
              </Button>
            </div>
            <div className="mt-9 flex flex-wrap justify-center gap-6 text-[13.5px] text-paper/60">
              {[
                "5-day replacement guarantee",
                "BAA before any PHI access",
                "No long-term lock-in",
              ].map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-sage" /> {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
