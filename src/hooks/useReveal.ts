import { useEffect, useRef, useState } from "react";

/**
 * Scroll-reveal hook. Returns a ref + a `shown` flag.
 * Attach the ref to an element with the `reveal` utility class and
 * bind `data-shown={shown}`. Respects prefers-reduced-motion.
 *
 * Example:
 *   const { ref, shown } = useReveal<HTMLDivElement>();
 *   <div ref={ref} data-shown={shown} className="reveal">…</div>
 */
export function useReveal<T extends HTMLElement>(options?: {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}) {
  const { threshold = 0.15, rootMargin = "0px 0px -8% 0px", once = true } =
    options ?? {};
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            if (once) io.unobserve(entry.target);
          } else if (!once) {
            setShown(false);
          }
        });
      },
      { threshold, rootMargin },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, shown };
}
