import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { CookiePreferences } from "@/components/shared/CookiePreferences";
import { OPEN_PREFS_EVENT, readConsent, writeConsent } from "@/lib/consent";

type Choice = { analytics: boolean; marketing: boolean };

/** Bottom cookie-consent banner + preferences dialog controller.
 *  Reopened from the footer via the OPEN_PREFS_EVENT window event. */
export function CookieBanner() {
  const [needsChoice, setNeedsChoice] = useState(false);
  const [prefsOpen, setPrefsOpen] = useState(false);

  useEffect(() => {
    setNeedsChoice(readConsent() === null);
    const open = () => setPrefsOpen(true);
    window.addEventListener(OPEN_PREFS_EVENT, open);
    return () => window.removeEventListener(OPEN_PREFS_EVENT, open);
  }, []);

  const acceptAll = () => {
    writeConsent({ analytics: true, marketing: true });
    setNeedsChoice(false);
  };
  const rejectAll = () => {
    writeConsent({ analytics: false, marketing: false });
    setNeedsChoice(false);
  };
  const savePrefs = (choice: Choice) => {
    writeConsent(choice);
    setNeedsChoice(false);
    setPrefsOpen(false);
  };

  return (
    <>
      {needsChoice && !prefsOpen && (
        <div
          role="region"
          aria-label="Cookie consent"
          className="fixed inset-x-0 bottom-0 z-[90] px-4 pb-4"
        >
          <div className="mx-auto flex max-w-site flex-col gap-4 rounded-2xl border border-navy/10 bg-paper/95 p-5 shadow-2xl backdrop-blur md:flex-row md:items-center md:justify-between md:p-6">
            <p className="max-w-[70ch] text-[14px] leading-relaxed text-ink">
              We use necessary cookies to run this site and, with your consent,
              analytics to improve it. No health information is collected here.
              See our{" "}
              <Link
                to="/privacy"
                className="font-medium text-sage underline-offset-2 hover:underline"
              >
                privacy policy
              </Link>
              .
            </p>
            <div className="flex flex-wrap gap-2.5">
              <button
                type="button"
                onClick={() => setPrefsOpen(true)}
                className="rounded-lg border border-navy/20 px-4 py-2 text-sm font-medium text-navy transition-colors hover:bg-navy/5"
              >
                Customize
              </button>
              <button
                type="button"
                onClick={rejectAll}
                className="rounded-lg border border-navy/20 px-4 py-2 text-sm font-medium text-navy transition-colors hover:bg-navy/5"
              >
                Reject
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="rounded-lg bg-gold px-4 py-2 text-sm font-semibold text-navy transition hover:brightness-95"
              >
                Accept all
              </button>
            </div>
          </div>
        </div>
      )}
      {prefsOpen && (
        <CookiePreferences
          onClose={() => setPrefsOpen(false)}
          onSave={savePrefs}
        />
      )}
    </>
  );
}
