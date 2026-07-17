import {
  CalendarDays,
  PenLine,
  ShieldCheck,
  Share2,
  FolderClosed,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";

export type Discipline = {
  idx: string;
  title: string;
  /** Accent for fills, tints, borders, and the large ghost numeral. */
  color: string;
  /**
   * Darkened accent for small text and the task checkmarks. Several `color`
   * values land at 2.8–4.3:1 on paper — fine behind a 5% tint, short of the
   * 4.5:1 WCAG AA bar for 11.5px labels. Same hue, AA-safe. Where `color`
   * already clears 4.5:1 (navy, purple) the two are identical.
   */
  textColor: string;
  iconBg: string;
  tint: string;
  border: string;
  blob: string;
  icon: LucideIcon;
  desc: string;
  tasks: string[];
};

/** The six operational disciplines the care team is cross-trained across. */
export const DISCIPLINES: Discipline[] = [
  {
    idx: "01",
    title: "Scheduling & access",
    color: "#C2683E",
    textColor: "#9E5230",
    iconBg: "rgba(194,104,62,0.14)",
    tint: "rgba(194,104,62,0.05)",
    border: "rgba(194,104,62,0.2)",
    blob: "rgba(194,104,62,0.1)",
    icon: CalendarDays,
    desc: "Our team owns the calendar end-to-end so the front desk can breathe and the schedule stays full.",
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
    textColor: "#3C5A50",
    iconBg: "rgba(91,140,123,0.16)",
    tint: "rgba(91,140,123,0.05)",
    border: "rgba(91,140,123,0.22)",
    blob: "rgba(91,140,123,0.12)",
    icon: PenLine,
    desc: "Accurate, structured notes drafted in your EHR so providers sign off instead of typing past 9pm.",
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
    textColor: "#35639F",
    iconBg: "rgba(62,120,194,0.14)",
    tint: "rgba(62,120,194,0.05)",
    border: "rgba(62,120,194,0.2)",
    blob: "rgba(62,120,194,0.1)",
    icon: ShieldCheck,
    desc: "Submitted, tracked, and chased so treatment and service never stall on paperwork and patients aren't left waiting.",
    tasks: [
      "Same-day submissions, tracked to approval",
      "1.4-day average turnaround",
      "Patients start treatment sooner",
    ],
  },
  {
    idx: "04",
    title: "Referral coordination",
    color: "#B8902A",
    textColor: "#8A6D1F",
    iconBg: "rgba(184,144,42,0.16)",
    tint: "rgba(184,144,42,0.06)",
    border: "rgba(184,144,42,0.24)",
    blob: "rgba(184,144,42,0.12)",
    icon: Share2,
    desc: "Routed to the right specialists with the loop closed on every single one — nothing slips.",
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
    textColor: "#13294B",
    iconBg: "rgba(19,41,75,0.1)",
    tint: "rgba(19,41,75,0.035)",
    border: "rgba(19,41,75,0.16)",
    blob: "rgba(19,41,75,0.08)",
    icon: FolderClosed,
    desc: "Records requests and release-of-information handled cleanly, accurately, and on time.",
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
    textColor: "#7A5BA6",
    iconBg: "rgba(122,91,166,0.14)",
    tint: "rgba(122,91,166,0.05)",
    border: "rgba(122,91,166,0.2)",
    blob: "rgba(122,91,166,0.1)",
    icon: MessageCircle,
    desc: "Messages, reminders, and follow-ups answered with a warm, on-brand voice that sounds like your practice.",
    tasks: [
      "Timely, warm replies to every message",
      "Follow-ups that keep patients engaged",
      "A voice that sounds like your practice",
    ],
  },
];

export const CAPABILITY_TAGS = [
  "Scheduling",
  "Prior authorizations",
  "Clinical scribing",
  "Records & ROI",
  "Referrals",
  "Eligibility",
  "Patient messages",
];

export const BEFORE_ITEMS = [
  "Providers charting until 9pm, finishing notes after the kids are asleep.",
  "Prior auths sitting for days while patients wait on treatment.",
  "The practice manager firefighting — phones ringing, schedule full of gaps and no-shows.",
  "Records requests piling up, referrals slipping through the cracks.",
  "Burnout creeping in, and nobody truly owns the operational mess.",
];

export const AFTER_ITEMS = [
  "Notes drafted and ready for sign-off before the provider leaves.",
  "Prior auths submitted same-day and tracked to approval.",
  "Schedule actively managed — gaps filled, reminders sent, no-shows down.",
  "Records and referrals handled end-to-end by one accountable team.",
  "Supervised, compliant, and measurable — your operations finally owned.",
];

export const STEPS = [
  {
    num: "1",
    title: "Discovery call",
    tag: "20 min",
    body: "A short conversation about your bottlenecks, EHR, and patient volume. You leave with a real estimate — no scripts.",
  },
  {
    num: "2",
    title: "Matched with our team",
    tag: "Within days",
    body: "We assemble a care team suited to your specialty and workflows — vetted, trained, and accountable to you.",
  },
  {
    num: "3",
    title: "Supervised onboarding",
    tag: "Structured",
    body: "A guided ramp with a supervisor present — BAA signed, systems secured, SOPs set before any PHI access.",
  },
  {
    num: "4",
    title: "Ongoing oversight",
    tag: "Always on",
    body: "Daily check-ins, a 1:8 supervisor ratio, and a 5-day replacement guarantee. Accountable for outcomes.",
  },
];

export const COMPLIANCE_STATS = [
  { value: "8/8", label: "Named training modules, 80% minimum to pass" },
  { value: "100%", label: "Company-managed devices, MFA + VPN enforced" },
  { value: "1:8", label: "Supervisor ratio with daily check-ins" },
  { value: "BAA", label: "Signed before any PHI access — legally liable" },
  { value: "6-yr", label: "Compliance record retention" },
];

export const FAQS = [
  {
    q: "Is it safe to have an overseas team handling patient information?",
    a: "HIPAA has a safeguard requirement, not a geography requirement. Every team member works on a company-managed device behind a mandatory VPN with MFA, signs a BAA before any PHI access, and operates under documented technical and operational safeguards that meet or exceed what a U.S.-based employee would be held to.",
  },
  {
    q: "How is this different from a VA marketplace?",
    a: "You're not hiring a freelancer — you're partnering with a managed operation. Our team is trained, supervised at a 1:8 ratio with daily check-ins, backed by a documented incident-response program, and covered by a 5-day replacement guarantee. We're accountable for outcomes, not just hours billed.",
  },
  {
    q: "What does pricing actually look like?",
    a: "A core fee covers our dedicated team, the compliance program, and oversight — $1,899 for your first provider and $1,499 for each additional. A tiered volume fee applies per unique patient seen (not per visit) and declines from $4.00 to $1.75 as volume grows. Premium services like prior authorizations are billed only when used. Use the calculator to estimate your scenario.",
  },
  {
    q: "How quickly can we get started?",
    a: "After your discovery call, our team is typically matched to you within days. Onboarding is a structured, supervised ramp — BAA signed and systems secured first — so the team is contributing safely and quickly, not learning on live PHI unsupervised.",
  },
  {
    q: "What if the team isn't the right fit?",
    a: "Every engagement includes a 5-day replacement guarantee. If the match isn't working, we re-staff quickly and the supervisor ensures continuity so your operations never stall during the transition.",
  },
  {
    q: "Which EHRs and workflows do you support?",
    a: "Our team is trained on EHR navigation and documentation standards as part of an 8-module program, and onboarding is tailored to your specific systems and SOPs. We adapt to your practice — you don't adapt to us.",
  },
];
