import { useEffect, useState } from "react";
import { readConsent } from "@/lib/consent";

type Choice = { analytics: boolean; marketing: boolean };

function ToggleRow({
  title,
  desc,
  checked,
  disabled,
  onChange,
}: {
  title: string;
  desc: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (v: boolean) => void;
}) {
  return (
    <div className="flex items-start justify-between gap-4 py-4">
      <div>
        <div className="text-sm font-semibold text-navy">{title}</div>
        <div className="mt-1 text-[13px] leading-snug text-ink">{desc}</div>
      </div>
      <label className="relative mt-1 inline-flex shrink-0 cursor-pointer items-center">
        <input
          type="checkbox"
          className="peer sr-only"
          checked={checked}
          disabled={disabled}
          onChange={(e) => onChange && onChange(e.target.checked)}
        />
        <span className="h-6 w-11 rounded-full bg-navy/20 transition-colors peer-checked:bg-sage peer-disabled:opacity-50" />
        <span className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform peer-checked:translate-x-5" />
      </label>
    </div>
  );
}

/** Cookie preferences dialog. Necessary cookies are always on. */
export function CookiePreferences({
  onClose,
  onSave,
}: {
  onClose: () => void;
  onSave: (choice: Choice) => void;
}) {
  const existing = readConsent();
  const [analytics, setAnalytics] = useState(existing ? existing.analytics : false);
  const [marketing, setMarketing] = useState(existing ? existing.marketing : false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[95] flex items-end justify-center bg-navy-deep/50 p-4 backdrop-blur-sm md:items-center"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-prefs-title"
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg rounded-2xl border border-navy/10 bg-paper p-6 shadow-2xl md:p-8"
      >
        <h2
          id="cookie-prefs-title"
          className="font-serif text-2xl font-medium tracking-tight text-navy"
        >
          Cookie preferences
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-ink">
          Choose which cookies we may use. You can change this anytime from the
          footer. No health information is ever collected on this site.
        </p>
        <div className="mt-6 flex flex-col divide-y divide-navy/10">
          <ToggleRow
            title="Strictly necessary"
            desc="Required for the site to function. Always on."
            checked
            disabled
          />
          <ToggleRow
            title="Analytics"
            desc="Anonymous usage data that helps us improve the site."
            checked={analytics}
            onChange={setAnalytics}
          />
          <ToggleRow
            title="Marketing"
            desc="Used to measure and improve our outreach."
            checked={marketing}
            onChange={setMarketing}
          />
        </div>
        <div className="mt-7 flex flex-wrap justify-end gap-2.5">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-navy/20 px-4 py-2 text-sm font-medium text-navy transition-colors hover:bg-navy/5"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => onSave({ analytics, marketing })}
            className="rounded-lg bg-gold px-4 py-2 text-sm font-semibold text-navy transition hover:brightness-95"
          >
            Save preferences
          </button>
        </div>
      </div>
    </div>
  );
}
