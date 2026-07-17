import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type NavItem = { label: string; to: string; hash?: string };

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
      <div
        className={cn(
          "mx-4 mb-3 origin-top overflow-hidden rounded-2xl border border-navy/10 bg-paper shadow-2xl transition-all lg:hidden",
          open ? "max-h-[420px] opacity-100" : "pointer-events-none max-h-0 opacity-0",
        )}
      >
        <div className="flex flex-col gap-1 p-4">
          {NAV.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              hash={item.hash}
              onClick={() => setOpen(false)}
              className="border-b border-navy/[0.06] px-2 py-3 text-base font-medium text-navy"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild variant="gold" className="mt-3 w-full">
            <Link to="/" hash="contact" onClick={() => setOpen(false)}>
              Schedule a call →
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
