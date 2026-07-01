"use client";

import Link from "next/link";
import { useState } from "react";
import ImageSlot from "@/components/ImageSlot";

/* ------------------------------------------------------------------ *
 * Content + logic ported verbatim from the approved homepage design.  *
 * ------------------------------------------------------------------ */

const SERIF = "var(--font-source-serif), 'Source Serif 4', serif";

function DiscIcon({ paths }: { paths: React.ReactNode }) {
  return (
    <svg
      width="27"
      height="27"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths}
    </svg>
  );
}

const DISCIPLINES = [
  {
    idx: "01",
    title: "Scheduling & access",
    color: "#C2683E",
    iconBg: "rgba(194,104,62,0.14)",
    tint: "rgba(194,104,62,0.05)",
    border: "rgba(194,104,62,0.2)",
    blob: "rgba(194,104,62,0.1)",
    desc: "Your team owns the calendar end-to-end so the front desk can breathe and the schedule stays full.",
    icon: (
      <DiscIcon
        paths={
          <>
            <rect x="3" y="4" width="18" height="17" rx="2" />
            <path d="M3 9h18M8 2v4M16 2v4" />
            <circle cx="12" cy="15" r="2" fill="currentColor" stroke="none" />
          </>
        }
      />
    ),
    tasks: [
      "Cancellations and gaps filled in real time",
      "Confirmations and reminders that cut no-shows",
      "A schedule someone finally owns",
    ],
  },
  {
    idx: "02",
    title: "Clinical scribing",
    color: "#5B8C7B",
    iconBg: "rgba(91,140,123,0.16)",
    tint: "rgba(91,140,123,0.05)",
    border: "rgba(91,140,123,0.22)",
    blob: "rgba(91,140,123,0.12)",
    desc: "Accurate, structured notes drafted in your EHR so providers sign off instead of typing past 9pm.",
    icon: (
      <DiscIcon
        paths={
          <>
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
          </>
        }
      />
    ),
    tasks: [
      "Notes ready for sign-off before the provider leaves",
      "Consistent documentation standards",
      "Evenings back, not spent charting",
    ],
  },
  {
    idx: "03",
    title: "Prior authorizations",
    color: "#3E78C2",
    iconBg: "rgba(62,120,194,0.14)",
    tint: "rgba(62,120,194,0.05)",
    border: "rgba(62,120,194,0.2)",
    blob: "rgba(62,120,194,0.1)",
    desc: "Submitted, tracked, and chased so treatment never stalls on paperwork and patients aren't left waiting.",
    icon: (
      <DiscIcon
        paths={
          <>
            <path d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5Z" />
            <path d="m9 12 2 2 4-4" />
          </>
        }
      />
    ),
    tasks: [
      "Prompt submissions, tracked to approval",
      "Faster turnaround than chasing it in-house",
      "Patients start treatment sooner",
    ],
  },
  {
    idx: "04",
    title: "Referral coordination",
    color: "#B8902A",
    iconBg: "rgba(184,144,42,0.16)",
    tint: "rgba(184,144,42,0.06)",
    border: "rgba(184,144,42,0.24)",
    blob: "rgba(184,144,42,0.12)",
    desc: "Routed to the right specialists with the loop closed on every single one — nothing slips.",
    icon: (
      <DiscIcon
        paths={
          <>
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="5" r="3" />
            <circle cx="18" cy="19" r="3" />
            <path d="m8.6 10.6 6.8-4M8.6 13.4l6.8 4" />
          </>
        }
      />
    ),
    tasks: [
      "Routed to the right specialist, first time",
      "Nothing slips through the cracks",
      "Closed-loop tracking on every referral",
    ],
  },
  {
    idx: "05",
    title: "Records & ROI",
    color: "#13294B",
    iconBg: "rgba(19,41,75,0.1)",
    tint: "rgba(19,41,75,0.035)",
    border: "rgba(19,41,75,0.16)",
    blob: "rgba(19,41,75,0.08)",
    desc: "Records requests and release-of-information handled cleanly, accurately, and on time.",
    icon: (
      <DiscIcon
        paths={
          <>
            <path d="M4 4h7l2 3h7v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z" />
            <path d="M8 13h8M8 16h5" />
          </>
        }
      />
    ),
    tasks: [
      "Requests fulfilled accurately and on time",
      "Compliant release-of-information handling",
      "No more backlog on the front desk",
    ],
  },
  {
    idx: "06",
    title: "Patient communications",
    color: "#7A5BA6",
    iconBg: "rgba(122,91,166,0.14)",
    tint: "rgba(122,91,166,0.05)",
    border: "rgba(122,91,166,0.2)",
    blob: "rgba(122,91,166,0.1)",
    desc: "Messages, reminders, and follow-ups answered with a warm, on-brand voice that sounds like your practice.",
    icon: (
      <DiscIcon
        paths={
          <>
            <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4L3 21l1.1-3.5A8.4 8.4 0 1 1 21 11.5Z" />
            <path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01" />
          </>
        }
      />
    ),
    tasks: [
      "Timely, warm replies to every message",
      "Follow-ups that keep patients engaged",
      "A voice that sounds like your practice",
    ],
  },
];

const CAPABILITY_TAGS = [
  "Scheduling",
  "Prior authorizations",
  "Clinical scribing",
  "Records & ROI",
  "Referrals",
  "Eligibility",
  "Patient messages",
];

const PROOF_STATS = [
  { num: "", decimals: 0, suffix: "", display: "Faster", label: "Prior-auth turnaround, so treatment starts sooner" },
  { num: "", decimals: 0, suffix: "", display: "Renewed", label: "The relationships clients choose to continue" },
  { num: 5, decimals: 0, suffix: "-day", display: "5-day", label: "Replacement target, per your services agreement" },
];

