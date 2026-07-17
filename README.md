# Carentix — Marketing Site

Production front-end for **Carentix LLC**, a healthcare operations partner
(RCM, prior auth, credentialing, HIPAA compliance). A 7-page marketing SPA.

**No backend, no database, no auth.** Contact is a `mailto:` / scheduling CTA —
there is no form that stores data, and **no PHI is ever collected by this site.**

## Stack

- **React 19** + **TypeScript**
- **Vite 5** (dev server + build to `/dist`)
- **TanStack Router** (code-based routing in `src/router.tsx`, no file-based codegen)
- **Tailwind CSS 3** (design tokens in `tailwind.config.ts` + CSS vars in `src/styles/globals.css`)
- **shadcn/ui** components (Radix primitives — `button`, `accordion`)
- **lucide-react** icons

Path alias `@` → `./src` (configured in `vite.config.ts` and `tsconfig.json`).

## Getting started

Requires **Node 24** (see `.nvmrc`; `nvm use` will pick it up).

```bash
npm install
npm run dev      # http://localhost:5173
```

Other scripts:

```bash
npm run build      # type-check + production build to /dist
npm run preview    # serve the production build (http://localhost:4173)
npm run lint       # ESLint — must be 0 errors
npm run typecheck  # tsc --noEmit
```

## Environment variables

Copy `.env.example` → `.env.local` for local dev. Only `VITE_`-prefixed vars reach
the client bundle — **everything in there ships to the browser in plain text, so
never put a secret in it.**

| Var | Required | Purpose |
| --- | --- | --- |
| `VITE_SITE_URL` | no | Origin for canonical URLs, Open Graph, and JSON-LD. No trailing slash. Defaults to `https://carentix.com`. |
| `VITE_GA_MEASUREMENT_ID` | no | GA4 measurement ID. Documented for deploy; **not yet wired into the app.** |
| `VITE_PLAUSIBLE_DOMAIN` | no | Plausible domain. Documented for deploy; **not yet wired into the app.** |

On **Preview** deployments set `VITE_SITE_URL` to the preview origin, otherwise
previews emit canonical tags pointing at production.

## Deploy to Vercel

1. **Push to GitHub.**

   ```bash
   git init
   git add .
   git commit -m "Carentix marketing site"
   git branch -M main
   git remote add origin git@github.com:<org>/carentix-web.git
   git push -u origin main
   ```

2. **Import in Vercel.** New Project → Import the `carentix-web` repo. The Vite
   preset is auto-detected; build command `npm run build`, output directory
   `dist`. Both are already pinned in `vercel.json`, which also contains the SPA
   rewrite — **without it a hard refresh on `/careers` would 404**, because the
   server has no file at that path and must fall back to `index.html`.

3. **Add environment variables.** Settings → Environment Variables, for
   **Production** and **Preview**: `VITE_SITE_URL` (+ analytics IDs if used).
   Vite inlines these at **build time**, so changing one requires a redeploy —
   editing it in the dashboard alone does nothing to the live site.

4. **Branch workflow.** Every PR gets a Preview Deployment; merges to `main` ship
   to Production.

5. **Custom domain.** Settings → Domains → add `carentix.com` and `www.carentix.com`,
   with `www` redirecting to the apex. Create the A / CNAME records Vercel shows
   at your DNS provider. Then confirm `VITE_SITE_URL=https://carentix.com` and
   redeploy so canonicals match the live domain.

## Project structure

```
carentix-web/
├─ vercel.json           # SPA rewrite + asset cache headers
├─ .nvmrc                # Node 24
├─ .env.example          # documented env vars (no secrets)
├─ eslint.config.js      # flat config: ts, react-hooks, jsx-a11y
├─ public/
│  ├─ images/            # hero photos (placeholders) + slot documentation
│  ├─ favicon.svg        # wide logo
│  ├─ icon-square.svg    # square lockup — source for the raster icons
│  ├─ apple-touch-icon.png, icon-192.png, icon-512.png
│  ├─ site.webmanifest
│  ├─ robots.txt
│  └─ sitemap.xml        # static; hardcoded to the production apex
├─ src/
│  ├─ main.tsx           # app entry — mounts RouterProvider
│  ├─ router.tsx         # code-based route tree + root layout + skip link
│  ├─ styles/globals.css # Tailwind layers, tokens, focus rings, reduced motion
│  ├─ lib/
│  │  ├─ utils.ts        # cn() + formatUSD()
│  │  └─ site.ts         # SITE_URL / absoluteUrl() — VITE_SITE_URL lives here
│  ├─ hooks/
│  │  ├─ useReveal.ts       # IntersectionObserver scroll-reveal
│  │  ├─ useScrollTop.ts    # force each page to open at the top
│  │  └─ useDocumentHead.ts # per-route title/meta/canonical/OG/JSON-LD
│  ├─ data/home.ts       # homepage content (disciplines, FAQs, steps…)
│  ├─ components/
│  │  ├─ ui/              # shadcn components (button, accordion)
│  │  ├─ layout/          # SiteHeader, SiteFooter
│  │  ├─ shared/          # Logo, Reveal, Eyebrow, PageHero, DocSection
│  │  └─ home/            # Capabilities (disciplines index), PricingCalculator
│  └─ pages/             # one component per route
```

