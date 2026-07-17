# Image slots

Every file here is a **design-phase placeholder**. Final licensed photography
drops in over the top with **zero code changes** — provided you keep the exact
filename and path.

## Rules

- **Do not rename these files.** They are referenced by root-absolute path
  (e.g. `/images/hero-home.webp`) so they resolve identically in `npm run dev`,
  `npm run preview`, and on Vercel.
- **Do not import images through the bundler.** They are served from `public/`
  verbatim; `import hero from "./hero.webp"` is not the pattern here.
- **Export final photography as `.webp` under the exact same name** and it drops
  in with zero code changes. Switching a slot back to `.png` means editing the
  `src` in the component listed below.

## Recommended export

| Property | Value |
| --- | --- |
| Dimensions | **3840 × 1920** (16:9) for heroes |
| File size | **≤ 400 KB** |
| Format | **WebP**, quality ~78 |
| Color | sRGB |

These slots were originally 4K PNGs totalling **54 MB** (heroes ~9.5 MB each),
which put Lighthouse Performance out of reach. They were re-encoded to WebP at
q78 — **1.8 MB total, every file under 400 KB** — with dimensions unchanged.
Re-encode replacements to the same budget:

```bash
npx --yes sharp-cli@5.1.0 --input photo.png --output public/images/hero-home.webp --format webp --quality 78
```

Heroes sit behind a navy scrim with text over the left ~60%. Choose frames with
a **calm, uncluttered left side** and visual interest on the right. Faces should
read as candid clinical moments, never stock-photo eye contact.

## Slots

| File | Used by | Intended subject |
| --- | --- | --- |
| `hero-home.webp` | `src/pages/HomePage.tsx` — home hero (Ken Burns zoom + light paper scrim) | A physician in an unhurried, attentive moment with a patient. Warm, human, not clinical-cold. |
| `hero-compliance.webp` | `src/pages/CompliancePage.tsx` via `PageHero` | Secure handling of protected health information — considered, deliberate, trustworthy. |
| `hero-career.webp` | `src/pages/CareersPage.tsx` — inline hero | A Carentix operations professional at work; dignified remote-work environment. |
| `hero-privacy.webp` | `src/pages/PrivacyPage.tsx` via `PageHero` | A calm, professional clinical environment. Quiet and orderly. |
| `hero-terms.webp` | `src/pages/TermsPage.tsx` via `PageHero` | A calm, professional healthcare partnership moment. |
| `hero-baa.webp` | `src/pages/BaaPage.tsx` via `PageHero` | A signed agreement protecting patient information. Documents, hands, trust. |
| `hero-accessibility.webp` | `src/pages/AccessibilityPage.tsx` via `PageHero` | An inclusive, welcoming healthcare setting. |
| `home-dashboard.webp` | `src/pages/HomePage.tsx` — "reality band", below the fold (`loading="lazy"`) | The administrative reality of a busy practice — paperwork, phones, waiting rooms. Deliberately heavier in tone than the hero. |

### Known placeholder gaps

The placeholders were not all exported to the target spec. Sizes as they stand:

| File | Dimensions | Status |
| --- | --- | --- |
| `hero-home.webp` | **1280 × 720** | ⚠️ **Well under spec.** This is the LCP image on the highest-traffic route and will look soft on desktop. Re-shoot/re-export at 3840 × 1920 before launch. |
| `hero-privacy.webp`, `hero-accessibility.webp` | 2048 × 1152 | Under the 3840 × 1920 target; acceptable for interior pages, ideally re-exported. |
| all others | 3840 × 1920 | On spec. |

## Accessibility

Every `<img>` here is a real `<img>` with **descriptive `alt` text**, not a CSS
`background-image`. If you convert a slot to a CSS background, the adjacent
`<h1>`/`<h2>` must carry the meaning and the element must be `aria-hidden`
(decorative background ⇒ empty alt).

Alt text lives next to each `src` in the component — update it when the subject
of the photograph changes.

## Icons (in `public/`, not here)

`favicon.svg` is the wide 100×56 logo. `icon-square.svg` is the square lockup
that `apple-touch-icon.png` (180×180), `icon-192.png`, and `icon-512.png` are
rasterized from. Regenerate them after editing the square SVG:

```bash
npx --yes sharp-cli@5.1.0 --input public/icon-square.svg --output public/apple-touch-icon.png resize 180 180
npx --yes sharp-cli@5.1.0 --input public/icon-square.svg --output public/icon-192.png resize 192 192
npx --yes sharp-cli@5.1.0 --input public/icon-square.svg --output public/icon-512.png resize 512 512
```
