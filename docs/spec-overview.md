# Spec overview

## What this application is

**Trace That Tome** is a marketing and light-commerce campaign site for a school project product: a bookmark with a built-in tracking tag. Visitors learn how the product works, see book-related content (featured author, recommendations, reviews), and can browse two purchase options before a future real checkout flow.

The site is intentionally **static**: no server runtime, no database, no payment processor in the current implementation.

## Audience and tone

- Family-friendly, kid-oriented campaign (school project).
- Headings use a playful display font (**Fredoka** via `font-heading`).
- Copy may note that ordering is **simulated** until checkout is built.

## Spec-driven development

| Principle | Meaning |
|-----------|---------|
| Docs first | Intended behavior lives in `docs/` before or alongside code. |
| Single sources of truth | Product copy → `lib/products.ts`. Book reviews → `lib/book-reviews.ts`. |
| Explicit routes | Two products = two route folders, not a scalable dynamic catalog (for now). |
| Static by default | All pages must be buildable with `output: "export"`. |

## Major capabilities (current)

1. **Marketing homepage** — hero, benefits, offers, featured author, book picks, CTAs.
2. **Commerce skeleton** — two product detail pages (PDP), shared layout, disabled add-to-cart.
3. **Book reviews** — static list of quoted reviews with external source links.

## Out of scope (current build)

See [roadmap.md](./roadmap.md) for checkout, cart, payments, dynamic catalog, and backend APIs.

## Related specs

- [commerce.md](./commerce.md) — purchase flows and product definitions
- [routing-and-pages.md](./routing-and-pages.md) — page map and homepage structure
