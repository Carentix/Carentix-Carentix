# Carentix — Marketing Site

Production front-end for **Carentix LLC**, a healthcare operations partner. Built as a modern SPA.

## Stack

- **React 19** + **TypeScript**
- **Vite** (dev server + build)
- **TanStack Router** (code-based routing, type-safe)
- **Tailwind CSS** (design tokens in `tailwind.config.ts`)
- **shadcn/ui** components (Radix primitives — `button`, `accordion`)
- **lucide-react** icons

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
```

Other scripts:

```bash
npm run build    # type-check + production build to /dist
npm run preview  # preview the production build
```

## Project structure

```
carentix-web/
├─ public/
│  ├─ images/            # hero photos (replace with final licensed assets)
│  └─ favicon.svg
├─ src/
│  ├─ main.tsx           # app entry — mounts RouterProvider
│  ├─ router.tsx         # code-based route tree + root layout
│  ├─ styles/globals.css # Tailwind layers + design tokens (CSS vars)
│  ├─ lib/utils.ts       # cn() + formatUSD()
│  ├─ hooks/
│  │  ├─ useReveal.ts     # IntersectionObserver scroll-reveal
│  │  └─ useScrollTop.ts  # force each page to open at the top
│  ├─ data/home.ts       # homepage content (disciplines, FAQs, steps…)
│  ├─ components/
│  │  ├─ ui/              # shadcn components (button, accordion)
│  │  ├─ layout/          # SiteHeader, SiteFooter
│  │  ├─ shared/          # Logo, Reveal, Eyebrow, PageHero, DocSection
│  │  └─ home/            # Capabilities (disciplines index), PricingCalculator
│  └─ pages/             # one component per route
│     ├─ HomePage.tsx
│     ├─ CompliancePage.tsx
│     ├─ CareersPage.tsx
│     ├─ PrivacyPage.tsx
│     ├─ TermsPage.tsx
│     ├─ BaaPage.tsx
│     └─ AccessibilityPage.tsx
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

Homepage sections are reachable via hash links (`/#capabilities`, `/#pricing`, `/#faq`, `/#contact`).

## Design tokens

Brand colors live in `tailwind.config.ts` and as CSS variables in `globals.css`:

| Token            | Hex       | Use                              |
| ---------------- | --------- | -------------------------------- |
| `navy`           | `#13294B` | primary — headers, text          |
| `navy.deep`      | `#0C1E3C` | section backgrounds              |
| `navy.900`       | `#081428` | footer                           |
| `gold`           | `#FEC539` | primary CTA / accent (sparingly) |
| `gold.dark`      | `#B8902A` | gold text on light backgrounds   |
| `sage`           | `#5B8C7B` | trust signals, checkmarks        |
| `paper`          | `#FAFAF7` | page background                  |
| `paper.warm`     | `#F3F0E8` | alternate sections               |
| `ink`            | `#4A4A45` | body text                        |

Fonts: **Source Serif 4** (headlines) + **Inter** (UI/body), loaded in `index.html`.

## Key interactions

- **Pricing calculator** (`components/home/PricingCalculator.tsx`) — tiered volume model:
  Core `$1,899` first provider + `$1,499` each additional; volume `$4.00 → $3.00 → $2.25 → $1.75`
  by patient band; prior auth `$15`. State is local and resets on reload, by design.
- **Capabilities index** (`components/home/Capabilities.tsx`) — hover/focus a discipline to
  re-theme the synced detail panel.
- **Scroll reveal** — `useReveal()` via IntersectionObserver; respects `prefers-reduced-motion`.
- **useScrollTop()** — every page opens at the hero, never mid-scroll.

## Notes for developers

- The **hero photos** in `public/images/` are placeholders from the design phase — swap in
  final licensed assets at the same paths (or update the `src` references).
- The **testimonial** on the homepage and any `[ Client name ]` placeholders are intentional —
  replace with a real, approved client quote before launch.
- Legal pages (Privacy, Terms, BAA, Accessibility) contain **template copy** and should be
  reviewed by counsel before going live.
- To add more shadcn components: `npx shadcn@latest add <component>` (config in `components.json`).
- Routing is **code-based** (no file-based codegen step) — add a route in `src/router.tsx`.

## Deploy to Vercel

1. `git init && git add -A && git commit -m "Initial commit"` then push to a new GitHub repo (`carentix-web`).
2. In Vercel → **New Project → Import** the repo. Framework preset auto-detects **Vite**;
   settings come from `vercel.json` (build `npm run build`, output `dist`).
3. Add env vars in Vercel → Settings → Environment Variables (Production **and** Preview):
   `VITE_SITE_URL=https://carentix.com`, plus `VITE_ANALYTICS_ID` if used. See `.env.example`.
4. Every PR gets a Preview Deployment; `main` deploys to Production.
5. Add the custom domain `carentix.com` (+ `www` → apex redirect) under Settings → Domains and
   create the DNS records Vercel shows.

`vercel.json` includes an SPA rewrite (`/(.*) → /index.html`) so a hard refresh or direct link
to any client route (e.g. `/baa`) returns the app instead of a 404.

---

## Status

### 1. Implemented in this codebase

- All **7 routes** render through `src/router.tsx` (home, compliance, careers, privacy, terms, baa, accessibility).
- **SiteHeader** + extracted **MobileNav** (`aria-expanded` / `aria-controls`), **SiteFooter** with a **Cookie settings** control.
- **Cookie consent**: bottom banner (Accept / Reject / Customize), **preferences dialog** with per-category toggles (necessary always on; analytics; marketing), persisted in `localStorage`, reopenable from the footer. See `src/lib/consent.ts`, `src/components/shared/CookieBanner.tsx`, `CookiePreferences.tsx`.
- **SEO** via `useDocumentHead()` + `src/lib/site.ts`: per-route `<title>`, description, **canonical**, **Open Graph** + **Twitter** tags, and **Organization JSON-LD** on the home page. Static defaults live in `index.html`.
- **Skip-to-content** link (`src/components/shared/SkipLink.tsx`) targeting `#main-content`.
- Static SEO/PWA assets: `public/robots.txt`, `public/sitemap.xml`, `public/site.webmanifest`, `favicon.svg`, `icon-square.svg`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`, `og-image.png`, `public/images/README.md`.
- Config: `vercel.json`, `.env.example`, `.nvmrc` (Node 20), `eslint.config.js`, `typecheck` + `lint` scripts.
- **Reduced-motion** honored globally (`globals.css`); all 8 hero/dashboard images present and referenced by root-absolute paths.

### 2. To be verified with Claude Code (run locally — NOT run in the design environment)

These were **not executed** where the project was assembled. Run them before pushing:

```bash
npm install      # also generates package-lock.json (not committed by the assembler)
npm run typecheck
npm run lint
npm run build
npm run preview
```

Confirm: 0 TypeScript errors, 0 lint errors, clean build, all 7 routes render under `preview`,
deep links work, cookie controls + pricing calculator function. **Build/typecheck/lint status is
currently UNVERIFIED.**

> `package-lock.json` is intentionally absent — it is generated by `npm install` on first run.

### 3. Manual pre-launch tasks

- Replace hero/dashboard **placeholder photography** with final licensed 3840×1920 assets (same filenames).
- Replace the homepage **testimonial** and `[ Client name ]` placeholders with an approved client quote.
- **Legal counsel review** of Privacy, Terms, BAA and Accessibility copy.
- Point `VITE_SITE_URL` at the real origin and confirm `sitemap.xml` / `robots.txt` reflect it.
- Wire real analytics behind cookie consent (only initialize when the analytics category is granted).
