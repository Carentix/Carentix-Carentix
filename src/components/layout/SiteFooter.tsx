import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/shared/Logo";

type FooterLink = { label: string; to?: string; hash?: string; href?: string };
type FooterColumn = { heading: string; links: FooterLink[] };

const COLUMNS: FooterColumn[] = [
  {
    heading: "Company",
    links: [
      { label: "What we handle", to: "/", hash: "capabilities" },
      { label: "How it works", to: "/", hash: "process" },
      { label: "Pricing", to: "/", hash: "pricing" },
      { label: "Compliance", to: "/compliance" },
      { label: "Careers", to: "/careers" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "HIPAA FAQ", to: "/compliance" },
      { label: "Pricing guide", to: "/", hash: "pricing" },
      { label: "Accessibility", to: "/accessibility" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { label: "Schedule a call", to: "/", hash: "contact" },
      { label: "hello@carentix.com", href: "mailto:hello@carentix.com" },
    ],
  },
];

const LEGAL: { label: string; to: string }[] = [
  { label: "Privacy policy", to: "/privacy" },
  { label: "Terms of service", to: "/terms" },
  { label: "BAA template", to: "/baa" },
];

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep px-8 pb-8 pt-16 text-paper/70">
      <div className="mx-auto max-w-site">
        <div className="grid gap-10 border-b border-paper/10 pb-11 md:grid-cols-[1.6fr_repeat(3,1fr)]">
          <div>
            <Link to="/" className="mb-[18px] inline-flex">
              <Logo tone="paper" />
            </Link>
            <p className="max-w-[320px] text-[14.5px] leading-relaxed">
              A managed, compliant operations partner — so your providers can
              focus entirely on patient care.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <div className="mb-[18px] text-xs font-semibold uppercase tracking-[0.1em] text-paper">
                {col.heading}
              </div>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {"href" in link && link.href ? (
                      <a
                        href={link.href}
                        className="link-underline text-sm text-paper/70 hover:text-paper"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.to ?? "/"}
                        hash={link.hash}
                        className="link-underline text-sm text-paper/70 hover:text-paper"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 text-[13px] text-paper/55">
          <div>© {new Date().getFullYear()} Carentix LLC</div>
          <div className="flex flex-wrap gap-6">
            {LEGAL.map((l) => (
              <Link key={l.label} to={l.to} className="hover:text-paper/80">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
