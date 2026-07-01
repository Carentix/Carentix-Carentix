import type { Metadata } from "next";
import raw from "@/lib/content/hipaa-compliance.raw.json";
import { CTA, CONTACT } from "@/lib/site";
import Link from "next/link";

const SERIF = "var(--font-source-serif), 'Source Serif 4', serif";

export const metadata: Metadata = {
  title: "HIPAA Compliance",
  description:
    "How Carentix safeguards PHI — administrative, technical, and physical safeguards, workforce controls, AI oversight, a signed BAA before access, and a defined incident-response process.",
};

type Safeguard = {
  title: string;
  color: string;
  iconBg: string;
  blob: string;
  desc: string;
  items: string[];
};
type TitleBody = { title: string; body: string };
type Incident = { step: string; title: string; body: string };
type Stat = { value: string; label: string };

const a = raw.arrays as unknown as {
  heroChecks: string[];
  trustStats: Stat[];
  safeguards: Safeguard[];
  controls: TitleBody[];
  baResp: TitleBody[];
  incident: Incident[];
  monitoring: TitleBody[];
};

function Eyebrow({ text }: { text: string }) {
  return (
    <div
      data-reveal
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        marginBottom: 26,
        background: "rgba(91,140,123,0.1)",
        border: "1px solid rgba(91,140,123,0.28)",
        padding: "8px 15px",
        borderRadius: 999,
      }}
    >
      <span
        style={{ width: 7, height: 7, borderRadius: "50%", background: "#5B8C7B" }}
      />
      <span style={{ fontSize: 13, fontWeight: 500, color: "#3C5A50" }}>
        {text}
      </span>
    </div>
  );
}

function SectionHead({ num, title }: { num: string; title: string }) {
  return (
    <div
      style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 28 }}
    >
      <span
        style={{
          fontFamily: SERIF,
          fontSize: 15,
          fontWeight: 600,
          color: "#5B8C7B",
          flex: "0 0 auto",
        }}
      >
        {num}
      </span>
      <h2
        style={{
          fontFamily: SERIF,
          fontWeight: 600,
          fontSize: "clamp(24px, 3vw, 36px)",
          lineHeight: 1.12,
          letterSpacing: "-0.025em",
          color: "#13294B",
          margin: 0,
          maxWidth: "20ch",
          textWrap: "balance",
        }}
      >
        {title}
      </h2>
    </div>
  );
}

const shell = { maxWidth: 1180, margin: "0 auto", padding: "0 32px" } as const;

