import type { Metadata } from "next";
import type { ReactNode } from "react";
import LegalPage, { type LegalPageData } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern use of the Carentix website and our healthcare operations services — written in plain English, not boilerplate.",
};

function Ic({ children }: { children: ReactNode }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  );
}

const data: LegalPageData = {
  eyebrow: "Legal · Terms",
  title: "Terms of Service",
  intro:
    "These terms set the ground rules for using our website and engaging our services. We’ve written them to be read — clearly, honestly, and without burying anything that matters. Using the site means you agree to them.",
  meta: [
    { label: "Effective", value: "June 2026" },
    { label: "Last updated", value: "June 30, 2026" },
    { label: "Version", value: "1.0" },
  ],
  heroImage: { src: "/images/terms-hero.jpg", alt: "A calm, professional healthcare partnership moment", objectPosition: "center" },
  glance: [
    {
      icon: (
        <Ic>
          <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2Z" />
          <path d="M19 3v18M8 8h7M8 12h7" />
        </Ic>
      ),
      title: "Written to be read",
      body: "Plain English, not boilerplate. Nothing that matters is buried in fine print.",
    },
    {
      icon: (
        <Ic>
          <path d="M9 12h6M9 16h6" />
          <rect x="4" y="3" width="16" height="18" rx="2" />
          <path d="M9 7h6" />
        </Ic>
      ),
      title: "Engagements are separate",
      body: "Paid services run under a Master Services Agreement and BAA — those documents control, not this page.",
    },
    {
      icon: (
        <Ic>
          <path d="M19 14c1.5-1.6 3-3.5 3-5.5A3.5 3.5 0 0 0 12 6 3.5 3.5 0 0 0 2 8.5C2 12 7 16 12 20c2-1.6 4.5-3.7 7-6Z" />
        </Ic>
      ),
      title: "We’re not clinicians",
      body: "We handle operations. Clinical decisions always remain with your licensed providers.",
    },
  ],
  sections: [
    {
      id: "acceptance",
      title: "Acceptance of these terms",
      paras: [
        "These Website Terms of Service govern your access to and use of www.carentix.com (the “Site”), operated by Carentix LLC, a Wyoming limited liability company with its registered address at 30 N Gould St, STE R, Sheridan, WY 82801, USA. By accessing or using the Site, you agree to be bound by these Terms. If you do not agree, please do not use the Site.",
        "These Terms govern use of the Site only. They do not govern our healthcare operations services to clients, which are governed by a separately executed Master Services Agreement and related documents that control in the event of any conflict.",
      ],
    },
    {
      id: "eligibility",
      title: "Eligibility & intended use",
      paras: ["The Site is intended for business use by healthcare providers, prospective clients, job applicants, and other business contacts."],
      list: [
        { label: "Business contacts.", text: "It is built for organizations evaluating or working with Carentix, not for the general public." },
        { label: "Not for patients.", text: "The Site is not directed to patients and should not be used to submit health information." },
        { label: "18 or older.", text: "The Site is not directed to individuals under eighteen (18) years of age." },
      ],
    },
    {
      id: "website",
      title: "Use of the Site",
      paras: ["We grant you a limited, non-exclusive, non-transferable, revocable license to use this Site for its intended business purpose, subject to these Terms. The Site is provided as-is and may change or pause for maintenance without notice. When using the Site, you agree not to:"],
      list: [
        { label: "Misuse it.", text: "Use the Site for any unlawful purpose or in violation of these Terms." },
        { label: "Probe security.", text: "Attempt unauthorized access, or interfere with the Site through malware, denial-of-service, or excessive automated requests." },
        { label: "Scrape it.", text: "Harvest or collect information by automated means, except as permitted by the Site’s robots.txt file." },
        { label: "Submit PHI.", text: "Submit Protected Health Information or other patient information through the Site’s contact forms." },
        { label: "Impersonate.", text: "Impersonate any person or entity, or misrepresent your affiliation or the Carentix Certified credential." },
      ],
    },
    {
      id: "inquiries",
      title: "Service inquiries & estimates",
      paras: ["Booking a call, requesting a quote, or receiving a pricing estimate does not create a binding engagement, and pricing shown on the Site is illustrative and non-binding. Estimates depend on the details of your practice. A working relationship begins only when we both sign a written services agreement."],
    },
    {
      id: "engagements",
      title: "Services & client relationships",
      paras: [
        "Our healthcare operations services are governed by a separate Master Services Agreement and, where Protected Health Information is involved, a Business Associate Agreement. Those documents — not this page — control scope, fees, service levels, liability, and data handling for an engagement, and control in the event of any conflict with the Site.",
        "We operate as a partner, not a vendor: we aim to surface problems proactively, report transparently, and remain accountable for outcomes under the standards set in those agreements.",
      ],
    },
    {
      id: "no-medical",
      title: "No medical advice",
      paras: [
        "Carentix professionals handle operations — scheduling, prior authorizations, verification, scribing, records. We are not clinicians, and nothing on this Site or in our services constitutes medical, clinical, or diagnostic advice. Clinical decision-making remains with licensed providers.",
        "Carentix-prepared documentation, scheduling, and authorization work product is subject to provider review and approval before reliance. Clients retain ultimate responsibility for verifying the accuracy of administrative outputs prior to clinical or billing use.",
      ],
      calloutTitle: "The provider is the clinician",
      calloutBody: "We support the administrative work around care. Diagnosis, treatment, and clinical judgment belong to your licensed healthcare professionals, who review and approve administrative output before relying on it.",
    },
    {
      id: "ip",
      title: "Intellectual property & trademarks",
      paras: [
        "The Site and its content — including text, graphics, logos, software, the Carentix Academy curriculum, and the Carentix Certified credential — are owned by Carentix or its licensors and protected by copyright, trademark, and other laws. Nothing here transfers any ownership interest to you.",
        "“Carentix” and associated logos are trademarks of Carentix LLC. You may not reproduce, distribute, modify, or create derivative works from the Site’s content, or use our marks, without our prior written consent, except to share links to public pages.",
      ],
    },
    {
      id: "thirdparty",
      title: "Third-party links",
      paras: ["The Site may contain links to third-party websites. Carentix does not control and is not responsible for the content, privacy practices, or availability of any third-party site. Inclusion of a link does not imply endorsement."],
    },
    {
      id: "liability",
      title: "Disclaimers & limitation of liability",
      paras: [
        "The Site is provided “as is” and “as available” without warranties of any kind, express or implied, including merchantability, fitness for a particular purpose, and non-infringement. Carentix does not warrant that the Site will be uninterrupted, error-free, or secure.",
        "To the maximum extent permitted by law, Carentix will not be liable for any indirect, incidental, consequential, or punitive damages arising from your use of, or inability to use, the Site, and Carentix’s total liability arising from your use of the Site will not exceed one hundred dollars ($100). Liability arising from a paid engagement is governed separately by that engagement’s written agreement.",
      ],
      calloutTitle: "Engagement liability lives in the MSA",
      calloutBody: "This $100 cap applies to Site use only. Liability for paid services — including any caps, indemnities, and insurance — is addressed in your Master Services Agreement, which is the controlling document.",
    },
    {
      id: "indemnification",
      title: "Indemnification",
      paras: ["You agree to indemnify and hold harmless Carentix and its members, officers, employees, and agents from any claim arising from your violation of these Terms or your misuse of the Site."],
    },
    {
      id: "termination",
      title: "Termination",
      paras: ["We may suspend or limit access to the Site if these Terms are violated. Termination of a services engagement is handled under that engagement’s agreement, including any transition obligations — because continuity of your operations matters."],
    },
    {
      id: "law",
      title: "Governing law & disputes",
      paras: [
        "These Terms are governed by the laws of the State of Wyoming, without regard to conflict-of-laws principles. Any dispute arising from these Terms will be resolved by binding arbitration administered by the American Arbitration Association under its Commercial Arbitration Rules, seated in Cheyenne, Wyoming, except that either party may seek injunctive relief in a court of competent jurisdiction to protect intellectual property rights.",
        "Engagement agreements may specify their own governing law and dispute-resolution process, which controls for that engagement.",
      ],
    },
    {
      id: "contact",
      title: "Changes & contact",
      paras: [
        "We may update these Terms from time to time by posting a revised version with an updated “Last Updated” date; continued use after a revision constitutes acceptance. Questions? Email info@carentix.com.",
        "Carentix LLC · 30 N Gould St, STE R, Sheridan, WY 82801, USA.",
      ],
    },
  ],
  cta: {
    title: "Questions about these terms?",
    body: "Our team is happy to walk through anything here before you sign or engage. No legalese required.",
    email: "info@carentix.com",
  },
};

export default function Page() {
  return <LegalPage data={data} />;
}
