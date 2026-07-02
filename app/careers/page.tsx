import type { Metadata } from "next";
import raw from "@/lib/content/careers.raw.json";
import FaqList from "@/components/FaqList";
import CinematicHero from "@/components/CinematicHero";
import Image from "next/image";
import { CONTACT } from "@/lib/site";
import Link from "next/link";

const SERIF = "var(--font-source-serif), 'Source Serif 4', serif";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Carentix develops certified healthcare-operations experts through an immersive Academy, a visible career ladder from Academy to executive, and real investment in people. See open roles and how selection works.",
};

type Stat = { value: string; label: string };
type Card = { title: string; color: string; tint: string; body: string };
type TitleBody = { title: string; body: string };
type Phase = {
  tag: string;
  grade: string;
  title: string;
  months: string;
  production: string;
  body: string;
};
type Ladder = {
  step: string;
  grades: string;
  title: string;
  color: string;
  focus: string;
  gate: string;
};
type Value = { num: string; title: string; body: string };
type Hiring = { num: string; when: string; title: string; body: string };
type Opening = { title: string; tags: string[] };
type Faq = { q: string; a: string };

const a = raw.arrays as unknown as {
  credentialStats: Stat[];
  skillTags: string[];
  whyCards: Card[];
  bandStats: Stat[];
  phases: Phase[];
  ladder: Ladder[];
  benefits: TitleBody[];
  openings: Opening[];
  values: Value[];
  hiring: Hiring[];
  faqs: Faq[];
};

const shell = { maxWidth: 1180, margin: "0 auto", padding: "0 32px" } as const;

function SectionHead({
  title,
  color = "#13294B",
  max = "26ch",
}: {
  title: string;
  color?: string;
  max?: string;
}) {
  return (
    <div style={{ marginBottom: 32, display: "flex", alignItems: "center", gap: 14 }}>
      <span aria-hidden style={{ display: "inline-block", width: 32, height: 3, borderRadius: 2, background: color }} />
      <h2
        style={{
          fontFamily: SERIF,
          fontWeight: 600,
          fontSize: "clamp(24px, 3.2vw, 38px)",
          lineHeight: 1.1,
          letterSpacing: "-0.03em",
          color: "#13294B",
          margin: 0,
          maxWidth: max,
          textWrap: "balance",
        }}
      >
        {title}
      </h2>
    </div>
  );
}

