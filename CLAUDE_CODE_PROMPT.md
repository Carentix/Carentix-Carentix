# Claude Code prompt — ship the Carentix marketing site to GitHub + Vercel

Copy everything below the line into Claude Code, running inside the `carentix-react/` folder.

---

You are finalizing the **Carentix** marketing website so it can be pushed to a GitHub repo and deployed on **Vercel** as a static SPA. A working scaffold already exists in this folder — **do not rebuild it from scratch.** Verify it, wire it for Vercel, and make it production-clean.

## What this is
Carentix LLC — a healthcare operations partner (RCM, prior auth, credentialing, HIPAA compliance). A **7-page marketing SPA**. No backend, no database, no auth. Contact is a mailto/scheduling CTA, not a form that stores data (no PHI is ever collected).

## Stack (already chosen — keep it)
- **React 19 + TypeScript**
- **Vite 5** (dev server + build to `/dist`)
- **TanStack Router** — code-based routing in `src/router.tsx` (no file-based codegen)
- **Tailwind CSS 3** — design tokens in `tailwind.config.ts` + CSS vars in `src/styles/globals.css`
- **shadcn/ui** (Radix: `button`, `accordion`) + **lucide-react** icons
- Path alias `@` → `./src` (configured in `vite.config.ts` and `tsconfig.json`)

Do not migrate to Next.js. Do not add a UI library, CSS-in-JS, or a state manager. Keep dependencies minimal.

## Routes (all must build and resolve — no 404s, no orphans)
| Path | Component |
| --- | --- |
| `/` | `HomePage` |
| `/compliance` | `CompliancePage` (HIPAA) |
| `/careers` | `CareersPage` |
| `/privacy` | `PrivacyPage` |
| `/terms` | `TermsPage` |
| `/baa` | `BaaPage` (Business Associate Agreement) |
| `/accessibility` | `AccessibilityPage` |

Homepage in-page sections use hash links: `/#capabilities`, `/#pricing`, `/#faq`, `/#contact`.

## Images — location, format, usage
All live in `public/images/` and are referenced by **root-absolute** paths (e.g. `/images/hero-home.png`), so they resolve identically in dev, `vite preview`, and on Vercel. Do **not** import them through the bundler.

| File | Where it's used |
| --- | --- |
| `public/images/hero-home.png` | Home hero (full-bleed background, Ken Burns zoom + navy scrim) |
| `public/images/hero-compliance.png` | Compliance hero |
| `public/images/hero-career.png` | Careers hero |
| `public/images/hero-privacy.png` | Privacy hero |
| `public/images/hero-terms.png` | Terms hero |
| `public/images/hero-baa.png` | BAA hero |
| `public/images/hero-accessibility.png` | Accessibility hero |
| `public/images/home-dashboard.png` | Home product/dashboard visual |
| `public/favicon.svg` | Favicon |

**Format rules:**
- These PNGs are **design-phase placeholders** — keep the exact filenames and paths so final licensed photography can be dropped in later with zero code changes. Leave a `public/images/README.md` documenting each slot's intended subject and the recommended export: hero images **3840×1920 (16:9), ≤400 KB, WebP or optimized PNG**.
- Add descriptive `alt` text on every `<img>`. Hero backgrounds set as CSS `background-image` must have an accessible text alternative in the adjacent heading (decorative background = empty alt / `aria-hidden`).
- Every hero image needs `loading="eager"` + `fetchpriority="high"`; below-the-fold images `loading="lazy"`.

## Dynamics / interactions to preserve (they already exist — verify they work)
- **Pricing calculator** (`src/components/home/PricingCalculator.tsx`) — tiered volume model: Core `$1,899` first provider + `$1,499` each additional; per-patient volume rate `$4.00 → $3.00 → $2.25 → $1.75` by band; prior auth `$15`. Local state, resets on reload by design. Keyboard-operable, currency formatted via `formatUSD()` in `src/lib/utils.ts`.
- **Capabilities index** (`src/components/home/Capabilities.tsx`) — hovering/focusing a discipline re-themes the synced detail panel.
- **Scroll reveal** (`src/hooks/useReveal.ts`) — IntersectionObserver; **must respect `prefers-reduced-motion`** (no transform/opacity animation when reduced motion is set).
- **Scroll-to-top** (`src/hooks/useScrollTop.ts`) — every route opens at the hero, never mid-scroll.
- **Accordion FAQ** — Radix accordion, fully keyboard accessible.
- Sticky `SiteHeader` + `SiteFooter` wrap every route via the root layout in `router.tsx`.

