import type { Metadata, Viewport } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import ScrollEffects from "@/components/ScrollEffects";
import CalendlyPopup from "@/components/CalendlyPopup";
import { SITE_URL } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-source-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Carentix — A managed, compliant healthcare operations partner",
    template: "%s · Carentix",
  },
  description:
    "Carentix is a managed, compliant operations partner that handles scheduling, prior authorizations, clinical scribing, records, referrals, and patient communications — so your providers can focus entirely on patient care.",
  applicationName: "Carentix",
  keywords: [
    "healthcare operations",
    "medical back office",
    "prior authorizations",
    "clinical scribing",
    "medical scheduling",
    "HIPAA compliant staffing",
    "healthcare virtual assistants",
  ],
  authors: [{ name: "Carentix LLC" }],
  creator: "Carentix LLC",
  publisher: "Carentix LLC",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Carentix",
    url: SITE_URL,
    title: "Carentix — A managed, compliant healthcare operations partner",
    description:
      "A managed, compliant operations partner — so your providers can focus entirely on patient care.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Carentix — you built your practice to care for patients, not paperwork.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carentix — A managed, compliant healthcare operations partner",
    description:
      "A managed, compliant operations partner — so your providers can focus entirely on patient care.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "healthcare",
};

export const viewport: Viewport = {
  themeColor: "#13294B",
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Carentix",
  legalName: "Carentix LLC",
  url: SITE_URL,
  logo: `${SITE_URL}/icon-512.png`,
  description:
    "A managed, compliant healthcare operations partner handling scheduling, prior authorizations, clinical scribing, records, referrals, and patient communications.",
  email: "info@carentix.com",
  telephone: "+1-628-300-3310",
  address: {
    "@type": "PostalAddress",
    streetAddress: "30 N Gould St, STE R",
    addressLocality: "Sheridan",
    addressRegion: "WY",
    postalCode: "82801",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "info@carentix.com",
    telephone: "+1-628-300-3310",
    areaServed: "US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceSerif.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <div
          style={{
            position: "relative",
            fontFamily: "var(--font-inter), 'Inter', system-ui, sans-serif",
            color: "#4A4A45",
            overflowX: "hidden",
          }}
        >
          <a href="#capabilities" className="cx-skip">
            Skip to content
          </a>

          {/* Grain overlay (ported verbatim from the approved design) */}
          <svg
            aria-hidden="true"
            style={{
              position: "fixed",
              inset: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              zIndex: 4,
              opacity: 0.045,
              mixBlendMode: "multiply",
            }}
          >
            <filter id="cxGrain">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.9"
                numOctaves={2}
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#cxGrain)" />
          </svg>

          <Nav />
          {children}
          <Footer />
          <CookieConsent />
          <ScrollEffects />
          <CalendlyPopup />
        </div>
      </body>
    </html>
  );
}
