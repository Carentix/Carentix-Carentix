# Image assets

All images are referenced by **root-absolute** paths (e.g. `/images/hero-home.png`)
so they resolve identically in `vite dev`, `vite preview`, and on Vercel. Do **not**
import them through the bundler — drop replacements in at the same path and filename.

## Slots

| File | Used on | Intended subject |
| --- | --- | --- |
| `hero-home.png` | Home hero (full-bleed, Ken Burns + paper scrim) | A physician in an unhurried, attentive moment with a patient |
| `hero-compliance.png` | Compliance hero | Calm, secure clinical/office environment |
| `hero-career.png` | Careers hero | Team collaboration, warm and human |
| `hero-privacy.png` | Privacy hero | Quiet, professional clinical setting |
| `hero-terms.png` | Terms hero | Neutral professional setting |
| `hero-baa.png` | BAA hero | Documents / signing / trust |
| `hero-accessibility.png` | Accessibility hero | Inclusive, welcoming environment |
| `home-dashboard.png` | Home "reality band" section | The administrative reality of a busy practice |

## Recommended export

- **Hero images:** 3840×1920 (16:9), **≤ 400 KB**, WebP (or optimized PNG).
- **Social/OG image** (`/og-image.png`, project root of `public/`): 1200×630.
- Compress with Squoosh / `sharp` before committing.
- Current PNGs are **design-phase placeholders** — replace with final licensed photography.

## Accessibility

- Every `<img>` needs descriptive `alt` text; the current components already set it.
- Hero backgrounds pair with an on-page heading that carries the meaning.
- Hero images use `loading="eager"`; below-the-fold images should use `loading="lazy"`.