## Routes

| Path             | Page                     |
| ---------------- | ------------------------ |
| `/`              | Home                     |
| `/compliance`    | HIPAA / Compliance       |
| `/careers`       | Careers                  |
| `/privacy`       | Privacy Policy           |
| `/terms`         | Terms of Service         |
| `/baa`           | Business Associate Agmt. |
| `/accessibility` | Accessibility            |

Homepage sections are reachable via hash links (`/#capabilities`, `/#process`,
`/#pricing`, `/#faq`, `/#contact`).

## SEO

Because the site is client-rendered, per-route metadata is written to `document`
by `useDocumentHead()` — a small local hook, deliberately **not** a head-manager
dependency. Each page passes a unique `title` + `description`; the hook derives
the canonical URL, Open Graph, and Twitter card tags from `path` and `VITE_SITE_URL`.
The home route additionally injects `Organization` JSON-LD, which is removed on
unmount so it never leaks onto another route.

`public/sitemap.xml` and `public/robots.txt` are static files copied verbatim —
they **cannot** read `VITE_SITE_URL`. If the canonical domain changes, edit both
by hand.

> Crawlers execute JS and will see these tags, but **link unfurlers (Slack,
> iMessage, most social cards) do not** — they read the raw HTML, which carries
> only the home-page defaults from `index.html`. If per-route social cards matter,
> that needs prerendering or SSR, which this stack doesn't currently do.

## Design tokens

Brand colors live in `tailwind.config.ts` and as CSS variables in `globals.css`:

| Token            | Hex       | Use                              |
| ---------------- | --------- | -------------------------------- |
| `navy`           | `#13294B` | primary — headers, text          |
| `navy.deep`      | `#0C1E3C` | section backgrounds              |
| `navy.900`       | `#081428` | footer                           |
| `gold`           | `#FEC539` | primary CTA / accent (sparingly) |
| `gold.dark`      | `#8A6D1F` | gold text on light backgrounds   |
| `sage`           | `#5B8C7B` | trust signals, checkmarks, fills  |
| `sage.text`      | `#3C5A50` | small sage **text** (see below)  |
| `paper`          | `#FAFAF7` | page background                  |
| `paper.warm`     | `#F3F0E8` | alternate sections               |
| `ink`            | `#4A4A45` | body text                        |

Fonts: **Source Serif 4** (headlines) + **Inter** (UI/body), loaded in `index.html`.

### Contrast rule: fills vs. text

Two tokens changed to meet WCAG AA, because the originals could not:

- **`sage` splits in two.** `sage` `#5B8C7B` is 3.66:1 on paper — fine for icons and
  checkmarks (3:1 bar) but short of the 4.5:1 needed for the 11–12.5px eyebrows and
  tags it was being used for. Those now use **`sage.text` `#3C5A50`** (7.25:1), a
  color already present in the hero badge. **Use `sage` for fills and icons,
  `sage.text` for small text.**
- **`gold.dark` was darkened** `#B8902A` → `#8A6D1F`. Its comment claimed
  "contrast-safe" but it measured 2.84:1, failing even the 3:1 large-text bar at its
  only two usages (30px and 40–82px display type). Now 4.68:1.

The six per-discipline accents in `src/data/home.ts` follow the same split: `color`
for tints, borders, and the ghost numeral; **`textColor`** for the small label and
checkmarks. Four of the six accents fail AA as small text at their `color` value.

`gold` `#FEC539` and `navy` `#13294B` are unchanged, and gold-on-navy is 9.17:1.

## Key interactions

- **Pricing calculator** (`components/home/PricingCalculator.tsx`) — tiered volume model:
  Core `$1,899` first provider + `$1,499` each additional; volume `$4.00 → $3.00 → $2.25 → $1.75`
  by patient band (1–250 / 251–750 / 751–1,500 / 1,501+); prior auth `$15`.
  State is local and resets on reload, by design.
- **Capabilities index** (`components/home/Capabilities.tsx`) — hover/focus a discipline to
  re-theme the synced detail panel.
- **Scroll reveal** — `useReveal()` via IntersectionObserver; respects `prefers-reduced-motion`.
- **useScrollTop()** — every page opens at the hero, never mid-scroll.
- **Accordion FAQ** — Radix accordion, fully keyboard accessible.

