# Commerce specification

Commerce is in **skeleton** phase: product discovery and detail pages exist; **checkout and cart are not implemented**.

## Products (catalog)

Exactly **two** products. Canonical data lives in [`lib/products.ts`](../lib/products.ts).

| ID | Slug | Route | Title | Price |
|----|------|-------|-------|-------|
| `app-bookmark` | `app-bookmark` | `/products/app-bookmark` | 1 Bookmark with App | $12 ($12 per bookmark) |
| `offline-pack` | `offline-pack` | `/products/offline-pack` | 6 Offline Bookmarks | $36 ($6 per bookmark) |

### Product differences (intent)

- **App bookmark:** One bookmark; locate via **free mobile app**; includes spare tracker.
- **Offline pack:** Six bookmarks; **remote tracker works without internet**.

### Shared merchandising

- Homepage and PDPs may show: **“Free shipping on orders over $25”**.
- Offer presentation on homepage is **not duplicated in JSX** — use `ProductOfferCards` reading from `lib/products.ts`.

## User flows

```mermaid
flowchart TD
  subgraph home [Homepage]
    hero[Hero Order now]
    cards[Product offer cards]
    bottom[Final CTA Order now]
  end
  orderSection["Section id=order"]
  pdpApp["/products/app-bookmark"]
  pdpPack["/products/offline-pack"]

  hero -->|"#order"| orderSection
  bottom -->|"#order"| orderSection
  cards -->|per-product CTA| pdpApp
  cards -->|per-product CTA| pdpPack
  pdpApp --> layout[ProductDetailLayout]
  pdpPack --> layout
```

### CTA specification

| Control | Location | Target | Spec |
|---------|----------|--------|------|
| Order now | Hero | `#order` | Scroll to two product cards |
| Order now | Final CTA | `#order` | Same |
| Get Bookmark with App | Offer card | `/products/app-bookmark` | From `product.ctaLabel` |
| Get 6 Offline Bookmarks | Offer card | `/products/offline-pack` | From `product.ctaLabel` |
| Add to cart | PDP | — | **Disabled**; label “Add to cart” |
| View all options | PDP | `/#order` | Return to homepage offer section |
| See also | PDP | `/products/{sibling-slug}` | `RelatedProductCard`: image, title, description, price, `ctaLabel` button |

**Do not** use `mailto:` for primary order CTAs unless this spec is updated.

### Simulated ordering copy

PDP and homepage may state that ordering is a **school-project simulation** and checkout is coming soon. Wording may appear near the disabled cart button and in the final CTA paragraph.

## Product detail page (PDP)

Implemented by [`components/product-detail-layout.tsx`](../components/product-detail-layout.tsx).

### Layout (required elements)

1. Back link → `/`
2. Two columns on `md+`: image | purchase block
3. Purchase block: title, `priceDisplay`, optional `priceDetail`, `shortDescription`
4. **Theme selector** — `<select>` bound to `product.variants` (shared theme list from `productThemes` in `lib/products.ts`)
   - Label: **Theme**
5. **Add to cart** — disabled button
6. **What’s included** — bullet list from `product.features`
7. Free shipping line
8. **See also** — `RelatedProductCard` for sibling product (image, title, `shortDescription`, price, CTA to sibling PDP)
9. **View all options** — `/#order`

### Themes (skeleton)

Both products share the same theme options (alphabetical by label):

| id | Label |
|----|-------|
| `assorted` | Assorted |
| `butterfly-and-insects` | Butterfly and Insects |
| `cute-animals` | Cute Animals |
| `space` | Space |
| `wild-animals` | Wild Animals |

Default selection is the first theme (`assorted`). Theme selection does **not** change price or enable checkout yet. Future spec should define `priceDelta` or SKU mapping before checkout integration.

### Images

`product.imageSrc` and `product.imageAlt` drive the hero image. If `imageSrc` is omitted, show a dashed placeholder (“Product image coming soon”).

## Homepage offer cards

[`components/product-offer-cards.tsx`](../components/product-offer-cards.tsx) maps `products` from `lib/products.ts` to two `Card` components with links to `/products/{slug}`.

**Rule:** Do not hardcode prices or product titles on the homepage offer section; change `lib/products.ts` instead.

## Adding a third product (future)

Requires all of:

1. New record in `lib/products.ts`
2. New `app/products/<slug>/page.tsx`
3. Updates to this spec and [routing-and-pages.md](./routing-and-pages.md)
4. `npm run build` verification

Prefer explicit routes over `[slug]` until catalog size justifies dynamic routing.

## Not implemented

See [roadmap.md](./roadmap.md): cart state, checkout, payments, inventory, variant pricing.
