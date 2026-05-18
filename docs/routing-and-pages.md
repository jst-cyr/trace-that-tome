# Routing and pages

## Route map

| Path | File | Type | Description |
|------|------|------|-------------|
| `/` | `app/page.tsx` | Static | Marketing homepage |
| `/reviews` | `app/reviews/page.tsx` | Static | Book review quotes |
| `/products/app-bookmark` | `app/products/app-bookmark/page.tsx` | Static | PDP — 1 Bookmark with App |
| `/products/offline-pack` | `app/products/offline-pack/page.tsx` | Static | PDP — 6 Offline Bookmarks |

There is **no** dynamic `[slug]` product route. New products require a new folder under `app/products/` and an entry in `lib/products.ts` (see [commerce.md](./commerce.md)).

## Page patterns

### Secondary pages (reviews, PDP)

- `<main className="min-h-screen …">` with horizontal padding.
- Top: **“← Back to Trace That Tome”** linking to `/`.
- Page title with `font-heading`.
- Footer or inline link back home / to related content.

### Metadata

Each page should export `metadata` (Next.js `Metadata` type) with a title suffix `– Trace That Tome` where appropriate. Product pages derive title and description from `lib/products.ts`.

## Homepage (`app/page.tsx`)

Sections in document order:

| Section | Purpose | Notable behavior |
|---------|---------|------------------|
| Hero | Value prop + primary CTA | “Order now” → `#order` |
| Why Trace That Tome? | Info cards + promo aside | Static copy in JSX |
| **Price / offer** | Two purchase options | **`id="order"`**, `scroll-mt-6`; uses `ProductOfferCards` |
| Featured Author | Saadia Faruqui spotlight + book covers | External cover URLs |
| Try These Great Books | Recommendations grid | CTA → `/reviews` |
| Final CTA | Closing message | “Order now” → `#order` (not mailto) |

### Anchor: `#order`

The **`id="order"`** element is the **price/offer section** (two product cards), not the bottom CTA block.

- Hero and bottom “Order now” buttons use `href="#order"`.
- PDP “View all options” uses `href="/#order"`.

## Product pages

Each PDP page:

1. Loads product via `getProductBySlug("<slug>")` from `lib/products.ts`.
2. Calls `notFound()` if missing (unlikely for fixed routes).
3. Renders `<ProductDetailLayout product={product} />`.

Slugs must match folder names: `app-bookmark`, `offline-pack`.

## Internal linking summary

```
/  ──►  #order (same page)
/  ──►  /reviews
/  ──►  /products/{slug}  (via ProductOfferCards)
/products/*  ──►  /, /#order, sibling /products/{other-slug}
```

Full commerce CTA rules: [commerce.md](./commerce.md).