export default function Page() {
  return (
    <main>
      <CinematicHero
        image="/images/careers-hero.jpg"
        alt="The Carentix Academy in session — a facilitator leading a small team through an operations workshop"
        eyebrow="Careers at Carentix"
        eyebrowColor="#FEC539"
        title={raw.title}
        intro={raw.intro}
        light
        objectPosition="center"
      >
        <div style={{ marginTop: 30, display: "flex", flexWrap: "wrap", gap: 14 }}>
          <Link href="#openings" className="cx-gold cx-mag" style={{ display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "none", background: "#FEC539", color: "#13294B", fontWeight: 600, fontSize: 15.5, padding: "14px 26px", borderRadius: 999, boxShadow: "0 8px 22px rgba(254,197,57,0.25)" }}>
            Start Your Journey <span>↓</span>
          </Link>
          <a href={`mailto:${CONTACT.email}`} className="cx-mag" style={{ display: "inline-flex", alignItems: "center", textDecoration: "none", color: "#FAFAF7", fontWeight: 500, fontSize: 15.5, padding: "14px 26px", borderRadius: 999, border: "1px solid rgba(250,250,247,0.36)", background: "rgba(250,250,247,0.06)", backdropFilter: "blur(6px)" }}>
            Introduce yourself
          </a>
        </div>
      </CinematicHero>

      {/* Credentials + skills strip (was in hero) */}
      <section style={{ background: "#FAFAF7" }}>
        <div style={{ ...shell, padding: "clamp(56px, 7vw, 88px) 32px 0" }}>
          <div
            data-stagger
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "24px 20px",
            }}
          >
            {a.credentialStats.map((s, i) => (
              <div key={i} style={{ borderTop: "2px solid rgba(19,41,75,0.12)", paddingTop: 14 }}>
                <div style={{ fontFamily: SERIF, fontWeight: 600, fontSize: "clamp(26px, 3vw, 38px)", color: "#13294B", letterSpacing: "-0.02em", lineHeight: 1 }}>
                  {s.value}
                </div>
                <div style={{ fontSize: 13, lineHeight: 1.45, color: "#4A4A45", marginTop: 8 }}>{s.label}</div>
              </div>
            ))}
          </div>
          <div data-reveal style={{ display: "flex", flexWrap: "wrap", gap: 9, marginTop: 34 }}>
            {a.skillTags.map((t, i) => (
              <span
                key={i}
                style={{
                  fontSize: 13,
                  fontWeight: 450,
                  color: "#13294B",
                  background: "rgba(19,41,75,0.05)",
                  border: "1px solid rgba(19,41,75,0.12)",
                  padding: "7px 14px",
                  borderRadius: 999,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CARDS */}
      <section style={{ background: "#FAFAF7" }}>
        <div style={{ ...shell, padding: "clamp(64px, 8vw, 104px) 32px 0" }}>
          <SectionHead title="A different kind of place to build a career." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
            {a.whyCards.map((c, i) => (
              <div key={i} data-reveal className="cx-lift" style={{ background: c.tint, border: `1px solid ${c.color}2E`, borderRadius: 20, padding: "28px 26px" }}>
                <div style={{ fontFamily: SERIF, fontWeight: 600, fontSize: 18, color: c.color, marginBottom: 11, letterSpacing: "-0.01em" }}>{c.title}</div>
                <p style={{ fontSize: 14.5, lineHeight: 1.58, color: "#4A4A45", margin: 0 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORTING · Career Culture */}
      <section style={{ background: "#FAFAF7" }}>
        <div data-reveal style={{ ...shell, padding: "clamp(56px, 7vw, 88px) 32px 0" }}>
          <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 6", minHeight: 220, borderRadius: 22, overflow: "hidden", boxShadow: "0 22px 50px rgba(19,41,75,0.14)" }}>
            <Image src="/images/careers-hero.jpg" alt="Our culture: a facilitator and Academy peers thinking hard together" fill sizes="(max-width: 1180px) 100vw, 1116px" style={{ objectFit: "cover" }} />
            <div aria-hidden style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(12,30,60,0.28), rgba(12,30,60,0.0) 60%)" }} />
          </div>
        </div>
      </section>

      {/* TRAINING — band stats + phases */}
      <section style={{ background: "#FAFAF7" }}>
        <div style={{ ...shell, padding: "clamp(64px, 8vw, 104px) 32px 0" }}>
          <SectionHead title="World-class training for healthcare operations." color="#5B8C7B" />
          <div data-reveal style={{ background: "#13294B", borderRadius: 24, padding: "clamp(32px, 4vw, 48px)", marginBottom: 28 }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "24px 20px" }}>
              {a.bandStats.map((s, i) => (
                <div key={i}>
                  <div style={{ fontFamily: SERIF, fontWeight: 600, fontSize: "clamp(26px, 3vw, 40px)", color: "#FEC539", letterSpacing: "-0.02em", lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: 13, lineHeight: 1.5, color: "rgba(250,250,247,0.72)", marginTop: 10, maxWidth: "26ch" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div data-reveal style={{ position: "relative", width: "100%", aspectRatio: "2.4 / 1", borderRadius: 20, overflow: "hidden", marginBottom: 28, boxShadow: "0 22px 50px rgba(19,41,75,0.14)" }}>
            <Image
              src="/images/careers-training.jpg"
              alt="A trained operations specialist working accurately across dual monitors in a focused workspace"
              fill
              sizes="(max-width: 1180px) 100vw, 1116px"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {a.phases.map((p, i) => (
              <div key={i} data-reveal className="cx-lift" style={{ background: "#F4F6F9", border: "1px solid rgba(19,41,75,0.09)", borderRadius: 20, padding: "26px 26px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 10, marginBottom: 14 }}>
                  <span style={{ fontSize: 12.5, fontWeight: 600, color: "#5B8C7B", textTransform: "uppercase", letterSpacing: "0.04em" }}>{p.tag}</span>
                  <span style={{ fontSize: 12.5, fontWeight: 500, color: "#4A4A45" }}>{p.grade}</span>
                </div>
                <div style={{ fontFamily: SERIF, fontWeight: 600, fontSize: 19, color: "#13294B", marginBottom: 4 }}>{p.title}</div>
                <div style={{ fontSize: 12.5, color: "#4A4A45", marginBottom: 4 }}>{p.months}</div>
                <div style={{ fontSize: 12.5, color: "#5B8C7B", fontWeight: 500, marginBottom: 12 }}>{p.production}</div>
                <p style={{ fontSize: 14, lineHeight: 1.56, color: "#4A4A45", margin: 0 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LADDER */}
      <section style={{ background: "#FAFAF7" }}>
        <div style={{ ...shell, padding: "clamp(64px, 8vw, 104px) 32px 0" }}>
          <SectionHead title="A visible path from Academy to executive." color="#3E78C2" />
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {a.ladder.map((l, i) => (
              <div
                key={i}
                data-reveal
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: "18px 22px",
                  alignItems: "center",
                  padding: "22px 0",
                  borderTop: "1px solid rgba(19,41,75,0.12)",
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: l.color,
                    background: `${l.color}14`,
                    border: `1px solid ${l.color}30`,
                    padding: "6px 12px",
                    borderRadius: 999,
                    whiteSpace: "nowrap",
                    letterSpacing: "0.02em",
                  }}
                >
                  {l.grades}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "4px 14px" }}>
                  <span style={{ fontFamily: SERIF, fontWeight: 600, fontSize: 18, color: "#13294B", marginRight: 6 }}>{l.title}</span>
                  <span style={{ fontSize: 13.5, color: "#4A4A45" }}>{l.focus}</span>
                  <span style={{ fontSize: 12.5, color: "#5B8C7B", fontWeight: 500, width: "100%" }}>Gate: {l.gate}</span>
                </div>
              </div>
            ))}
            <div style={{ borderTop: "1px solid rgba(19,41,75,0.12)" }} />
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section style={{ background: "#FAFAF7" }}>
        <div style={{ ...shell, padding: "clamp(64px, 8vw, 104px) 32px 0" }}>
          <SectionHead title="We invest in people when others cut." color="#B8902A" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {a.benefits.map((b, i) => (
              <div key={i} data-reveal className="cx-lift" style={{ background: "#FAFAF7", border: "1px solid rgba(19,41,75,0.12)", borderRadius: 18, padding: "24px 24px" }}>
                <div style={{ fontFamily: SERIF, fontWeight: 600, fontSize: 16.5, color: "#13294B", marginBottom: 9 }}>{b.title}</div>
                <p style={{ fontSize: 14, lineHeight: 1.56, color: "#4A4A45", margin: 0 }}>{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "#FAFAF7" }}>
        <div style={{ ...shell, padding: "clamp(64px, 8vw, 104px) 32px 0", maxWidth: 1080 }}>
          <SectionHead title="The things people ask before they apply." color="#3E78C2" />
          <div data-reveal>
            <FaqList faqs={a.faqs} />
          </div>
        </div>
      </section>

      {/* SUPPORTING · Career Office */}
      <section style={{ background: "#FAFAF7" }}>
        <div data-reveal style={{ ...shell, padding: "clamp(56px, 7vw, 88px) 32px 0" }}>
          <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 6", minHeight: 220, borderRadius: 22, overflow: "hidden", boxShadow: "0 22px 50px rgba(19,41,75,0.14)" }}>
            <Image src="/images/careers-training.jpg" alt="Our operations specialists at focused work, side-by-side with their supervisors" fill sizes="(max-width: 1180px) 100vw, 1116px" style={{ objectFit: "cover" }} />
            <div aria-hidden style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(12,30,60,0.32), rgba(12,30,60,0.0) 60%)" }} />
          </div>
        </div>
      </section>

      {/* OPENINGS */}
      <section id="openings" style={{ background: "#FAFAF7", scrollMarginTop: 110 }}>
        <div style={{ ...shell, padding: "clamp(64px, 8vw, 104px) 32px 0" }}>
          <SectionHead title="Roles open right now." color="#13294B" />
          <div data-stagger style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 18 }}>
            {a.openings.map((o, i) => (
              <div
                key={i}
                className="cx-lift"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  background: "#FAFAF7",
                  border: "1px solid rgba(19,41,75,0.12)",
                  borderRadius: 18,
                  padding: "26px 26px",
                  boxShadow: "0 2px 6px rgba(19,41,75,0.04)",
                }}
              >
                <div style={{ fontFamily: SERIF, fontWeight: 600, fontSize: 18, color: "#13294B", letterSpacing: "-0.01em" }}>{o.title}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {o.tags.map((t, j) => (
                    <span key={j} style={{ fontSize: 12, fontWeight: 450, color: "#13294B", background: "rgba(19,41,75,0.06)", padding: "5px 11px", borderRadius: 999 }}>
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(`Interest: ${o.title}`)}`}
                  className="cx-link-u"
                  style={{ marginTop: 2, fontSize: 14, fontWeight: 600, color: "#13294B", textDecoration: "none", alignSelf: "flex-start" }}
                >
                  Express interest →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#FAFAF7" }}>
        <div style={{ ...shell, padding: "clamp(72px, 9vw, 128px) 32px clamp(80px, 10vw, 140px)" }}>
          <div data-reveal style={{ background: "#13294B", borderRadius: 26, padding: "clamp(44px, 6vw, 76px) clamp(28px, 5vw, 64px)", textAlign: "center" }}>
            <h2
              style={{
                fontFamily: SERIF,
                fontWeight: 500,
                fontSize: "clamp(30px, 4vw, 50px)",
                lineHeight: 1.06,
                letterSpacing: "-0.03em",
                color: "#FAFAF7",
                margin: "0 auto 16px",
                maxWidth: "16ch",
              }}
            >
              Join Carentix. Become the standard.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "rgba(250,250,247,0.78)", margin: "0 auto 30px", maxWidth: "50ch" }}>
              Tell us who you are and where you want to grow. We read every
              introduction.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <a href={`mailto:${CONTACT.email}`} className="cx-gold cx-mag" style={{ display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "none", background: "#FEC539", color: "#13294B", fontWeight: 600, fontSize: 15.5, padding: "14px 26px", borderRadius: 999 }}>
                Introduce yourself <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