const BEFORE_ITEMS = [
  "Providers charting until 9pm, finishing notes after the kids are asleep.",
  "Prior auths sitting for days while patients wait on treatment.",
  "The practice manager firefighting — phones ringing, schedule full of gaps and no-shows.",
  "Records requests piling up, referrals slipping through the cracks.",
  "Burnout creeping in, and nobody truly owns the operational mess.",
];

const AFTER_ITEMS = [
  "Notes drafted and ready for sign-off before the provider leaves.",
  "Prior auths submitted same-day and tracked to approval.",
  "Schedule actively managed — gaps filled, reminders sent, no-shows down.",
  "Records and referrals handled end-to-end by one accountable team.",
  "Supervised, compliant, and measurable — your operations finally owned.",
];

const STEPS = [
  { num: "1", title: "Discovery call", tag: "20 min", body: "A short conversation about your bottlenecks, EHR, and patient volume. You leave with a real estimate — no scripts." },
  { num: "2", title: "Matched with your team", tag: "Within days", body: "We assemble a care team suited to your specialty and workflows — vetted, trained, and accountable to you." },
  { num: "3", title: "Supervised onboarding", tag: "Structured", body: "A guided ramp with a supervisor present — BAA signed, systems secured, SOPs set before any PHI access." },
  { num: "4", title: "Ongoing oversight", tag: "Always on", body: "Daily check-ins, a 1:8 supervisor ratio target, and a 5-day replacement target under your services agreement. Accountable for outcomes." },
];

const COMPLIANCE_STATS = [
  { value: "8/8", label: "Named training modules, 80% minimum to pass" },
  { value: "MFA", label: "Company-managed devices, MFA + VPN by default" },
  { value: "1:8", label: "Supervisor ratio target with daily check-ins" },
  { value: "BAA", label: "Signed before PHI access — directly accountable" },
  { value: "6-yr", label: "Compliance record retention" },
];

const TEAM = [
  { id: "cx-team-1", role: "Medical Director" },
  { id: "cx-team-2", role: "Operations Supervisor" },
  { id: "cx-team-3", role: "Clinic Operations Specialist" },
  { id: "cx-team-4", role: "Clinical Scribe" },
];

const FAQS = [
  { q: "Is it safe to have an overseas team handling patient information?", a: "HIPAA imposes a safeguard requirement, not a geography requirement. Our workforce — including international team members — operates under a HIPAA-aligned security program: company-managed encrypted devices, mandatory MFA and VPN, role-based access, and a signed BAA executed before PHI access. We disclose our staffing model and data-handling practices in full during contracting so your compliance and legal teams can evaluate fit for your organization's specific requirements, including any data-residency preferences." },
  { q: "How is this different from a VA marketplace?", a: "You're not hiring a freelancer — you're partnering with a managed operation. Your team is trained, supervised at a 1:8 ratio target with daily check-ins, backed by a documented incident-response program, and covered by a 5-day replacement target under your services agreement. We're accountable for outcomes, not just hours billed." },
  { q: "What does pricing actually look like?", a: "A core fee covers your dedicated team, the compliance program, and oversight — $1,999 per month for your first provider and $1,499 for each additional provider. A $3.00 fee applies per unique patient seen that month — not per visit, so follow-ups don't compound your bill. Premium services like prior authorizations or scribing are billed only when used. The calculator above is an illustrative estimate; your actual pricing is confirmed in a written services agreement." },
  { q: "How quickly can we get started?", a: "After your discovery call, your team is typically matched within days. Onboarding is a structured, supervised ramp — BAA signed and systems secured first — so your team is contributing safely and quickly, not learning on live PHI unsupervised." },
  { q: "What if the team isn't the right fit?", a: "Engagements include a 5-day replacement target, subject to the terms of your services agreement. If the match isn't working, we re-staff promptly and the supervisor supports continuity so your operations keep moving during the transition." },
  { q: "Which EHRs and workflows do you support?", a: "Your team is trained on EHR navigation and documentation standards as part of an 8-module program, and onboarding is tailored to your specific systems and SOPs. We adapt to your practice — you don't adapt to us." },
];

const money = (n: number) => "$" + Math.round(n).toLocaleString("en-US");

const SECTION_PAD = "clamp(80px, 11vw, 156px) 32px";
const eyebrowNum = { fontFamily: SERIF, fontSize: 14, fontWeight: 600 } as const;

