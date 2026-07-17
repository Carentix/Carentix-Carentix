import { useEffect } from "react";
import { SITE, organizationJsonLd, type PageSeo } from "@/lib/site";

// Upsert a <meta> tag by name or property.
function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(
    attr + '[' + attr + '="' + key + '"]',
  );
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

const JSONLD_ID = "ld-organization";

function setOrganizationJsonLd(enabled: boolean) {
  const existing = document.getElementById(JSONLD_ID);
  if (!enabled) {
    if (existing) existing.remove();
    return;
  }
  const script = existing || document.createElement("script");
  script.id = JSONLD_ID;
  script.setAttribute("type", "application/ld+json");
  script.textContent = JSON.stringify(organizationJsonLd());
  if (!existing) document.head.appendChild(script);
}

/**
 * Client-side head manager. Sets title, description, canonical, Open Graph
 * and Twitter tags per route, and (home only) Organization JSON-LD.
 * No dependency — writes directly to document.head.
 */
export function useDocumentHead(seo: PageSeo) {
  useEffect(() => {
    const url = SITE.origin + seo.path;
    const image = seo.image || SITE.ogImage;

    document.title = seo.title;
    setMeta("name", "description", seo.description);
    setCanonical(url);

    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", SITE.name);
    setMeta("property", "og:title", seo.title);
    setMeta("property", "og:description", seo.description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", image);

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", seo.title);
    setMeta("name", "twitter:description", seo.description);
    setMeta("name", "twitter:image", image);

    setOrganizationJsonLd(seo.path === "/");
  }, [seo]);
}
