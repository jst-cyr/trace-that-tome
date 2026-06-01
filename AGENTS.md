# Agent guide — Trace-That-Tome

This repository uses a **spec-driven** workflow. **`docs/` is the source of truth** for how the application should behave. When implementing or changing features, read the relevant spec first; when behavior changes, update the spec **before or together with** code—not after as an afterthought.

If `docs/` conflicts with `README.md`, comments, or stale chat context, **trust `docs/`**.

## Start here

| Task | Read first |
|------|------------|
| Any change | [docs/README.md](docs/README.md) (index) |
| New route or page | [docs/routing-and-pages.md](docs/routing-and-pages.md) |
| Products, checkout, CTAs | [docs/commerce.md](docs/commerce.md) |
| Editing copy in `lib/` | [docs/content-and-data.md](docs/content-and-data.md) |
| UI, fonts, components | [docs/ui-and-styling.md](docs/ui-and-styling.md) |
| Stack, build, deploy | [docs/architecture.md](docs/architecture.md) |
| Product purpose and principles | [docs/spec-overview.md](docs/spec-overview.md) |
| Planned work | [docs/roadmap.md](docs/roadmap.md) |

## Repository snapshot

- **Next.js 16** App Router, **static export** (`output: "export"` → `out/`)
- **No backend**, no real payment or cart yet (school-project campaign site)
- **Two products**, explicit PDP routes (not a dynamic catalog)
- Content modules: `lib/products.ts`, `lib/book-reviews.ts`

## Spec-driven rules for agents

1. **Read** the spec sections that apply to your task before editing code.
2. **Propose spec updates** when requirements are ambiguous; do not guess behavior that belongs in a spec.
3. **Update docs** when you change user-visible behavior, routes, data shapes, or CTA targets.
4. **Keep product copy in `lib/products.ts`** (and book data in `lib/book-reviews.ts`)—avoid duplicating prices or descriptions in JSX when a shared module exists.
5. **Preserve static export**: no server-only APIs, no dynamic routes that need a Node server, unless `docs/architecture.md` is updated to allow it.
6. **Match existing patterns**: secondary pages use back link + `font-heading`; commerce uses `ProductDetailLayout` and `ProductOfferCards`.
7. **Verify** with `npm run build` after route or config changes.

## Key paths

```
app/
  page.tsx                          # Homepage
  reviews/page.tsx                  # Book reviews
  products/app-bookmark/page.tsx    # PDP — app bookmark
  products/offline-pack/page.tsx      # PDP — offline pack
components/
  product-detail-layout.tsx
  product-offer-cards.tsx
  ui/                               # shadcn (Button, Card)
lib/
  products.ts                       # Product catalog (2 items)
  book-reviews.ts                     # Review quotes
docs/                               # Specifications (source of truth)
```

## Commands

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site → out/
npm run lint
```

## Questions?

If a task is not covered by `docs/`, add or extend the appropriate spec file, then implement. Do not rely on conversation history alone for behavior decisions.
