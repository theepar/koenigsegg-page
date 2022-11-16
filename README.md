# Koenigsegg

A single React application for the Koenigsegg home, megacar, technology, and contact pages.

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

## Project structure

- `src/pages` contains page layouts.
- `src/components` contains shared navigation, headings, links, and hero components.
- `src/data` contains page data and navigation labels.
- `src/routes.js` maps URL paths to React pages.
- `src/index.css` contains shared responsive styles and device breakpoints.
- `static/images` contains images used by the application.

Internal navigation works without reloading the page. Contact form opens the visitor's email application with a prepared message.
