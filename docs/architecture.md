# Architecture

## Tech stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 16 (App Router) |
| UI | React 19, TypeScript |
| Styling | Tailwind CSS v4 (`app/globals.css`) |
| Components | shadcn/ui (New York style) — `components/ui/` |
| Font | Google Fonts **Fredoka** — CSS variable `--font-heading` |

## Static export (required)

Configuration in [`next.config.ts`](../next.config.ts):

```ts
output: "export"
```

Implications:

- Every route must be **statically generatable** at build time.
- No `getServerSideProps`, Route Handlers that need a Node server, or dynamic features that require a running server unless explicitly redesigned in this spec.
- Build writes HTML to **`out/`** — deploy that folder to any static host.

### Build verification

```bash
npm run build
```

Expected static routes (as of current spec):

| Route | Output |
|-------|--------|
| `/` | `out/index.html` |
| `/reviews` | `out/reviews.html` |
| `/products/app-bookmark` | `out/products/app-bookmark.html` |
| `/products/offline-pack` | `out/products/offline-pack.html` |

## Project layout

```
app/
  layout.tsx              # Root layout, metadata, Fredoka
  globals.css             # Design tokens, utilities
  page.tsx                # Homepage
  icon.svg
  reviews/page.tsx
  products/
    app-bookmark/page.tsx
    offline-pack/page.tsx
components/
  product-detail-layout.tsx
  product-offer-cards.tsx
  ui/                     # button, card, …
lib/
  products.ts             # Commerce catalog
  book-reviews.ts         # Review content
  utils.ts                # cn() helper
public/                   # Static assets (e.g. /assets/*.jpg)
docs/                     # Specifications (this folder)
```

Path alias: `@/*` → project root (see `tsconfig.json`).

## Assets

Images are referenced from the site root, e.g. `/assets/hero-children-reading.jpg`. Place files under `public/assets/` (or equivalent static path) so they are copied to `out/` on build.

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Development server |
| `npm run build` | Production static export → `out/` |
| `npm run start` | Serve `out/` (after build) |
| `npm run lint` | ESLint |

## Deployment

Serve the **`out/`** directory after `npm run build`. No Node process is required in production.

## Constraints for future changes

Before adding server features, update this document and confirm static export remains viable—or document a deliberate migration away from static export.
