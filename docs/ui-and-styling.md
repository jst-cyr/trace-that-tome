# UI and styling

## Design system

- **shadcn/ui** components in `components/ui/` (configured via `components.json`).
- **Tailwind CSS v4** with design tokens in `app/globals.css` (`:root` CSS variables).
- **Primary color:** blue (`--primary` oklch blue hue).
- **Radius:** `--radius: 0.625rem`.

Use semantic classes: `bg-primary`, `text-muted-foreground`, `border-border`, `bg-card`, etc.

## Typography

| Role | Implementation |
|------|----------------|
| Headings | `font-heading` (Fredoka) |
| Body | Default sans stack from Tailwind base |

Fredoka is loaded in `app/layout.tsx` with `variable: "--font-heading"` on `<html>`.

### Custom utilities (globals.css)

| Class | Purpose |
|-------|---------|
| `hero-tagline` | Italic hero poem line |
| `author-bio` | Featured author paragraph |
| `review-quote` | Reviews page blockquote styling |

## Layout patterns

### Homepage

- Full-bleed hero/CTA sections with background images and dark overlay (`bg-black/45`–`50`).
- Content sections: `px-6 py-16 md:py-24`, max-width containers (`max-w-4xl`, `max-w-5xl`).
- Grids: `sm:grid-cols-2`, `lg:grid-cols-3` or `4` for cards.

### Product / review pages

- Centered column or `max-w-5xl` / `max-w-4xl`.
- Cards: `rounded-2xl border bg-card shadow-sm` (or `shadow-lg` on offer cards).

### Promo aside (homepage)

- Blue border `border-2 border-primary`, light blue background `bg-[#e8f1ff]`, blue headings.

## Components

### `components/ui/button.tsx`

Use `Button` with `asChild` + `Link` or `<a>` for navigation. Sizes: `default`, `lg`. Variants: `default`, `outline`, etc.

### `components/ui/card.tsx`

Standard Card composition: `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`.

### App-specific

| Component | Role |
|-----------|------|
| `ProductOfferCards` | Homepage two-product grid |
| `ProductDetailLayout` | Shared PDP shell |

## Images

- Prefer `alt` text on all meaningful images.
- Decorative CTA backgrounds: `aria-hidden` on image when alt is empty.
- Product PDP: respect `product.imageAlt`.

## Accessibility

- Variant `<select>`: associated `<label htmlFor="variant">`.
- Disabled cart: `disabled` + `aria-disabled` on button.
- Anchor scroll: `scroll-mt-6` on `#order` section to offset fixed headers if added later.

## Do not

- Introduce a second color system or inline one-off brand colors without updating this spec.
- Add client-only animation libraries without architecture review.
- Break static export with CSS-in-JS that requires runtime SSR-only APIs.
