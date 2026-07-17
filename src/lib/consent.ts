// Cookie-consent state. Persisted in localStorage; broadcast via window events
// so the footer "Cookie settings" control can reopen the preferences dialog.

export type Consent = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  ts: number;
};

const KEY = "carentix.cookie-consent.v1";
export const CONSENT_EVENT = "carentix:consent-changed";
export const OPEN_PREFS_EVENT = "carentix:cookie-preferences";

export function readConsent(): Consent | null {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Consent) : null;
  } catch {
    return null;
  }
}

export function writeConsent(choice: { analytics: boolean; marketing: boolean }): Consent {
  const value: Consent = {
    necessary: true,
    analytics: choice.analytics,
    marketing: choice.marketing,
    ts: Date.now(),
  };
  try {
    localStorage.setItem(KEY, JSON.stringify(value));
  } catch {
    /* storage unavailable — proceed without persisting */
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
  return value;
}

// Called by the footer control to reopen the preferences dialog.
export function openCookiePreferences() {
  window.dispatchEvent(new Event(OPEN_PREFS_EVENT));
}
