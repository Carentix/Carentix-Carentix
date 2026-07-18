import type { Metadata } from "next";
import DesignFaqList from "@/components/DesignFaqList";

export const metadata: Metadata = {
  title: "Careers — Build the future of healthcare operations",
  description:
    "Join Carentix, the healthcare operations partner training elite, AI-augmented certified professionals. A 6–9 month Academy and a clear path from Academy to leadership.",
};

const SERIF = "var(--font-source-serif), 'Source Serif 4', serif";
const ic = (p: string) =>
  `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;

const skillTags = ["Operational excellence", "Systems thinking", "Prior authorization", "Clinical scribing", "Leadership & ownership", "Decision-making", "Patient-first thinking", "Continuous improvement", "AI workflows", "Communication", "Accountability", "Quality mindset"];

const whyCards = [
  { title: "A profession, not a placement", color: "#8FBFAE", tint: "rgba(91,140,123,0.22)", icon: ic('<path d="M12 2 3 6v6c0 5 4 8.5 9 10 5-1.5 9-5 9-10V6Z"/><path d="m9 12 2 2 4-4"/>'), body: "You join an institution that develops certified experts — not a marketplace that rents out hours. The difference governs how we hire, train, and pay." },
  { title: "Rewarded for excellence", color: "#FEC539", tint: "rgba(254,197,57,0.2)", icon: ic('<path d="M12 2v20M17 6H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>'), body: "We invest meaningfully in exceptional people and reward performance and mastery. Compensation is a philosophy here, not a ceiling — it grows with the responsibility and impact you take on." },
  { title: "AI-native from day one", color: "#8FBFAE", tint: "rgba(91,140,123,0.22)", icon: ic('<rect x="4" y="6" width="16" height="13" rx="2"/><path d="M9 2v4M15 2v4M9 12h.01M15 12h.01M9 16h6"/>'), body: "AI is woven into every workflow you learn — a performance multiplier that makes you 3x more capable while your judgment stays in charge." },
  { title: "A credential that travels", color: "#FEC539", tint: "rgba(254,197,57,0.2)", icon: ic('<circle cx="12" cy="9" r="6"/><path d="m8.5 13.5-1.5 8 5-3 5 3-1.5-8"/>'), body: "Carentix Certified is designed to become a recognized standard in healthcare operations. It is a Carentix credential and is not currently an externally accredited or CEU-bearing certification." },
  { title: "Coaching as a multiplier", color: "#8FBFAE", tint: "rgba(91,140,123,0.22)", icon: ic('<path d="M21 11.5a8.4 8.4 0 0 1-9 8.4L3 21l1.1-3.5A8.4 8.4 0 1 1 21 11.5Z"/><path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01"/>'), body: "Everyone gets formal coaching — and the best performers get the most. We coach to challenge, not to reassure." },
  { title: "Patient at the end of the work", color: "#FEC539", tint: "rgba(254,197,57,0.2)", icon: ic('<path d="M19 14c1.5-1.6 3-3.5 3-5.5A3.5 3.5 0 0 0 12 6 3.5 3.5 0 0 0 2 8.5C2 12 7 16 12 20c2-1.6 4.5-3.7 7-6Z"/>'), body: "Every prior auth, every verification, every note has a patient waiting on the other side. Precision here is patient care." },
];

const bandStats = [
  { value: "6–9 mo", label: "Immersive Academy — real client work from week one" },
  { value: "G1→G15", label: "A visible grade ladder from Academy to leadership" },
  { value: "1:6", label: "Coach-to-trainee ratio during the Academy" },
  { value: "AI-native", label: "Modern AI woven into every workflow you learn" },
  { value: "Remote", label: "Work from anywhere on company-managed equipment" },
];

const phases = [
  { tag: "01", grade: "Grade G1", title: "Foundations", months: "Months 1–3", production: "Supervised production — 50% capacity", color: "#13294B", tint: "rgba(19,41,75,0.06)", body: "Healthcare knowledge, systems, compliance, and AI basics. HIPAA certified in week one. You do real, supervised client work from the start." },
  { tag: "02", grade: "Grade G2", title: "Core Operations", months: "Months 4–6", production: "Independent production — 80% capacity", color: "#13294B", tint: "rgba(19,41,75,0.06)", body: "Service-line mastery across prior auth, scribing, verification, and referrals. Quality benchmarks rise; AI is used in every workflow." },
  { tag: "03", grade: "Grade G3", title: "Advanced Practicum", months: "Months 7–9", production: "Full production — 95%+ capacity", color: "#13294B", tint: "rgba(19,41,75,0.06)", body: "Cross-service mastery, leadership skills, a capstone project, and certification. You graduate ready to lead the work, not just do it." },
];

const ladder = [
  { step: "01", grades: "G1–G3", title: "Academy", color: "#13294B", focus: "Formation", gate: "Nine-month formation. HIPAA, accuracy, and the certification exam are the gates between you and G4." },
  { step: "02", grades: "G4–G8", title: "Certified Professional", color: "#13294B", focus: "Mastery", gateBefore: true, gate: "A step-change, not a raise — it should feel like joining a different company. Mentor trainees; cross-train a second service line." },
  { step: "03", grades: "G9–G10", title: "Lead / Specialist", color: "#13294B", focus: "Ownership", gate: "Own SOPs and team accuracy, or go deep as a domain specialist. The technical track peaks here without managing people." },
  { step: "04", grades: "G11–G12", title: "Manager", color: "#13294B", focus: "People", gate: "Pass the Management Readiness Assessment. Develop people, run quality, and own outcomes for 6–15 reports." },
  { step: "05", grades: "G13–G14", title: "Director", color: "#13294B", focus: "Strategy", gate: "P&L ownership and function strategy. Multi-function scope at VP. Board endorsement for every step above." },
  { step: "06", grades: "G15", title: "Executive", color: "#13294B", focus: "Leadership", gate: "C-suite leadership. 15+ years total, board-approved, accountable for the company against measurable OKRs." },
];

const benefits = [
  { title: "Competitive compensation philosophy", color: "#8FBFAE", tint: "rgba(91,140,123,0.22)", icon: ic('<path d="M12 2v20M17 6H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>'), body: "A meaningful investment in exceptional people that rewards performance and mastery — with performance bonuses, profit sharing at G4+, and long-term incentives at G9+." },
  { title: "Professional development", color: "#FEC539", tint: "rgba(254,197,57,0.2)", icon: ic('<path d="M12 14 2 9l10-5 10 5-10 5Z"/><path d="M6 11v5c0 1 2.7 3 6 3s6-2 6-3v-5"/>'), body: "Formal coaching at every level, advanced certifications, and a development budget that grows with your grade." },
  { title: "The Carentix credential", color: "#8FBFAE", tint: "rgba(91,140,123,0.22)", icon: ic('<circle cx="12" cy="9" r="6"/><path d="m8.5 13.5-1.5 8 5-3 5 3-1.5-8"/>'), body: "A portable, recognized professional credential issued at a public Certification Ceremony — yours for the rest of your career." },
  { title: "AI-first workplace", color: "#FEC539", tint: "rgba(254,197,57,0.2)", icon: ic('<rect x="4" y="6" width="16" height="13" rx="2"/><path d="M9 2v4M15 2v4M9 12h.01M15 12h.01M9 16h6"/>'), body: "Work alongside modern AI tools every day, with the training to use them well — and the judgment to know when not to." },
  { title: "Clear career growth", color: "#8FBFAE", tint: "rgba(91,140,123,0.22)", icon: ic('<path d="M3 17 9 11l4 4 8-8"/><path d="M17 7h4v4"/>'), body: "A fifteen-grade ladder with visible gates and dual tracks. You always know what the next step is and how to earn it." },
  { title: "Remote culture", color: "#FEC539", tint: "rgba(254,197,57,0.2)", icon: ic('<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 4 6 4 9s-1.5 6.3-4 9c-2.5-2.7-4-6-4-9s1.5-6.3 4-9Z"/>'), body: "Work from anywhere on company-managed equipment, inside a structured, supportive operation — not a chaotic gig pool." },
  { title: "Continuous learning", color: "#8FBFAE", tint: "rgba(91,140,123,0.22)", icon: ic('<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2Z"/><path d="M19 3v18"/>'), body: "A versioned curriculum and SOP library that improves every quarter — plus AI labs, simulations, and capstones." },
  { title: "Wellness & dignity", color: "#FEC539", tint: "rgba(254,197,57,0.2)", icon: ic('<path d="M19 14c1.5-1.6 3-3.5 3-5.5A3.5 3.5 0 0 0 12 6 3.5 3.5 0 0 0 2 8.5C2 12 7 16 12 20c2-1.6 4.5-3.7 7-6Z"/>'), body: "Wellness stipend, mental-health days, and a culture where high standards and human dignity reinforce each other." },
];

const openings = [
  { title: "COS Academy Trainee", tags: ["Full-time", "Remote", "Cohort start"] },
  { title: "Prior Authorization Specialist", tags: ["Full-time", "Remote"] },
  { title: "Medical Scribe (Behavioral Health)", tags: ["Full-time", "Remote"] },
  { title: "Insurance Verification Specialist", tags: ["Full-time", "Remote"] },
  { title: "Referral & Records Coordinator", tags: ["Full-time", "Remote"] },
  { title: "Operations Supervisor / COS Lead", tags: ["Full-time", "Remote"] },
  { title: "Academy Coach", tags: ["Full-time", "Remote"] },
  { title: "Client Account Manager", tags: ["Full-time", "Remote"] },
];

const values = [
  { num: "III.1", title: "Mastery over mediocrity", body: "We hold a standard the industry hasn’t defined yet — because we intend to define it. 97%+ accuracy is the baseline, not the goal." },
  { num: "III.2", title: "Integrity without convenience", body: "We tell the truth, even when it’s uncomfortable. We own errors before they’re discovered. We manage performance, not perceptions." },
  { num: "III.3", title: "Patient first", body: "Every decision is tested against one question: does this improve the patient’s path to care? The admin work is the infrastructure of healing." },
  { num: "III.4", title: "People are the advantage", body: "We treat exceptional people as an asset to develop, not a cost to manage. We invest in the best because they produce the best." },
  { num: "III.6", title: "Accountability at every level", body: "It flows up, down, and sideways. No title exempts anyone from the standard; no tenure protects anyone from an expectation." },
  { num: "III.7", title: "Human dignity is non-negotiable", body: "High standards and dignity reinforce each other. We expect excellence and treat every person with the respect their effort deserves." },
];

const hiring = [
  { num: "1", when: "Apply", title: "Introduce yourself", body: "Tell us who you are and why this work. No prior healthcare experience required for the Academy track — attitude and aptitude matter most." },
  { num: "2", when: "~30 min", title: "Screening conversation", body: "A real conversation about your goals, strengths, and how you think — not a scripted interrogation." },
  { num: "3", when: "Structured", title: "Skills assessment", body: "A practical evaluation that predicts how you’ll perform in the work. We measure aptitude, not pedigree." },
  { num: "4", when: "By cohort", title: "Academy invitation", body: "“You’ve been selected for the Carentix Academy.” Admission is a distinction — you join a cohort, sign the pledge, and begin." },
  { num: "5", when: "Week 1+", title: "Supervised onboarding", body: "HIPAA certification, systems access, and real work under a coach from day one. Learning and contribution start together." },
];

const faqs = [
  { q: "Do I need prior healthcare experience?", a: "Not for the Academy track. We hire for aptitude, integrity, and a genuine drive to master the work — then we build the healthcare knowledge through a structured, production-integrated program. Experienced professionals are welcome too and may enter at a higher grade after assessment." },
  { q: "What exactly is the Carentix Academy?", a: "A 6–9 month immersive professional program — not onboarding. Across three phases you learn revenue cycle, prior auth, scribing, verification, compliance, and AI workflows while doing supervised real client work. You graduate with the Carentix Certified credential after passing a 120-question exam, a simulation battery, and a Graduation Board interview." },
  { q: "Is this a remote role?", a: "Yes — we’re remote. You work from anywhere on company-managed equipment behind a mandatory VPN with MFA, inside a structured operation with daily check-ins and coaching. It’s the support of an institution with the flexibility of remote work." },
  { q: "How does compensation actually work?", a: "Academy grades (G1–G3) are paid competitively during the development period. On graduation you transition immediately to the Certified Professional track — a genuine step-change in compensation, plus performance bonuses, profit sharing at G4+, and long-term incentives at G9+. Our philosophy is to invest in exceptional people and reward performance and mastery." },
  { q: "What happens if I don’t graduate?", a: "The standard is real and enforced — not everyone who enters graduates. Gates exist at every phase, and they’re not relaxed for candidates who are “almost there.” That’s exactly what makes the credential valuable. We coach hard to help you clear them, and we handle every outcome with dignity." },
  { q: "Do you really use AI in the day-to-day work?", a: "Yes, natively. AI tools are taught from day one and woven into every workflow — you’ll graduate fluent in them. But AI augments human judgment here; it never replaces it. Every clinical or billing output gets human review, and accountability always belongs to people." },
];

const eyebrowRow = (label: string) => (
  <div style={{ display: "flex", alignItems: "center", gap: 13, marginBottom: 22 }}>
    <span style={{ width: 26, height: 1, background: "rgba(19,41,75,0.28)" }} />
    <span style={{ fontSize: "12.5px", fontWeight: 500, letterSpacing: "0.04em", color: "#5B8C7B" }}>{label}</span>
  </div>
);

export default function Page() {
  return (
    <div style={{ position: "relative", color: "#4A4A45", overflowX: "hidden" }}>
      {/* HERO */}
      <section id="top" style={{ position: "relative", overflow: "hidden", background: "#0C1E3C" }}>
        <div className="cx-hero-tint" aria-hidden />
        <div className="cx-hero-scrim" aria-hidden style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(12,30,60,0.5) 0%, rgba(12,30,60,0.58) 46%, rgba(12,30,60,0.95) 100%)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1320, margin: "0 auto", padding: "clamp(150px, 19vw, 244px) 32px clamp(56px, 7vw, 84px)" }}>
          <div style={{ maxWidth: 680 }}>
            <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: "clamp(26px, 3.5vw, 38px)", background: "rgba(91,140,123,0.16)", border: "1px solid rgba(91,140,123,0.36)", padding: "8px 15px", borderRadius: 999 }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#5B8C7B" }} />
              <span style={{ fontSize: 13, fontWeight: 500, color: "#DCEFE7" }}>Now Hiring</span>
            </div>
            <h1 style={{ fontFamily: SERIF, fontWeight: 500, fontSize: "clamp(42px, 6vw, 84px)", lineHeight: 1.0, letterSpacing: "-0.04em", margin: 0, color: "#FAFAF7", maxWidth: "15ch", textWrap: "balance" }}>
              <span data-reveal style={{ display: "block" }}>Build the future of</span>
              <span data-reveal style={{ display: "block" }}>healthcare <span style={{ position: "relative", color: "#FEC539", whiteSpace: "nowrap" }}>operations<svg viewBox="0 0 200 14" preserveAspectRatio="none" style={{ position: "absolute", left: 0, bottom: "-0.08em", width: "100%", height: "0.16em", overflow: "visible" }}><path d="M3 9 C 55 3, 150 3, 197 8" fill="none" stroke="#FEC539" strokeWidth="6" strokeLinecap="round" /></svg></span></span>
            </h1>
            <p data-reveal style={{ fontSize: "clamp(16.5px, 1.3vw, 19px)", lineHeight: 1.62, color: "rgba(250,250,247,0.86)", margin: "clamp(24px, 3vw, 32px) 0 0", maxWidth: "52ch", fontWeight: 450 }}>
              We’re not an outsourcing company. We’re a professional institution that develops certified experts, pairs them with AI, and pays them like the best in the field. If you want to become elite at the work — and be recognized for it — this is where you do it.
            </p>
            <div data-reveal style={{ display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center", marginTop: "clamp(28px, 3.5vw, 38px)" }}>
              <a href="#openings" className="cx-gold cx-mag" style={{ display: "inline-flex", alignItems: "center", gap: 9, textDecoration: "none", background: "#FEC539", color: "#13294B", fontWeight: 600, fontSize: 16, padding: "16px 28px", borderRadius: 999, boxShadow: "0 8px 26px rgba(254,197,57,0.26)" }}>View open roles <span style={{ fontSize: 18 }}>→</span></a>
              <a href="#academy" className="cx-mag" style={{ display: "inline-flex", alignItems: "center", gap: 9, textDecoration: "none", background: "transparent", color: "#FAFAF7", fontWeight: 600, fontSize: 16, padding: "16px 26px", borderRadius: 999, border: "1px solid rgba(250,250,247,0.3)" }}>Inside the Academy</a>
            </div>
            <div data-reveal style={{ display: "flex", alignItems: "center", gap: 10, marginTop: "clamp(24px, 3vw, 32px)" }}>
              <span style={{ width: 34, height: 34, flex: "0 0 auto", borderRadius: 10, background: "rgba(254,197,57,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FEC539" }}><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="9" r="6" /><path d="m8.5 13.5-1.5 8 5-3 5 3-1.5-8" /></svg></span>
              <span style={{ fontSize: "13.5px", color: "rgba(250,250,247,0.72)" }}><strong style={{ color: "#FAFAF7", fontWeight: 600 }}>Carentix Certified</strong> — earned through demonstrated mastery, not given</span>
            </div>
          </div>
        </div>
        <div data-reveal style={{ position: "relative", zIndex: 2, borderTop: "1px solid rgba(250,250,247,0.14)", background: "rgba(12,30,60,0.55)", backdropFilter: "saturate(180%) blur(14px)", WebkitBackdropFilter: "saturate(180%) blur(14px)" }}>
          <div style={{ maxWidth: 1320, margin: "0 auto", padding: "20px 32px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "14px 22px" }}>
            <span style={{ fontSize: "11.5px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#5B8C7B" }}>What you’ll master</span>
            {skillTags.map((t, i) => (
              <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 22 }}>
                <span style={{ fontSize: 15, fontWeight: 500, color: "#FAFAF7" }}>{t}</span>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "rgba(250,250,247,0.32)" }} />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CARENTIX */}
      <section id="why" style={{ background: "#0C1E3C", color: "#FAFAF7", position: "relative", overflow: "hidden", padding: "clamp(80px, 11vw, 150px) 32px" }}>
        <div className="cx-anim" aria-hidden style={{ position: "absolute", top: -160, right: -120, width: 560, height: 560, borderRadius: "50%", background: "radial-gradient(circle, rgba(254,197,57,0.1), transparent 64%)", animation: "cxDrift 26s ease-in-out infinite" }} />
        <div style={{ position: "relative", maxWidth: 1320, margin: "0 auto" }}>
          <div data-reveal style={{ marginBottom: "clamp(48px, 6vw, 72px)" }}>
            <h2 style={{ fontFamily: SERIF, fontWeight: 500, fontSize: "clamp(34px, 5vw, 62px)", lineHeight: 1.02, letterSpacing: "-0.035em", color: "#FAFAF7", margin: "0 0 20px", textWrap: "balance" }}>A different kind of place to build a career.</h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "rgba(250,250,247,0.72)", margin: 0 }}>Outsourcing moves work somewhere cheaper. We do the opposite: we invest in people, hold a standard the industry hasn’t defined yet, and reward the results that follow. You leave here a professional — an owner and a leader, not simply an operator.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 18 }}>
            {whyCards.map((c, i) => (
              <div key={i} data-reveal className="cx-lift" style={{ background: "rgba(250,250,247,0.05)", border: "1px solid rgba(250,250,247,0.13)", borderRadius: 22, padding: "30px 28px" }}>
                <div style={{ width: 52, height: 52, borderRadius: 15, background: c.tint, display: "flex", alignItems: "center", justifyContent: "center", color: c.color, marginBottom: 22 }}>
                  <span dangerouslySetInnerHTML={{ __html: c.icon }} />
                </div>
                <div style={{ fontFamily: SERIF, fontWeight: 600, fontSize: 20, color: "#FAFAF7", marginBottom: 10, letterSpacing: "-0.01em" }}>{c.title}</div>
                <p style={{ fontSize: "14.5px", lineHeight: 1.58, color: "rgba(250,250,247,0.68)", margin: 0 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE ACADEMY */}
      <section id="academy" style={{ background: "#F3F0E8", padding: "clamp(80px, 11vw, 150px) 32px", position: "relative", overflow: "hidden" }}>
        <div className="cx-anim" aria-hidden style={{ position: "absolute", top: -140, right: -110, width: 520, height: 520, borderRadius: "50%", background: "radial-gradient(circle, rgba(91,140,123,0.16), transparent 64%)", animation: "cxDrift 28s ease-in-out infinite", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1320, margin: "0 auto", position: "relative" }}>
          <div data-reveal style={{ maxWidth: 800, marginBottom: "clamp(48px, 6vw, 70px)" }}>
            <h2 style={{ fontFamily: SERIF, fontWeight: 500, fontSize: "clamp(34px, 5vw, 62px)", lineHeight: 1.02, letterSpacing: "-0.035em", color: "#13294B", margin: "0 0 20px", textWrap: "balance" }}>World-class training for healthcare operations.</h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "#4A4A45", margin: 0, maxWidth: "64ch" }}>A 6–9 month immersive program — not orientation. You do real client work from week one, learn AI as a native tool, and graduate with a credential earned through demonstrated mastery. Admission is a distinction. So is graduation.</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {phases.map((p, i) => (
              <div key={i} data-reveal className="cx-lift cx-phase-row" style={{ display: "flex", alignItems: "stretch", background: "#FAFAF7", border: "1px solid rgba(19,41,75,0.09)", borderRadius: 22, overflow: "hidden" }}>
                <div style={{ flex: "0 0 auto", width: "clamp(120px, 22%, 210px)", background: p.tint, display: "flex", alignItems: "center", justifyContent: "center", padding: "26px 18px" }}>
                  <span style={{ fontFamily: SERIF, fontWeight: 700, fontSize: "clamp(46px, 6.6vw, 72px)", color: p.color, lineHeight: 1, letterSpacing: "-0.03em" }}>{p.tag}</span>
                </div>
                <div style={{ flex: 1, padding: "30px clamp(24px, 3vw, 40px)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 14 }}>
                    <span style={{ fontSize: "12.5px", fontWeight: 600, color: p.color }}>{p.grade}</span>
                    <span style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(19,41,75,0.25)" }} />
                    <span style={{ fontSize: "12.5px", fontWeight: 600, color: "#B8902A" }}>{p.months}</span>
                  </div>
                  <div style={{ fontFamily: SERIF, fontWeight: 600, fontSize: "clamp(21px, 2.6vw, 26px)", color: "#13294B", marginBottom: 10, letterSpacing: "-0.015em" }}>{p.title}</div>
                  <p style={{ fontSize: "14.5px", lineHeight: 1.58, color: "#4A4A45", margin: "0 0 16px", maxWidth: "60ch" }}>{p.body}</p>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: "12.5px", fontWeight: 600, color: "#5B8C7B" }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#5B8C7B" }} /> {p.production}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div data-reveal style={{ marginTop: 28, display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center", background: "#FAFAF7", border: "1px solid rgba(19,41,75,0.1)", borderRadius: 18, padding: "22px 26px" }}>
            <span style={{ width: 44, height: 44, flex: "0 0 auto", borderRadius: 12, background: "rgba(254,197,57,0.18)", display: "flex", alignItems: "center", justifyContent: "center", color: "#B8902A" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 4 6v6c0 5 3.5 8 8 10 4.5-2 8-5 8-10V6Z" /><path d="m9 12 2 2 4-4" /></svg></span>
            <div style={{ flex: 1, minWidth: 240 }}><span style={{ fontWeight: 600, color: "#13294B" }}>Graduation is earned, not given.</span> <span style={{ color: "#4A4A45" }}>Clear the 120-question certification exam, the simulation battery, and a Graduation Board interview, and you join the profession as a Carentix Certified Professional — recognized for mastery you can demonstrate.</span></div>
          </div>
        </div>
      </section>

      {/* CAREER PROGRESSION / LADDER */}
      <section id="ladder" style={{ background: "#FAFAF7", padding: "clamp(80px, 11vw, 150px) 32px", position: "relative", overflow: "hidden" }}>
        <div className="cx-anim" aria-hidden style={{ position: "absolute", bottom: -160, left: -120, width: 540, height: 540, borderRadius: "50%", background: "radial-gradient(circle, rgba(254,197,57,0.12), transparent 64%)", animation: "cxDrift 32s ease-in-out infinite", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1080, margin: "0 auto", position: "relative" }}>
          <div data-reveal style={{ maxWidth: 760, marginBottom: "clamp(48px, 6vw, 70px)" }}>
            <h2 style={{ fontFamily: SERIF, fontWeight: 500, fontSize: "clamp(34px, 5vw, 62px)", lineHeight: 1.02, letterSpacing: "-0.035em", color: "#13294B", margin: "0 0 20px", textWrap: "balance" }}>A visible path from Academy to executive.</h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "#4A4A45", margin: 0, maxWidth: "62ch" }}>Fifteen grades, three tracks, one principle: advancement is earned through demonstrated performance, not tenure alone. Each step below reflects growing <strong style={{ color: "#13294B" }}>responsibility, mastery, and ownership</strong> — and the impact that comes with it.</p>
          </div>
          <div style={{ position: "relative" }}>
            {ladder.map((r, i) => (
              <div key={i}>
                {r.gateBefore && (
                  <div data-reveal style={{ display: "flex", alignItems: "center", gap: 14, margin: "4px 0 18px", paddingLeft: "clamp(0px, 4vw, 44px)" }}>
                    <span style={{ fontFamily: SERIF, fontWeight: 700, fontSize: "12.5px", letterSpacing: "0.1em", color: "#B8902A", background: "rgba(254,197,57,0.16)", border: "1px solid rgba(254,197,57,0.4)", padding: "6px 14px", borderRadius: 999, flex: "0 0 auto" }}>GATE</span>
                    <span style={{ flex: 1, height: 1, background: "repeating-linear-gradient(90deg, rgba(19,41,75,0.25) 0 6px, transparent 6px 12px)" }} />
                  </div>
                )}
                <div data-reveal style={{ position: "relative", paddingLeft: "clamp(0px, 4vw, 44px)" }}>
                  <div className="cx-ladder-row cx-lift" style={{ display: "grid", gridTemplateColumns: "auto 1fr auto", gap: "clamp(18px, 3vw, 40px)", alignItems: "center", background: "#fff", border: "1px solid rgba(19,41,75,0.1)", borderLeft: `4px solid ${r.color}`, borderRadius: 16, padding: "24px clamp(22px, 3vw, 34px)", marginBottom: 14 }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minWidth: 58 }}>
                      <span style={{ fontFamily: SERIF, fontWeight: 600, fontSize: 32, color: r.color, lineHeight: 1 }}>{r.step}</span>
                      <span style={{ fontSize: "10.5px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#4A4A45", opacity: 0.7, marginTop: 4 }}>{r.grades}</span>
                    </div>
                    <div>
                      <div style={{ fontFamily: SERIF, fontWeight: 600, fontSize: "clamp(19px, 2.4vw, 25px)", color: "#13294B", letterSpacing: "-0.015em" }}>{r.title}</div>
                      <div style={{ fontSize: "13.5px", lineHeight: 1.5, color: "#4A4A45", marginTop: 5, maxWidth: "48ch" }}>{r.gate}</div>
                    </div>
                    <div className="cx-ladder-meta" style={{ textAlign: "right", minWidth: 120 }}>
                      <div style={{ fontFamily: SERIF, fontWeight: 600, fontSize: 18, color: "#13294B", whiteSpace: "nowrap" }}>{r.focus}</div>
                      <div style={{ fontSize: "11.5px", color: "#4A4A45", opacity: 0.7, marginTop: 3 }}>What you own</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div data-reveal style={{ marginTop: 28, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
            <div style={{ background: "#F3F0E8", borderRadius: 18, padding: "24px 26px" }}>
              <div style={{ fontFamily: SERIF, fontWeight: 600, fontSize: 17, color: "#13294B", marginBottom: 8 }}>Two high tracks, not one</div>
              <p style={{ fontSize: 14, lineHeight: 1.55, color: "#4A4A45", margin: 0 }}>Not every great operator wants to manage people. A technical / specialist track lets depth experts reach Lead-level seniority and scope without ever managing a team.</p>
            </div>
            <div style={{ background: "#F3F0E8", borderRadius: 18, padding: "24px 26px" }}>
              <div style={{ fontFamily: SERIF, fontWeight: 600, fontSize: 17, color: "#13294B", marginBottom: 8 }}>The clock doesn’t reset</div>
              <p style={{ fontSize: 14, lineHeight: 1.55, color: "#4A4A45", margin: 0 }}>Switch tracks at any time with manager approval. Relevant experience is credited, so you don’t start over for choosing the path that fits you.</p>
            </div>
          </div>
          <p data-reveal style={{ margin: "18px 0 0", fontSize: "12.5px", lineHeight: 1.6, color: "#4A4A45", opacity: 0.82, maxWidth: "92ch" }}>Progression reflects growing responsibility, mastery, and leadership rather than tenure alone; advancement is earned against clear, published gates. Roles are remote and may be based outside the United States. Compensation, benefits, and employment classification (employee or independent contractor) are specified in your individual offer letter and are subject to local law.</p>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section style={{ background: "#FAFAF7", padding: "0 32px clamp(80px, 11vw, 140px)" }}>
        <div data-reveal style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <svg width="36" height="29" viewBox="0 0 40 32" style={{ margin: "0 auto 24px", display: "block" }}><path d="M0 32V18C0 8 6 1.5 16 0l1.5 6C11 7.5 8.5 11 8.5 15H16v17H0zm22 0V18C22 8 28 1.5 38 0l1.5 6C33 7.5 30.5 11 30.5 15H38v17H22z" fill="#FEC539" /></svg>
          <blockquote style={{ fontFamily: SERIF, fontWeight: 500, fontStyle: "italic", fontSize: "clamp(22px, 3vw, 34px)", lineHeight: 1.42, color: "#13294B", margin: 0, letterSpacing: "-0.015em", textWrap: "pretty" }}>Working here feels like joining an elite surgical team — but for the entire business of care.</blockquote>
          <div style={{ marginTop: 22, fontSize: "13.5px", fontWeight: 600, color: "#5B8C7B" }}>Carentix CEO — Christin Nabil</div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" style={{ background: "#0C1E3C", color: "#FAFAF7", position: "relative", overflow: "hidden", padding: "clamp(80px, 11vw, 150px) 32px" }}>
        <div className="cx-anim" aria-hidden style={{ position: "absolute", top: -160, left: -120, width: 560, height: 560, borderRadius: "50%", background: "radial-gradient(circle, rgba(254,197,57,0.1), transparent 64%)", animation: "cxDrift 26s ease-in-out infinite" }} />
        <div style={{ position: "relative", maxWidth: 1320, margin: "0 auto" }}>
          <div data-reveal style={{ maxWidth: 760, marginBottom: "clamp(48px, 6vw, 70px)" }}>
            <h2 style={{ fontFamily: SERIF, fontWeight: 500, fontSize: "clamp(34px, 5vw, 62px)", lineHeight: 1.02, letterSpacing: "-0.035em", color: "#FAFAF7", margin: "0 0 18px", textWrap: "balance" }}>We invest in people when others cut.</h2>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "rgba(250,250,247,0.7)", margin: 0, maxWidth: "58ch" }}>The industry treats people as a cost to minimize. We treat them as the asset that compounds — and we back that with real investment.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 18 }}>
            {benefits.map((b, i) => (
              <div key={i} data-reveal className="cx-lift" style={{ background: "rgba(250,250,247,0.05)", border: "1px solid rgba(250,250,247,0.13)", borderRadius: 22, padding: "30px 28px" }}>
                <div style={{ width: 50, height: 50, borderRadius: 15, background: b.tint, display: "flex", alignItems: "center", justifyContent: "center", color: b.color, marginBottom: 22 }}>
                  <span dangerouslySetInnerHTML={{ __html: b.icon }} />
                </div>
                <div style={{ fontFamily: SERIF, fontWeight: 600, fontSize: 18, color: "#FAFAF7", marginBottom: 8 }}>{b.title}</div>
                <p style={{ fontSize: 14, lineHeight: 1.55, color: "rgba(250,250,247,0.68)", margin: 0 }}>{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section id="openings" style={{ background: "#FAFAF7", padding: "clamp(80px, 11vw, 150px) 32px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div data-reveal style={{ maxWidth: 760, marginBottom: "clamp(40px, 5vw, 60px)" }}>
            {eyebrowRow("Open positions")}
            <h2 style={{ fontFamily: SERIF, fontWeight: 500, fontSize: "clamp(34px, 5vw, 62px)", lineHeight: 1.02, letterSpacing: "-0.035em", color: "#13294B", margin: "0 0 18px", textWrap: "balance" }}>Roles open right now.</h2>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "#4A4A45", margin: 0, maxWidth: "56ch" }}>Every role — trainee to leadership — runs on the same standard. All positions are remote. Don’t see your fit? Introduce yourself anyway.</p>
          </div>
          <div style={{ borderTop: "1px solid rgba(19,41,75,0.12)" }}>
            {openings.map((o, i) => (
              <a key={i} href="/#contact" className="cx-role" data-reveal style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 18, alignItems: "center", textDecoration: "none", background: "transparent", border: "1px solid transparent", borderBottom: "1px solid rgba(19,41,75,0.12)", borderRadius: 14, padding: "26px clamp(16px, 2.5vw, 28px)" }}>
                <div>
                  <div style={{ fontFamily: SERIF, fontWeight: 600, fontSize: "clamp(19px, 2.4vw, 24px)", color: "#13294B", letterSpacing: "-0.015em", marginBottom: 12 }}>{o.title}</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {o.tags.map((tag, j) => (
                      <span key={j} style={{ fontSize: 12, fontWeight: 500, color: "#3C5A50", background: "rgba(91,140,123,0.12)", padding: "5px 12px", borderRadius: 999 }}>{tag}</span>
                    ))}
                  </div>
                </div>
                <span className="cx-role-apply" style={{ display: "inline-flex", alignItems: "center", gap: 7, fontSize: "14.5px", fontWeight: 600, color: "#5B8C7B", whiteSpace: "nowrap", transition: "color 0.3s ease, gap 0.3s ease" }}>Apply <span style={{ fontSize: 17 }}>→</span></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CULTURE */}
      <section id="culture" style={{ background: "#0C1E3C", color: "#FAFAF7", padding: "clamp(80px, 11vw, 150px) 32px", position: "relative", overflow: "hidden" }}>
        <div className="cx-anim" aria-hidden style={{ position: "absolute", bottom: -180, left: -120, width: 540, height: 540, borderRadius: "50%", background: "radial-gradient(circle, rgba(91,140,123,0.18), transparent 64%)", animation: "cxDrift 26s ease-in-out infinite" }} />
        <div style={{ position: "relative", maxWidth: 1320, margin: "0 auto" }}>
          <h2 data-reveal style={{ fontFamily: SERIF, fontWeight: 500, fontSize: "clamp(32px, 5vw, 64px)", lineHeight: 1.02, letterSpacing: "-0.04em", color: "#FAFAF7", margin: "0 0 clamp(20px, 3vw, 28px)", maxWidth: "20ch", textWrap: "balance" }}>Values you can <span style={{ color: "#FEC539" }}>observe</span>, not just read.</h2>
          <p data-reveal style={{ fontSize: 17, lineHeight: 1.6, color: "rgba(250,250,247,0.74)", margin: "0 0 clamp(44px, 5vw, 60px)", maxWidth: "60ch" }}>We don’t have preferences — we have standards. Each value below shows up in daily behavior, or it doesn’t count.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 1, background: "rgba(250,250,247,0.14)", border: "1px solid rgba(250,250,247,0.14)", borderRadius: 4, overflow: "hidden" }}>
            {values.map((v, i) => (
              <div key={i} data-reveal style={{ background: "#0C1E3C", padding: "32px 30px" }}>
                <div style={{ fontFamily: SERIF, fontSize: 14, fontWeight: 600, color: "#FEC539", marginBottom: 14 }}>{v.num}</div>
                <div style={{ fontFamily: SERIF, fontWeight: 600, fontSize: 21, color: "#FAFAF7", marginBottom: 10, letterSpacing: "-0.015em" }}>{v.title}</div>
                <p style={{ fontSize: 14, lineHeight: 1.58, color: "rgba(250,250,247,0.7)", margin: 0 }}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HIRING PROCESS */}
      <section id="hiring" style={{ background: "#F3F0E8", padding: "clamp(80px, 11vw, 150px) 32px", position: "relative", overflow: "hidden" }}>
        <div className="cx-anim" aria-hidden style={{ position: "absolute", top: -130, left: -100, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(91,140,123,0.15), transparent 64%)", animation: "cxDrift 30s ease-in-out infinite", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1320, margin: "0 auto", position: "relative" }}>
          <div data-reveal style={{ maxWidth: 720, marginBottom: "clamp(48px, 6vw, 70px)" }}>
            <h2 style={{ fontFamily: SERIF, fontWeight: 500, fontSize: "clamp(34px, 5vw, 62px)", lineHeight: 1.02, letterSpacing: "-0.035em", color: "#13294B", margin: 0, textWrap: "balance" }}>How selection works.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
            {hiring.map((h, i) => (
              <div key={i} data-reveal className="cx-lift" style={{ background: "#FAFAF7", border: "1px solid rgba(19,41,75,0.09)", borderRadius: 20, padding: "30px 28px" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 22 }}>
                  <span style={{ fontFamily: SERIF, fontWeight: 600, fontSize: 48, color: "#13294B", lineHeight: 1, letterSpacing: "-0.03em" }}>{h.num}</span>
                  <span style={{ fontSize: 11, fontWeight: 600, color: "#5B8C7B", background: "rgba(91,140,123,0.12)", padding: "4px 10px", borderRadius: 999 }}>{h.when}</span>
                </div>
                <div style={{ fontFamily: SERIF, fontWeight: 600, fontSize: 19, color: "#13294B", marginBottom: 9, letterSpacing: "-0.01em" }}>{h.title}</div>
                <p style={{ fontSize: 14, lineHeight: 1.56, color: "#4A4A45", margin: 0 }}>{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ background: "#FAFAF7", padding: "clamp(80px, 11vw, 150px) 32px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "clamp(36px, 5vw, 72px)", alignItems: "start" }}>
          <div data-reveal style={{ position: "sticky", top: 110 }}>
            {eyebrowRow("Candidate questions")}
            <h2 style={{ fontFamily: SERIF, fontWeight: 500, fontSize: "clamp(30px, 4vw, 52px)", lineHeight: 1.04, letterSpacing: "-0.035em", color: "#13294B", margin: "0 0 20px", textWrap: "balance" }}>The things people ask before they apply.</h2>
            <a href="#openings" className="cx-link-u" style={{ textDecoration: "none", color: "#13294B", fontWeight: 600, fontSize: 16 }}>Ready? See open roles →</a>
          </div>
          <DesignFaqList faqs={faqs} />
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="join" style={{ background: "#FAFAF7", padding: "clamp(80px, 11vw, 160px) 32px" }}>
        <div data-reveal style={{ maxWidth: 1180, margin: "0 auto", background: "#13294B", color: "#FAFAF7", borderRadius: 32, padding: "clamp(48px, 7vw, 92px) clamp(32px, 5vw, 80px)", position: "relative", overflow: "hidden", textAlign: "center" }}>
          <div className="cx-anim" aria-hidden style={{ position: "absolute", top: -160, left: "50%", transform: "translateX(-50%)", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(254,197,57,0.13), transparent 60%)", animation: "cxDrift 28s ease-in-out infinite" }} />
          <div style={{ position: "relative" }}>
            <h2 style={{ fontFamily: SERIF, fontWeight: 500, fontSize: "clamp(32px, 5vw, 62px)", lineHeight: 1.02, letterSpacing: "-0.04em", margin: "0 auto 22px", color: "#FAFAF7", maxWidth: "18ch", textWrap: "balance" }}>Join Carentix. Become the standard.</h2>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: "rgba(250,250,247,0.78)", margin: "0 auto 38px", maxWidth: "52ch" }}>If you want to be coached hard, paid fairly, and recognized for mastery — we’d like to meet you.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
              <a href="#openings" className="cx-gold cx-mag" style={{ display: "inline-flex", alignItems: "center", gap: 9, textDecoration: "none", background: "#FEC539", color: "#13294B", fontWeight: 600, fontSize: "16.5px", padding: "17px 32px", borderRadius: 999, boxShadow: "0 12px 34px rgba(254,197,57,0.26)" }}>View open roles <span style={{ fontSize: 18 }}>→</span></a>
              <a href="#academy" className="cx-mag" style={{ display: "inline-flex", alignItems: "center", gap: 9, textDecoration: "none", color: "#FAFAF7", fontWeight: 600, fontSize: "16.5px", padding: "17px 28px", borderRadius: 999, border: "1px solid rgba(250,250,247,0.28)" }}>Explore the Academy</a>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 24, justifyContent: "center", marginTop: 34, fontSize: "13.5px", color: "rgba(250,250,247,0.62)" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 7 }}><span style={{ color: "#5B8C7B" }}>✓</span> Competitive compensation</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 7 }}><span style={{ color: "#5B8C7B" }}>✓</span> Remote</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 7 }}><span style={{ color: "#5B8C7B" }}>✓</span> AI-native from day one</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
