import { PageHero } from "@/components/shared/PageHero";
import { DocSection } from "@/components/shared/DocSection";
import { useScrollTop } from "@/hooks/useScrollTop";
import { useDocumentHead } from "@/hooks/useDocumentHead";

export function PrivacyPage() {
  useScrollTop();
  useDocumentHead({
    title: "Privacy Policy — Carentix",
    description:
      "How Carentix collects, uses, and protects information through this website and our operations services, including our handling of protected health information under HIPAA.",
    path: "/privacy",
    image: "/images/hero-privacy.webp",
  });
  return (
    <>
      <PageHero
        image="/images/hero-privacy.webp"
        imageAlt="A calm, professional clinical environment"
        eyebrow="Privacy Policy"
        title="Your information, handled with the same care we bring to PHI."
        lead="Last updated: June 2026. This policy explains what we collect on this site, why, and the choices you have. Health information handled on behalf of a client practice is governed by our Business Associate Agreement — not this policy."
      />
      <div className="mx-auto max-w-[820px] px-8 pb-24">
        <DocSection title="Information we collect">
          <p>
            We collect the details you provide when you request a consultation —
            name, practice name, email, phone, specialty, and the operational
            context you share. We also collect standard technical data (device,
            browser, and usage analytics) to keep the site secure and improve it.
          </p>
        </DocSection>
        <DocSection title="How we use it">
          <p>
            To respond to your inquiry, prepare an accurate estimate, and follow
            up about services you've asked about. We do not sell your information.
            We use a small number of vetted processors (for email and analytics)
            under appropriate data-processing terms.
          </p>
        </DocSection>
        <DocSection title="Protected health information (PHI)">
          <p>
            When Carentix handles PHI for a client practice, that relationship is
            governed by a signed{" "}
            <span className="font-medium text-navy">Business Associate Agreement</span>,
            HIPAA, and our documented safeguards — not by this website policy. PHI
            is never processed through this marketing site.
          </p>
        </DocSection>
        <DocSection title="Your choices">
          <p>
            You can request access to, correction of, or deletion of the contact
            information you've shared, and you can opt out of follow-up at any
            time. To exercise any of these, email us at the address below.
          </p>
        </DocSection>
        <DocSection eyebrow="Contact" title="Questions about privacy">
          <p>
            Privacy office —{" "}
            <a className="font-medium text-sage-text underline-offset-2 hover:underline" href="mailto:privacy@carentix.com">
              privacy@carentix.com
            </a>
          </p>
          <p className="text-ink/70">
            This document is a template and should be reviewed by counsel before
            launch.
          </p>
        </DocSection>
      </div>
    </>
  );
}
