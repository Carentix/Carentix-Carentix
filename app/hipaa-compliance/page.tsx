import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "HIPAA Compliance",
  description:
    "Compliance is the product. See how Carentix protects PHI with administrative, technical, and physical safeguards, workforce training, encryption, audit logs, and a documented incident-response program.",
};

const SERIF = "var(--font-source-serif), 'Source Serif 4', serif";
const ic = (p: string) =>
  `<svg width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;
const ics = (p: string) =>
  `<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;

const heroChecks = [
  "Signed BAA before PHI access",
  "Company-managed devices, MFA + VPN",
  "Encryption in transit and at rest",
  "PHI access logged and audited",
  "Human review on AI-assisted clinical & billing outputs",
];

const trustStats = [
  { value: "8/8", label: "Named training modules — 80% minimum to pass" },
  { value: "MFA", label: "Company-managed devices, MFA + VPN by default" },
  { value: "1:8", label: "Supervisor ratio target with daily check-ins" },
  { value: "BAA", label: "Signed before PHI access — directly accountable" },
  { value: "24 hr", label: "Internal root-cause review target on Level 1 events" },
];

const safeguards = [
  {
    title: "Administrative",
    color: "#13294B",
    iconBg: "rgba(19,41,75,0.12)",
    blob: "rgba(19,41,75,0.05)",
    icon: ic('<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/>'),
    desc: "The policies and people that govern how PHI is handled — and who is accountable.",
    items: ["Documented SOPs with named owners", "Workforce HIPAA training, 80% to pass", "1:8 supervision with daily check-ins", "Designated compliance ownership"],
  },
  {
    title: "Technical",
    color: "#13294B",
    iconBg: "rgba(19,41,75,0.17)",
    blob: "rgba(19,41,75,0.08)",
    icon: ic('<rect x="2" y="4" width="20" height="14" rx="2"/><path d="M8 21h8M12 18v3M7 9l2 2-2 2M13 13h4"/>'),
    desc: "The systems that control access to PHI and protect it from unauthorized eyes.",
    items: ["Encryption in transit and at rest", "MFA and mandatory VPN on every login", "Role-based, least-privilege access", "Comprehensive audit logging"],
  },
  {
    title: "Physical",
    color: "#13294B",
    iconBg: "rgba(19,41,75,0.09)",
    blob: "rgba(19,41,75,0.04)",
    icon: ic('<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>'),
    desc: "Control over the devices and environments where work actually happens.",
    items: ["Company-managed, encrypted devices", "Locked screens and auto-timeout", "No PHI on personal hardware", "Secure disposal of records and devices"],
  },
];

const controls = [
  { title: "Workforce training", icon: ic('<path d="M12 14 2 9l10-5 10 5-10 5Z"/><path d="M6 11v5c0 1 2.7 3 6 3s6-2 6-3v-5"/>'), body: "Our standard process has each team member complete an eight-module HIPAA and compliance program with an 80% minimum to pass — refreshed annually and on regulatory change." },
  { title: "Access controls", icon: ic('<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>'), body: "Access to PHI is role-based and least-privilege. Each person has a unique ID; permissions are reviewed and revoked promptly once they’re no longer needed." },
  { title: "Encryption", icon: ic('<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V8a5 5 0 0 1 10 0v3M12 16v2"/>'), body: "PHI is encrypted in transit and at rest using industry-standard protocols, so data is protected both as it moves and where it lives." },
  { title: "Audit logs", icon: ic('<path d="M4 4h12l4 4v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z"/><path d="M8 12h8M8 16h5M9 8h3"/>'), body: "PHI access is logged. Records are retained for six years and reviewed for anomalies — accountability you can audit." },
  { title: "Secure communication", icon: ic('<path d="M21 11.5a8.4 8.4 0 0 1-9 8.4L3 21l1.1-3.5A8.4 8.4 0 1 1 21 11.5Z"/><path d="M12 8v4M12 15h.01"/>'), body: "PHI travels through approved, secured channels. Our standard process does not route patient information through unsecured email or consumer messaging tools." },
  { title: "Minimum Necessary Rule", icon: ic('<circle cx="12" cy="12" r="9"/><path d="M12 8v4l3 2"/>'), body: "We use and disclose the minimum PHI reasonably required for the task at hand — including in AI prompts, which are reviewed for PHI minimization before use." },
];

