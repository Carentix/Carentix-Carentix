import { PageHero } from "@/components/shared/PageHero";
import { DocSection } from "@/components/shared/DocSection";
import { useScrollTop } from "@/hooks/useScrollTop";
import { useDocumentHead } from "@/hooks/useDocumentHead";

export function BaaPage() {
  useScrollTop();
  useDocumentHead({
    title: "Business Associate Agreement (BAA) — Carentix",
    description:
      "Carentix signs a Business Associate Agreement before any access to protected health information. Review the key terms of our standard BAA and request the full template.",
    path: "/baa",
    image: "/images/hero-baa.webp",
  });
  return (
    <>
      <PageHero
        image="/images/hero-baa.webp"
        imageAlt="A signed agreement protecting patient information"
        eyebrow="Business Associate Agreement"
        title="A BAA is signed before we ever touch protected health information."
        lead="This overview describes the Business Associate Agreement Carentix executes with every client practice, as required by HIPAA. It is a summary — the binding document is the executed BAA itself."
      />
      <div className="mx-auto max-w-[820px] px-8 pb-24">
        <DocSection title="Why it comes first">
          <p>
            Under HIPAA, a covered entity may only share PHI with a business
            associate under a signed BAA. We execute ours{" "}
            <span className="font-medium text-navy">before any PHI access</span> —
            it is a precondition of onboarding, not an afterthought.
          </p>
        </DocSection>
        <DocSection title="What the BAA obligates us to">
          <ul className="list-disc space-y-2 pl-5">
            <li>Use and disclose PHI only as permitted by the agreement and law</li>
            <li>Implement administrative, physical, and technical safeguards</li>
            <li>Report security incidents and breaches promptly</li>
            <li>Ensure subcontractors agree to the same restrictions (sub-BA obligations)</li>
            <li>Make PHI available for access, amendment, and accounting as required</li>
            <li>Return or destroy PHI at the end of the engagement</li>
          </ul>
        </DocSection>
        <DocSection title="Legal liability, not just contractual comfort">
          <p>
            Because we sign a BAA, Carentix is directly liable under HIPAA for the
            safeguards it describes — the same standard of accountability a
            covered entity carries.
          </p>
        </DocSection>
        <DocSection eyebrow="Contact" title="Request the full template">
          <p>
            Compliance office —{" "}
            <a className="font-medium text-sage-text underline-offset-2 hover:underline" href="mailto:compliance@carentix.com">
              compliance@carentix.com
            </a>
          </p>
          <p className="text-ink/70">
            This overview is a template summary and should be reviewed by counsel
            before launch.
          </p>
        </DocSection>
      </div>
    </>
  );
}
