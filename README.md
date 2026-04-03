# Juan Galvis Website

Personal website built with Astro and published as a static site on GitHub Pages.

## Main workflows

Install dependencies:

```powershell
npm install
```

Run the local development server:

```powershell
npm run dev
```

Build the production site into `docs/`:

```powershell
npm run build
```

Preview the production build locally:

```powershell
npm run preview
```

## Publishing

GitHub Pages serves the generated files from `docs/`.

The normal publish flow is:

1. Edit the source files in `src/` or `public/`.
2. Test locally with `npm run dev`.
3. Rebuild with `npm run build`.
4. Commit the source changes and the updated `docs/` output.
5. Push to GitHub.

GitHub Pages should point to:

- Branch: `main`
- Folder: `/docs`

## Repository structure

- `[src/pages](c:/Users/jsgal/Documents/git/main/src/pages)`
  - Astro page entry points

- `[src/layouts](c:/Users/jsgal/Documents/git/main/src/layouts)`
  - Shared page layouts

- `[src/components](c:/Users/jsgal/Documents/git/main/src/components)`
  - Reusable UI blocks

- `[src/data](c:/Users/jsgal/Documents/git/main/src/data)`
  - Structured content used by the pages

- `[src/styles](c:/Users/jsgal/Documents/git/main/src/styles)`
  - Source stylesheets

- `[public](c:/Users/jsgal/Documents/git/main/public)`
  - Static assets copied as-is to the final site

- `[docs](c:/Users/jsgal/Documents/git/main/docs)`
  - Generated production site for GitHub Pages

## What to edit

- Update text and links:
  - `[site.js](c:/Users/jsgal/Documents/git/main/src/data/site.js)`

- Change page structure:
  - `[index.astro](c:/Users/jsgal/Documents/git/main/src/pages/index.astro)`

- Change reusable UI:
  - files in `[src/components](c:/Users/jsgal/Documents/git/main/src/components)`

- Change the visual design:
  - `[global.css](c:/Users/jsgal/Documents/git/main/src/styles/global.css)`

- Change static images or icons:
  - files in `[public](c:/Users/jsgal/Documents/git/main/public)`

## Notes

- Edit `src/` and `public/`, not `docs/`.
- Files inside `docs/_astro/` are generated build assets.
- `outDir: "./docs"` is configured in `[astro.config.mjs](c:/Users/jsgal/Documents/git/main/astro.config.mjs)`.