const baResp = [
  { title: "Signed BAA first", icon: ics('<path d="M9 12l2 2 4-4"/><rect x="4" y="3" width="16" height="18" rx="2"/>'), body: "Our standard onboarding process executes a Business Associate Agreement before PHI access." },
  { title: "Direct HIPAA liability", icon: ics('<path d="M12 2 4 6v6c0 5 3.5 8 8 10 4.5-2 8-5 8-10V6Z"/>'), body: "As a Business Associate we’re directly liable under the law, not just to you by contract." },
  { title: "Human accountability for AI", icon: ics('<rect x="4" y="6" width="16" height="13" rx="2"/><path d="M9 2v4M15 2v4"/>'), body: "When AI assists with clinical or billing work, a human reviews the output before finalization and the accountability is ours — “the AI did it” is not an answer." },
  { title: "Vendor BAAs on file", icon: ics('<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2Z"/>'), body: "Any subcontractor or tool that could touch PHI signs its own BAA before we use it." },
];

const incident = [
  { step: "01", title: "Detect", body: "Monitoring and audit logs surface anomalies fast — often before they become incidents." },
  { step: "02", title: "Contain", body: "Access is locked down immediately to stop any potential exposure from spreading." },
  { step: "03", title: "Assess", body: "An internal root-cause review, targeted within 24 hours of a Level 1 event: what did the system allow?" },
  { step: "04", title: "Notify", body: "We notify you promptly, with the facts and the plan. Contractual breach-notification timelines are set in your BAA." },
  { step: "05", title: "Remediate & review", body: "We fix the root cause, update the SOP, and feed the lesson back into training." },
];

const monitoring = [
  { title: "Quarterly AI review", body: "Every AI tool’s security posture and BAA currency is reviewed at least quarterly by our CTO." },
  { title: "Annual recertification", body: "Workforce compliance training is refreshed annually and on regulatory change." },
  { title: "Designed-in checkpoints", body: "New workflows are designed to include compliance validation — not audited on afterward." },
  { title: "Measured like any KPI", body: "PHI exposure is treated as a top-priority risk, tracked on dashboards with named owners." },
];

const eyebrowRow = (num: string, label: string, dark = false) => (
  <div style={{ display: "flex", alignItems: "center", gap: 13, marginBottom: 22 }}>
    <span style={{ fontFamily: SERIF, fontSize: 14, fontWeight: 600, color: dark ? "#FEC539" : "#5B8C7B" }}>{num}</span>
    <span style={{ width: 26, height: 1, background: dark ? "rgba(250,250,247,0.4)" : "rgba(19,41,75,0.28)" }} />
    <span style={{ fontSize: "12.5px", fontWeight: 500, letterSpacing: "0.04em", color: dark ? "rgba(250,250,247,0.66)" : "#5B8C7B" }}>{label}</span>
  </div>
);