## Design tokens (do not invent new colors)
Navy `#13294B` (primary), navy.deep `#0C1E3C`, navy.900 `#081428` (footer), gold `#FEC539` (CTA/accent, sparingly), gold.dark `#B8902A` (gold text on light), sage `#5B8C7B` (trust/checks), paper `#FAFAF7`, paper.warm `#F3F0E8`, ink `#4A4A45`. Fonts: **Source Serif 4** (headlines) + **Inter** (body), loaded in `index.html`.

## Your tasks
1. **Install & verify.** `npm install`, then `npm run dev` — confirm all 7 routes render, every nav/footer link resolves, and all images load.
2. **Clean build.** `npm run build` must pass with **0 TypeScript errors and 0 ESLint errors**, no console errors. Fix anything broken; do not silence errors with `any` or `@ts-ignore` unless truly unavoidable (comment why).
3. **Vercel config for SPA routing.** Add a root `vercel.json` so client-side routes deep-link correctly (a hard refresh on `/careers` must not 404):
   ```json
   {
     "framework": "vite",
     "buildCommand": "npm run build",
     "outputDirectory": "dist",
     "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
   }
   ```
4. **SEO + metadata.** Per-route `<title>` and `<meta name="description">` (unique per page), canonical URL, Open Graph + Twitter card tags, and JSON-LD `Organization` schema on the home page. Since this is client-rendered, set these with a small head manager (e.g. a `useDocumentHead` hook that writes to `document`) — do not add a heavy dependency. Add `public/robots.txt` and a static `public/sitemap.xml` covering all 7 routes. Use a `VITE_SITE_URL` env var for absolute URLs; default to `https://carentix.com`.
5. **Static assets.** Ensure `public/favicon.svg`, an Apple touch icon, and a `site.webmanifest` are present and linked in `index.html`.
6. **Accessibility pass.** Visible focus rings on all interactive elements, correct heading order, `lang="en"` on `<html>`, skip-to-content link, color contrast AA. Keyboard-test nav, accordion, and the calculator.
7. **Repo hygiene for GitHub.** Ensure a correct `.gitignore` (`node_modules`, `dist`, `.env*`, `.vercel`, editor cruft). Add a `.env.example` (no secrets) documenting `VITE_SITE_URL` and any analytics ID vars. Update `README.md` with: local dev, build, and **"Deploy to Vercel"** steps. Add a `.nvmrc` pinning Node 20.
8. **Don't touch placeholder copy that's flagged for review** — legal pages (Privacy, Terms, BAA, Accessibility) contain template copy for counsel review; the homepage testimonial and any `[ Client name ]` markers are intentional placeholders. Leave them, but note them in the README's "Before launch" section.

## Deploy steps to document in the README (do not execute — just write them)
1. `git init`, commit, push to a new GitHub repo `carentix-web`.
2. In Vercel: **New Project → Import** the repo. Framework preset auto-detects **Vite**; build `npm run build`, output `dist` (or read from `vercel.json`).
3. Add env vars (`VITE_SITE_URL`, analytics IDs) in Vercel → Settings → Environment Variables for Production + Preview.
4. Every PR → Preview Deployment; `main` → Production.
5. Add custom domain `carentix.com` (+ `www` redirect to apex) in Vercel → Settings → Domains and create the A/CNAME records Vercel shows.

## Acceptance criteria
- `npm run build` is clean; `npm run preview` serves all 7 routes with working deep links.
- Deployed on Vercel, a hard refresh on any route (e.g. `/baa`) returns the app, not a 404.
- Lighthouse (mobile) ≥ 90 Performance / 100 Accessibility / 100 Best Practices / ≥ 95 SEO on `/`.
- No layout shift or overflow at 360 / 768 / 1024 / 1440 / 2560px.
- Reduced-motion honored; keyboard fully navigable.

Work through the tasks in order. After the clean build, show me the `vercel.json`, the updated `README.md`, and the output of `npm run build`.
