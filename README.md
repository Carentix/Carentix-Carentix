# Carentix — Website

Production-ready [Next.js](https://nextjs.org) implementation of the approved
Carentix marketing site (App Router · React · TypeScript · Tailwind CSS). It is
a faithful build of the seven approved pages handed off from Claude Design:
Homepage, Careers, Privacy Policy, Terms of Service, HIPAA Compliance, Business
Associate Agreement, and Accessibility.

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
```

Build & run production locally:

```bash
npm run build
npm run start
```

Requires **Node.js 18.17+**.

## Please read: two things to know before your first build

1. **The build has not been run in the environment that generated this code**
   (it had no network access to install dependencies). The project is
   structured to compile cleanly and every import has been verified by
   inspection, but the first real `next build` will happen on your machine or on
   Vercel. If anything surfaces, `npm run typecheck` and `npm run build` will
   pin it down quickly.

2. **Images are placeholders.** The Claude Design export referenced image slots
   whose raster assets were not included in the files. Every such slot renders
   as a labeled placeholder (`components/ImageSlot.tsx`, styled via
   `.cx-image-slot`). Drop in real assets — e.g. `next/image` — where these
   appear (hero art, the legal-page header band, team photos). Nothing else
   depends on them.

## Stack

- **Next.js 14** (App Router) · **React 18** · **TypeScript** (strict)
- **Tailwind CSS** — brand tokens live in `tailwind.config.ts`
- **Framer Motion** — included in the stack and available. See "Motion" below
  for why the approved animations are preserved with the design's own technique
  rather than rewritten.
- Fonts via `next/font` (Source Serif 4 + Inter), self-hosted at build time.

## Project structure

```
app/
  layout.tsx          Root layout: fonts, skip link, grain overlay, Nav/Footer,
                      cookie consent, global scroll effects
  page.tsx            Homepage — the interactive centerpiece
  globals.css         Approved global CSS (tokens, focus, reveal, hover classes)
  icon.svg            Brand favicon
  careers/                          Careers
  privacy-policy/                   Privacy Policy
  terms-of-service/                 Terms of Service
  hipaa-compliance/                 HIPAA Compliance
  business-associate-agreement/     Business Associate Agreement
  accessibility/                    Accessibility
components/
  Nav.tsx  Footer.tsx  CookieConsent.tsx   Shared chrome (client)
  ScrollEffects.tsx                         Reveal + counters + magnetic buttons
  ContentPage.tsx  FaqList.tsx              Reusable legal/FAQ building blocks
  Brand.tsx  ImageSlot.tsx                  Logo mark + image placeholder
lib/
  site.ts             Nav links, footer columns, contact details
  content/*.json      Approved page copy, extracted verbatim from the exports
```

## The homepage

The homepage is a genuine stateful React component. The approved interactions
are ported one-to-one:

- **Pricing calculator** — `$1,999` first provider + `$1,499` each additional,
  `$3.00` per unique patient/month, `$15` per prior authorization, with the
  approved clamps, live breakdown, and the "pay annually, save 10%" line.
- **Disciplines selector**, **FAQ accordion**, **mobile menu** — React state.
- **Animated counters**, **scroll reveals**, **magnetic buttons** — handled by
  `ScrollEffects`, a faithful port of the approved runtime behavior.
- **Cookie consent** — Global Privacy Control aware, persisted in
  `localStorage` under `cx-cookie-consent`.

## Motion

The approved design implements motion with CSS keyframes and a small runtime
(scroll-triggered reveals, ease-out counters, pointer-magnetic buttons). To keep
the result identical to what was approved — timing, easing, and feel — that
technique is preserved verbatim in `app/globals.css` and
`components/ScrollEffects.tsx`, rather than re-expressed in a different animation
library. `framer-motion` is installed and ready if you want to build new,
non-approved motion on top; the existing behavior is intentionally left as-is.

## Design fidelity

The approved design is the source of truth. Its palette, typography, spacing,
and copy are reproduced exactly:

- Global styling (tokens, focus states, reveal, hover micro-interactions) is
  ported verbatim into `app/globals.css`.
- Brand tokens are also exposed through Tailwind (`paper`, `ink`, `ink-dark`,
  `gold`, discipline accents, `Source Serif 4` / `Inter`, the `shell` max-width)
  for use in new work.
- Presentational styling stays close to the approved inline styling so the
  render matches the handoff; Tailwind and the app shell provide the framework
  around it. Approved copy is reproduced word-for-word.

## Deploy

**GitHub**

```bash
git init
git add .
git commit -m "Carentix website"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

**Vercel** — import the repository at [vercel.com/new](https://vercel.com/new).
Framework preset **Next.js** is detected automatically; no environment variables
are required. Each push to `main` deploys.

## Contact details in the site

`info@carentix.com` · `(628) 300-3310` — centralized in `lib/site.ts`. Update
there and every page follows.