export default function Page() {
  return (
    <div style={{ position: "relative", color: "#4A4A45", overflowX: "hidden" }}>
      {/* HERO */}
      <section id="top" style={{ position: "relative", background: "#0C1E3C", color: "#FAFAF7", overflow: "hidden" }}>
        <Image src="/images/hipaa-hero.jpg" alt="Secure handling of protected health information" fill priority sizes="100vw" style={{ objectFit: "cover", objectPosition: "center" }} />
        <div aria-hidden style={{ position: "absolute", inset: 0, background: "linear-gradient(100deg, rgba(12,30,60,0.95) 0%, rgba(12,30,60,0.9) 42%, rgba(12,30,60,0.74) 72%, rgba(12,30,60,0.6) 100%)" }} />
        <div className="cx-anim" aria-hidden style={{ position: "absolute", top: -160, right: -120, width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(91,140,123,0.2), transparent 62%)", animation: "cxDrift 24s ease-in-out infinite" }} />
        <div style={{ position: "relative", maxWidth: 1320, margin: "0 auto", padding: "clamp(120px, 14vw, 178px) 32px clamp(60px, 8vw, 96px)" }}>
          <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: "clamp(26px, 3.5vw, 38px)", background: "rgba(91,140,123,0.18)", border: "1px solid rgba(91,140,123,0.34)", padding: "8px 15px", borderRadius: 999 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#9DC4B4" }} />
            <span style={{ fontSize: 13, fontWeight: 500, color: "#9DC4B4" }}>HIPAA Compliance</span>
          </div>
          <div className="cx-hero-grid" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 0.9fr)", gap: "clamp(34px, 5vw, 76px)", alignItems: "center" }}>
            <div>
              <h1 style={{ fontFamily: SERIF, fontWeight: 500, fontSize: "clamp(42px, 6vw, 84px)", lineHeight: 1.0, letterSpacing: "-0.04em", margin: 0, color: "#FAFAF7", maxWidth: "16ch", textWrap: "balance" }}>
                <span data-reveal style={{ display: "block" }}>Compliance isn’t a</span>
                <span data-reveal style={{ display: "block" }}>checkbox. It’s the <span style={{ color: "#FEC539" }}>architecture.</span></span>
              </h1>
              <p data-reveal style={{ fontSize: "clamp(16.5px, 1.3vw, 19px)", lineHeight: 1.62, color: "rgba(250,250,247,0.8)", margin: "clamp(24px, 3vw, 32px) 0 0", maxWidth: "54ch", fontWeight: 450 }}>
                Protecting patient information isn’t something we bolt on at the end. It’s designed into every workflow, every device, and every person from day one. Here’s exactly how we safeguard PHI — and why practices trust us with it.
              </p>
              <div data-reveal style={{ display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center", marginTop: "clamp(28px, 3.5vw, 38px)" }}>
                <a href="/#contact" className="cx-gold cx-mag" style={{ display: "inline-flex", alignItems: "center", gap: 9, textDecoration: "none", background: "#FEC539", color: "#13294B", fontWeight: 600, fontSize: 16, padding: "16px 28px", borderRadius: 999, boxShadow: "0 8px 26px rgba(254,197,57,0.26)" }}>
                  Schedule a call <span style={{ fontSize: 18 }}>→</span>
                </a>
                <a href="#safeguards" className="cx-link-u" style={{ textDecoration: "none", color: "#FAFAF7", fontWeight: 600, fontSize: 16 }}>See the safeguards</a>
              </div>
            </div>
            <div className="cx-hero-art" data-reveal style={{ position: "relative", width: "100%", maxWidth: 440, marginLeft: "auto" }}>
              <div style={{ position: "relative", background: "rgba(250,250,247,0.05)", border: "1px solid rgba(250,250,247,0.14)", borderRadius: 24, padding: "clamp(24px, 2.8vw, 32px)", backdropFilter: "blur(6px)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                  <span style={{ width: 48, height: 48, borderRadius: 14, background: "rgba(254,197,57,0.16)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FEC539" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 4 6v6c0 5 3.5 8 8 10 4.5-2 8-5 8-10V6Z" /><path d="m9 12 2 2 4-4" /></svg>
                  </span>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 15, color: "#FAFAF7" }}>Safeguards, at a glance</div>
                    <div style={{ fontSize: 12, color: "rgba(250,250,247,0.6)" }}>Administrative · Technical · Physical</div>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {heroChecks.map((c, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 11, background: "rgba(250,250,247,0.05)", border: "1px solid rgba(250,250,247,0.09)", borderRadius: 12, padding: "12px 14px" }}>
                      <span style={{ width: 22, height: 22, borderRadius: 7, background: "#5B8C7B", display: "flex", alignItems: "center", justifyContent: "center", flex: "0 0 auto" }}>
                        <svg width="12" height="12" viewBox="0 0 18 18" fill="none"><path d="M3 9.5l4 4 8-9" stroke="#FAFAF7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </span>
                      <span style={{ fontSize: "13.5px", fontWeight: 500, color: "#FAFAF7" }}>{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STAT BAND */}
      <section style={{ background: "#13294B", color: "#FAFAF7" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "clamp(48px, 6vw, 72px) 32px" }}>
          <div data-reveal style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 1, background: "rgba(250,250,247,0.14)", border: "1px solid rgba(250,250,247,0.14)", borderRadius: 4, overflow: "hidden" }}>
            {trustStats.map((s, i) => (
              <div key={i} style={{ background: "#13294B", padding: "30px 24px" }}>
                <div style={{ fontFamily: SERIF, fontWeight: 600, fontSize: "clamp(32px, 4vw, 46px)", color: "#FEC539", lineHeight: 1, letterSpacing: "-0.02em" }}>{s.value}</div>
                <div style={{ fontSize: 13, lineHeight: 1.45, color: "rgba(250,250,247,0.7)", marginTop: 12 }}>{s.label}</div>
              </div>
            ))}
          </div>
          <p data-reveal style={{ fontSize: 12, lineHeight: 1.6, color: "rgba(250,250,247,0.5)", margin: "20px 0 0", maxWidth: "96ch" }}>
            These figures reflect our internal target operating standards as of June 2026. They are not service-level commitments and are not incorporated into any agreement unless expressly stated in a signed BAA, statement of work, or SLA. Carentix has not represented that it holds SOC 2, HITRUST, or other third-party certification unless explicitly stated.
          </p>
        </div>
      </section>

      {/* OUR COMMITMENT */}
      <section style={{ background: "#FAFAF7", padding: "clamp(80px, 11vw, 150px) 32px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <h2 data-reveal style={{ fontFamily: SERIF, fontWeight: 500, fontSize: "clamp(30px, 4.4vw, 56px)", lineHeight: 1.08, letterSpacing: "-0.03em", color: "#13294B", margin: 0, maxWidth: "22ch", textWrap: "balance" }}>
            We treat your patients’ information the way we’d want ours treated.
          </h2>
          <p data-reveal style={{ fontSize: 18, lineHeight: 1.66, color: "#4A4A45", margin: "28px 0 0", maxWidth: "64ch" }}>
            Compliance after the fact is liability management. Compliance by design is operational integrity. Our processes that touch Protected Health Information are built with minimization, access controls, and validation checkpoints from the outset — not audited in at the end. Our standard process is to put that discipline in place before deploying a tool or onboarding a person.
          </p>
        </div>
      </section>

      {/* THREE SAFEGUARDS */}
      <section id="safeguards" style={{ background: "#F3F0E8", padding: "clamp(80px, 11vw, 150px) 32px" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          <div data-reveal style={{ maxWidth: 760, marginBottom: "clamp(48px, 6vw, 70px)" }}>
            <h2 style={{ fontFamily: SERIF, fontWeight: 500, fontSize: "clamp(34px, 5vw, 62px)", lineHeight: 1.02, letterSpacing: "-0.035em", color: "#13294B", margin: "0 0 18px", textWrap: "balance" }}>Administrative, technical, and physical — covered.</h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "#4A4A45", margin: 0, maxWidth: "60ch" }}>The HIPAA Security Rule defines three categories of safeguards. We hold ourselves to each, with documented controls you can review.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: 22 }}>
            {safeguards.map((g, i) => (
              <div key={i} data-reveal className="cx-lift" style={{ background: "#FAFAF7", border: "1px solid rgba(19,41,75,0.09)", borderRadius: 22, padding: "34px 30px", position: "relative", overflow: "hidden" }}>
                <div aria-hidden style={{ position: "absolute", top: -40, right: -30, width: 150, height: 150, borderRadius: "47% 53% 44% 56% / 55% 48% 52% 45%", background: g.blob }} />
                <div className="cx-sg-ic" style={{ position: "relative", width: 58, height: 58, borderRadius: 16, background: g.iconBg, display: "flex", alignItems: "center", justifyContent: "center", color: g.color, marginBottom: 24 }}>
                  <span dangerouslySetInnerHTML={{ __html: g.icon }} />
                </div>
                <div style={{ position: "relative", fontFamily: SERIF, fontWeight: 600, fontSize: 23, color: "#13294B", marginBottom: 8, letterSpacing: "-0.015em" }}>{g.title}</div>
                <p style={{ position: "relative", fontSize: "14.5px", lineHeight: 1.56, color: "#4A4A45", margin: "0 0 22px" }}>{g.desc}</p>
                <ul style={{ position: "relative", listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                  {g.items.map((it, j) => (
                    <li key={j} style={{ display: "flex", gap: 11, alignItems: "flex-start" }}>
                      <span style={{ flex: "0 0 auto", color: g.color, marginTop: 1 }}>
                        <svg width="17" height="17" viewBox="0 0 18 18" fill="none"><path d="M3 9.5l4 4 8-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </span>
                      <span style={{ fontSize: 14, lineHeight: 1.5, color: "#13294B" }}>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEEP DIVE GRID */}
      <section style={{ background: "#FAFAF7", padding: "clamp(80px, 11vw, 150px) 32px" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          <div data-reveal style={{ maxWidth: 760, marginBottom: "clamp(48px, 6vw, 70px)" }}>
            <h2 style={{ fontFamily: SERIF, fontWeight: 500, fontSize: "clamp(34px, 5vw, 62px)", lineHeight: 1.02, letterSpacing: "-0.035em", color: "#13294B", margin: 0, textWrap: "balance" }}>The controls behind the promise.</h2>
          </div>
          <div className="cx-controls-grid">
            {controls.map((c, i) => (
              <div key={i} data-reveal className="cx-ctrl-cell" style={{ padding: "32px 30px" }}>
                <div className="cx-ctrl-ic" style={{ width: 50, height: 50, borderRadius: 14, background: "rgba(19,41,75,0.10)", display: "flex", alignItems: "center", justifyContent: "center", color: "#13294B", marginBottom: 22 }}>
                  <span dangerouslySetInnerHTML={{ __html: c.icon }} />
                </div>
                <div style={{ fontFamily: SERIF, fontWeight: 600, fontSize: 19, color: "#13294B", marginBottom: 9, letterSpacing: "-0.01em" }}>{c.title}</div>
                <p style={{ fontSize: "14.5px", lineHeight: 1.58, color: "#4A4A45", margin: 0 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS ASSOCIATE RESPONSIBILITIES */}
      <section style={{ background: "#F3F0E8", padding: "clamp(80px, 11vw, 150px) 32px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "clamp(36px, 5vw, 64px)", alignItems: "center" }}>
          <div data-reveal>
            {eyebrowRow("04", "Business Associate responsibilities")}
            <h2 style={{ fontFamily: SERIF, fontWeight: 500, fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.06, letterSpacing: "-0.03em", color: "#13294B", margin: "0 0 18px", textWrap: "balance" }}>We sign before we access your records.</h2>
            <p style={{ fontSize: "16.5px", lineHeight: 1.62, color: "#4A4A45", margin: "0 0 26px", maxWidth: "56ch" }}>As your Business Associate, we are directly and legally liable under HIPAA — not just contractually. A signed BAA is in place before any PHI access, full stop. The accountability for our people, our tools, and our AI is ours, never yours.</p>
            <a href="/business-associate-agreement" className="cx-link-u" style={{ textDecoration: "none", color: "#13294B", fontWeight: 600, fontSize: 16 }}>Understand the BAA →</a>
          </div>
          <div data-reveal style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {baResp.map((r, i) => (
              <div key={i} style={{ display: "flex", gap: 15, alignItems: "flex-start", background: "#FAFAF7", border: "1px solid rgba(19,41,75,0.09)", borderRadius: 16, padding: "22px 24px" }}>
                <span style={{ flex: "0 0 auto", width: 38, height: 38, borderRadius: 11, background: "rgba(254,197,57,0.18)", display: "flex", alignItems: "center", justifyContent: "center", color: "#B8902A" }}>
                  <span dangerouslySetInnerHTML={{ __html: r.icon }} />
                </span>
                <div>
                  <div style={{ fontWeight: 600, fontSize: "15.5px", color: "#13294B", marginBottom: 4 }}>{r.title}</div>
                  <p style={{ fontSize: 14, lineHeight: 1.5, color: "#4A4A45", margin: 0 }}>{r.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INCIDENT RESPONSE TIMELINE */}
      <section style={{ background: "#0C1E3C", color: "#FAFAF7", padding: "clamp(80px, 11vw, 150px) 32px", position: "relative", overflow: "hidden" }}>
        <div className="cx-anim" aria-hidden style={{ position: "absolute", bottom: -180, right: -120, width: 540, height: 540, borderRadius: "50%", background: "radial-gradient(circle, rgba(91,140,123,0.18), transparent 64%)", animation: "cxDrift 26s ease-in-out infinite" }} />
        <div style={{ position: "relative", maxWidth: 1320, margin: "0 auto" }}>
          <div data-reveal style={{ maxWidth: 760, marginBottom: "clamp(48px, 6vw, 68px)" }}>
            {eyebrowRow("05", "Incident response", true)}
            <h2 style={{ fontFamily: SERIF, fontWeight: 500, fontSize: "clamp(32px, 5vw, 60px)", lineHeight: 1.02, letterSpacing: "-0.04em", color: "#FAFAF7", margin: "0 0 18px", maxWidth: "20ch", textWrap: "balance" }}>If something goes wrong, you hear it from us first.</h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "rgba(250,250,247,0.74)", margin: 0, maxWidth: "60ch" }}>Our standard process targets an internal root-cause review within 24 hours of a Level 1 event, with prompt notification to you. This describes our internal review; the contractual breach-notification timeline is the one set in your BAA.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 18 }}>
            {incident.map((i2, i) => (
              <div key={i} data-reveal style={{ background: "rgba(250,250,247,0.04)", border: "1px solid rgba(250,250,247,0.12)", borderRadius: 18, padding: "26px 24px" }}>
                <div style={{ fontFamily: SERIF, fontWeight: 600, fontSize: 15, color: "#FEC539", marginBottom: 16 }}>{i2.step}</div>
                <div style={{ fontFamily: SERIF, fontWeight: 600, fontSize: 18, color: "#FAFAF7", marginBottom: 9, letterSpacing: "-0.01em" }}>{i2.title}</div>
                <p style={{ fontSize: "13.5px", lineHeight: 1.52, color: "rgba(250,250,247,0.7)", margin: 0 }}>{i2.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPLIANCE CULTURE */}
      <section style={{ background: "#FAFAF7", padding: "clamp(80px, 11vw, 150px) 32px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <blockquote data-reveal style={{ fontFamily: SERIF, fontWeight: 500, fontSize: "clamp(26px, 3.6vw, 44px)", lineHeight: 1.24, color: "#13294B", margin: "0 0 28px", letterSpacing: "-0.02em", textWrap: "pretty", maxWidth: "24ch" }}>Compliance is the product — so it’s everyone’s job, every day.</blockquote>
          <p data-reveal style={{ fontSize: 17, lineHeight: 1.66, color: "#4A4A45", margin: "0 0 36px", maxWidth: "64ch" }}>AI tools are reviewed quarterly. Vendor BAAs are kept current. Access is audited, training is refreshed annually, and every new workflow is designed with compliance checkpoints before it ships. This isn’t a department — it’s a culture, reinforced by our Constitution and measured like any other outcome.</p>
          <div data-reveal style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
            {monitoring.map((m, i) => (
              <div key={i} style={{ background: "#F3F0E8", borderRadius: 18, padding: "24px 26px" }}>
                <div style={{ fontFamily: SERIF, fontWeight: 600, fontSize: 17, color: "#13294B", marginBottom: 8 }}>{m.title}</div>
                <p style={{ fontSize: 14, lineHeight: 1.55, color: "#4A4A45", margin: 0 }}>{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="request" style={{ background: "#FAFAF7", padding: "0 32px clamp(80px, 11vw, 160px)" }}>
        <div data-reveal style={{ maxWidth: 1180, margin: "0 auto", background: "#13294B", color: "#FAFAF7", borderRadius: 32, padding: "clamp(48px, 7vw, 92px) clamp(32px, 5vw, 80px)", position: "relative", overflow: "hidden", textAlign: "center" }}>
          <div className="cx-anim" aria-hidden style={{ position: "absolute", top: -160, left: "50%", transform: "translateX(-50%)", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(254,197,57,0.13), transparent 60%)", animation: "cxDrift 28s ease-in-out infinite" }} />
          <div style={{ position: "relative" }}>
            <h2 style={{ fontFamily: SERIF, fontWeight: 500, fontSize: "clamp(32px, 5vw, 60px)", lineHeight: 1.02, letterSpacing: "-0.04em", margin: "0 auto 22px", color: "#FAFAF7", maxWidth: "20ch", textWrap: "balance" }}>Bring your compliance team.</h2>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: "rgba(250,250,247,0.78)", margin: "0 auto 38px", maxWidth: "52ch" }}>We’ll walk your compliance officer through our safeguards, workforce training, vendor BAA register, and a sample Business Associate Agreement — everything your team needs to evaluate us with confidence.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
              <a href="/#contact" className="cx-gold cx-mag" style={{ display: "inline-flex", alignItems: "center", gap: 9, textDecoration: "none", background: "#FEC539", color: "#13294B", fontWeight: 600, fontSize: "16.5px", padding: "17px 32px", borderRadius: 999, boxShadow: "0 12px 34px rgba(254,197,57,0.26)" }}>Schedule a call <span style={{ fontSize: 18 }}>→</span></a>
              <a href="/business-associate-agreement" className="cx-mag" style={{ display: "inline-flex", alignItems: "center", gap: 9, textDecoration: "none", color: "#FAFAF7", fontWeight: 600, fontSize: "16.5px", padding: "17px 28px", borderRadius: 999, border: "1px solid rgba(250,250,247,0.28)" }}>About our BAA</a>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 24, justifyContent: "center", marginTop: 34, fontSize: "13.5px", color: "rgba(250,250,247,0.62)" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 7 }}><span style={{ color: "#5B8C7B" }}>✓</span> BAA before any PHI access</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 7 }}><span style={{ color: "#5B8C7B" }}>✓</span> Documented safeguards</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 7 }}><span style={{ color: "#5B8C7B" }}>✓</span> Audited &amp; reviewed quarterly</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
