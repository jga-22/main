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

Build the production site into `dist/`:

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

## Common edits

- Update homepage text, links, and timeline data in `src/data/site.yaml`
- Add blog posts in `src/content/blog/`
- Adjust page composition in `src/pages/index.astro`
- Add or refine reusable interface blocks in `src/components/`
- Update global presentation in `src/styles/global.css`
- Replace images or icons in `public/`

## Publishing

The repository is configured to deploy with GitHub Actions on every push to `main`.

Typical flow:

1. Edit source files in `src/` or `public/`.
2. Validate changes with `npm run dev`.
3. Commit source updates only.
4. Push to `main`.
5. GitHub Actions builds and deploys the site to GitHub Pages automatically.

For GitHub Pages, the repository should publish from:

- Source: `GitHub Actions`

Workflow file:

- `.github/workflows/deploy.yml`

## Notes

- Treat generated output as ephemeral build artifacts.
- Files inside generated `dist/_astro/` assets are created by Astro at build time.
