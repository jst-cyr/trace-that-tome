# Content and data

Structured content lives in `lib/` as TypeScript modules. **Pages and components should import from these modules** rather than duplicating copy.

## `lib/products.ts` — commerce catalog

### Types

```ts
ProductVariant { id, label }
ProductImage { src, alt }
ProductId = "app-bookmark" | "offline-pack"
Product {
  id, slug, title, shortDescription,
  priceDisplay, priceDetail?,
  features[], variants[],
  imageSrc?, imageAlt,
  galleryImages[],
  metaDescription, ctaLabel
}
```

### Exports

| Export | Use |
|--------|-----|
| `products` | Homepage offer cards, iteration |
| `getProductBySlug(slug)` | PDP pages |
| `getSiblingProduct(product)` | PDP “See also” link |

### Field guidelines

| Field | Used on |
|-------|---------|
| `title`, `shortDescription`, `priceDisplay`, `priceDetail` | Home cards, PDP header |
| `features` | PDP “What’s included” only |
| `variants` | PDP theme selector (see `productThemes`) |
| `metaDescription` | Page `<meta description>` |
| `ctaLabel` | Homepage card button text |
| `imageSrc`, `imageAlt` | Default **hero** image (homepage offer cards, See also, any single-image surface); must match `galleryImages[0]` |
| `galleryImages` | PDP gallery only; explicit list per product under `/assets/products/{slug}/`. First entry must be `hero.jpg` and match `imageSrc` / `imageAlt`. Other filenames vary by product. |
| `slug` | URL segment; must match `app/products/<slug>/` |

### Editing products

1. Change fields in `products` array.
2. Confirm [commerce.md](./commerce.md) still matches behavior.
3. Run `npm run build`.

## `lib/book-reviews.ts` — book reviews

### Type

```ts
BookReview {
  id, title, author,
  coverImage, coverAlt,
  quote, sourceName, sourceUrl
}
```

### Usage

- Consumed by `app/reviews/page.tsx` only.
- Quotes must be **real, attributed** review excerpts with link to `sourceUrl`.
- Cover images may use Open Library or other stable URLs.

### Adding a review

Append to `bookReviews` array with a unique `id`. No route changes required.

## `lib/utils.ts`

`cn(...)` — classname helper for shadcn components. No business content.

## Content not in `lib/` (homepage JSX)

The following remain inline in `app/page.tsx` until extracted:

- “Why Trace-That-Tome?” info cards
- Featured author bio and book grid
- “Try These Great Books” grid
- Promo aside (“Win a free bookmark!” — CTA still placeholder `#`)

When moving marketing copy to data files, add a spec section here first.

## External content

- Book covers: Open Library, Wikimedia (featured author photo with CC attribution in figcaption).
- Review sources: Kirkus and others — preserve `sourceName` + `sourceUrl`.

Do not invent review quotes; spec requires published attribution.
