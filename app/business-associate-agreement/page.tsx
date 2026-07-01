import type { Metadata } from "next";
import raw from "@/lib/content/business-associate-agreement.raw.json";
import FaqList from "@/components/FaqList";
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

function SectionHead({ num, title }: { num: string; title: string }) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 28 }}>
      <span style={{ fontFamily: SERIF, fontSize: 15, fontWeight: 600, color: "#3E78C2", flex: "0 0 auto" }}>{num}</span>
      <h2
        style={{
          fontFamily: SERIF,
          fontWeight: 600,
          fontSize: "clamp(24px, 3vw, 34px)",
          lineHeight: 1.14,
          letterSpacing: "-0.025em",
          color: "#13294B",
          margin: 0,
          maxWidth: "22ch",
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
      {/* HERO */}
      <section style={{ background: "#FAFAF7", overflow: "hidden" }}>
        <div style={{ ...shell, padding: "clamp(120px, 14vw, 180px) 32px clamp(40px, 6vw, 56px)" }}>
          <div
            data-reveal
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 26,
              background: "rgba(62,120,194,0.1)",
              border: "1px solid rgba(62,120,194,0.28)",
              padding: "8px 15px",
              borderRadius: 999,
            }}
          >
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#3E78C2" }} />
            <span style={{ fontSize: 13, fontWeight: 500, color: "#2E5B96" }}>Business Associate Agreement</span>
          </div>
          <h1
            data-reveal
            style={{
              fontFamily: SERIF,
              fontWeight: 500,
              fontSize: "clamp(38px, 5.4vw, 72px)",
              lineHeight: 1.02,
              letterSpacing: "-0.04em",
              margin: 0,
              color: "#13294B",
              maxWidth: "17ch",
              textWrap: "balance",
            }}
          >
            {raw.title}
          </h1>
          <p
            data-reveal
            style={{
              fontSize: "clamp(16.5px, 1.3vw, 19px)",
              lineHeight: 1.62,
              color: "#4A4A45",
              margin: "clamp(22px, 3vw, 30px) 0 0",
              maxWidth: "62ch",
              fontWeight: 450,
            }}
          >
            {raw.intro}
          </p>
        </div>
      </section>

      {/* AT A GLANCE */}
      <section style={{ background: "#FAFAF7" }}>
        <div style={{ ...shell }}>
          <div
            data-reveal
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}
          >
            {a.glance.map((g, i) => (
              <div key={i} className="cx-lift" style={{ background: "#F3F0E8", border: "1px solid rgba(19,41,75,0.09)", borderRadius: 18, padding: "26px 26px" }}>
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
          <SectionHead num="01" title="A contract that makes us legally accountable for PHI." />
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
          <SectionHead num="02" title="Required by law. Signed before day one." />
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

      {/* RESPONSIBILITIES */}
      <section style={{ background: "#FAFAF7" }}>
        <div style={{ ...shell, padding: "clamp(64px, 8vw, 104px) 32px 0" }}>
          <SectionHead num="03" title="Who does what under the BAA." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }} data-reveal>
            <RespList heading="Our responsibilities" color="#3E78C2" tint="rgba(62,120,194,0.06)" border="rgba(62,120,194,0.2)" items={a.ourResp} />
            <RespList heading="Your responsibilities" color="#5B8C7B" tint="rgba(91,140,123,0.07)" border="rgba(91,140,123,0.22)" items={a.clientResp} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "#FAFAF7" }}>
        <div style={{ ...shell, padding: "clamp(64px, 8vw, 104px) 32px 0" }}>
          <SectionHead num="04" title="Answered plainly." />
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
