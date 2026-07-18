import type { Metadata } from "next";
import type { ReactNode } from "react";
import LegalPage, { type LegalPageData } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Carentix is committed to making its website usable for as many people as possible, working toward WCAG 2.1 AA. Report a barrier and we will help.",
};

function Ic({ children }: { children: ReactNode }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  );
}

const data: LegalPageData = {
  eyebrow: "Accessibility",
  title: "Accessibility Statement",
  intro:
    "We want everyone to be able to use the Carentix website — including people who rely on assistive technology. Accessibility is part of how we design, and we treat it as ongoing work rather than a one-time checkbox.",
  meta: [
    { label: "Target standard", value: "WCAG 2.1 AA" },
    { label: "Last reviewed", value: "June 30, 2026" },
    { label: "Feedback", value: "support@carentix.com" },
  ],
  heroImage: { src: "/images/accessibility-hero.jpg", alt: "An inclusive, welcoming healthcare setting", objectPosition: "center 35%" },
  glance: [
    {
      icon: (
        <Ic>
          <path d="M20 7 9 18l-5-5" />
        </Ic>
      ),
      title: "Working toward WCAG 2.1 AA",
      body: "We design and test toward the WCAG 2.1 AA standard and treat conformance as ongoing work.",
    },
    {
      icon: (
        <Ic>
          <rect x="2" y="4" width="20" height="14" rx="2" />
          <path d="M6 8h.01M10 8h.01M14 8h.01M7 12h10M8 20h8" />
        </Ic>
      ),
      title: "Built to be operable",
      body: "Keyboard navigation, readable contrast, responsive layout, and reduced-motion support are part of how we build.",
    },
    {
      icon: (
        <Ic>
          <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4L3 21l1.1-3.5A8.4 8.4 0 1 1 21 11.5Z" />
        </Ic>
      ),
      title: "We want your feedback",
      body: "Hit a barrier or need another format? Email support@carentix.com and we will help.",
    },
  ],
  sections: [
    {
      id: "commitment",
      title: "Our commitment",
      paras: ["Carentix is committed to making its website usable for as many people as possible, including those who use assistive technologies such as screen readers, keyboard navigation, and screen magnification. We view accessibility as part of good design and an ongoing responsibility, not a one-time project."],
    },
    {
      id: "standard",
      title: "The standard we work toward",
      paras: ["We aim to conform with the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA — the benchmark referenced by accessibility laws in the United States and internationally. Conformance is a goal we design and test toward; some content may not yet fully meet every criterion, and we work to close gaps as we find them."],
    },
    {
      id: "measures",
      title: "What we do to support access",
      paras: ["Accessibility is considered as we design and build pages."],
      list: [
        { label: "Semantic structure.", text: "Meaningful headings, landmarks, and reading order so assistive technology can navigate the page." },
        { label: "Keyboard support.", text: "Interactive elements such as menus, accordions, and the cookie dialog are reachable and operable by keyboard." },
        { label: "Readable contrast and text.", text: "Color choices and type sizes chosen for legibility, with content that reflows on smaller screens and when zoomed." },
        { label: "Reduced motion.", text: "Animations are minimized and respect your operating-system ‘reduce motion’ preference." },
      ],
    },
    {
      id: "labels",
      title: "Images, icons & controls",
      paras: ["Decorative graphics are hidden from assistive technology, and we work to give meaningful names to icon-only controls so their purpose is announced. If you encounter a control whose purpose is unclear with a screen reader, please let us know and we will fix it."],
    },
    {
      id: "thirdparty",
      title: "Third-party content",
      paras: ["Some elements — such as embedded fonts or future third-party tools — are provided by others and may not be fully under our control. Where a third-party component creates a barrier, we will look for an accessible alternative or provide the information another way on request."],
    },
    {
      id: "limitations",
      title: "Known limitations",
      paras: ["Because our site evolves and is reviewed periodically, some areas may not yet fully meet WCAG 2.1 AA at all times. We treat reported barriers as priorities and aim to remediate them promptly. This statement reflects our status as of the last review date shown above."],
    },
    {
      id: "feedback",
      title: "Feedback and requesting help",
      paras: ["If you have difficulty using any part of this site, need information in an alternative format, or want to report a barrier, please contact us at support@carentix.com. Tell us the page, what happened, and the assistive technology you were using, and we will respond and help."],
      calloutTitle: "We aim to respond promptly",
      calloutBody: "We treat accessibility feedback as a priority and will work with you to provide the information or function you need while we address the underlying issue.",
    },
    {
      id: "contact",
      title: "Contact",
      paras: [
        "General inquiries: info@carentix.com or (628) 300-3310.",
        "Carentix LLC · 30 N Gould St, STE R, Sheridan, WY 82801, USA. We review and update this statement periodically; the last review date is shown at the top of this page.",
      ],
    },
  ],
  cta: {
    title: "Hit a barrier? Tell us.",
    body: "If any part of this site is hard to use, or you need information in a different format, our team will help and use your feedback to improve.",
    email: "support@carentix.com",
    secondaryLabel: "Read our Privacy Policy",
    secondaryHref: "/privacy-policy",
  },
};

export default function Page() {
  return <LegalPage data={data} />;
}
