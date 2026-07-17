import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { Eyebrow } from "@/components/shared/Eyebrow";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollTop } from "@/hooks/useScrollTop";
import { useDocumentHead } from "@/hooks/useDocumentHead";
import { PAGE_SEO } from "@/lib/site";

const VALUES = [
  {
    title: "Specialists deserve real careers",
    body: "Not gig work. Structured onboarding, a supervisor who knows your name, and a path that grows with you.",
  },
  {
    title: "Compliance is a craft",
    body: "You'll be trained across eight named modules and held to an 80% standard — because the work matters.",
  },
  {
    title: "Supported, never solo",
    body: "A 1:8 supervisor ratio and daily check-ins mean you always have backup when a case gets complex.",
  },
];

const ROLES = [
  { title: "Clinic Operations Specialist", type: "Full-time · Remote", focus: "Scheduling, prior auth, records" },
  { title: "Clinical Scribe", type: "Full-time · Remote", focus: "EHR documentation" },
  { title: "Operations Supervisor", type: "Full-time · Remote", focus: "Team oversight & quality" },
  { title: "Patient Communications Specialist", type: "Full-time · Remote", focus: "Messaging & follow-up" },
];

const FAQS = [
  {
    q: "What are the requirements to apply?",
    a: "Strong written English, reliable high-speed internet, a quiet workspace, and prior healthcare or administrative experience. We supply the managed device and all training — you bring diligence and care.",
  },
  {
    q: "Is training paid, and how long is it?",
    a: "Onboarding is structured and supervised, covering eight compliance modules plus your assigned practice's systems and SOPs. You're supported the entire way, never learning on live PHI unsupervised.",
  },
  {
    q: "What does the supervision structure look like?",
    a: "You'll work within a 1:8 supervisor ratio with daily check-ins — so questions get answered quickly and quality stays high.",
  },
];

export function CareersPage() {
  useScrollTop();
  useDocumentHead(PAGE_SEO.careers);

  return (
    <>
      {/* Full-bleed background hero */}
      <section className="relative overflow-hidden bg-navy-deep text-paper">
        <img
          src="/images/hero-career.png"
          alt="A Carentix operations professional at work"
          className="absolute inset-0 h-full w-full animate-ken-burns object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(12,30,60,0.72) 0%, rgba(12,30,60,0.55) 40%, rgba(12,30,60,0.82) 100%)",
          }}
        />
        <div className="relative z-10 mx-auto flex min-h-[clamp(520px,62vh,720px)] max-w-site flex-col justify-end px-8 pb-16 pt-[160px] md:pb-24">
          <Reveal className="max-w-[760px]">
            <Eyebrow tone="gold" className="mb-6 [&>span:last-child]:text-paper/70">
              Careers at Carentix
            </Eyebrow>
            <h1 className="max-w-[18ch] font-serif text-[clamp(40px,6vw,80px)] font-medium leading-[1.0] tracking-[-0.04em] text-paper text-balance">
              Build a real career in healthcare operations.
            </h1>
            <p className="mt-6 max-w-[52ch] text-[clamp(16.5px,1.3vw,19px)] leading-relaxed text-paper/85">
              We hire people who care about doing careful work well — then invest
              in them with training, supervision, and a path that grows.
            </p>
            <div className="mt-8 flex flex-wrap gap-3.5">
              <Button asChild variant="gold" size="lg">
                <a href="#roles">
                  Start your journey <span aria-hidden>→</span>
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values — 70/30 navy accent via alternating */}
      <section className="bg-paper px-8 py-20 md:py-28">
        <div className="mx-auto max-w-site">
          <Reveal className="mb-12 max-w-[640px]">
            <Eyebrow className="mb-5">Why join</Eyebrow>
            <h2 className="font-serif text-[clamp(30px,4vw,52px)] font-medium leading-tight tracking-[-0.035em] text-navy text-balance">
              A company built the way staffing should be.
            </h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {VALUES.map((v) => (
              <Reveal
                key={v.title}
                className="rounded-3xl border border-navy/10 bg-paper-warm p-8"
              >
                <h3 className="mb-3 font-serif text-xl font-semibold tracking-tight text-navy">
                  {v.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-ink">{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles — moved before FAQ */}
      <section id="roles" className="bg-navy-deep px-8 py-20 text-paper md:py-28">
        <div className="mx-auto max-w-site">
          <Reveal className="mb-12 max-w-[640px]">
            <Eyebrow tone="gold" className="mb-5 [&>span:last-child]:text-paper/70">
              Open roles
            </Eyebrow>
            <h2 className="font-serif text-[clamp(30px,4vw,52px)] font-medium leading-tight tracking-[-0.035em] text-paper text-balance">
              Where you could fit.
            </h2>
          </Reveal>
          <div className="flex flex-col gap-3">
            {ROLES.map((r) => (
              <Reveal
                key={r.title}
                className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-paper/12 bg-paper/[0.04] px-7 py-6 transition-colors hover:bg-paper/[0.08]"
              >
                <div>
                  <div className="font-serif text-xl font-semibold text-paper">
                    {r.title}
                  </div>
                  <div className="mt-1 text-[13.5px] text-paper/60">{r.focus}</div>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-[13.5px] text-paper/70">{r.type}</span>
                  <Button asChild variant="gold" size="sm">
                    <a href="#apply">Apply</a>
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-paper px-8 py-20 md:py-28">
        <div className="mx-auto grid max-w-[1080px] items-start gap-9 md:grid-cols-2 md:gap-16">
          <Reveal className="md:sticky md:top-28">
            <Eyebrow className="mb-5">Before you apply</Eyebrow>
            <h2 className="font-serif text-[clamp(28px,3.6vw,44px)] font-medium leading-tight tracking-[-0.035em] text-navy text-balance">
              Common questions from applicants.
            </h2>
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

      {/* Apply CTA */}
      <section id="apply" className="bg-paper-warm px-8 py-20 md:py-28">
        <Reveal className="mx-auto max-w-[900px] rounded-[32px] bg-navy px-8 py-16 text-center text-paper md:px-16">
          <h2 className="mx-auto max-w-[20ch] font-serif text-[clamp(28px,4vw,48px)] font-medium leading-tight tracking-[-0.04em] text-balance">
            Ready to start your journey?
          </h2>
          <p className="mx-auto mt-4 max-w-[46ch] text-paper/80">
            Send your résumé and a short note about why careful operational work
            appeals to you.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3.5">
            <Button asChild variant="gold" size="lg">
              <a href="mailto:careers@carentix.com">
                Email careers@carentix.com <span aria-hidden>→</span>
              </a>
            </Button>
          </div>
          <ul className="mx-auto mt-8 flex max-w-md flex-wrap justify-center gap-x-6 gap-y-2 text-[13.5px] text-paper/60">
            {["Managed device provided", "Paid, structured training", "Remote"].map((t) => (
              <li key={t} className="inline-flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-sage" /> {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>
    </>
  );
}
