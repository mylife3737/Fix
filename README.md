# Fix It First by Ruben

Landing page for a residential handyman service in Charlotte County, FL. Single-page React app — no backend, no routing, no database.

## Stack

- React 19 + Vite 6 + TypeScript
- Tailwind CSS v4 (via `@tailwindcss/vite` — no config file)
- `motion/react` for animations
- `lucide-react` for icons

## Setup

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build → dist/ + prerender
npm run preview  # preview the production build
npm run lint     # TypeScript type-check only (no test suite)
```

Optionally create `.env.local` from `.env.example` if a Gemini API key is needed (currently unused).

## Structure

Everything lives in `src/App.tsx`. Sections render in order:

1. **Sticky header** — phone number + nav + estimate CTA
2. **Hero** — logo, tagline, service area callouts
3. **Services grid** — interior / exterior toggle; click cards to add to quote
4. **Meet Ruben** — bio section
5. **Testimonials** — review cards with optional photo lightbox
6. **Estimate form** — free quote request
7. **Footer**
8. **Lightbox modal** — full-screen review photo viewer
9. **Toast** — global error / success notifications

## Key data

**`SERVICES_DATA`** — array of `ServiceItem` objects driving the services grid. Each has `id`, `title`, `description`, `icon`, and `category` (`'interior' | 'exterior'`). Add a new service by appending an entry here.

**`DEFAULT_TESTIMONIALS`** — seed reviews shown before any user reviews are submitted.

## Persistence

No backend. Two keys in `localStorage`:

| Key | Contents |
|---|---|
| `fixitfirst_requests` | Estimate form submissions |
| `fixitfirst_user_reviews` | User-submitted reviews (max 5 shown) |

## Assets

| File | Purpose |
|---|---|
| `src/assets/logo.png` | Logo used in hero |
| `FixIt First by Rubin Logo.png` | Original logo file |
| `FixitFirst.zip` | Project archive |
| `repomix-output.xml` | Packed codebase snapshot (AI context) |
| `seo-report.md` | SEO audit report |
