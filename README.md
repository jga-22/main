# Juan Galvis Website

Personal website built with Astro and published as a static site through GitHub Pages.

## Development

Install dependencies:

```powershell
npm install
```

Start the local development server:

```powershell
npm run dev
```

Build the production site into `docs/`:

```powershell
npm run build
```

Preview the production build:

```powershell
npm run preview
```

## Content management

Most site copy and structured homepage content live in `src/data/site.yaml`.

This includes:

- site metadata
- social links
- hero text
- introduction text
- focus areas
- timeline entries

The file `src/data/site.js` is only a small loader that reads the YAML file and exports the content to Astro components.

Blog posts are auto-discovered from `src/content/blog/` through Astro content collections. Add a new `.md` or `.mdx` file there with the required frontmatter and it will appear automatically on `/blog/`.

Required blog frontmatter:

```yaml
title: Your post title
date: 2026-04-06
category: life
excerpt: Short summary for the blog list
description: Optional SEO description
```

Allowed categories are `life`, `technology`, and `work-experience`.

## Repository structure

- `src/pages/`: Astro page entry points
- `src/components/`: reusable UI pieces
- `src/layouts/`: shared page layouts
- `src/data/`: structured site content
- `src/content/`: blog content collections
- `src/styles/`: global styling
- `public/`: static assets copied directly to the build
- `docs/`: generated site output for GitHub Pages

## Common edits

- Update homepage text, links, and timeline data in `src/data/site.yaml`
- Add blog posts in `src/content/blog/`
- Adjust page composition in `src/pages/index.astro`
- Add or refine reusable interface blocks in `src/components/`
- Update global presentation in `src/styles/global.css`
- Replace images or icons in `public/`

## Publishing

The repo is configured to publish the generated static output from `docs/`.

Typical flow:

1. Edit source files in `src/` or `public/`.
2. Validate changes with `npm run dev`.
3. Rebuild the static output with `npm run build`.
4. Commit both source updates and regenerated `docs/`.
5. Push to `main`.

For GitHub Pages, the repository should publish from:

- Branch: `main`
- Folder: `/docs`

## Notes

- Treat `docs/` as build output, not the primary editing surface.
- Files inside `docs/_astro/` are generated assets.
- The build output directory is configured in `astro.config.mjs`.
