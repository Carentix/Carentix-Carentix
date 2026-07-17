import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export type NavItem = { label: string; to: string; hash?: string };

/** Collapsible mobile navigation panel — controlled by SiteHeader. */
export function MobileNav({
  open,
  items,
  onClose,
}: {
  open: boolean;
  items: NavItem[];
  onClose: () => void;
}) {
  return (
    <div
      id="mobile-nav"
      className={
        "mx-4 mb-3 origin-top overflow-hidden rounded-2xl border border-navy/10 bg-paper shadow-2xl transition-all lg:hidden " +
        (open
          ? "max-h-[420px] opacity-100"
          : "pointer-events-none max-h-0 opacity-0")
      }
    >
      <div className="flex flex-col gap-1 p-4">
        {items.map((item) => (
          <Link
            key={item.label}
            to={item.to}
            hash={item.hash}
            onClick={onClose}
            className="border-b border-navy/[0.06] px-2 py-3 text-base font-medium text-navy"
          >
            {item.label}
          </Link>
        ))}
        <Button asChild variant="gold" className="mt-3 w-full">
          <Link to="/" hash="contact" onClick={onClose}>
            Schedule a call →
          </Link>
        </Button>
      </div>
    </div>
  );
}
