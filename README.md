# Kelvin Rein — Portfolio

Single-page portfolio built with Next.js, React, and TypeScript. Content lives in
[`src/content.js`](src/content.js), while the page structure lives in
[`app/page.tsx`](app/page.tsx).

## Develop

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build and preview

```bash
npm run build
npm run start
```

The project uses `output: 'export'`, so the static build is written to `out/`.
Images are intentionally configured as unoptimized so the same build works on
GitHub Pages.

## Update content and media

Edit the data in `src/content.js`. Add media to:

| Location | Used for |
|----------|----------|
| `public/experience/` | Experience section photos |
| `public/projects/` | Featured work screenshots |

Reference public files with paths such as `/experience/bladex.gif`.

## Deploy

Vercel can connect directly to this repository's `main` branch and run:

```bash
npm run build
```

GitHub Pages is deployed by
`.github/workflows/deploy-pages.yml`, which builds the static `out/` directory
and publishes it with the Pages deployment action.
