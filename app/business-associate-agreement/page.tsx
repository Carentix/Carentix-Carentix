import type { Metadata } from "next";
import raw from "@/lib/content/business-associate-agreement.raw.json";
import FaqList from "@/components/FaqList";
import CinematicHero from "@/components/CinematicHero";
import Image from "next/image";
import { CTA, CONTACT } from "@/lib/site";
import Link from "next/link";

const SERIF = "var(--font-source-serif), 'Source Serif 4', serif";

export const metadata: Metadata = {
  title: "Business Associate Agreement",
  description:
    "What a Business Associate Agreement is, why HIPAA requires it, when we sign it, and exactly who is responsible for what once Carentix handles PHI on your practice's behalf.",
};

type Glance = { title: string; body: string };
type WhyWhen = { title: string; color: string; tint: string; body: string };
type Commitment = { title: string; body: string };
type Faq = { q: string; a: string };

const a = raw.arrays as unknown as {
  glance: Glance[];
  whyWhen: WhyWhen[];
  ourResp: string[];
  clientResp: string[];
  commitments: Commitment[];
  faqs: Faq[];
};

const shell = { maxWidth: 1080, margin: "0 auto", padding: "0 32px" } as const;

function SectionHead({ title }: { title: string }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <h2
        style={{
          fontFamily: SERIF,
          fontWeight: 600,
          fontSize: "clamp(24px, 3vw, 34px)",
          lineHeight: 1.14,
          letterSpacing: "-0.025em",
          color: "#13294B",
          margin: 0,
          maxWidth: "24ch",
          textWrap: "balance",
        }}
      >
        {title}
      </h2>
    </div>
  );
}

function RespList({
  heading,
  color,
  tint,
  border,
  items,
}: {
  heading: string;
  color: string;
  tint: string;
  border: string;
  items: string[];
}) {
  return (
    <div style={{ background: tint, border: `1px solid ${border}`, borderRadius: 20, padding: "28px 28px" }}>
      <div style={{ fontFamily: SERIF, fontWeight: 600, fontSize: 18, color: "#13294B", marginBottom: 18 }}>{heading}</div>
      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
        {items.map((it, i) => (
          <li key={i} style={{ display: "flex", gap: 11, alignItems: "flex-start" }}>
            <span style={{ flex: "0 0 auto", color, marginTop: 2 }}>
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                <path d="M3 9.5l4 4 8-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span style={{ fontSize: 14.5, lineHeight: 1.55, color: "#4A4A45" }}>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Page() {
  return (
    <main>
      <CinematicHero
        image="/images/baa-hero.jpg"
        alt="Two executives finalizing an agreement with a firm handshake across a boardroom table"
        eyebrow="Business Associate Agreement"
        eyebrowColor="#7FA5D6"
        title={raw.title}
        intro={raw.intro}
      />

      {/* AT A GLANCE */}
      <section style={{ background: "#FAFAF7" }}>
        <div style={{ ...shell, padding: "clamp(56px, 7vw, 88px) 32px 0" }}>
          <div
            data-stagger
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}
          >
            {a.glance.map((g, i) => (
              <div key={i} className="cx-lift" style={{ background: "#F4F6F9", border: "1px solid rgba(19,41,75,0.09)", borderRadius: 18, padding: "26px 26px" }}>
                <div style={{ fontFamily: SERIF, fontWeight: 600, fontSize: 18, color: "#13294B", marginBottom: 10, letterSpacing: "-0.01em" }}>{g.title}</div>
                <p style={{ fontSize: 14, lineHeight: 1.56, color: "#4A4A45", margin: 0 }}>{g.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMITMENTS */}
      <section style={{ background: "#FAFAF7" }}>
        <div style={{ ...shell, padding: "clamp(64px, 8vw, 104px) 32px 0" }}>
          <SectionHead title="A contract that makes us legally accountable for PHI." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {a.commitments.map((c, i) => (
              <div key={i} data-reveal className="cx-lift" style={{ background: "#FAFAF7", border: "1px solid rgba(19,41,75,0.12)", borderRadius: 18, padding: "26px 26px" }}>
                <div style={{ fontFamily: SERIF, fontWeight: 600, fontSize: 17, color: "#13294B", marginBottom: 10 }}>{c.title}</div>
                <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#4A4A45", margin: 0 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY / WHEN */}
      <section style={{ background: "#FAFAF7" }}>
        <div style={{ ...shell, padding: "clamp(64px, 8vw, 104px) 32px 0" }}>
          <SectionHead title="Required by law. Signed before day one." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {a.whyWhen.map((w, i) => (
              <div key={i} data-reveal style={{ background: w.tint, border: `1px solid ${w.color}33`, borderRadius: 18, padding: "26px 26px" }}>
                <div style={{ fontFamily: SERIF, fontWeight: 600, fontSize: 17, color: w.color, marginBottom: 10 }}>{w.title}</div>
                <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#4A4A45", margin: 0 }}>{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORTING · BAA documentation */}
      <section style={{ background: "#FAFAF7" }}>
        <div data-reveal style={{ ...shell, padding: "clamp(56px, 7vw, 88px) 32px 0" }}>
          <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 6", minHeight: 220, borderRadius: 22, overflow: "hidden", boxShadow: "0 22px 50px rgba(19,41,75,0.14)" }}>
            <Image src="/images/careers-training.jpg" alt="Documentation reviewed carefully by our operations specialist" fill sizes="(max-width: 1180px) 100vw, 1116px" style={{ objectFit: "cover" }} />
            <div aria-hidden style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(12,30,60,0.28), rgba(12,30,60,0.0) 60%)" }} />
          </div>
        </div>
      </section>

      {/* RESPONSIBILITIES */}
      <section style={{ background: "#FAFAF7" }}>
        <div style={{ ...shell, padding: "clamp(64px, 8vw, 104px) 32px 0" }}>
          <SectionHead title="Who does what under the BAA." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }} data-reveal>
            <RespList heading="Our responsibilities" color="#3E78C2" tint="rgba(62,120,194,0.06)" border="rgba(62,120,194,0.2)" items={a.ourResp} />
            <RespList heading="Your responsibilities" color="#5B8C7B" tint="rgba(91,140,123,0.07)" border="rgba(91,140,123,0.22)" items={a.clientResp} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "#FAFAF7" }}>
        <div style={{ ...shell, padding: "clamp(64px, 8vw, 104px) 32px 0" }}>
          <SectionHead title="Answered plainly." />
          <div data-reveal>
            <FaqList faqs={a.faqs} />
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
                fontSize: "clamp(28px, 3.6vw, 44px)",
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                color: "#FAFAF7",
                margin: "0 auto 16px",
                maxWidth: "20ch",
              }}
            >
              Request a copy of our Business Associate Agreement.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "rgba(250,250,247,0.78)", margin: "0 auto 30px", maxWidth: "52ch" }}>
              We&rsquo;ll share our standard BAA for your legal team to review — or
              work from yours.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href={CTA.href} className="cx-gold cx-mag" style={{ display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "none", background: "#FEC539", color: "#13294B", fontWeight: 600, fontSize: 15.5, padding: "14px 26px", borderRadius: 999 }}>
                {CTA.label} <span>→</span>
              </Link>
              <a href={`mailto:${CONTACT.email}`} className="cx-mag" style={{ display: "inline-flex", alignItems: "center", textDecoration: "none", color: "#FAFAF7", fontWeight: 500, fontSize: 15.5, padding: "14px 26px", borderRadius: 999, border: "1px solid rgba(250,250,247,0.3)" }}>
                {CONTACT.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
