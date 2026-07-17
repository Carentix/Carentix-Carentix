import { PageHero } from "@/components/shared/PageHero";
import { DocSection } from "@/components/shared/DocSection";
import { useScrollTop } from "@/hooks/useScrollTop";
import { useDocumentHead } from "@/hooks/useDocumentHead";
import { PAGE_SEO } from "@/lib/site";

export function AccessibilityPage() {
  useScrollTop();
  useDocumentHead(PAGE_SEO.accessibility);
  return (
    <>
      <PageHero
        image="/images/hero-accessibility.png"
        imageAlt="An inclusive, welcoming healthcare setting"
        eyebrow="Accessibility"
        title="Care should be accessible — and so should our website."
        lead="We are committed to making carentix.com usable for everyone, and we treat accessibility as ongoing work rather than a one-time checkbox."
      />
      <div className="mx-auto max-w-[820px] px-8 pb-24">
        <DocSection title="Our commitment">
          <p>
            We aim to conform to WCAG 2.1 AA. That means readable contrast,
            keyboard-navigable interactions, meaningful alternative text, and a
            structure that works with assistive technologies.
          </p>
        </DocSection>
        <DocSection title="What we've built in">
          <ul className="list-disc space-y-2 pl-5">
            <li>Semantic headings and landmarks for screen-reader navigation</li>
            <li>Visible focus states and full keyboard operability</li>
            <li>Color contrast that meets AA on text and interactive elements</li>
            <li>Respect for the “reduce motion” system preference</li>
          </ul>
        </DocSection>
        <DocSection title="Ongoing work">
          <p>
            Accessibility is never “done.” We review new pages and components as
            they ship and welcome reports of anything that gets in your way.
          </p>
        </DocSection>
        <DocSection eyebrow="Contact" title="Tell us where we can do better">
          <p>
            Email us and we'll respond promptly —{" "}
            <a className="font-medium text-sage underline-offset-2 hover:underline" href="mailto:accessibility@carentix.com">
              accessibility@carentix.com
            </a>
          </p>
        </DocSection>
      </div>
    </>
  );
}
