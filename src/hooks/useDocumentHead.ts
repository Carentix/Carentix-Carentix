import { useEffect } from "react";
import { absoluteUrl, OG_IMAGE_PATH, SITE_NAME } from "@/lib/site";

/**
 * Minimal head manager for a client-rendered SPA.
 *
 * Writes <title>, description, canonical, Open Graph, and Twitter card tags
 * directly to `document` on route change — no dependency, no provider.
 * Tags this hook creates are marked with `data-head-managed` so a later route
 * can overwrite them; tags already present in index.html are reused in place.
 *
 * JSON-LD is treated differently: it is removed on unmount, because structured
 * data describing the home page must not linger once the user routes away.
 */
export type DocumentHeadOptions = {
  /** Page title, already including any brand suffix. */
  title: string;
  description: string;
  /** Root-absolute route path, e.g. "/compliance". Used for the canonical URL. */
  path: string;
  /** Root-absolute image path for social cards. Defaults to the home hero. */
  image?: string;
  /** Serialized as a JSON-LD <script>, scoped to this route's lifetime. */
  jsonLd?: Record<string, unknown>;
};

function upsertMeta(
  attr: "name" | "property",
  key: string,
  content: string,
): void {
  const selector = `meta[${attr}="${key}"]`;
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    el.setAttribute("data-head-managed", "");
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertCanonical(href: string): void {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.rel = "canonical";
    el.setAttribute("data-head-managed", "");
    document.head.appendChild(el);
  }
  el.href = href;
}

export function useDocumentHead({
  title,
  description,
  path,
  image = OG_IMAGE_PATH,
  jsonLd,
}: DocumentHeadOptions): void {
  useEffect(() => {
    const url = absoluteUrl(path);
    const imageUrl = absoluteUrl(image);

    document.title = title;
    upsertMeta("name", "description", description);
    upsertCanonical(url);

    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:image", imageUrl);
    upsertMeta("property", "og:locale", "en_US");

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", imageUrl);
  }, [title, description, path, image]);

  // Serialized here so a structurally identical object passed inline by a page
  // doesn't re-fire the effect on every render.
  const jsonLdText = jsonLd ? JSON.stringify(jsonLd) : null;

  useEffect(() => {
    if (!jsonLdText) return;
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-head-managed", "");
    script.textContent = jsonLdText;
    document.head.appendChild(script);
    return () => script.remove();
  }, [jsonLdText]);
}
