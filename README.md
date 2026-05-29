# Wisest Maths

A-Level Maths and Further Maths revision app: video lessons, a question bank with
fully worked solutions, and an AI-powered Socratic tutor.

**Stack:** Vite + React + TanStack Router (frontend), Express (`server/`) for the
Socratic tutor API, KaTeX + Mafs for maths/diagram rendering.

> This project was migrated from Next.js to Vite. There is no Next.js app anymore —
> do not run `next dev`. The only app is the Vite app described below.

## Getting Started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

To run the Socratic tutor API (optional; only needed for the AI tutor):

```bash
npm run dev:server   # Express server on :3001, proxied at /api
```

## Project layout

- `src/` — the React app (pages, components, hooks, routing). All `@/...` imports
  resolve here.
- `lib/data/questions/` — the question bank (the single source of truth). The app
  imports it via the `@/lib/data/questions` alias configured in `vite.config.ts`.
- `server/` — Express API for the Socratic tutor.

## Build

```bash
npm run build     # production build to dist/
npm run preview   # serve the production build locally
```

## Deploy

This is a static Vite SPA. Build with `npm run build` and serve `dist/`.
On Vercel/Netlify, set the **build command** to `npm run build` and the
**output directory** to `dist` (framework preset: **Vite**, not Next.js).