export default function HomePage() {
  const [activeDisc, setActiveDisc] = useState(0);
  const [openFaq, setOpenFaq] = useState(-1);
  const [providers, setProviders] = useState(1);
  const [patients, setPatients] = useState(200);
  const [priorAuths, setPriorAuths] = useState(10);

  const core = 1999 + (providers - 1) * 1499;
  const volume = patients * 3;
  const premium = priorAuths * 15;
  const total = core + volume + premium;
  const annualSave = Math.round(core * 12 * 0.1);

  const clamp = (v: number, min: number, max: number) =>
    Math.max(min, Math.min(max, v));

  const disc = DISCIPLINES[activeDisc];

  const calcFields = [
    {
      label: "Providers",
      rate: "$1,999 first · $1,499 each add'l",
      sub: "Clinicians on the account",
      display: providers,
      onDec: () => setProviders((v) => clamp(v - 1, 1, 25)),
      onInc: () => setProviders((v) => clamp(v + 1, 1, 25)),
    },
    {
      label: "Unique patients / month",
      rate: "$3.00 each",
      sub: "Billed once per patient — not per visit",
      display: patients,
      onDec: () => setPatients((v) => clamp(v - 25, 0, 4000)),
      onInc: () => setPatients((v) => clamp(v + 25, 0, 4000)),
    },
    {
      label: "Prior authorizations / month",
      rate: "$15 each",
      sub: "A premium service — only when used",
      display: priorAuths,
      onDec: () => setPriorAuths((v) => clamp(v - 5, 0, 400)),
      onInc: () => setPriorAuths((v) => clamp(v + 5, 0, 400)),
    },
  ];

  const calcBreakdown = [
    {
      label:
        providers === 1
          ? "1st provider × $1,999"
          : `1st × $1,999 + ${providers - 1} add'l × $1,499`,
      value: money(core),
    },
    { label: `${patients} patients × $3.00`, value: money(volume) },
    { label: `${priorAuths} prior auths × $15`, value: money(premium) },
  ];

  return (
    <main>
      {/* ===================== HERO ===================== */}
      <section id="top" style={{ position: "relative", background: "#FAFAF7", overflow: "hidden" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "clamp(120px, 14vw, 182px) 32px clamp(40px, 6vw, 62px)" }}>
          <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: "clamp(26px, 3.5vw, 40px)", background: "rgba(91,140,123,0.1)", border: "1px solid rgba(91,140,123,0.28)", padding: "8px 15px", borderRadius: 999 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#5B8C7B" }} />
            <span style={{ fontSize: 13, fontWeight: 500, color: "#3C5A50" }}>Your healthcare operations partner</span>
          </div>

          <div className="cx-hero-grid" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.06fr) minmax(0, 0.94fr)", gap: "clamp(34px, 5vw, 78px)", alignItems: "center" }}>
            <div>
              <h1 style={{ fontFamily: SERIF, fontWeight: 500, fontSize: "clamp(40px, 5.6vw, 78px)", lineHeight: 1.02, letterSpacing: "-0.04em", margin: 0, color: "#13294B", maxWidth: "16ch", textWrap: "balance" }}>
                <span data-reveal style={{ display: "block" }}>
                  You built your practice to care for{" "}
                  <span style={{ position: "relative", color: "#B8902A", whiteSpace: "nowrap" }}>
                    patients
                    <svg viewBox="0 0 200 14" preserveAspectRatio="none" style={{ position: "absolute", left: 0, bottom: "-0.08em", width: "100%", height: "0.16em", overflow: "visible" }}>
                      <path d="M3 9 C 55 3, 150 3, 197 8" fill="none" stroke="#FEC539" strokeWidth="6" strokeLinecap="round" />
                    </svg>
                  </span>
                </span>
                <span data-reveal style={{ display: "block" }}>— not paperwork.</span>
              </h1>
              <p data-reveal style={{ fontSize: "clamp(16.5px, 1.3vw, 19px)", lineHeight: 1.62, color: "#4A4A45", margin: "clamp(24px, 3vw, 32px) 0 0", maxWidth: "50ch", fontWeight: 450 }}>
                Your evenings shouldn&apos;t disappear into charting, prior authorizations, and scheduling. Carentix becomes your operations partner — a dedicated, supervised care team that owns the administrative work, so you and your staff can give patients your full attention.
              </p>
              <div data-reveal style={{ display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center", marginTop: "clamp(28px, 3.5vw, 38px)" }}>
                <Link href="#contact" className="cx-gold cx-mag" style={{ display: "inline-flex", alignItems: "center", gap: 9, textDecoration: "none", background: "#FEC539", color: "#13294B", fontWeight: 600, fontSize: 16, padding: "16px 28px", borderRadius: 999, boxShadow: "0 8px 26px rgba(254,197,57,0.26)" }}>
                  Meet your team <span style={{ fontSize: 18 }}>→</span>
                </Link>
                <Link href="#capabilities" className="cx-link-u" style={{ textDecoration: "none", color: "#13294B", fontWeight: 600, fontSize: 16 }}>See what we handle</Link>
              </div>
            </div>

            <div className="cx-hero-art" data-reveal style={{ position: "relative", width: "100%", maxWidth: 472, marginLeft: "auto" }}>
              <div style={{ position: "absolute", inset: "16px -10px -16px 28px", background: "linear-gradient(155deg, rgba(91,140,123,0.22), rgba(254,197,57,0.10))", borderRadius: 30 }} />
              <ImageSlot
                label="Premium healthcare photo — physician with a patient, calm and authentic clinical moment"
                radius={24}
                style={{ position: "relative", display: "block", width: "100%", aspectRatio: "4 / 4.7", boxShadow: "0 46px 88px rgba(19,41,75,0.26)" }}
              />
              <div style={{ position: "absolute", left: -20, bottom: -28, background: "#FAFAF7", border: "1px solid rgba(19,41,75,0.07)", borderRadius: 15, padding: "12px 15px", boxShadow: "0 22px 46px rgba(19,41,75,0.22)", display: "flex", alignItems: "center", gap: 11 }}>
                <span style={{ width: 38, height: 38, borderRadius: 11, background: "rgba(254,197,57,0.18)", display: "flex", alignItems: "center", justifyContent: "center", flex: "0 0 auto" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B8902A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
                </span>
                <div>
                  <div style={{ fontFamily: SERIF, fontWeight: 700, fontSize: 18, color: "#13294B", lineHeight: 1 }}>Evenings back</div>
                  <div style={{ fontSize: "11.5px", color: "#4A4A45", marginTop: 3 }}>notes done by sign-off</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* static capability strip */}
        <div data-reveal style={{ borderTop: "1px solid rgba(19,41,75,0.1)", borderBottom: "1px solid rgba(19,41,75,0.1)" }}>
          <div style={{ maxWidth: 1320, margin: "0 auto", padding: "20px 32px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "14px 22px" }}>
            <span style={{ fontSize: "11.5px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#5B8C7B" }}>Your team handles</span>
            {CAPABILITY_TAGS.map((t) => (
              <span key={t} style={{ display: "inline-flex", alignItems: "center", gap: 22 }}>
                <span style={{ fontSize: 15, fontWeight: 500, color: "#13294B" }}>{t}</span>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "rgba(19,41,75,0.22)" }} />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== RECLAIMED TIME ===================== */}
      <section style={{ background: "#13294B", color: "#FAFAF7", position: "relative", overflow: "hidden" }}>
        <div className="cx-anim" style={{ position: "absolute", top: -160, right: -120, width: 560, height: 560, borderRadius: "50%", background: "radial-gradient(circle, rgba(254,197,57,0.12), transparent 62%)", animation: "cxDrift 24s ease-in-out infinite" }} />
        <div style={{ position: "relative", maxWidth: 1320, margin: "0 auto", padding: SECTION_PAD }}>
          <div data-reveal style={{ display: "flex", alignItems: "center", gap: 13, marginBottom: "clamp(28px, 4vw, 48px)" }}>
            <span style={{ ...eyebrowNum, color: "#FEC539" }}>01</span>
            <span style={{ width: 26, height: 1, background: "rgba(250,250,247,0.4)" }} />
            <span style={{ fontSize: "12.5px", fontWeight: 500, letterSpacing: "0.04em", color: "rgba(250,250,247,0.66)" }}>Why it matters</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "clamp(28px, 5vw, 64px)", alignItems: "center" }}>
            <div>
              <div data-reveal style={{ fontFamily: SERIF, fontWeight: 600, fontSize: "clamp(64px, 9vw, 132px)", lineHeight: 0.92, letterSpacing: "-0.04em", color: "#FEC539" }}>
                Hours back,<br />every week.
              </div>
              <p data-reveal style={{ fontSize: "clamp(18px, 1.5vw, 22px)", lineHeight: 1.5, color: "rgba(250,250,247,0.82)", margin: "26px 0 0", maxWidth: "34ch", fontFamily: SERIF }}>
                When charting, prior auths, and scheduling are handled, clinical staff get back the time burnout takes and patient care never should.
              </p>
            </div>
            <div data-reveal style={{ display: "flex", flexDirection: "column" }}>
              {PROOF_STATS.map((s, i) => (
                <div key={i} style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 20, padding: "26px 0", borderTop: "1px solid rgba(250,250,247,0.14)" }}>
                  <div style={{ fontSize: 15, color: "rgba(250,250,247,0.72)", maxWidth: "24ch" }}>{s.label}</div>
                  <div style={{ fontFamily: SERIF, fontWeight: 600, fontSize: "clamp(34px, 4vw, 48px)", color: "#FAFAF7", whiteSpace: "nowrap", letterSpacing: "-0.02em" }}>
                    <span data-count={String(s.num)} data-decimals={String(s.decimals)} data-suffix={s.suffix}>{s.display}</span>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid rgba(250,250,247,0.14)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ===================== THE SHIFT ===================== */}
      <section style={{ background: "#F3F0E8", padding: SECTION_PAD }}>
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          <div data-reveal style={{ maxWidth: 760, marginBottom: "clamp(48px, 6vw, 72px)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 13, marginBottom: 22 }}>
              <span style={{ ...eyebrowNum, color: "#5B8C7B" }}>02</span>
              <span style={{ width: 26, height: 1, background: "rgba(19,41,75,0.28)" }} />
              <span style={{ fontSize: "12.5px", fontWeight: 500, letterSpacing: "0.04em", color: "#5B8C7B" }}>The difference, in one week</span>
            </div>
            <h2 style={{ fontFamily: SERIF, fontWeight: 500, fontSize: "clamp(34px, 5vw, 64px)", lineHeight: 1.02, letterSpacing: "-0.035em", color: "#13294B", margin: 0, textWrap: "balance" }}>The same clinic, two very different weeks.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 1, background: "rgba(19,41,75,0.12)", border: "1px solid rgba(19,41,75,0.12)", borderRadius: 4, overflow: "hidden" }}>
            <div data-reveal style={{ background: "#F3F0E8", padding: "clamp(28px, 3.5vw, 48px)" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 9, marginBottom: 26 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "rgba(74,74,69,0.4)" }} />
                <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(74,74,69,0.7)" }}>A typical week, today</span>
              </div>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 20 }}>
                {BEFORE_ITEMS.map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: 15, alignItems: "flex-start" }}>
                    <span style={{ flex: "0 0 auto", width: 7, height: 7, borderRadius: "50%", background: "rgba(74,74,69,0.32)", marginTop: 9 }} />
                    <span style={{ fontSize: 16, lineHeight: 1.5, color: "#4A4A45" }}>{item}</span>
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: 30, paddingTop: 22, borderTop: "1px solid rgba(74,74,69,0.16)", fontFamily: SERIF, fontSize: 18, color: "#4A4A45" }}>Nobody truly owns it.</div>
            </div>
            <div data-reveal style={{ background: "#13294B", color: "#FAFAF7", padding: "clamp(28px, 3.5vw, 48px)", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: -70, right: -50, width: 240, height: 240, borderRadius: "50%", background: "radial-gradient(circle, rgba(91,140,123,0.3), transparent 66%)" }} />
              <div style={{ position: "relative", display: "inline-flex", alignItems: "center", gap: 9, marginBottom: 26 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#FEC539" }} />
                <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#FEC539" }}>With Carentix as your partner</span>
              </div>
              <ul style={{ position: "relative", listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 20 }}>
                {AFTER_ITEMS.map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: 15, alignItems: "flex-start" }}>
                    <span style={{ flex: "0 0 auto", color: "#5B8C7B", marginTop: 1 }}>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 9.5l4 4 8-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </span>
                    <span style={{ fontSize: 16, lineHeight: 1.5, color: "rgba(250,250,247,0.92)" }}>{item}</span>
                  </li>
                ))}
              </ul>
              <div style={{ position: "relative", marginTop: 30, paddingTop: 22, borderTop: "1px solid rgba(250,250,247,0.16)", fontFamily: SERIF, fontSize: 18, color: "#FAFAF7" }}>One accountable team owns all of it.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CAPABILITIES (care team) ===================== */}
      <section id="capabilities" style={{ background: "#FAFAF7", padding: SECTION_PAD }}>
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          <div data-reveal style={{ maxWidth: 800, marginBottom: "clamp(48px, 6vw, 76px)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 13, marginBottom: 22 }}>
              <span style={{ ...eyebrowNum, color: "#5B8C7B" }}>03</span>
              <span style={{ width: 26, height: 1, background: "rgba(19,41,75,0.28)" }} />
              <span style={{ fontSize: "12.5px", fontWeight: 500, letterSpacing: "0.04em", color: "#5B8C7B" }}>One partner, a complete operations team</span>
            </div>
            <h2 style={{ fontFamily: SERIF, fontWeight: 500, fontSize: "clamp(34px, 5vw, 64px)", lineHeight: 1.02, letterSpacing: "-0.035em", color: "#13294B", margin: "0 0 20px", textWrap: "balance" }}>Everything your front and back office runs on — handled.</h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "#4A4A45", margin: 0, maxWidth: "60ch" }}>You don&apos;t hire a person; you partner with a team that&apos;s trained across six operational disciplines and accountable as one. <span style={{ color: "#13294B", fontWeight: 500 }}>Hover any discipline to see what it takes off your plate.</span></p>
          </div>

          <div className="cx-disc-grid" style={{ display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: "clamp(32px, 5vw, 72px)", alignItems: "start" }}>
            <div style={{ borderTop: "1px solid rgba(19,41,75,0.14)" }}>
              {DISCIPLINES.map((d, i) => {
                const on = i === activeDisc;
                return (
                  <div
                    key={d.idx}
                    className="cx-disc-row"
                    onMouseEnter={() => setActiveDisc(i)}
                    onClick={() => setActiveDisc(i)}
                    style={{ display: "flex", alignItems: "center", gap: "clamp(16px, 3vw, 36px)", padding: "clamp(18px, 2.4vw, 30px) 0", borderBottom: "1px solid rgba(19,41,75,0.14)", paddingLeft: on ? 14 : 0 }}
                  >
                    <span className="cx-disc-num" style={{ fontFamily: SERIF, fontSize: 15, fontWeight: 600, color: on ? d.color : "#13294B", opacity: on ? 1 : 0.3, width: 26, flex: "0 0 auto" }}>{d.idx}</span>
                    <span className="cx-disc-name" style={{ fontFamily: SERIF, fontWeight: 500, fontSize: "clamp(23px, 3.2vw, 44px)", lineHeight: 1.04, letterSpacing: "-0.025em", color: on ? "#13294B" : "rgba(19,41,75,0.4)" }}>{d.title}</span>
                    <span style={{ marginLeft: "auto", flex: "0 0 auto", color: d.color, opacity: on ? 1 : 0, transition: "opacity 0.3s ease" }}>
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="cx-disc-detail" style={{ position: "sticky", top: 110 }}>
              <div style={{ background: disc.tint, border: `1px solid ${disc.border}`, borderRadius: 24, padding: "clamp(28px, 3vw, 40px)", position: "relative", overflow: "hidden", transition: "background 0.5s ease, border-color 0.5s ease" }}>
                <div style={{ position: "absolute", top: -50, right: -40, width: 170, height: 170, borderRadius: "47% 53% 44% 56% / 55% 48% 52% 45%", background: disc.blob, transition: "background 0.5s ease" }} />
                <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 26 }}>
                  <div style={{ width: 60, height: 60, borderRadius: 17, background: disc.iconBg, display: "flex", alignItems: "center", justifyContent: "center", color: disc.color, transition: "background 0.5s ease, color 0.5s ease" }}>
                    {disc.icon}
                  </div>
                  <span style={{ fontFamily: SERIF, fontSize: 40, fontWeight: 600, color: disc.color, opacity: 0.22, letterSpacing: "-0.02em" }}>{disc.idx}</span>
                </div>
                <div style={{ position: "relative", fontFamily: SERIF, fontWeight: 600, fontSize: 25, color: "#13294B", marginBottom: 12, letterSpacing: "-0.015em" }}>{disc.title}</div>
                <p style={{ position: "relative", fontSize: 15, lineHeight: 1.6, color: "#4A4A45", margin: "0 0 24px" }}>{disc.desc}</p>
                <div style={{ position: "relative", fontSize: "11.5px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: disc.color, marginBottom: 14 }}>What it takes off your plate</div>
                <ul style={{ position: "relative", listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                  {disc.tasks.map((task) => (
                    <li key={task} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                      <span style={{ flex: "0 0 auto", color: disc.color, marginTop: 1 }}>
                        <svg width="17" height="17" viewBox="0 0 18 18" fill="none"><path d="M3 9.5l4 4 8-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </span>
                      <span style={{ fontSize: "14.5px", lineHeight: 1.5, color: "#13294B" }}>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, justifyContent: "center", marginTop: 18, fontSize: "12.5px", color: "#4A4A45" }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#5B8C7B" }} /> Most practices lean on 2–3 of these from day one
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PROCESS ===================== */}
      <section id="process" style={{ background: "#F3F0E8", padding: SECTION_PAD }}>
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          <div data-reveal style={{ maxWidth: 720, marginBottom: "clamp(48px, 6vw, 72px)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 13, marginBottom: 22 }}>
              <span style={{ ...eyebrowNum, color: "#5B8C7B" }}>04</span>
              <span style={{ width: 26, height: 1, background: "rgba(19,41,75,0.28)" }} />
              <span style={{ fontSize: "12.5px", fontWeight: 500, letterSpacing: "0.04em", color: "#5B8C7B" }}>How it works</span>
            </div>
            <h2 style={{ fontFamily: SERIF, fontWeight: 500, fontSize: "clamp(34px, 5vw, 64px)", lineHeight: 1.02, letterSpacing: "-0.035em", color: "#13294B", margin: 0, textWrap: "balance" }}>From first call to fully embedded, in four steps.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(248px, 1fr))", gap: 24 }}>
            {STEPS.map((step) => (
              <div key={step.num} data-reveal className="cx-lift" style={{ background: "#FAFAF7", border: "1px solid rgba(19,41,75,0.09)", borderRadius: 20, padding: "32px 30px" }}>
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

      {/* ===================== PRICING + CALCULATOR ===================== */}
      <section id="pricing" style={{ background: "#FAFAF7", padding: SECTION_PAD }}>
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          <div data-reveal style={{ maxWidth: 760, marginBottom: "clamp(44px, 5vw, 64px)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 13, marginBottom: 22 }}>
              <span style={{ ...eyebrowNum, color: "#5B8C7B" }}>05</span>
              <span style={{ width: 26, height: 1, background: "rgba(19,41,75,0.28)" }} />
              <span style={{ fontSize: "12.5px", fontWeight: 500, letterSpacing: "0.04em", color: "#5B8C7B" }}>Fair, usage-based pricing</span>
            </div>
            <h2 style={{ fontFamily: SERIF, fontWeight: 500, fontSize: "clamp(34px, 5vw, 60px)", lineHeight: 1.02, letterSpacing: "-0.035em", color: "#13294B", margin: "0 0 20px", textWrap: "balance" }}>You only pay for the practice you actually run.</h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "#4A4A45", margin: 0, maxWidth: "58ch" }}>A core fee for your dedicated team — $1,999 for your first provider and $1,499 for each additional — a fair rate per unique patient, not per visit, and premium services only when you use them. Move the numbers below to see your estimate.</p>
          </div>

          <div data-reveal className="cx-calc-grid" style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 0, border: "1px solid rgba(19,41,75,0.12)", borderRadius: 26, overflow: "hidden", boxShadow: "0 30px 64px rgba(19,41,75,0.1)" }}>
            <div style={{ background: "#FAFAF7", padding: "clamp(28px, 3.5vw, 48px)" }}>
              <div style={{ fontFamily: SERIF, fontWeight: 600, fontSize: 21, color: "#13294B", marginBottom: 28 }}>Estimate your monthly cost</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
                {calcFields.map((f) => (
                  <div key={f.label}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 16, marginBottom: 4 }}>
                      <div style={{ fontSize: "15.5px", fontWeight: 600, color: "#13294B" }}>{f.label}</div>
                      <div style={{ fontSize: "12.5px", color: "#4A4A45", opacity: 0.78 }}>{f.rate}</div>
                    </div>
                    <div style={{ fontSize: 13, color: "#4A4A45", opacity: 0.78, marginBottom: 14 }}>{f.sub}</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                      <button className="cx-step" onClick={f.onDec} aria-label="Decrease" style={{ width: 46, height: 46, flex: "0 0 auto", border: "1px solid rgba(19,41,75,0.2)", background: "#FAFAF7", borderRadius: 13, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#13294B" }}>
                        <svg width="18" height="18" viewBox="0 0 18 18"><path d="M4 9h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                      </button>
                      <div style={{ flex: 1, textAlign: "center", fontFamily: SERIF, fontWeight: 600, fontSize: 30, color: "#13294B", letterSpacing: "-0.02em", fontFeatureSettings: "'tnum' 1" }}>{f.display}</div>
                      <button className="cx-step" onClick={f.onInc} aria-label="Increase" style={{ width: 46, height: 46, flex: "0 0 auto", border: "1px solid rgba(19,41,75,0.2)", background: "#FAFAF7", borderRadius: 13, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#13294B" }}>
                        <svg width="18" height="18" viewBox="0 0 18 18"><path d="M9 4v10M4 9h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: "#13294B", color: "#FAFAF7", padding: "clamp(28px, 3.5vw, 48px)", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <div className="cx-anim" style={{ position: "absolute", top: -120, right: -90, width: 360, height: 360, borderRadius: "50%", background: "radial-gradient(circle, rgba(254,197,57,0.14), transparent 64%)", animation: "cxDrift 22s ease-in-out infinite" }} />
              <div style={{ position: "relative" }}>
                <div style={{ fontSize: "12.5px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(250,250,247,0.6)", marginBottom: 12 }}>Estimated monthly</div>
                <div style={{ fontFamily: SERIF, fontWeight: 700, fontSize: "clamp(52px, 7vw, 76px)", lineHeight: 1, letterSpacing: "-0.03em", color: "#FEC539" }}>{money(total)}/mo</div>
                <div style={{ fontSize: "13.5px", color: "rgba(250,250,247,0.6)", marginTop: 8 }}>per month, all-in for this scenario</div>

                <div style={{ marginTop: 30, display: "flex", flexDirection: "column" }}>
                  {calcBreakdown.map((b, i) => (
                    <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 16, padding: "14px 0", borderTop: "1px solid rgba(250,250,247,0.14)" }}>
                      <div style={{ fontSize: 14, color: "rgba(250,250,247,0.78)" }}>{b.label}</div>
                      <div style={{ fontFamily: SERIF, fontWeight: 600, fontSize: 18, color: "#FAFAF7" }}>{b.value}</div>
                    </div>
                  ))}
                  <div style={{ borderTop: "1px solid rgba(250,250,247,0.14)" }} />
                </div>

                <div style={{ marginTop: 22, display: "flex", alignItems: "center", gap: 9, background: "rgba(91,140,123,0.18)", border: "1px solid rgba(91,140,123,0.32)", borderRadius: 12, padding: "12px 14px" }}>
                  <span style={{ color: "#9DC4B4", flex: "0 0 auto" }}>
                    <svg width="16" height="16" viewBox="0 0 18 18" fill="none"><path d="M3 9.5l4 4 8-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                  <span style={{ fontSize: 13, color: "rgba(250,250,247,0.86)", lineHeight: 1.4 }}>Pay annually and save {money(annualSave)}/yr (10% off the core fee).</span>
                </div>
              </div>
              <Link href="#contact" className="cx-gold cx-mag" style={{ position: "relative", marginTop: 24, display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 9, textDecoration: "none", background: "#FEC539", color: "#13294B", fontWeight: 600, fontSize: "15.5px", padding: "15px 26px", borderRadius: 999, alignSelf: "flex-start" }}>Get an exact quote <span style={{ fontSize: 17 }}>→</span></Link>
            </div>
          </div>

          <div data-reveal style={{ marginTop: 22, display: "flex", flexWrap: "wrap", gap: 22, fontSize: 13, color: "#4A4A45" }}>
            <span><strong style={{ color: "#13294B" }}>30-day pilot</strong> available at $1,399 for your first provider</span>
            <span><strong style={{ color: "#13294B" }}>Annual commitment</strong> 10% off the core fee</span>
            <span><strong style={{ color: "#13294B" }}>Billed per unique patient,</strong> not per appointment</span>
          </div>
          <p data-reveal style={{ marginTop: 14, fontSize: 12, lineHeight: 1.6, color: "#4A4A45", opacity: 0.75, maxWidth: "96ch" }}>Estimate only and non-binding. Figures are illustrative, exclude any setup fees, overages, and minimums, and do not constitute an offer. Actual pricing and terms — including any minimum term — are confirmed in a written services agreement and may vary based on practice-specific factors.</p>
        </div>
      </section>

      {/* ===================== COMPLIANCE ===================== */}
      <section id="compliance" style={{ background: "#0C1E3C", color: "#FAFAF7", padding: SECTION_PAD, position: "relative", overflow: "hidden" }}>
        <div className="cx-anim" style={{ position: "absolute", bottom: -180, left: -120, width: 540, height: 540, borderRadius: "50%", background: "radial-gradient(circle, rgba(91,140,123,0.18), transparent 64%)", animation: "cxDrift 26s ease-in-out infinite" }} />
        <div style={{ position: "relative", maxWidth: 1320, margin: "0 auto" }}>
          <div data-reveal style={{ display: "flex", alignItems: "center", gap: 13, marginBottom: 28 }}>
            <span style={{ ...eyebrowNum, color: "#FEC539" }}>06</span>
            <span style={{ width: 26, height: 1, background: "rgba(250,250,247,0.4)" }} />
            <span style={{ fontSize: "12.5px", fontWeight: 500, letterSpacing: "0.04em", color: "rgba(250,250,247,0.66)" }}>Compliance, by design</span>
          </div>
          <h2 data-reveal style={{ fontFamily: SERIF, fontWeight: 500, fontSize: "clamp(34px, 5.4vw, 70px)", lineHeight: 1.0, letterSpacing: "-0.04em", color: "#FAFAF7", margin: "0 0 clamp(44px, 5vw, 64px)", maxWidth: "20ch", textWrap: "balance" }}>For us, HIPAA is built into the <span style={{ color: "#FEC539" }}>architecture</span> — not added at the end.</h2>
          <div data-reveal style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 1, background: "rgba(250,250,247,0.14)", border: "1px solid rgba(250,250,247,0.14)", borderRadius: 4, overflow: "hidden" }}>
            {COMPLIANCE_STATS.map((c) => (
              <div key={c.value} style={{ background: "#0C1E3C", padding: "34px 28px" }}>
                <div style={{ fontFamily: SERIF, fontWeight: 600, fontSize: "clamp(34px, 4vw, 48px)", color: "#FEC539", lineHeight: 1, letterSpacing: "-0.02em" }}>{c.value}</div>
                <div style={{ fontSize: "13.5px", lineHeight: 1.45, color: "rgba(250,250,247,0.7)", marginTop: 14 }}>{c.label}</div>
              </div>
            ))}
          </div>
          <p data-reveal style={{ fontSize: 12, lineHeight: 1.6, color: "rgba(250,250,247,0.5)", margin: "24px 0 0", maxWidth: "90ch" }}>These figures describe our internal compliance program and target operating standards as of June 2026. They are not an SLA and are not incorporated into any agreement unless expressly stated in a signed BAA or services agreement. Carentix has not represented that it holds SOC 2, HITRUST, or other third-party certification unless explicitly stated.</p>
          <Link data-reveal href="/hipaa-compliance" className="cx-link-u" style={{ display: "inline-flex", alignItems: "center", gap: 9, textDecoration: "none", color: "#FEC539", fontWeight: 600, fontSize: 16, marginTop: 28 }}>See the full compliance program <span style={{ fontSize: 18 }}>→</span></Link>
        </div>
      </section>

      {/* ===================== TESTIMONIAL + TEAM ===================== */}
      <section style={{ background: "#FAFAF7", padding: "clamp(80px, 11vw, 146px) 32px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div data-reveal style={{ paddingBottom: "clamp(56px, 7vw, 84px)", borderBottom: "1px solid rgba(19,41,75,0.12)" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 9, marginBottom: 24 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#5B8C7B" }} />
              <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#3C5A50" }}>The outcome we build toward</span>
            </div>
            <blockquote style={{ fontFamily: SERIF, fontWeight: 500, fontSize: "clamp(24px, 3.4vw, 44px)", lineHeight: 1.24, color: "#13294B", margin: 0, letterSpacing: "-0.02em", textWrap: "pretty", maxWidth: "24ch" }}>Providers leave on time. Prior auths move. One accountable team owns the operations — so the practice can focus on patients.</blockquote>
            <p style={{ fontSize: 13, lineHeight: 1.6, color: "#4A4A45", opacity: 0.7, margin: "22px 0 0" }}>An illustration of the experience we design for. Verified client references are shared on request during the evaluation process.</p>
          </div>

          <div data-reveal style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 24, marginTop: "clamp(48px, 6vw, 72px)" }}>
            <div style={{ fontFamily: SERIF, fontSize: 19, color: "#13294B", maxWidth: "28ch", lineHeight: 1.4 }}>Real people behind your practice — trained, vetted, and supervised. One accountable team, never a rotating pool.</div>
            <div style={{ display: "flex", alignItems: "center" }}>
              {TEAM.map((m) => (
                <div key={m.id} style={{ marginLeft: -16, position: "relative" }} title={m.role}>
                  <div style={{ padding: 4, background: "#FAFAF7", borderRadius: "50%" }}>
                    <ImageSlot label={m.role} radius={999} style={{ width: 72, height: 72, minHeight: 72, display: "block" }}>
                      <span style={{ fontSize: 9 }}>Photo</span>
                    </ImageSlot>
                  </div>
                </div>
              ))}
              <div style={{ marginLeft: 18, fontSize: "13.5px", color: "#4A4A45", maxWidth: "16ch", lineHeight: 1.4 }}>Your team &amp; their supervisors, matched to you</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FAQ ===================== */}
      <section id="faq" style={{ background: "#F3F0E8", padding: SECTION_PAD }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "clamp(36px, 5vw, 72px)", alignItems: "start" }}>
          <div data-reveal style={{ position: "sticky", top: 110 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 13, marginBottom: 22 }}>
              <span style={{ ...eyebrowNum, color: "#5B8C7B" }}>07</span>
              <span style={{ width: 26, height: 1, background: "rgba(19,41,75,0.28)" }} />
              <span style={{ fontSize: "12.5px", fontWeight: 500, letterSpacing: "0.04em", color: "#5B8C7B" }}>Answered plainly</span>
            </div>
            <h2 style={{ fontFamily: SERIF, fontWeight: 500, fontSize: "clamp(30px, 4vw, 52px)", lineHeight: 1.04, letterSpacing: "-0.035em", color: "#13294B", margin: "0 0 20px", textWrap: "balance" }}>The things practices ask before they say yes.</h2>
            <Link href="#contact" className="cx-link-u" style={{ textDecoration: "none", color: "#13294B", fontWeight: 600, fontSize: 16 }}>Still unsure? Schedule a 20-minute call →</Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {FAQS.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} data-reveal style={{ borderTop: "1px solid rgba(19,41,75,0.14)" }}>
                  <div
                    className="cx-faq-row"
                    onClick={() => setOpenFaq(isOpen ? -1 : i)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setOpenFaq(isOpen ? -1 : i);
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    aria-expanded={isOpen}
                    aria-label={f.q}
                    style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 18, padding: "24px 0" }}
                  >
                    <span style={{ fontFamily: SERIF, fontWeight: 600, fontSize: 18, color: "#13294B", lineHeight: 1.3, letterSpacing: "-0.01em" }}>{f.q}</span>
                    <span className="cx-faq-plus" style={{ flex: "0 0 auto", color: "#5B8C7B", transform: isOpen ? "rotate(135deg)" : "none" }}>
                      <svg width="16" height="16" viewBox="0 0 16 16"><path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                    </span>
                  </div>
                  {isOpen && (
                    <div style={{ overflow: "hidden", animation: "cxFadeUp 0.4s cubic-bezier(0.16,1,0.3,1)" }}>
                      <p style={{ margin: 0, padding: "0 0 26px", fontSize: 15, lineHeight: 1.62, color: "#4A4A45", maxWidth: "60ch" }}>{f.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
            <div style={{ borderTop: "1px solid rgba(19,41,75,0.14)" }} />
          </div>
        </div>
      </section>

      {/* ===================== FINAL CTA ===================== */}
      <section id="contact" style={{ background: "#FAFAF7", padding: "clamp(80px, 11vw, 166px) 32px" }}>
        <div data-reveal style={{ maxWidth: 1180, margin: "0 auto", background: "#13294B", color: "#FAFAF7", borderRadius: 32, padding: "clamp(48px, 7vw, 92px) clamp(32px, 5vw, 80px)", position: "relative", overflow: "hidden", textAlign: "center" }}>
          <div className="cx-anim" style={{ position: "absolute", top: -160, left: "50%", transform: "translateX(-50%)", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(254,197,57,0.13), transparent 60%)", animation: "cxDrift 28s ease-in-out infinite" }} />
          <div style={{ position: "relative" }}>
            <h2 style={{ fontFamily: SERIF, fontWeight: 500, fontSize: "clamp(32px, 5vw, 62px)", lineHeight: 1.02, letterSpacing: "-0.04em", margin: "0 auto 22px", color: "#FAFAF7", maxWidth: "20ch", textWrap: "balance" }}>You got into medicine for the patients. Let&apos;s protect that.</h2>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: "rgba(250,250,247,0.78)", margin: "0 auto 38px", maxWidth: "52ch" }}>A 20-minute call. A real estimate for your practice. No scripts, no pressure — you decide.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
              <Link href="#contact" className="cx-gold cx-mag" style={{ display: "inline-flex", alignItems: "center", gap: 9, textDecoration: "none", background: "#FEC539", color: "#13294B", fontWeight: 600, fontSize: "16.5px", padding: "17px 32px", borderRadius: 999, boxShadow: "0 12px 34px rgba(254,197,57,0.26)" }}>Schedule a call <span style={{ fontSize: 18 }}>→</span></Link>
              <Link href="#capabilities" className="cx-mag" style={{ display: "inline-flex", alignItems: "center", gap: 9, textDecoration: "none", color: "#FAFAF7", fontWeight: 600, fontSize: "16.5px", padding: "17px 28px", borderRadius: 999, border: "1px solid rgba(250,250,247,0.28)" }}>See what we handle</Link>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 24, justifyContent: "center", marginTop: 34, fontSize: "13.5px", color: "rgba(250,250,247,0.62)" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 7 }}><span style={{ color: "#5B8C7B" }}>✓</span> 5-day replacement target</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 7 }}><span style={{ color: "#5B8C7B" }}>✓</span> BAA before PHI access</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 7 }}><span style={{ color: "#5B8C7B" }}>✓</span> No long-term contract required for standard engagements</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
