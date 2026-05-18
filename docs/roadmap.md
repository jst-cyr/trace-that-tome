# Roadmap

Planned work **not** in the current specification. Implement only after updating the relevant spec in `docs/`.

## Commerce

| Item | Notes |
|------|-------|
| Real checkout | Replace disabled “Add to cart”; Stripe or school-approved flow |
| Cart | Session or local storage; line items with variant + quantity |
| Variant pricing | Extend `ProductVariant` with price/SKU; enable selector when >1 option |
| Product photography | Replace dragon placeholder per product |
| Dynamic `[slug]` catalog | Only if product count grows beyond a handful |

## Homepage / marketing

| Item | Notes |
|------|-------|
| Giveaway CTA | “Enter the draw” currently `href="#"` — needs route or form spec |
| Extract homepage copy to `lib/` | Featured author, info cards, book grids |
| Shared site header/footer | Not present today |

## Content

| Item | Notes |
|------|-------|
| More book reviews | Append to `lib/book-reviews.ts` |
| CMS / MDX | If non-developers edit copy |

## Platform

| Item | Notes |
|------|-------|
| Move off static export | Requires `docs/architecture.md` migration plan |
| Analytics | Privacy-conscious tracking spec first |
| SEO | Open Graph images, sitemap beyond static defaults |

## Completed (reference)

- Commerce PDP skeleton (two routes, `lib/products.ts`, homepage `#order` wiring)
- Book reviews page with attributed quotes
- Static export build pipeline
