/**
 * Absolute-URL config. Vercel builds inject VITE_SITE_URL per environment;
 * the default keeps dev, `vite preview`, and unconfigured builds on the
 * canonical production origin so generated URLs are never relative.
 */
const RAW_SITE_URL = import.meta.env.VITE_SITE_URL ?? "https://carentix.com";

/** Origin with any trailing slash removed, e.g. "https://carentix.com". */
export const SITE_URL = RAW_SITE_URL.replace(/\/+$/, "");

export const SITE_NAME = "Carentix";
export const SITE_LEGAL_NAME = "Carentix LLC";
export const CONTACT_EMAIL = "hello@carentix.com";

/** Social share image. Falls back to the home hero until real OG art exists. */
export const OG_IMAGE_PATH = "/images/hero-home.webp";

/** Resolve a root-absolute path to a fully-qualified URL. */
export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
