import Image from "next/image";
import DisciplineSelector from "@/components/DisciplineSelector";
import PricingCalculator from "@/components/PricingCalculator";
import DesignFaqList from "@/components/DesignFaqList";

const SERIF = "var(--font-source-serif), 'Source Serif 4', serif";

const capabilityTags = ["Scheduling", "Prior authorizations", "Clinical scribing", "Records & ROI", "Referrals", "Eligibility", "Patient messages"];

const proofStats = [
  { display: "Faster", label: "Prior-auth turnaround, so treatment starts sooner" },
  { display: "Renewed", label: "The relationships clients choose to continue" },
  { display: "5-day", label: "Replacement target, per your services agreement" },
];

const beforeItems = [
  "Providers charting until 9pm, finishing notes after the kids are asleep.",
  "Prior auths sitting for days while patients wait on treatment.",
  "The practice manager firefighting — phones ringing, schedule full of gaps and no-shows.",
  "Records requests piling up, referrals slipping through the cracks.",
  "Burnout creeping in, and nobody truly owns the operational mess.",
];
const afterItems = [
  "Notes drafted and ready for sign-off before the provider leaves.",
  "Prior auths submitted same-day and tracked to approval.",
  "Schedule actively managed — gaps filled, reminders sent, no-shows down.",
  "Records and referrals handled end-to-end by one accountable team.",
  "Supervised, compliant, and measurable — your operations finally owned.",
];

const steps = [
  { num: "1", title: "Discovery call", tag: "20 min", body: "A short conversation about your bottlenecks, EHR, and patient volume. You leave with a real estimate — no scripts." },
  { num: "2", title: "Matched with our team", tag: "Within days", body: "We assemble a care team suited to your specialty and workflows — vetted, trained, and accountable to you." },
  { num: "3", title: "Supervised onboarding", tag: "Structured", body: "A guided ramp with a supervisor present — BAA signed, systems secured, SOPs set before any PHI access." },
  { num: "4", title: "Ongoing oversight", tag: "Always on", body: "Daily check-ins, a 1:8 supervisor ratio target, and a 5-day replacement target under your services agreement. Accountable for outcomes." },
];

const complianceStats = [
  { value: "8/8", label: "Named training modules, 80% minimum to pass" },
  { value: "MFA", label: "Company-managed devices, MFA + VPN by default" },
  { value: "1:8", label: "Supervisor ratio target with daily check-ins" },
  { value: "BAA", label: "Signed before PHI access — directly accountable" },
  { value: "6-yr", label: "Compliance record retention" },
];

const team = ["Medical Director", "Operations Supervisor", "Clinic Operations Specialist", "Clinical Scribe"];

const faqs = [
  { q: "Is it safe to have an overseas team handling patient information?", a: "HIPAA imposes a safeguard requirement, not a geography requirement. Our workforce — including international team members — operates under a HIPAA-aligned security program: company-managed encrypted devices, mandatory MFA and VPN, role-based access, and a signed BAA executed before PHI access. We disclose our staffing model and data-handling practices in full during contracting so your compliance and legal teams can evaluate fit for your organization's specific requirements, including any data-residency preferences." },
  { q: "How is this different from a VA marketplace?", a: "You're not hiring a freelancer — you're partnering with a managed operation. Our team is trained, supervised at a 1:8 ratio target with daily check-ins, backed by a documented incident-response program, and covered by a 5-day replacement target under your services agreement. We're accountable for outcomes, not just hours billed." },
  { q: "What does pricing actually look like?", a: "A core fee covers our dedicated team, the compliance program, and oversight — $1,899 per month for your first provider and $1,499 for each additional provider. A volume fee applies per unique patient seen that month — not per visit — on a tiered scale that starts at $4.00 and declines to $1.75 as volume grows, so busy practices are rewarded. Premium services like prior authorizations ($15) or scribing ($8/note) are billed only when used. The calculator above is an illustrative estimate; your actual pricing is confirmed in a written services agreement." },
  { q: "How quickly can we get started?", a: "After your discovery call, our team is typically matched to you within days. Onboarding is a structured, supervised ramp — BAA signed and systems secured first — so your team is contributing safely and quickly, not learning on live PHI unsupervised." },
  { q: "What if the team isn't the right fit?", a: "Engagements include a 5-day replacement target, subject to the terms of your services agreement. If the match isn't working, we re-staff promptly and the supervisor supports continuity so your operations keep moving during the transition." },
  { q: "Which EHRs and workflows do you support?", a: "Our team is trained on EHR navigation and documentation standards as part of an 8-module program, and onboarding is tailored to your specific systems and SOPs. We adapt to your practice — you don't adapt to us." },
];

