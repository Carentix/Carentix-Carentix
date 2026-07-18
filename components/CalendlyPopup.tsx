"use client";

import { useEffect } from "react";
import { BOOKING_URL } from "@/lib/site";

/**
 * Loads Calendly's popup widget once and turns every element tagged with
 * `data-calendly` into a booking trigger. Clicking such an element opens the
 * Calendly scheduling modal instead of navigating.
 *
 * Progressive enhancement: the CTAs are plain <a> elements whose href is the
 * Calendly page, so if this script fails to load (or JS is disabled) the click
 * simply opens Calendly directly.
 */
export default function CalendlyPopup() {
  useEffect(() => {
    // Inject the Calendly stylesheet once (needed for the popup chrome).
    if (!document.getElementById("calendly-css")) {
      const link = document.createElement("link");
      link.id = "calendly-css";
      link.rel = "stylesheet";
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(link);
    }
    // Inject the Calendly widget script once.
    if (!document.getElementById("calendly-js")) {
      const script = document.createElement("script");
      script.id = "calendly-js";
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }

    const onClick = (e: MouseEvent) => {
      // Ignore modified clicks so "open in new tab" still works.
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
        return;
      }
      const target = e.target as HTMLElement | null;
      const trigger = target?.closest?.("[data-calendly]");
      if (!trigger) return;

      const calendly = (window as unknown as {
        Calendly?: { initPopupWidget: (opts: { url: string }) => void };
      }).Calendly;

      if (calendly && typeof calendly.initPopupWidget === "function") {
        e.preventDefault();
        calendly.initPopupWidget({ url: BOOKING_URL });
      }
      // else: let the anchor's default href open Calendly directly.
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
