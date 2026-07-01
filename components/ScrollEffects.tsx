"use client";

import { useEffect } from "react";

/**
 * ScrollEffects reproduces the behavior of the approved design's runtime:
 *  - [data-reveal] elements slide up into place when scrolled into view
 *  - [data-count] elements animate a number up to their target
 *  - .cx-mag elements get a subtle magnetic pull toward the cursor
 * All effects respect prefers-reduced-motion, matching the source design.
 *
 * It renders nothing; it just wires up global listeners for the current route.
 */
export default function ScrollEffects() {
  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const revealEls = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );
    if (reduce) {
      revealEls.forEach((el) => {
        el.classList.add("cx-seen");
        el.style.transform = "none";
      });
    }

    const counters = Array.from(
      document.querySelectorAll<HTMLElement & { _done?: boolean }>(
        "[data-count]"
      )
    );

    const runCount = (el: HTMLElement & { _done?: boolean }) => {
      if (el._done) return;
      el._done = true;
      const target = parseFloat(el.dataset.count || "");
      const dec = parseInt(el.dataset.decimals || "0", 10);
      const suf = el.dataset.suffix || "";
      if (isNaN(target)) return;
      if (reduce) {
        el.textContent = target.toFixed(dec) + suf;
        return;
      }
      const dur = 1600;
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = (target * eased).toFixed(dec) + suf;
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = target.toFixed(dec) + suf;
      };
      requestAnimationFrame(tick);
    };

    const scan = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (reduce) return;
      for (const el of revealEls) {
        if (el.classList.contains("cx-seen")) continue;
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.92 && r.bottom > 0) {
          el.classList.add("cx-seen");
          el.style.transform = "none";
        }
      }
      for (const el of counters) {
        if (el._done) continue;
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.86 && r.bottom > 0) runCount(el);
      }
    };

    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        scan();
      });
    };
    document.addEventListener("scroll", onScroll, {
      capture: true,
      passive: true,
    });
    window.addEventListener("resize", onScroll, { passive: true });

    let polls = 0;
    const poll = window.setInterval(() => {
      scan();
      if (++polls > 60) window.clearInterval(poll);
    }, 120);
    scan();

    // Magnetic buttons
    const mag: Array<[HTMLElement, (e: MouseEvent) => void, () => void]> = [];
    if (
      !reduce &&
      window.matchMedia &&
      window.matchMedia("(pointer:fine)").matches
    ) {
      document.querySelectorAll<HTMLElement>(".cx-mag").forEach((btn) => {
        const move = (e: MouseEvent) => {
          const r = btn.getBoundingClientRect();
          btn.style.transform =
            "translate(" +
            (e.clientX - (r.left + r.width / 2)) * 0.16 +
            "px," +
            (e.clientY - (r.top + r.height / 2)) * 0.26 +
            "px)";
        };
        const leave = () => {
          btn.style.transform = "translate(0,0)";
        };
        btn.addEventListener("mousemove", move);
        btn.addEventListener("mouseleave", leave);
        mag.push([btn, move, leave]);
      });
    }

    return () => {
      document.removeEventListener("scroll", onScroll, { capture: true });
      window.removeEventListener("resize", onScroll);
      window.clearInterval(poll);
      mag.forEach(([b, m, l]) => {
        b.removeEventListener("mousemove", m);
        b.removeEventListener("mouseleave", l);
      });
    };
  }, []);

  return null;
}
