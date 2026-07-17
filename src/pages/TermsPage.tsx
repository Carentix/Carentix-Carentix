import { PageHero } from "@/components/shared/PageHero";
import { DocSection } from "@/components/shared/DocSection";
import { useScrollTop } from "@/hooks/useScrollTop";
import { useDocumentHead } from "@/hooks/useDocumentHead";
import { PAGE_SEO } from "@/lib/site";

export function TermsPage() {
  useScrollTop();
  useDocumentHead(PAGE_SEO.terms);
  return (
    <>
      <PageHero
        image="/images/hero-terms.png"
        imageAlt="A calm, professional healthcare partnership moment"
        eyebrow="Terms of Service"
        title="The terms that govern this site and your engagement with us."
        lead="Last updated: June 2026. Using this website means you agree to these terms. Your actual service relationship with Carentix is governed by a separate written services agreement."
      />
      <div className="mx-auto max-w-[820px] px-8 pb-24">
        <DocSection title="Use of this site">
          <p>
            This site is provided for informational purposes. Pricing shown —
            including any calculator output — is an illustrative estimate, not an
            offer. Your confirmed pricing and scope live in a signed services
            agreement.
          </p>
        </DocSection>
        <DocSection title="The services agreement controls">
          <p>
            Nothing on this website creates a service contract. Engagements begin
            only when both parties sign a written services agreement and, where
            PHI is involved, a Business Associate Agreement.
          </p>
        </DocSection>
        <DocSection title="Intellectual property">
          <p>
            The Carentix name, mark, and site content are the property of Carentix
            LLC. You may not copy or reuse them without written permission.
          </p>
        </DocSection>
        <DocSection title="Disclaimers & limitation of liability">
          <p>
            The site is provided “as is.” To the fullest extent permitted by law,
            Carentix is not liable for indirect or consequential damages arising
            from your use of the site.
          </p>
        </DocSection>
        <DocSection eyebrow="Contact" title="Questions about these terms">
          <p>
            Legal —{" "}
            <a className="font-medium text-sage underline-offset-2 hover:underline" href="mailto:legal@carentix.com">
              legal@carentix.com
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