export default function Page() {
  return (
    <div style={{ position: "relative", color: "#4A4A45", overflowX: "hidden" }}>
      {/* HERO */}
      <section id="top" style={{ position: "relative", overflow: "hidden", background: "#0C1E3C" }}>
        <Image src="/images/home-hero.jpg" alt="A physician in an unhurried, attentive moment with a patient" className="cx-hero-bg" fill priority sizes="100vw" style={{ objectFit: "cover", objectPosition: "80% center" }} />
        <div className="cx-hero-scrim" aria-hidden style={{ position: "absolute", inset: 0, background: "linear-gradient(97deg, rgba(250,250,247,0.98) 0%, rgba(250,250,247,0.96) 26%, rgba(250,250,247,0.74) 48%, rgba(250,250,247,0.24) 70%, rgba(250,250,247,0) 100%)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1320, margin: "0 auto", padding: "clamp(148px, 18vw, 236px) 32px clamp(60px, 8vw, 104px)" }}>
          <div style={{ maxWidth: 630 }}>
            <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: "clamp(26px, 3.5vw, 40px)", background: "rgba(91,140,123,0.12)", border: "1px solid rgba(91,140,123,0.32)", padding: "8px 15px", borderRadius: 999 }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#5B8C7B" }} />
              <span style={{ fontSize: 13, fontWeight: 500, color: "#3C5A50" }}>Your healthcare operations partner</span>
            </div>
            <h1 style={{ fontFamily: SERIF, fontWeight: 500, fontSize: "clamp(40px, 5.8vw, 82px)", lineHeight: 1.01, letterSpacing: "-0.04em", margin: 0, color: "#13294B", maxWidth: "15ch", textWrap: "balance" }}>
              <span data-reveal style={{ display: "block" }}>You built your practice to care for <span style={{ position: "relative", color: "#B8902A", whiteSpace: "nowrap" }}>patients<svg viewBox="0 0 200 14" preserveAspectRatio="none" style={{ position: "absolute", left: 0, bottom: "-0.08em", width: "100%", height: "0.16em", overflow: "visible" }}><path d="M3 9 C 55 3, 150 3, 197 8" fill="none" stroke="#FEC539" strokeWidth="6" strokeLinecap="round" /></svg></span></span>
              <span data-reveal style={{ display: "block" }}>— not paperwork.</span>
            </h1>
            <p data-reveal style={{ fontSize: "clamp(16.5px, 1.3vw, 19px)", lineHeight: 1.62, color: "#3A4A55", margin: "clamp(24px, 3vw, 32px) 0 0", maxWidth: "48ch", fontWeight: 450 }}>
              Carentix is your operations partner — a dedicated, supervised care team that owns the administrative work, so you can give patients your full attention.
            </p>
            <div data-reveal style={{ display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center", marginTop: "clamp(28px, 3.5vw, 38px)" }}>
              <a href="#contact" className="cx-gold cx-mag" style={{ display: "inline-flex", alignItems: "center", gap: 9, textDecoration: "none", background: "#FEC539", color: "#13294B", fontWeight: 600, fontSize: 16, padding: "16px 28px", borderRadius: 999, boxShadow: "0 8px 26px rgba(254,197,57,0.3)" }}>Schedule a call <span style={{ fontSize: 18 }}>→</span></a>
              <a href="#capabilities" className="cx-link-u" style={{ textDecoration: "none", color: "#13294B", fontWeight: 600, fontSize: 16 }}>See what we handle</a>
            </div>
          </div>
        </div>
        <div data-reveal style={{ position: "relative", zIndex: 2, background: "rgba(250,250,247,0.9)", backdropFilter: "saturate(160%) blur(10px)", WebkitBackdropFilter: "saturate(160%) blur(10px)", borderTop: "1px solid rgba(19,41,75,0.1)", borderBottom: "1px solid rgba(19,41,75,0.1)" }}>
          <div style={{ maxWidth: 1320, margin: "0 auto", padding: "20px 32px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "14px 22px" }}>
            <span style={{ fontSize: "11.5px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#5B8C7B" }}>Our team handles</span>
            {capabilityTags.map((t, i) => (
              <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 22 }}>
                <span style={{ fontSize: 15, fontWeight: 500, color: "#13294B" }}>{t}</span>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "rgba(19,41,75,0.22)" }} />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* RECLAIMED TIME */}
      <section style={{ background: "#0C1E3C", color: "#FAFAF7", position: "relative", overflow: "hidden" }}>
        <div className="cx-anim" aria-hidden style={{ position: "absolute", top: -160, right: -120, width: 560, height: 560, borderRadius: "50%", background: "radial-gradient(circle, rgba(254,197,57,0.12), transparent 62%)", animation: "cxDrift 24s ease-in-out infinite" }} />
        <div style={{ position: "relative", maxWidth: 1320, margin: "0 auto", padding: "clamp(80px, 11vw, 156px) 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "clamp(28px, 5vw, 64px)", alignItems: "center" }}>
            <div data-reveal style={{ fontFamily: SERIF, fontWeight: 600, fontSize: "clamp(64px, 9vw, 132px)", lineHeight: 0.92, letterSpacing: "-0.04em", color: "#FEC539" }}>Hours back,<br />every week.</div>
            <div data-reveal style={{ display: "flex", flexDirection: "column" }}>
              {proofStats.map((s, i) => (
                <div key={i} style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 20, padding: "26px 0", borderTop: "1px solid rgba(250,250,247,0.14)" }}>
                  <div style={{ fontSize: 15, color: "rgba(250,250,247,0.72)", maxWidth: "24ch" }}>{s.label}</div>
                  <div style={{ fontFamily: SERIF, fontWeight: 600, fontSize: "clamp(34px, 4vw, 48px)", color: "#FAFAF7", whiteSpace: "nowrap", letterSpacing: "-0.02em" }}>{s.display}</div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid rgba(250,250,247,0.14)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* THE SHIFT */}
      <section style={{ background: "#F3F0E8", padding: "clamp(80px, 11vw, 156px) 32px" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          <div data-reveal style={{ maxWidth: 760, marginBottom: "clamp(48px, 6vw, 72px)" }}>
            <h2 style={{ fontFamily: SERIF, fontWeight: 500, fontSize: "clamp(34px, 5vw, 64px)", lineHeight: 1.02, letterSpacing: "-0.035em", color: "#13294B", margin: 0, textWrap: "balance" }}>The same clinic, two very different weeks.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 1, background: "rgba(19,41,75,0.12)", border: "1px solid rgba(19,41,75,0.12)", borderRadius: 4, overflow: "hidden" }}>
            <div data-reveal style={{ background: "#F3F0E8", padding: "clamp(28px, 3.5vw, 48px)" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 9, marginBottom: 26 }}><span style={{ width: 8, height: 8, borderRadius: "50%", background: "rgba(74,74,69,0.4)" }} /><span style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(74,74,69,0.7)" }}>A typical week, today</span></div>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 20 }}>
                {beforeItems.map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: 15, alignItems: "flex-start" }}>
                    <span style={{ flex: "0 0 auto", width: 7, height: 7, borderRadius: "50%", background: "rgba(74,74,69,0.32)", marginTop: 9 }} />
                    <span style={{ fontSize: 16, lineHeight: 1.5, color: "#4A4A45" }}>{item}</span>
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: 30, paddingTop: 22, borderTop: "1px solid rgba(74,74,69,0.16)", fontFamily: SERIF, fontSize: 18, color: "#4A4A45" }}>Nobody truly owns it.</div>
            </div>
            <div data-reveal style={{ background: "#13294B", color: "#FAFAF7", padding: "clamp(28px, 3.5vw, 48px)", position: "relative", overflow: "hidden" }}>
              <div aria-hidden style={{ position: "absolute", top: -70, right: -50, width: 240, height: 240, borderRadius: "50%", background: "radial-gradient(circle, rgba(91,140,123,0.3), transparent 66%)" }} />
              <div style={{ position: "relative", display: "inline-flex", alignItems: "center", gap: 9, marginBottom: 26 }}><span style={{ width: 8, height: 8, borderRadius: "50%", background: "#FEC539" }} /><span style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#FEC539" }}>With Carentix as your partner</span></div>
              <ul style={{ position: "relative", listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 20 }}>
                {afterItems.map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: 15, alignItems: "flex-start" }}>
                    <span style={{ flex: "0 0 auto", color: "#5B8C7B", marginTop: 1 }}><svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 9.5l4 4 8-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
                    <span style={{ fontSize: 16, lineHeight: 1.5, color: "rgba(250,250,247,0.92)" }}>{item}</span>
                  </li>
                ))}
              </ul>
              <div style={{ position: "relative", marginTop: 30, paddingTop: 22, borderTop: "1px solid rgba(250,250,247,0.16)", fontFamily: SERIF, fontSize: 18, color: "#FAFAF7" }}>One accountable team owns all of it.</div>
            </div>
          </div>
        </div>
      </section>

      {/* REALITY BAND */}
      <section style={{ position: "relative", overflow: "hidden", background: "#0C1E3C" }}>
        <Image src="/images/dashboard.jpg" alt="The administrative reality of a busy practice — paperwork, phones, and waiting rooms" fill sizes="100vw" style={{ objectFit: "cover", objectPosition: "center" }} />
        <div aria-hidden style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(12,30,60,0.5) 0%, rgba(12,30,60,0.55) 45%, rgba(12,30,60,0.9) 100%)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1320, margin: "0 auto", padding: "clamp(120px, 20vw, 260px) 32px clamp(48px, 6vw, 76px)", minHeight: "clamp(360px, 52vw, 560px)", display: "flex", alignItems: "flex-end" }}>
          <div data-reveal style={{ maxWidth: 640 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 13, marginBottom: 20 }}>
              <span style={{ width: 34, height: 1, background: "rgba(254,197,57,0.7)" }} />
              <span style={{ fontSize: "12.5px", fontWeight: 500, letterSpacing: "0.04em", color: "rgba(250,250,247,0.72)" }}>The weight you&apos;re carrying</span>
            </div>
            <h2 style={{ fontFamily: SERIF, fontWeight: 500, fontSize: "clamp(28px, 4vw, 50px)", lineHeight: 1.08, letterSpacing: "-0.03em", color: "#FAFAF7", margin: 0, textWrap: "balance" }}>Every unworked task is a patient waiting, a note unfinished, an evening lost.</h2>
            <p style={{ fontSize: "clamp(16px, 1.3vw, 18px)", lineHeight: 1.6, color: "rgba(250,250,247,0.8)", margin: "20px 0 0", maxWidth: "52ch" }}>The paperwork doesn&apos;t stop when the last patient leaves. Carentix picks it up — so it stops living on your desk.</p>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section id="capabilities" style={{ background: "#FAFAF7", padding: "clamp(80px, 11vw, 156px) 32px" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          <div data-reveal style={{ maxWidth: 800, marginBottom: "clamp(48px, 6vw, 76px)" }}>
            <h2 style={{ fontFamily: SERIF, fontWeight: 500, fontSize: "clamp(34px, 5vw, 64px)", lineHeight: 1.02, letterSpacing: "-0.035em", color: "#13294B", margin: "0 0 20px", textWrap: "balance" }}>Everything your front and back office runs on — handled.</h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "#4A4A45", margin: 0, maxWidth: "60ch" }}>You don&apos;t hire a person; you partner with a team that&apos;s trained across six operational disciplines and accountable as one. <span style={{ color: "#13294B", fontWeight: 500 }}>Hover any discipline to see what it takes off your plate.</span></p>
          </div>
          <DisciplineSelector />
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" style={{ background: "#F3F0E8", padding: "clamp(80px, 11vw, 156px) 32px" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          <div data-reveal style={{ maxWidth: 720, marginBottom: "clamp(48px, 6vw, 72px)" }}>
            <h2 style={{ fontFamily: SERIF, fontWeight: 500, fontSize: "clamp(34px, 5vw, 64px)", lineHeight: 1.02, letterSpacing: "-0.035em", color: "#13294B", margin: 0, textWrap: "balance" }}>From first call to fully embedded, in four steps.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(248px, 1fr))", gap: 24 }}>
            {steps.map((step, i) => (
              <div key={i} data-reveal className="cx-lift" style={{ background: "#FAFAF7", border: "1px solid rgba(19,41,75,0.09)", borderRadius: 20, padding: "32px 30px" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 26 }}>
                  <span style={{ fontFamily: SERIF, fontWeight: 600, fontSize: 52, color: "#13294B", lineHeight: 1, letterSpacing: "-0.03em" }}>{step.num}</span>
                  <span style={{ fontSize: 11, fontWeight: 600, color: "#5B8C7B", background: "rgba(91,140,123,0.12)", padding: "4px 10px", borderRadius: 999 }}>{step.tag}</span>
                </div>
                <div style={{ fontFamily: SERIF, fontWeight: 600, fontSize: 20, color: "#13294B", marginBottom: 10, letterSpacing: "-0.01em" }}>{step.title}</div>
                <p style={{ fontSize: "14.5px", lineHeight: 1.56, color: "#4A4A45", margin: 0 }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING + CALCULATOR */}
      <section id="pricing" style={{ background: "#FAFAF7", padding: "clamp(80px, 11vw, 156px) 32px" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          <div data-reveal style={{ maxWidth: 760, marginBottom: "clamp(44px, 5vw, 64px)" }}>
            <h2 style={{ fontFamily: SERIF, fontWeight: 500, fontSize: "clamp(34px, 5vw, 60px)", lineHeight: 1.02, letterSpacing: "-0.035em", color: "#13294B", margin: "0 0 20px", textWrap: "balance" }}>You only pay for the practice you actually run.</h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "#4A4A45", margin: 0, maxWidth: "58ch" }}>A core fee for your dedicated team — $1,899 for your first provider, $1,499 for each additional — a tiered rate per unique patient (never per visit) that declines as you grow, and premium services only when you use them. Move the numbers below to see your estimate.</p>
          </div>
          <div data-reveal>
            <PricingCalculator />
          </div>
          <div data-reveal style={{ marginTop: 22, display: "flex", flexWrap: "wrap", gap: 22, fontSize: 13, color: "#4A4A45" }}>
            <span><strong style={{ color: "#13294B" }}>30-day pilot</strong> available at $1,399 for your first provider</span>
            <span><strong style={{ color: "#13294B" }}>Annual commitment</strong> 10% off the core fee</span>
            <span><strong style={{ color: "#13294B" }}>Billed per unique patient,</strong> not per appointment</span>
          </div>
          <p data-reveal style={{ marginTop: 14, fontSize: 12, lineHeight: 1.6, color: "#4A4A45", opacity: 0.75, maxWidth: "96ch" }}>Estimate only and non-binding. Figures are illustrative, exclude any setup fees, overages, and minimums, and do not constitute an offer. Actual pricing and terms — including any minimum term — are confirmed in a written services agreement and may vary based on practice-specific factors.</p>
        </div>
      </section>

      {/* COMPLIANCE */}
      <section id="compliance" style={{ background: "#0C1E3C", color: "#FAFAF7", padding: "clamp(80px, 11vw, 156px) 32px", position: "relative", overflow: "hidden" }}>
        <div className="cx-anim" aria-hidden style={{ position: "absolute", bottom: -180, left: -120, width: 540, height: 540, borderRadius: "50%", background: "radial-gradient(circle, rgba(91,140,123,0.18), transparent 64%)", animation: "cxDrift 26s ease-in-out infinite" }} />
        <div style={{ position: "relative", maxWidth: 1320, margin: "0 auto" }}>
          <div data-reveal style={{ display: "flex", alignItems: "center", gap: 13, marginBottom: 28 }}>
            <span style={{ width: 34, height: 1, background: "rgba(254,197,57,0.6)" }} />
            <span style={{ fontSize: "12.5px", fontWeight: 500, letterSpacing: "0.04em", color: "rgba(250,250,247,0.66)" }}>Compliance, by design</span>
          </div>
          <h2 data-reveal style={{ fontFamily: SERIF, fontWeight: 500, fontSize: "clamp(34px, 5.4vw, 70px)", lineHeight: 1.0, letterSpacing: "-0.04em", color: "#FAFAF7", margin: "0 0 clamp(44px, 5vw, 64px)", maxWidth: "20ch", textWrap: "balance" }}>For us, HIPAA is built into the <span style={{ color: "#FEC539" }}>architecture</span> — not added at the end.</h2>
          <div data-reveal style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 1, background: "rgba(250,250,247,0.14)", border: "1px solid rgba(250,250,247,0.14)", borderRadius: 4, overflow: "hidden" }}>
            {complianceStats.map((c, i) => (
              <div key={i} style={{ background: "#0C1E3C", padding: "34px 28px" }}>
                <div style={{ fontFamily: SERIF, fontWeight: 600, fontSize: "clamp(34px, 4vw, 48px)", color: "#FEC539", lineHeight: 1, letterSpacing: "-0.02em" }}>{c.value}</div>
                <div style={{ fontSize: "13.5px", lineHeight: 1.45, color: "rgba(250,250,247,0.7)", marginTop: 14 }}>{c.label}</div>
              </div>
            ))}
          </div>
          <p data-reveal style={{ fontSize: 12, lineHeight: 1.6, color: "rgba(250,250,247,0.5)", margin: "24px 0 0", maxWidth: "90ch" }}>These figures describe our internal compliance program and target operating standards as of June 2026. They are not an SLA and are not incorporated into any agreement unless expressly stated in a signed BAA or services agreement. Carentix has not represented that it holds SOC 2, HITRUST, or other third-party certification unless explicitly stated.</p>
          <a data-reveal href="/hipaa-compliance" className="cx-link-u" style={{ display: "inline-flex", alignItems: "center", gap: 9, textDecoration: "none", color: "#FEC539", fontWeight: 600, fontSize: 16, marginTop: 28 }}>See the full compliance program <span style={{ fontSize: 18 }}>→</span></a>
        </div>
      </section>

      {/* TESTIMONIAL + TEAM */}
      <section style={{ background: "#FAFAF7", padding: "clamp(80px, 11vw, 146px) 32px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div data-reveal style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
            <div style={{ fontFamily: SERIF, fontSize: 19, color: "#13294B", maxWidth: "28ch", lineHeight: 1.4 }}>Real people behind your practice — trained, vetted, and supervised. One accountable team, never a rotating pool.</div>
            <div style={{ display: "flex", alignItems: "center" }}>
              {team.map((role, i) => (
                <div key={i} style={{ marginLeft: i === 0 ? 0 : -16, position: "relative" }} title={role}>
                  <div style={{ padding: 4, background: "#FAFAF7", borderRadius: "50%" }}>
                    <div aria-hidden style={{ width: 72, height: 72, borderRadius: "50%", background: "linear-gradient(150deg, #E7E3D8, #CBD5CE)", border: "1px solid rgba(19,41,75,0.08)", display: "flex", alignItems: "center", justifyContent: "center", color: "#5B8C7B" }}>
                      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 4-6 8-6s8 2 8 6" /></svg>
                    </div>
                  </div>
                </div>
              ))}
              <div style={{ marginLeft: 18, fontSize: "13.5px", color: "#4A4A45", maxWidth: "16ch", lineHeight: 1.4 }}>Our team &amp; their supervisors, matched to you</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ background: "#F3F0E8", padding: "clamp(80px, 11vw, 156px) 32px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "clamp(36px, 5vw, 72px)", alignItems: "start" }}>
          <div data-reveal style={{ position: "sticky", top: 110 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 13, marginBottom: 22 }}>
              <span style={{ width: 34, height: 1, background: "#5B8C7B" }} />
              <span style={{ fontSize: "12.5px", fontWeight: 500, letterSpacing: "0.04em", color: "#5B8C7B" }}>Answered plainly</span>
            </div>
            <h2 style={{ fontFamily: SERIF, fontWeight: 500, fontSize: "clamp(30px, 4vw, 52px)", lineHeight: 1.04, letterSpacing: "-0.035em", color: "#13294B", margin: "0 0 20px", textWrap: "balance" }}>The things practices ask before they say yes.</h2>
            <a href="#contact" className="cx-link-u" style={{ textDecoration: "none", color: "#13294B", fontWeight: 600, fontSize: 16 }}>Still unsure? Schedule a 20-minute call →</a>
          </div>
          <DesignFaqList faqs={faqs} />
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact" style={{ background: "#FAFAF7", padding: "clamp(80px, 11vw, 166px) 32px" }}>
        <div data-reveal style={{ maxWidth: 1180, margin: "0 auto", background: "#13294B", color: "#FAFAF7", borderRadius: 32, padding: "clamp(48px, 7vw, 92px) clamp(32px, 5vw, 80px)", position: "relative", overflow: "hidden", textAlign: "center" }}>
          <div className="cx-anim" aria-hidden style={{ position: "absolute", top: -160, left: "50%", transform: "translateX(-50%)", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(254,197,57,0.13), transparent 60%)", animation: "cxDrift 28s ease-in-out infinite" }} />
          <div style={{ position: "relative" }}>
            <h2 style={{ fontFamily: SERIF, fontWeight: 500, fontSize: "clamp(32px, 5vw, 62px)", lineHeight: 1.02, letterSpacing: "-0.04em", margin: "0 auto 22px", color: "#FAFAF7", maxWidth: "20ch", textWrap: "balance" }}>You got into medicine for the patients. Let&apos;s protect that.</h2>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: "rgba(250,250,247,0.78)", margin: "0 auto 38px", maxWidth: "52ch" }}>A 20-minute call. A real estimate for your practice. No scripts, no pressure — you decide.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
              <a href="mailto:info@carentix.com" className="cx-gold cx-mag" style={{ display: "inline-flex", alignItems: "center", gap: 9, textDecoration: "none", background: "#FEC539", color: "#13294B", fontWeight: 600, fontSize: "16.5px", padding: "17px 32px", borderRadius: 999, boxShadow: "0 12px 34px rgba(254,197,57,0.26)" }}>Schedule a call <span style={{ fontSize: 18 }}>→</span></a>
              <a href="#capabilities" className="cx-mag" style={{ display: "inline-flex", alignItems: "center", gap: 9, textDecoration: "none", color: "#FAFAF7", fontWeight: 600, fontSize: "16.5px", padding: "17px 28px", borderRadius: 999, border: "1px solid rgba(250,250,247,0.28)" }}>See what we handle</a>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 24, justifyContent: "center", marginTop: 34, fontSize: "13.5px", color: "rgba(250,250,247,0.62)" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 7 }}><span style={{ color: "#5B8C7B" }}>✓</span> 5-day replacement target</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 7 }}><span style={{ color: "#5B8C7B" }}>✓</span> BAA before PHI access</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 7 }}><span style={{ color: "#5B8C7B" }}>✓</span> No long-term contract required for standard engagements</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
