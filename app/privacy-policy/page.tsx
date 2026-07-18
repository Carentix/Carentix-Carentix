import type { Metadata } from "next";
import type { ReactNode } from "react";
import LegalPage, { type LegalPageData } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Carentix collects, uses, and protects information across our website and services — in plain English. Patient health information is governed separately by HIPAA and our Business Associate Agreements.",
};

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
  heroImage: { src: "/images/privacy-hero.jpg", alt: "A calm, professional clinical environment", objectPosition: "center 35%" },
  glance: [
    {
      icon: (
        <Ic>
          <path d="M18 6 6 18M6 6l12 12" />
          <circle cx="12" cy="12" r="10" />
        </Ic>
      ),
      title: "We don’t sell your data",
      body: "We do not sell personal information collected through the Site for monetary consideration, and we honor Global Privacy Control opt-out signals.",
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
      body: "Reasonable encryption, access controls, MFA, and managed devices help protect the data we hold.",
    },
  ],
  sections: [
    {
      id: "scope",
      title: "Scope and who we are",
      paras: [
        "Carentix LLC (“Carentix,” “we,” “us”) provides remote healthcare administrative services to providers in the United States. This Privacy Policy explains how we handle personal information in connection with www.carentix.com (the “Site”) and our general business operations. The Site is directed to business contacts in the United States and is not intended for individuals in the European Economic Area or United Kingdom.",
        "This policy does not apply to information we process as a Business Associate on behalf of provider clients. That information, including any Protected Health Information, is governed by our Business Associate Agreements and our clients’ own privacy notices — not this policy.",
      ],
    },
    {
      id: "collect",
      title: "Information we collect",
      paras: ["We collect what we need to run the Site, respond to inquiries, and operate our business."],
      list: [
        { label: "Information you provide.", text: "Name, business email, company, job title, phone, and message content when you contact us, request information, or apply for a role." },
        { label: "Collected automatically.", text: "Through cookies and similar technologies: IP address, browser and device information, pages visited, and referring site." },
        { label: "Business records.", text: "Contact and contract details for prospective and active client practices, kept to manage the relationship." },
        { label: "What we do not collect here.", text: "We do not knowingly collect Protected Health Information or patient data through the Site; it is intended for business inquiries, not patient health information." },
      ],
    },
    {
      id: "health",
      title: "Healthcare data and HIPAA limitations",
      paras: [
        "This Privacy Policy governs our Site and ordinary business interactions. It does not govern Protected Health Information (PHI) we handle on a client’s behalf.",
        "When we operate as a Business Associate, PHI is governed by HIPAA and the Business Associate Agreement we sign with each client — not this policy. We do not use client PHI for marketing, and our standard process is not to input PHI into any tool without a signed BAA.",
      ],
    },
    {
      id: "use",
      title: "How we use information",
      paras: ["We use the information we collect to respond to you, deliver and improve the Site and our services, keep our systems secure, process job applications, and meet our legal and compliance obligations. We do not use it for cross-context behavioral advertising."],
    },
    {
      id: "share",
      title: "How we share information",
      paras: ["We do not sell personal information collected through the Site for monetary consideration. We share information only as needed to operate, and we require recipients to protect it."],
      list: [
        { label: "Service providers.", text: "Vendors that perform functions on our behalf — website hosting, analytics, email delivery, and customer-relationship management — under confidentiality obligations." },
        { label: "Professional advisors.", text: "Legal and accounting advisors, as needed." },
        { label: "Legal and Safety.", text: "Regulators or others where required by law, or to protect rights, property, or safety." },
        { label: "Business transfers.", text: "A successor entity in connection with a merger, acquisition, or sale of assets." },
      ],
    },
    {
      id: "cookies",
      title: "Cookies, tracking and your choices",
      paras: [
        "The Site uses essential cookies to operate and, with your consent, optional analytics cookies to understand usage. You can manage optional cookies any time through our cookie banner — use the “Cookie preferences” link in the footer.",
        "We recognize and honor Global Privacy Control (GPC) browser signals as a valid opt-out of optional cookies and any “sale” or “share” as those terms are defined under California law.",
      ],
    },
    {
      id: "security",
      title: "How we protect it",
      paras: [
        "We maintain reasonable administrative, technical, and physical safeguards designed to protect personal information — including encryption in transit and at rest, least-privilege access controls, multi-factor authentication, and company-managed devices. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.",
        "Our workforce is trained on data protection, and access to sensitive information is limited to those who need it for their work.",
      ],
    },
    {
      id: "retention",
      title: "How long we keep it",
      paras: [
        "We retain Site and business-inquiry data only as long as needed for the purposes described here — generally up to 24–36 months absent an active relationship — then delete or anonymize it.",
        "This is distinct from PHI: PHI handled under a BAA follows the retention terms of that agreement and applicable healthcare recordkeeping standards (commonly up to six years). You can ask us to delete information we are not legally required to keep.",
      ],
    },
    {
      id: "rights",
      title: "Your privacy rights (incl. CCPA/CPRA)",
      paras: ["Depending on where you live, you may have rights over your personal information. California residents have specific rights under the CCPA/CPRA; we extend the core choices below to all Site visitors and do not discriminate against you for exercising them."],
      list: [
        { label: "Right to know.", text: "The categories of personal information we collect (identifiers, professional/contact details, internet activity), the sources, purposes, and the categories of recipients listed above." },
        { label: "Access, correct, delete.", text: "Request a copy of, correction of, or deletion of personal information we hold and are not required to retain." },
        { label: "Opt out of sale/share.", text: "We do not sell or share personal information for cross-context behavioral advertising; we also honor GPC signals as an opt-out." },
        { label: "Limit sensitive PI & appeal.", text: "Request that we limit use of sensitive personal information, and appeal or lodge a complaint with us or a supervisory authority." },
      ],
    },
    {
      id: "children",
      title: "Children’s privacy",
      paras: ["The Site is not directed to individuals under the age of eighteen (18), and we do not knowingly collect personal information from children. If we learn we have collected such information without appropriate consent, we will take steps to delete it."],
    },
    {
      id: "contact",
      title: "Changes and contact",
      paras: [
        "We may update this Privacy Policy from time to time and will post the updated version with a revised “Last Updated” date; material changes will be communicated as required by law.",
        "To exercise your rights or ask a question, email us at info@carentix.com or call (628) 300-3310. Carentix LLC · 30 N Gould St, STE R, Sheridan, WY 82801, USA.",
      ],
    },
  ],
  cta: {
    title: "Questions about your data or ours?",
    body: "Our privacy and compliance team answers real questions from real people. Reach out any time.",
    email: "info@carentix.com",
  },
};

export default function Page() {
  return <LegalPage data={data} />;
}
