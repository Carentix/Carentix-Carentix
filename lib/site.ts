/**
 * Site-wide navigation and footer data, ported from the approved homepage.
 * The approved design linked pages by ".dc.html" filenames; those are mapped
 * to the App Router routes below.
 */

export const SITE_URL = "https://carentix.com";

export const NAV_LINKS = [
  { label: "What we handle", href: "/#capabilities" },
  { label: "How it works", href: "/#process" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Careers", href: "/careers" },
  { label: "Compliance", href: "/#compliance" },
  { label: "FAQ", href: "/#faq" },
] as const;

export const CTA = { label: "Schedule a call", href: "/#contact" } as const;

export const CONTACT = {
  email: "info@carentix.com",
  phone: "(628) 300-3310",
  phoneHref: "tel:+16283003310",
} as const;

export const FOOTER_COLS = [
  {
    heading: "Company",
    links: [
      { label: "What we handle", href: "/#capabilities" },
      { label: "How it works", href: "/#process" },
      { label: "Pricing", href: "/#pricing" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    heading: "Compliance",
    links: [
      { label: "HIPAA Compliance", href: "/hipaa-compliance" },
      {
        label: "Business Associate Agreement",
        href: "/business-associate-agreement",
      },
      { label: "Our Accessibility Commitment", href: "/accessibility" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { label: "Schedule a call", href: "/#contact" },
      { label: CONTACT.email, href: `mailto:${CONTACT.email}` },
      { label: CONTACT.phone, href: CONTACT.phoneHref },
    ],
  },
] as const;
