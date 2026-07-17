// Keyboard/screen-reader skip link — first focusable element on the page.
export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only rounded-lg bg-navy px-4 py-2 text-sm font-semibold text-paper shadow-lg outline-none focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:ring-2 focus:ring-gold"
    >
      Skip to content
    </a>
  );
}