## Accessibility

`lang="en"`, a skip-to-content link into `<main id="main">`, visible gold focus
rings on every interactive element, one `<h1>` per route with no skipped heading
levels, and descriptive `alt` on every image. Reduced motion is honored in two
places that must stay in sync: `useReveal()` (skips the observer, shows content
immediately) and the `prefers-reduced-motion` block in `globals.css` (kills
Ken Burns, drift, and smooth scrolling).

Verified on the production build: **0 WCAG AA contrast failures across all 7
routes**, no skipped heading levels, and no horizontal overflow at 360 / 768 /
1024 / 1440 / 2560px. See the contrast rule under *Design tokens* before
introducing any new colored text — the accent palette is not AA-safe at small
sizes by default.

## Images

`public/images/` holds **design-phase placeholders**. See
[`public/images/README.md`](public/images/README.md) for each slot's intended
subject, the export spec (3840×1920, ≤400 KB, WebP q78), and known gaps.

They are referenced by **root-absolute** path (`/images/hero-home.webp`) and are
**not** imported through the bundler, so they resolve identically in dev,
`vite preview`, and on Vercel.

## Before launch

Everything here is deliberate and outstanding — not a bug to fix in passing.

- [ ] **Legal copy is template text.** Privacy, Terms, BAA, and Accessibility all
      contain placeholder copy **pending counsel review**. Do not publish as-is.
- [ ] **Homepage testimonial is a placeholder** — the quote, the `[ Client name ]` /
      `[ Title, Practice ]` markers, and the "Client photo" avatar. It is visibly
      badged *"Replace before launch"* in the UI. Needs a real, approved client quote.
- [ ] **`hero-home.webp` is only 1280×720** — the LCP image on the highest-traffic
      route, well under the 3840×1920 spec. It will look soft on desktop. Re-export.
      `hero-privacy` / `hero-accessibility` are 2048×1152.
- [ ] **All photography is placeholder.** Swap in final licensed assets at the same
      paths, `.webp`, ≤400 KB each.
- [ ] **Compliance CTA requests the PDF by email** (`mailto:compliance@carentix.com`)
      because no PDF asset exists. Publish the overview and point the link at it.
- [ ] **Confirm the contact model.** "Schedule a call" CTAs currently scroll to
      `/#contact` rather than opening a scheduler — wire up the real booking link
      (Calendly/etc.) or a `mailto:`.
- [ ] **Verify the mailto addresses exist and are monitored**: `hello@`, `careers@`,
      `compliance@`, `privacy@`, `legal@`, `accessibility@`.
- [ ] **Analytics are documented but not implemented.** `VITE_GA_MEASUREMENT_ID` /
      `VITE_PLAUSIBLE_DOMAIN` are read by nothing yet.
- [ ] **Set `VITE_SITE_URL` in Vercel** for Production and Preview, then redeploy.
- [ ] **`sitemap.xml` `<lastmod>` dates are the build date** (2026-07-17) — refresh
      them when content genuinely changes.
- [ ] `public/images/README.md` is **served publicly** at `/images/README.md` (Vite
      copies `public/` verbatim). Harmless, but it is internal notes on a public URL —
      move it out of `public/` if that's unwanted.
- [ ] **Run Lighthouse against the real deployment** — see caveat below.

## Lighthouse

Target: **≥90 Performance / 100 Accessibility / 100 Best Practices / ≥95 SEO**
(mobile) on `/`. This has **not been measured yet** — run it against the Vercel
deployment, not `localhost`, so the numbers reflect real CDN caching and
compression:

```bash
npx --yes lighthouse https://carentix.com/ --preset=desktop --view
npx --yes lighthouse https://carentix.com/ --view   # mobile (default)
```

Two things to know before reading the score:

- **Performance depends on the placeholder photography.** The heroes were
  re-encoded to WebP q78 (54 MB → 1.8 MB, every file under 400 KB) specifically
  so this target is reachable. Dropping unoptimized 4K PNGs back in will sink it.
- **Fonts are render-blocking.** Source Serif 4 + Inter load from Google Fonts in
  `index.html`. If Performance falls short, self-hosting them is the first lever.

## Notes for developers

- Routing is **code-based** (no file-based codegen step) — add a route in
  `src/router.tsx`, then add it to `public/sitemap.xml`.
- To add more shadcn components: `npx shadcn@latest add <component>` (config in
  `components.json`).
- Type-safe `<Link to>` autocompletion is available but **off**: the `Register`
  augmentation at the bottom of `src/router.tsx` is commented out so the
  data-driven nav/footer link arrays compile without casting. Enabling it means
  typing those arrays properly.
