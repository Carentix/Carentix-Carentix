import type { Metadata } from "next";
import type { ReactNode } from "react";
import LegalPage, { type LegalPageData } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Carentix collects, uses, and protects information across our website and services — in plain English. Patient health information is governed separately by HIPAA and our Business Associate Agreements.",
};

/** 22×22 stroked icon, matching the design's `ic()` helper. */
function Ic({ children }: { children: ReactNode }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  );
}

const data: LegalPageData = {
  eyebrow: "Legal · Privacy",
  title: "Privacy Policy",
  intro:
    "We’re a compliance-first company, and that starts with being clear about data. This policy explains, in plain English, what we collect through our website and business relationships, why, and how we protect it.",
  meta: [
    { label: "Effective", value: "June 2026" },
    { label: "Last updated", value: "June 30, 2026" },
    { label: "Version", value: "1.0" },
  ],
  glance: [
    {
      icon: (
        <Ic>
          <path d="M18 6 6 18M6 6l12 12" />
          <circle cx="12" cy="12" r="10" />
        </Ic>
      ),
      title: "We never sell your data",
      body: "Not to advertisers, not to anyone. Your information is used to serve you, not to be resold.",
    },
    {
      icon: (
        <Ic>
          <rect x="4" y="5" width="16" height="16" rx="2" />
          <path d="M9 3v4M15 3v4M9 13l2 2 4-4" />
        </Ic>
      ),
      title: "PHI is separate",
      body: "Patient health information is governed by HIPAA and our Business Associate Agreement — not this policy.",
    },
    {
      icon: (
        <Ic>
          <path d="M12 2 4 6v6c0 5 3.5 8 8 10 4.5-2 8-5 8-10V6Z" />
          <path d="m9 12 2 2 4-4" />
        </Ic>
      ),
      title: "Security by design",
      body: "Encryption, access controls, MFA, and managed devices protect every piece of data we hold.",
    },
  ],
  sections: [
    {
      id: "collect",
      num: "01",
      title: "Information we collect",
      paras: ["We collect only what we need to run our website, respond to inquiries, and operate our services. We don’t sell personal information — ever."],
      list: [
        { label: "Website & usage data.", text: "Pages visited, device and browser type, and approximate location, gathered through privacy-respecting analytics to improve the site." },
        { label: "Cookies.", text: "Small files that remember preferences and measure traffic. You can disable non-essential cookies in your browser; the site still works." },
        { label: "Forms & inquiries.", text: "Name, email, phone, practice details, and anything you choose to include when you book a call or contact us." },
        { label: "Business records.", text: "Contact and contract details for prospective and active client practices, kept to manage the relationship." },
      ],
    },
    {
      id: "health",
      num: "02",
      title: "Healthcare data & HIPAA limitations",
      paras: [
        "This Privacy Policy governs our website and ordinary business interactions. It does not govern Protected Health Information (PHI) we handle on a client’s behalf.",
        "When we operate as a Business Associate, all PHI is governed by HIPAA and the Business Associate Agreement we sign with each client — not this policy. We never use client PHI for marketing, and we never input PHI into any tool without a signed BAA.",
      ],
      calloutTitle: "PHI is handled under your BAA",
      calloutBody: "If you’re a patient of a practice we support, your records are governed by that practice’s privacy notice and our BAA with them. Please direct PHI requests to your provider.",
    },
    {
      id: "use",
      num: "03",
      title: "How we use information",
      paras: ["We use the information above to respond to you, deliver and improve our services, keep our systems secure, and meet our legal and compliance obligations."],
      list: [
        { label: "To respond.", text: "Answer inquiries, schedule calls, and provide estimates." },
        { label: "To operate.", text: "Run, maintain, and improve the website and our services." },
        { label: "To protect.", text: "Detect, prevent, and respond to security and compliance risks." },
        { label: "To comply.", text: "Satisfy legal, regulatory, audit, and contractual requirements." },
      ],
    },
    {
      id: "security",
      num: "04",
      title: "How we protect it",
      paras: [
        "Security isn’t a feature we add at the end — it’s designed in. Information is protected with encryption in transit and at rest, access controls on a least-privilege basis, multi-factor authentication, company-managed devices, and routine review.",
        "Our workforce is trained on data protection, and access to sensitive information is limited to those who genuinely need it to do their work.",
      ],
    },
    {
      id: "retention",
      num: "05",
      title: "How long we keep it",
      paras: ["We keep information only as long as needed for the purpose it was collected, then delete or anonymize it. Compliance and audit records may be retained for up to six years to meet healthcare recordkeeping standards. You can ask us to delete information we’re not legally required to keep."],
    },
    {
      id: "third",
      num: "06",
      title: "Third-party services",
      paras: [
        "We use a small set of vetted vendors — for analytics, hosting, communication, and AI-augmented workflows. Each is selected for its security posture, and any vendor that could touch PHI must sign a HIPAA Business Associate Agreement before we use it.",
        "We don’t sell or rent your information to anyone, and we don’t allow vendors to use it for their own purposes.",
      ],
    },
    {
      id: "rights",
      num: "07",
      title: "Your rights & choices",
      paras: ["You’re in control of your information. Depending on where you live, you may have additional rights under applicable law."],
      list: [
        { label: "Access & correction.", text: "Ask what we hold about you and request corrections." },
        { label: "Deletion.", text: "Request deletion of information we’re not required to retain." },
        { label: "Opt-out.", text: "Unsubscribe from communications and disable non-essential cookies." },
        { label: "Complaint.", text: "Raise a concern with us directly — we take it seriously and respond." },
      ],
    },
    {
      id: "contact",
      num: "08",
      title: "Contact us",
      paras: [
        "Questions, requests, or concerns about this policy? Email our privacy team at privacy@carentix.com, or reach us at hello@carentix.com. We respond to verified requests promptly.",
        "Carentix LLC · a Wyoming company. We may update this policy as our services evolve; material changes will be posted here with a new effective date.",
      ],
    },
  ],
  cta: {
    title: "Questions about your data or ours?",
    body: "Our privacy and compliance team answers real questions from real people. Reach out any time.",
    email: "privacy@carentix.com",
  },
};

export default function Page() {
  return <LegalPage data={data} />;
}
