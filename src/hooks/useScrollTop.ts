import { useEffect } from "react";

/** Forces the window to the top on mount — pages always open at the hero,
 *  never mid-scroll. Mirrors the behavior in the HTML prototypes. */
export function useScrollTop() {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      try {
        history.scrollRestoration = "manual";
      } catch {
        /* no-op */
      }
    }
    window.scrollTo(0, 0);
  }, []);
}
