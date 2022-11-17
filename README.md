# Koenigsegg

A responsive React recreation of the Koenigsegg 2025 homepage, with megacar, technology, and contact pages.

## Run locally

Requires Node.js 22.12 or newer.

```powershell
npm install
npm run dev
```

Open http://127.0.0.1:5173.

## Build

```powershell
npm run build
npm run preview
```

Production build writes to `docs/` for GitHub Pages. Configure Pages to publish from `main` and `/docs`.

## Project structure

- `src/pages` contains page layouts.
- `src/components` contains shared navigation, headings, links, and hero components.
- `src/data` contains page data and navigation labels.
- `src/routes.js` maps URL paths to React pages.
- `src/index.css` contains shared responsive styles and device breakpoints.
- `static/images` contains images used by the application.
- `static/fonts` contains the Basel Grotesk and Gustavo fonts used by the 2025 design.

Internal navigation works without reloading the page. Contact form opens the visitor's email application with a prepared message.
