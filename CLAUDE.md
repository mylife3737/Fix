# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # dev server at http://localhost:3000
npm run build    # production build → dist/
npm run lint     # tsc --noEmit (type-check only, no test suite)
npm run preview  # preview production build
```

## Stack

React 19 + Vite 6 + TypeScript + Tailwind CSS v4 (via `@tailwindcss/vite` plugin — no `tailwind.config.*` file). Animations via `motion/react`. Icons via `lucide-react`.

## Architecture

This is a **single-file, single-page app**. All UI, state, data, and logic live in `src/App.tsx`. There is no routing in use (react-router-dom is installed but unused). No component split, no separate data files.

Key sections rendered in order: sticky header → hero → services grid → about → testimonials + review form → estimate form → footer → lightbox modal → toast.

**State management**: all `useState` at the top of the `FixitFirst` component. Reviews and estimate requests are persisted to `localStorage` (`fixitfirst_user_reviews`, `fixitfirst_requests`). No backend — form submissions are local only.

**Custom SVG icons**: `DiagonalBandageIcon`, `RuledAngleIcon`, `DoorClosedIcon`, `KitchenCabinetIcon`, `CurtainsSwagedWindowIcon`, `HoseIcon` are defined inline above the component.

**Services**: `SERVICES_DATA` array drives the services grid. Each item has `id`, `title`, `description`, `icon`, `category` (`'interior' | 'exterior'`). Adding a service = adding an entry to that array.

**`@` alias** resolves to the repo root (not `src/`).

## Environment

`GEMINI_API_KEY` is exposed at build time via `process.env.GEMINI_API_KEY` (injected by Vite from `.env.local`). The key is currently unused in the app but wired up in `vite.config.ts` for future use.
