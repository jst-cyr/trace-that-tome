# Trace That Tome — documentation index

Specifications for the Trace That Tome marketing site. **Agents and contributors should treat these documents as the authoritative description of intended behavior.**

## Documents

| Document | Purpose |
|----------|---------|
| [spec-overview.md](./spec-overview.md) | Product vision, audience, spec-driven principles |
| [architecture.md](./architecture.md) | Tech stack, static export, build, deployment |
| [routing-and-pages.md](./routing-and-pages.md) | Routes, page responsibilities, homepage sections |
| [commerce.md](./commerce.md) | Products, PDPs, CTAs, ordering (simulated) |
| [content-and-data.md](./content-and-data.md) | `lib/products.ts`, `lib/book-reviews.ts` data contracts |
| [ui-and-styling.md](./ui-and-styling.md) | Typography, tokens, components, layout patterns |
| [roadmap.md](./roadmap.md) | Planned features not yet implemented |

## Quick reference

- **Homepage order section:** `#order` on the price/offer block (two product cards).
- **Product URLs:** `/products/app-bookmark`, `/products/offline-pack`.
- **Catalog data:** `lib/products.ts` (single source for offer cards + PDPs).
- **Build output:** `out/` after `npm run build`.

## Maintaining specs

When you change behavior:

1. Update the relevant doc(s) in this folder.
2. Update code to match.
3. Run `npm run build` if routes or static generation are affected.

See [AGENTS.md](../AGENTS.md) at the repo root for agent workflow.
