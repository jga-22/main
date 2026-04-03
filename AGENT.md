# Agent Context

## Owner
- Name: Juan Galvis
- Role: AI Product Manager
- Domain: AI products, digital strategy, industrial systems, and transformation

## Site Purpose
- Personal website for sharing work, perspective, and new projects
- Should feel more like a thoughtful digital home than a resume
- Professional background matters, but it should support the story rather than dominate it

## Content Priorities
- Clear introduction to who Juan is and what he works on
- Selected work with concise context and visible themes
- Space for writing, notes, or ideas
- Links to projects, profiles, and contact points
- A compact professional timeline

## Editorial Tone
- Direct
- Clear
- Technical without sounding corporate
- Thoughtful but concise

## Design Direction
- Minimal
- Galaxy and technology inspired
- Dark, spatial, and precise rather than noisy or flashy
- Strong hierarchy, restrained color use, and subtle motion

## Technical Constraints
- Built with Astro
- Static output goes to `docs/`
- GitHub Pages serves from `docs/`
- Prefer reusable components and data-driven content
- Keep client-side JavaScript minimal unless interaction really needs it

## File Roles
- `src/pages/`: page entry points
- `src/layouts/`: shared page wrappers
- `src/components/`: reusable UI pieces
- `src/data/`: editable site content
- `src/styles/`: source styles
- `public/`: static assets with stable URLs
- `docs/`: generated production output

## Editing Guidance
- Prefer updating content in `src/data/site.js` before editing templates
- Keep sections compact and intentional
- Avoid returning to a CV-first layout
- Do not hand-edit generated files in `docs/`
