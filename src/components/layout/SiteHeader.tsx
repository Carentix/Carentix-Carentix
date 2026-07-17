import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import { MobileNav, type NavItem } from "@/components/layout/MobileNav";

/** Primary nav. `#anchor` links target sections on the home route. */
const NAV: NavItem[] = [
  { label: "What we handle", to: "/", hash: "capabilities" },
  { label: "How it works", to: "/", hash: "process" },
  { label: "Pricing", to: "/", hash: "pricing" },
  { label: "Compliance", to: "/compliance" },
  { label: "FAQ", to: "/", hash: "faq" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-navy/[0.07] bg-paper/[0.78] backdrop-blur-md backdrop-saturate-150">
      <nav className="mx-auto flex max-w-site items-center justify-between gap-6 px-8 py-4">
        <Link to="/" onClick={() => setOpen(false)} aria-label="Carentix home">
          <Logo />
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-9 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              hash={item.hash}
              className="link-underline text-[14.5px] font-medium text-navy"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild variant="gold" size="sm">
            <Link to="/" hash="contact">
              Schedule a call <span aria-hidden>→</span>
            </Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-navy/15 bg-paper lg:hidden"
        >
          {open ? (
            <X className="h-5 w-5 text-navy" />
          ) : (
            <Menu className="h-5 w-5 text-navy" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <MobileNav open={open} items={NAV} onClose={() => setOpen(false)} />
    </header>
  );
}
