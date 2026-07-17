# Carentix Website

GitHub- and Vercel-ready static build of the Carentix marketing website.

## Local setup

```bash
npm install
npm run build
npm run preview
```

## Routes

- `/`
- `/compliance`
- `/careers`
- `/privacy`
- `/terms`
- `/baa`
- `/accessibility`

## Deploy

Push this repository to GitHub, then import it into Vercel. Vercel will run `npm run build` and publish the `dist` folder using `vercel.json`.

The files in `source-pages/` are the original design exports. `build.mjs` converts them into clean public routes and supplies the lightweight browser runtime required by those exports.

Replace the placeholder files in `public/images/` with final licensed images while keeping the same filenames.
