# Kelvin Rein — Portfolio

Single-page portfolio site (Vite). Edit copy in [`src/content.js`](src/content.js).

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

Output lands in `dist/`.

## Add photos

| Location | Used for |
|----------|----------|
| `public/experience/` | Experience section photos |
| `public/projects/` | Featured work screenshots |

In `src/content.js`, set `photos` arrays to paths under `public/`, e.g.:

```js
photos: ['/experience/bladex-1.jpg', '/experience/bladex-2.jpg']
```

Empty arrays render dashed **Image** placeholders (2 per experience/project by default).

## Update links

In `src/content.js`, set `link` on experience/projects when ready. Resume path defaults to `/KelvinRein-Resume.pdf` in `public/`.

## Deploy to GitHub Pages

For [KelvinRein7.github.io](https://github.com/KelvinRein7/KelvinRein7.github.io):

1. `npm run build`
2. Copy `dist/` contents into the Pages repo (or push `dist` via Actions / `gh-pages`).
3. Keep `base: '/'` in `vite.config.js` for a user site (`username.github.io`).

For a project-page repo, set `base: '/RepoName/'` before building.
