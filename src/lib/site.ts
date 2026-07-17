// Central site metadata + per-route SEO. Consumed by useDocumentHead().
// Absolute origin comes from VITE_SITE_URL (see .env.example); falls back to prod.

const RAW_URL =
  (typeof import.meta !== "undefined" && import.meta.env && import.meta.env.VITE_SITE_URL) ||
  "https://carentix.com";

// Normalize: no trailing slash.
const ORIGIN = RAW_URL.replace(/\/+$/, "");

export const SITE = {
  name: "Carentix",
  legalName: "Carentix LLC",
  origin: ORIGIN,
  defaultTitle: "Carentix — Your Healthcare Operations Partner",
  defaultDescription:
    "Carentix is your healthcare operations partner — a dedicated, supervised care team that owns scheduling, prior authorizations, scribing and records, so your providers can focus on patients.",
  ogImage: ORIGIN + "/og-image.png",
  email: "hello@carentix.com",
};

export type PageSeo = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

// One entry per route. `path` must match the router path exactly.
export const PAGE_SEO: Record<string, PageSeo> = {
  home: {
    title: SITE.defaultTitle,
    description: SITE.defaultDescription,
    path: "/",
  },
  compliance: {
    title: "HIPAA Compliance — Carentix",
    description:
      "Compliance is the architecture, not a checkbox. See how Carentix protects PHI: signed BAAs, least-privilege access, audit logging, encryption and documented safeguards.",
    path: "/compliance",
  },
  careers: {
    title: "Careers — Carentix",
    description:
      "Join Carentix. Build a supervised, compliant healthcare operations team that gives providers their time back. See open positions and how we work.",
    path: "/careers",
  },
  privacy: {
    title: "Privacy Policy — Carentix",
    description:
      "How Carentix collects and uses information on this marketing site, and the choices you have. PHI handled for client practices is governed by our BAA, not this policy.",
    path: "/privacy",
  },
  terms: {
    title: "Terms of Service — Carentix",
    description:
      "The terms that govern your use of the Carentix marketing website.",
    path: "/terms",
  },
  baa: {
    title: "Business Associate Agreement — Carentix",
    description:
      "Carentix signs a Business Associate Agreement before any access to protected health information. Review our BAA template and what it covers.",
    path: "/baa",
  },
  accessibility: {
    title: "Accessibility — Carentix",
    description:
      "Carentix is committed to WCAG 2.1 AA. Read our accessibility statement, supported assistive technologies, and how to report an issue.",
    path: "/accessibility",
  },
};

// Organization schema for the home page (JSON-LD).
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.legalName,
    alternateName: SITE.name,
    url: SITE.origin,
    logo: SITE.origin + "/icon-512.png",
    description: SITE.defaultDescription,
    email: SITE.email,
    sameAs: [],
  };
}
