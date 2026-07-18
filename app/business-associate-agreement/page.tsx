import type { Metadata } from "next";
import Image from "next/image";
import DesignFaqList from "@/components/DesignFaqList";

export const metadata: Metadata = {
  title: "Business Associate Agreement (BAA)",
  description:
    "What a HIPAA Business Associate Agreement is, why your practice needs one, and how Carentix protects PHI under it. Request a copy of our BAA.",
};

const SERIF = "var(--font-source-serif), 'Source Serif 4', serif";
const ic = (p: string) =>
  `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;

const glance = [
  { icon: ic('<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h4"/>'), title: "It’s required by HIPAA", body: "Any partner that handles PHI on a provider’s behalf must have a signed BAA in place. It’s the law, not a formality." },
  { icon: ic('<path d="M12 2 4 6v6c0 5 3.5 8 8 10 4.5-2 8-5 8-10V6Z"/><path d="m9 12 2 2 4-4"/>'), title: "It protects your patients", body: "It binds us to specific safeguards and makes us directly liable for protecting the information you entrust to us." },
  { icon: ic('<path d="M3 17l6-6 4 4 8-8"/><path d="M17 7h4v4"/>'), title: "We sign before day one", body: "Our standard onboarding process requires a signed BAA before PHI access." },
];

const whyWhen = [
  { title: "Why the law requires it", color: "#3E78C2", tint: "rgba(62,120,194,0.12)", icon: ic('<path d="M12 3v18M5 7l7-4 7 4M5 7v8a7 7 0 0 0 14 0V7"/>'), body: "HIPAA holds providers responsible for the PHI they share with partners. A BAA passes specific, enforceable obligations down to that partner — so protection follows the data." },
  { title: "Why it protects you", color: "#5B8C7B", tint: "rgba(91,140,123,0.14)", icon: ic('<path d="M20 7 9 18l-5-5"/>'), body: "Without a signed BAA, sharing PHI with us would itself be a HIPAA violation. With one, your practice is covered and we carry direct, documented accountability." },
  { title: "When it gets signed", color: "#B8902A", tint: "rgba(184,144,42,0.16)", icon: ic('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'), body: "During onboarding, before any systems access or PHI exposure. Our standard onboarding sequence is: BAA executed, systems secured, SOPs set — then work begins." },
];

const ourResp = [
  "Use and disclose PHI only as the agreement and HIPAA permit — never for marketing.",
  "Apply administrative, technical, and physical safeguards to all PHI we handle.",
  "Limit access to the minimum necessary, on a least-privilege basis.",
  "Ensure any subcontractor that touches PHI signs an equivalent agreement.",
  "Report security incidents and breaches to you promptly, with the facts.",
  "Make our practices available for audit, and return or destroy PHI at the end of the engagement.",
];
const clientResp = [
  "Provide PHI only through the secure channels we establish together.",
  "Share the minimum information we need to perform the agreed services.",
  "Tell us about any restrictions a patient has requested on their information.",
  "Keep your own Notice of Privacy Practices and patient consents current.",
];

const commitments = [
  { title: "Security commitments", icon: ic('<path d="M12 2 4 6v6c0 5 3.5 8 8 10 4.5-2 8-5 8-10V6Z"/><path d="m9 12 2 2 4-4"/>'), body: "Encryption in transit and at rest, MFA and VPN on login, company-managed devices, and audit logging — written into the agreement, not just promised." },
  { title: "Incident reporting", icon: ic('<path d="M12 9v4M12 17h.01"/><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/>'), body: "We commit to prompt notification, consistent with your BAA, if a security incident or breach involving your PHI occurs — with a clear remediation plan." },
  { title: "Subcontractors", icon: ic('<circle cx="6" cy="12" r="3"/><circle cx="18" cy="5" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 10.6 6.8-4M8.6 13.4l6.8 4"/>'), body: "A tool or partner that may access PHI — including AI vendors — is required to sign its own BAA before use, so the chain of accountability is maintained." },
  { title: "Compliance & audit", icon: ic('<path d="M4 4h12l4 4v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z"/><path d="M8 12h8M8 16h5"/>'), body: "We keep records for six years, review controls regularly, and make our compliance practices available so your team can verify, not just trust." },
];

const faqs = [
  { q: "Do we have to use your BAA, or can we use ours?", a: "Either works. We have a standard BAA ready for your compliance team to review, and we’re equally happy to sign yours. What matters is that a mutually agreed agreement is fully executed before any PHI changes hands." },
  { q: "When exactly is the BAA signed in the process?", a: "During onboarding, before systems access or PHI exposure. Our standard sequence is BAA executed first, then systems secured, then SOPs and access configured. Your team never works on live PHI before the agreement is in place." },
  { q: "What counts as PHI in our engagement?", a: "Any individually identifiable health information we encounter while supporting you — patient names and contact details, insurance and claims data, appointment and scheduling records, and clinical documentation. We use only the minimum necessary for each task." },
  { q: "How do you handle AI tools under the BAA?", a: "An AI tool that may process PHI is subject to its own signed BAA before we use it, and human review is required on AI-assisted clinical or billing outputs before finalization. We minimize PHI in AI prompts to the minimum necessary, and accountability for the result is always ours — never “the AI did it.”" },
  { q: "What happens to our data when the engagement ends?", a: "At the end of the relationship we return or securely destroy the PHI we hold on your behalf, as the agreement specifies, and we document that it was done. Required compliance and audit records are retained only as the law allows." },
  { q: "How do we request a copy?", a: "Email info@carentix.com or use the button below, and we’ll send our standard BAA along with our safeguards documentation so your compliance officer has everything needed to review and approve." },
];

// Section eyebrows (the numbered "01 · Label" rows) intentionally removed per
// request — BAA sections show only their heading.
const eyebrowRow = (_num: string, _label: string): null => null;

export default function Page() {
  return (
    <div style={{ position: "relative", color: "#4A4A45", overflowX: "hidden" }}>
      {/* HERO */}
      <section style={{ position: "relative", overflow: "hidden", background: "#0C1E3C" }}>
        <Image src="/images/baa-hero.jpg" alt="A signed agreement protecting patient information" className="cx-hero-bg" fill priority sizes="100vw" style={{ objectFit: "cover", objectPosition: "center 35%" }} />
        <div className="cx-hero-tint" aria-hidden />
        <div aria-hidden style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(12,30,60,0.6) 0%, rgba(12,30,60,0.7) 46%, rgba(12,30,60,0.96) 100%)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1080, margin: "0 auto", padding: "clamp(128px, 15vw, 178px) 32px clamp(56px, 7vw, 80px)" }}>
          <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: "clamp(24px, 3vw, 34px)", background: "rgba(250,250,247,0.1)", border: "1px solid rgba(250,250,247,0.3)", padding: "8px 15px", borderRadius: 999 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#5B8C7B" }} />
            <span style={{ fontSize: 13, fontWeight: 500, color: "rgba(250,250,247,0.9)" }}>Compliance · Business Associate Agreement</span>
          </div>
          <h1 data-reveal style={{ fontFamily: SERIF, fontWeight: 500, fontSize: "clamp(40px, 6vw, 78px)", lineHeight: 1.0, letterSpacing: "-0.04em", margin: 0, color: "#FAFAF7", maxWidth: "18ch", textWrap: "balance" }}>Your Business Associate Agreement, explained.</h1>
          <p data-reveal style={{ fontSize: "clamp(16.5px, 1.3vw, 19px)", lineHeight: 1.62, color: "rgba(250,250,247,0.82)", margin: "clamp(22px, 3vw, 30px) 0 0", maxWidth: "60ch", fontWeight: 450 }}>
            Before we handle a single record, we sign a BAA with your practice. This page explains what that document is, why it protects you, and exactly what we commit to under it — in plain English. When you’re ready, request a copy of ours.
          </p>
          <div data-reveal style={{ display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center", marginTop: "clamp(26px, 3.5vw, 36px)" }}>
            <a href="#request" className="cx-gold cx-mag" style={{ display: "inline-flex", alignItems: "center", gap: 9, textDecoration: "none", background: "#FEC539", color: "#13294B", fontWeight: 600, fontSize: 16, padding: "16px 28px", borderRadius: 999, boxShadow: "0 8px 26px rgba(254,197,57,0.26)" }}>Request a copy of our BAA <span style={{ fontSize: 18 }}>→</span></a>
            <a href="/hipaa-compliance" className="cx-link-u" style={{ textDecoration: "none", color: "#FAFAF7", fontWeight: 600, fontSize: 16 }}>See our HIPAA program</a>
          </div>
        </div>
      </section>

      {/* GLANCE */}
      <section style={{ background: "#FAFAF7", padding: "0 32px clamp(40px, 5vw, 60px)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 1, background: "rgba(19,41,75,0.1)", border: "1px solid rgba(19,41,75,0.1)", borderRadius: 6, overflow: "hidden" }}>
          {glance.map((g, i) => (
            <div key={i} data-reveal style={{ background: "#fff", padding: "30px 28px" }}>
              <div style={{ width: 46, height: 46, borderRadius: 13, background: "rgba(91,140,123,0.14)", display: "flex", alignItems: "center", justifyContent: "center", color: "#5B8C7B", marginBottom: 18 }}>
                <span dangerouslySetInnerHTML={{ __html: g.icon }} />
              </div>
              <div style={{ fontFamily: SERIF, fontWeight: 600, fontSize: 18, color: "#13294B", marginBottom: 7 }}>{g.title}</div>
              <p style={{ fontSize: 14, lineHeight: 1.55, color: "#4A4A45", margin: 0 }}>{g.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT IT IS */}
      <section style={{ background: "#FAFAF7", padding: "clamp(60px, 8vw, 120px) 32px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div data-reveal>{eyebrowRow("01", "What a BAA is")}</div>
          <h2 data-reveal style={{ fontFamily: SERIF, fontWeight: 500, fontSize: "clamp(30px, 4.4vw, 52px)", lineHeight: 1.06, letterSpacing: "-0.03em", color: "#13294B", margin: "0 0 22px", maxWidth: "22ch", textWrap: "balance" }}>A contract that makes us legally accountable for PHI.</h2>
          <p data-reveal style={{ fontSize: 17, lineHeight: 1.66, color: "#4A4A45", margin: "0 0 18px", maxWidth: "64ch" }}>A Business Associate Agreement (BAA) is a HIPAA-required contract between a healthcare provider (the “Covered Entity”) and a service partner that handles Protected Health Information on its behalf (the “Business Associate”). It defines how PHI may be used, how it must be protected, and who is liable if something goes wrong.</p>
          <p data-reveal style={{ fontSize: 17, lineHeight: 1.66, color: "#4A4A45", margin: "0 0 28px", maxWidth: "64ch" }}>When Carentix manages your scheduling, prior authorizations, verification, scribing, or records, we are your Business Associate. The BAA is what turns our security promises into binding, enforceable obligations.</p>
          <div data-reveal style={{ display: "flex", gap: 16, alignItems: "flex-start", background: "#13294B", color: "#FAFAF7", borderRadius: 20, padding: "26px 28px" }}>
            <span style={{ flex: "0 0 auto", width: 44, height: 44, borderRadius: 12, background: "rgba(254,197,57,0.18)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FEC539" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg>
            </span>
            <div>
              <div style={{ fontFamily: SERIF, fontWeight: 600, fontSize: 18, color: "#FAFAF7", marginBottom: 6 }}>Protected Health Information (PHI)</div>
              <p style={{ fontSize: "14.5px", lineHeight: 1.6, color: "rgba(250,250,247,0.84)", margin: 0 }}>Any individually identifiable health information — names, contact details, insurance and claims data, appointment and clinical records — that we encounter while supporting your practice. We use only the minimum necessary, always.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY & WHEN */}
      <section style={{ background: "#F3F0E8", padding: "clamp(70px, 9vw, 130px) 32px" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          <div data-reveal style={{ maxWidth: 760, marginBottom: "clamp(40px, 5vw, 60px)" }}>
            {eyebrowRow("02", "Why you need one & when it’s signed")}
            <h2 style={{ fontFamily: SERIF, fontWeight: 500, fontSize: "clamp(30px, 4.4vw, 56px)", lineHeight: 1.04, letterSpacing: "-0.03em", color: "#13294B", margin: 0, textWrap: "balance" }}>Required by law. Signed before day one.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 22 }}>
            {whyWhen.map((w, i) => (
              <div key={i} data-reveal className="cx-lift" style={{ background: "#FAFAF7", border: "1px solid rgba(19,41,75,0.09)", borderRadius: 20, padding: "32px 30px" }}>
                <div style={{ width: 50, height: 50, borderRadius: 14, background: w.tint, display: "flex", alignItems: "center", justifyContent: "center", color: w.color, marginBottom: 22 }}>
                  <span dangerouslySetInnerHTML={{ __html: w.icon }} />
                </div>
                <div style={{ fontFamily: SERIF, fontWeight: 600, fontSize: 20, color: "#13294B", marginBottom: 10, letterSpacing: "-0.01em" }}>{w.title}</div>
                <p style={{ fontSize: "14.5px", lineHeight: 1.58, color: "#4A4A45", margin: 0 }}>{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESPONSIBILITIES SPLIT */}
      <section style={{ background: "#FAFAF7", padding: "clamp(80px, 11vw, 150px) 32px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div data-reveal style={{ maxWidth: 760, marginBottom: "clamp(40px, 5vw, 60px)" }}>
            {eyebrowRow("03", "Responsibilities")}
            <h2 style={{ fontFamily: SERIF, fontWeight: 500, fontSize: "clamp(30px, 4.4vw, 56px)", lineHeight: 1.04, letterSpacing: "-0.03em", color: "#13294B", margin: 0, textWrap: "balance" }}>Who does what under the BAA.</h2>
          </div>
          <div className="cx-resp-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "rgba(19,41,75,0.12)", border: "1px solid rgba(19,41,75,0.12)", borderRadius: 6, overflow: "hidden" }}>
            <div data-reveal style={{ background: "#13294B", color: "#FAFAF7", padding: "clamp(28px, 3.5vw, 44px)" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 9, marginBottom: 26 }}><span style={{ width: 8, height: 8, borderRadius: "50%", background: "#FEC539" }} /><span style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#FEC539" }}>Carentix commits to</span></div>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 18 }}>
                {ourResp.map((r, i) => (
                  <li key={i} style={{ display: "flex", gap: 13, alignItems: "flex-start" }}>
                    <span style={{ flex: "0 0 auto", color: "#5B8C7B", marginTop: 1 }}><svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 9.5l4 4 8-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
                    <span style={{ fontSize: 15, lineHeight: 1.5, color: "rgba(250,250,247,0.92)" }}>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div data-reveal style={{ background: "#FAFAF7", padding: "clamp(28px, 3.5vw, 44px)" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 9, marginBottom: 26 }}><span style={{ width: 8, height: 8, borderRadius: "50%", background: "#5B8C7B" }} /><span style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#3C5A50" }}>Your practice handles</span></div>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 18 }}>
                {clientResp.map((r, i) => (
                  <li key={i} style={{ display: "flex", gap: 13, alignItems: "flex-start" }}>
                    <span style={{ flex: "0 0 auto", color: "#5B8C7B", marginTop: 1 }}><svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 9.5l4 4 8-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
                    <span style={{ fontSize: 15, lineHeight: 1.5, color: "#13294B" }}>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* COMMITMENTS GRID */}
      <section style={{ background: "#F3F0E8", padding: "clamp(70px, 9vw, 130px) 32px" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          <div data-reveal style={{ maxWidth: 760, marginBottom: "clamp(40px, 5vw, 60px)" }}>
            {eyebrowRow("04", "What our BAA guarantees")}
            <h2 style={{ fontFamily: SERIF, fontWeight: 500, fontSize: "clamp(30px, 4.4vw, 56px)", lineHeight: 1.04, letterSpacing: "-0.03em", color: "#13294B", margin: 0, textWrap: "balance" }}>The commitments inside the contract.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 1, background: "rgba(19,41,75,0.1)", border: "1px solid rgba(19,41,75,0.1)", borderRadius: 6, overflow: "hidden" }}>
            {commitments.map((c, i) => (
              <div key={i} data-reveal style={{ background: "#FAFAF7", padding: "32px 30px" }}>
                <div style={{ width: 50, height: 50, borderRadius: 14, background: "rgba(254,197,57,0.18)", display: "flex", alignItems: "center", justifyContent: "center", color: "#B8902A", marginBottom: 22 }}>
                  <span dangerouslySetInnerHTML={{ __html: c.icon }} />
                </div>
                <div style={{ fontFamily: SERIF, fontWeight: 600, fontSize: 19, color: "#13294B", marginBottom: 9, letterSpacing: "-0.01em" }}>{c.title}</div>
                <p style={{ fontSize: "14.5px", lineHeight: 1.58, color: "#4A4A45", margin: 0 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "#FAFAF7", padding: "clamp(80px, 11vw, 150px) 32px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "clamp(36px, 5vw, 72px)", alignItems: "start" }}>
          <div data-reveal style={{ position: "sticky", top: 110 }}>
            {eyebrowRow("05", "BAA questions")}
            <h2 style={{ fontFamily: SERIF, fontWeight: 500, fontSize: "clamp(30px, 4vw, 52px)", lineHeight: 1.04, letterSpacing: "-0.035em", color: "#13294B", margin: "0 0 20px", textWrap: "balance" }}>Answered plainly.</h2>
            <a href="#request" className="cx-link-u" style={{ textDecoration: "none", color: "#13294B", fontWeight: 600, fontSize: 16 }}>Request a copy of our BAA →</a>
          </div>
          <DesignFaqList faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section id="request" style={{ background: "#FAFAF7", padding: "0 32px clamp(80px, 11vw, 160px)" }}>
        <div data-reveal style={{ maxWidth: 1180, margin: "0 auto", background: "#13294B", color: "#FAFAF7", borderRadius: 32, padding: "clamp(48px, 7vw, 92px) clamp(32px, 5vw, 80px)", position: "relative", overflow: "hidden", textAlign: "center" }}>
          <div className="cx-anim" aria-hidden style={{ position: "absolute", top: -160, left: "50%", transform: "translateX(-50%)", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(254,197,57,0.13), transparent 60%)", animation: "cxDrift 28s ease-in-out infinite" }} />
          <div style={{ position: "relative" }}>
            <h2 style={{ fontFamily: SERIF, fontWeight: 500, fontSize: "clamp(30px, 4.6vw, 56px)", lineHeight: 1.04, letterSpacing: "-0.04em", margin: "0 auto 22px", color: "#FAFAF7", maxWidth: "24ch", textWrap: "balance" }}>Request a copy of our Business Associate Agreement.</h2>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: "rgba(250,250,247,0.78)", margin: "0 auto 38px", maxWidth: "52ch" }}>We’ll send our standard BAA for your compliance team to review — and we’re glad to work from yours instead.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
              <a href="mailto:info@carentix.com?subject=BAA%20request" className="cx-gold cx-mag" style={{ display: "inline-flex", alignItems: "center", gap: 9, textDecoration: "none", background: "#FEC539", color: "#13294B", fontWeight: 600, fontSize: "16.5px", padding: "17px 32px", borderRadius: 999, boxShadow: "0 12px 34px rgba(254,197,57,0.26)" }}>Schedule a call <span style={{ fontSize: 18 }}>→</span></a>
              <a href="/hipaa-compliance" className="cx-mag" style={{ display: "inline-flex", alignItems: "center", gap: 9, textDecoration: "none", color: "#FAFAF7", fontWeight: 600, fontSize: "16.5px", padding: "17px 28px", borderRadius: 999, border: "1px solid rgba(250,250,247,0.28)" }}>See our HIPAA program</a>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 24, justifyContent: "center", marginTop: 34, fontSize: "13.5px", color: "rgba(250,250,247,0.62)" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 7 }}><span style={{ color: "#5B8C7B" }}>✓</span> Signed before any PHI access</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 7 }}><span style={{ color: "#5B8C7B" }}>✓</span> Work from ours or yours</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 7 }}><span style={{ color: "#5B8C7B" }}>✓</span> Reviewed by your compliance team</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