export default function Page() {
  return (
    <main>
      {/* HERO */}
      <section style={{ background: "#FAFAF7", overflow: "hidden" }}>
        <div style={{ ...shell, padding: "clamp(120px, 14vw, 180px) 32px clamp(40px, 6vw, 60px)" }}>
          <Eyebrow text="HIPAA Compliance" />
          <h1
            data-reveal
            style={{
              fontFamily: SERIF,
              fontWeight: 500,
              fontSize: "clamp(38px, 5.6vw, 74px)",
              lineHeight: 1.02,
              letterSpacing: "-0.04em",
              margin: 0,
              color: "#13294B",
              maxWidth: "16ch",
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
              maxWidth: "60ch",
              fontWeight: 450,
            }}
          >
            {raw.intro}
          </p>
          <ul
            data-reveal
            style={{
              listStyle: "none",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "12px 26px",
              margin: "34px 0 0",
              padding: 0,
            }}
          >
            {a.heroChecks.map((c, i) => (
              <li
                key={i}
                style={{ display: "flex", gap: 11, alignItems: "flex-start" }}
              >
                <span style={{ flex: "0 0 auto", color: "#5B8C7B", marginTop: 2 }}>
                  <svg width="17" height="17" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M3 9.5l4 4 8-9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span style={{ fontSize: 15, lineHeight: 1.5, color: "#13294B", fontWeight: 450 }}>
                  {c}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TRUST STATS — dark band */}
      <section style={{ background: "#FAFAF7" }}>
        <div style={{ ...shell }}>
          <div
            data-reveal
            style={{
              background: "#13294B",
              borderRadius: 26,
              padding: "clamp(40px, 5vw, 64px) clamp(28px, 4vw, 56px)",
              overflow: "hidden",
            }}
          >
            <h2
              style={{
                fontFamily: SERIF,
                fontWeight: 600,
                fontSize: "clamp(22px, 2.8vw, 32px)",
                lineHeight: 1.16,
                letterSpacing: "-0.025em",
                color: "#FAFAF7",
                margin: "0 0 36px",
                maxWidth: "22ch",
                textWrap: "balance",
              }}
            >
              We treat your patients&rsquo; information the way we&rsquo;d want ours treated.
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                gap: "28px 24px",
              }}
            >
              {a.trustStats.map((s, i) => (
                <div key={i}>
                  <div
                    style={{
                      fontFamily: SERIF,
                      fontWeight: 600,
                      fontSize: "clamp(30px, 3.6vw, 46px)",
                      color: "#FEC539",
                      letterSpacing: "-0.02em",
                      lineHeight: 1,
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontSize: 13.5,
                      lineHeight: 1.5,
                      color: "rgba(250,250,247,0.74)",
                      marginTop: 12,
                      maxWidth: "24ch",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SAFEGUARDS */}
      <section style={{ background: "#FAFAF7" }}>
        <div style={{ ...shell, padding: "clamp(64px, 8vw, 104px) 32px 0" }}>
          <SectionHead num="01" title="Administrative, technical, and physical — covered." />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 20,
            }}
          >
            {a.safeguards.map((s, i) => (
              <div
                key={i}
                data-reveal
                className="cx-lift"
                style={{
                  position: "relative",
                  background: "#F3F0E8",
                  border: `1px solid ${s.iconBg}`,
                  borderRadius: 20,
                  padding: "30px 28px",
                  overflow: "hidden",
                }}
              >
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    top: -40,
                    right: -40,
                    width: 140,
                    height: 140,
                    borderRadius: "50%",
                    background: s.blob,
                    filter: "blur(6px)",
                  }}
                />
                <div style={{ position: "relative" }}>
                  <div
                    style={{
                      display: "inline-flex",
                      fontFamily: SERIF,
                      fontWeight: 600,
                      fontSize: 13,
                      color: s.color,
                      background: s.iconBg,
                      padding: "6px 12px",
                      borderRadius: 999,
                      marginBottom: 16,
                    }}
                  >
                    {s.title}
                  </div>
                  <p style={{ fontSize: 15, lineHeight: 1.58, color: "#4A4A45", margin: "0 0 18px" }}>
                    {s.desc}
                  </p>
                  <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                    {s.items.map((it, j) => (
                      <li key={j} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                        <span style={{ flex: "0 0 auto", color: s.color, marginTop: 2 }}>
                          <svg width="15" height="15" viewBox="0 0 18 18" fill="none">
                            <path d="M3 9.5l4 4 8-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <span style={{ fontSize: 14, lineHeight: 1.5, color: "#13294B" }}>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTROLS */}
      <section style={{ background: "#FAFAF7" }}>
        <div style={{ ...shell, padding: "clamp(64px, 8vw, 104px) 32px 0" }}>
          <SectionHead num="02" title="The controls behind the promise." />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 20,
            }}
          >
            {a.controls.map((c, i) => (
              <div
                key={i}
                data-reveal
                className="cx-lift"
                style={{
                  background: "#FAFAF7",
                  border: "1px solid rgba(19,41,75,0.12)",
                  borderRadius: 18,
                  padding: "26px 26px",
                }}
              >
                <div style={{ fontFamily: SERIF, fontWeight: 600, fontSize: 17, color: "#13294B", marginBottom: 10, letterSpacing: "-0.01em" }}>
                  {c.title}
                </div>
                <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#4A4A45", margin: 0 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI OVERSIGHT (monitoring) */}
      <section style={{ background: "#FAFAF7" }}>
        <div style={{ ...shell, padding: "clamp(64px, 8vw, 104px) 32px 0" }}>
          <div data-reveal style={{ marginBottom: 26 }}>
            <span style={{ fontFamily: SERIF, fontSize: 15, fontWeight: 600, color: "#5B8C7B", marginRight: 14 }}>03</span>
            <span style={{ fontFamily: SERIF, fontWeight: 600, fontSize: "clamp(20px, 2.4vw, 28px)", color: "#13294B", letterSpacing: "-0.02em" }}>
              AI is supervised, reviewed, and accountable.
            </span>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 20,
            }}
          >
            {a.monitoring.map((m, i) => (
              <div
                key={i}
                data-reveal
                style={{
                  background: "rgba(62,120,194,0.06)",
                  border: "1px solid rgba(62,120,194,0.2)",
                  borderRadius: 16,
                  padding: "22px 22px",
                }}
              >
                <div style={{ fontWeight: 600, fontSize: 15, color: "#13294B", marginBottom: 8 }}>{m.title}</div>
                <p style={{ fontSize: 14, lineHeight: 1.56, color: "#4A4A45", margin: 0 }}>{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BAA RESPONSIBILITIES */}
      <section style={{ background: "#FAFAF7" }}>
        <div style={{ ...shell, padding: "clamp(64px, 8vw, 104px) 32px 0" }}>
          <SectionHead num="04" title="We sign before we access your records." />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 20,
            }}
          >
            {a.baResp.map((b, i) => (
              <div
                key={i}
                data-reveal
                style={{
                  background: "#F3F0E8",
                  border: "1px solid rgba(19,41,75,0.09)",
                  borderRadius: 18,
                  padding: "24px 24px",
                }}
              >
                <div style={{ fontFamily: SERIF, fontWeight: 600, fontSize: 16.5, color: "#13294B", marginBottom: 9 }}>{b.title}</div>
                <p style={{ fontSize: 14.5, lineHeight: 1.58, color: "#4A4A45", margin: 0 }}>{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INCIDENT RESPONSE */}
      <section style={{ background: "#FAFAF7" }}>
        <div style={{ ...shell, padding: "clamp(64px, 8vw, 104px) 32px 0" }}>
          <SectionHead num="05" title="If something goes wrong, you hear it from us first." />
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {a.incident.map((step, i) => (
              <div
                key={i}
                data-reveal
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: 22,
                  alignItems: "start",
                  padding: "22px 0",
                  borderTop: "1px solid rgba(19,41,75,0.12)",
                }}
              >
                <div style={{ fontFamily: SERIF, fontWeight: 600, fontSize: 22, color: "#C2683E", letterSpacing: "-0.02em", minWidth: 34 }}>
                  {step.step}
                </div>
                <div>
                  <div style={{ fontFamily: SERIF, fontWeight: 600, fontSize: 18, color: "#13294B", marginBottom: 7 }}>{step.title}</div>
                  <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#4A4A45", margin: 0, maxWidth: "78ch" }}>{step.body}</p>
                </div>
              </div>
            ))}
            <div style={{ borderTop: "1px solid rgba(19,41,75,0.12)" }} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#FAFAF7" }}>
        <div style={{ ...shell, padding: "clamp(72px, 9vw, 128px) 32px clamp(80px, 10vw, 140px)" }}>
          <div
            data-reveal
            style={{
              background: "#13294B",
              borderRadius: 26,
              padding: "clamp(44px, 6vw, 76px) clamp(28px, 5vw, 64px)",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontFamily: SERIF,
                fontWeight: 500,
                fontSize: "clamp(28px, 3.6vw, 44px)",
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                color: "#FAFAF7",
                margin: "0 auto 16px",
                maxWidth: "18ch",
              }}
            >
              Bring your compliance team.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "rgba(250,250,247,0.78)", margin: "0 auto 30px", maxWidth: "52ch" }}>
              We&rsquo;ll walk your compliance and legal stakeholders through our
              safeguards, our BAA, and our data-handling practices in detail.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                href={CTA.href}
                className="cx-gold cx-mag"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  textDecoration: "none",
                  background: "#FEC539",
                  color: "#13294B",
                  fontWeight: 600,
                  fontSize: 15.5,
                  padding: "14px 26px",
                  borderRadius: 999,
                }}
              >
                {CTA.label} <span>→</span>
              </Link>
              <a
                href={`mailto:${CONTACT.email}`}
                className="cx-mag"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  textDecoration: "none",
                  background: "transparent",
                  color: "#FAFAF7",
                  fontWeight: 500,
                  fontSize: 15.5,
                  padding: "14px 26px",
                  borderRadius: 999,
                  border: "1px solid rgba(250,250,247,0.3)",
                }}
              >
                {CONTACT.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
