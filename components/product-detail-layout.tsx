import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Product } from "@/lib/products";
import { getSiblingProduct } from "@/lib/products";

type ProductDetailLayoutProps = {
  product: Product;
};

export function ProductDetailLayout({ product }: ProductDetailLayoutProps) {
  const sibling = getSiblingProduct(product);

  return (
    <main className="min-h-screen px-6 py-12 md:py-16">
      <div className="mx-auto max-w-5xl">
        <p className="text-center">
          <Link
            href="/"
            className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          >
            ← Back to Trace That Tome
          </Link>
        </p>

        <div className="mt-10 grid gap-10 md:grid-cols-2 md:items-start">
          <figure className="flex flex-col items-center rounded-2xl border bg-muted/30 p-8">
            {product.imageSrc ? (
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="h-auto max-h-80 w-full max-w-xs object-contain"
              />
            ) : (
              <div
                className="flex aspect-square w-full max-w-xs items-center justify-center rounded-xl border border-dashed border-border bg-muted text-sm text-muted-foreground"
                aria-hidden
              >
                Product image coming soon
              </div>
            )}
          </figure>

          <div className="min-w-0">
            <h1 className="font-heading text-3xl font-bold md:text-4xl">
              {product.title}
            </h1>
            <p className="mt-4 text-4xl font-bold">{product.priceDisplay}</p>
            {product.priceDetail ? (
              <p className="mt-1 text-sm text-muted-foreground">
                {product.priceDetail}
              </p>
            ) : null}
            <p className="mt-4 text-muted-foreground">
              {product.shortDescription}
            </p>

            <div className="mt-8">
              <label
                htmlFor="theme"
                className="text-sm font-medium text-foreground"
              >
                Theme
              </label>
              <select
                id="theme"
                name="theme"
                defaultValue={product.variants[0]?.id}
                className="mt-2 flex h-10 w-full max-w-sm rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                aria-label="Theme"
              >
                {product.variants.map((variant) => (
                  <option key={variant.id} value={variant.id}>
                    {variant.label}
                  </option>
                ))}
              </select>
            </div>

            <Button
              type="button"
              size="lg"
              className="mt-6 w-full max-w-sm"
              disabled
              aria-disabled
            >
              Add to cart
            </Button>
            <p className="mt-2 text-xs text-muted-foreground">
              Checkout coming soon—for this school project, ordering is still
              simulated.
            </p>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border bg-card p-6 shadow-sm">
          <h2 className="font-heading text-xl font-semibold">What&apos;s included</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
            {product.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Free shipping on orders over $25
        </p>

        {sibling ? (
          <p className="mt-6 text-center text-sm">
            See also:{" "}
            <Link
              href={`/products/${sibling.slug}`}
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              {sibling.title}
            </Link>
          </p>
        ) : null}

        <div className="mt-10 flex justify-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/#order">View all options</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
