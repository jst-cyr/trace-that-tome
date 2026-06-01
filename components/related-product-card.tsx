import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Product } from "@/lib/products";

type RelatedProductCardProps = {
  product: Product;
};

export function RelatedProductCard({ product }: RelatedProductCardProps) {
  return (
    <Card className="w-full max-w-2xl overflow-hidden border-primary/20 bg-card shadow-lg">
      <div className="grid grid-cols-2 items-stretch">
        <figure className="relative min-h-[17rem] overflow-hidden border-r">
          {product.imageSrc ? (
            <img
              src={product.imageSrc}
              alt={product.imageAlt}
              className="absolute inset-0 size-full object-cover object-center"
            />
          ) : (
            <div
              className="absolute inset-0 flex items-center justify-center bg-muted text-center text-xs text-muted-foreground"
              aria-hidden
            >
              Product image coming soon
            </div>
          )}
        </figure>

        <div className="flex min-w-0 flex-col">
          <CardHeader className="pb-4">
            <CardTitle className="font-heading text-2xl">{product.title}</CardTitle>
            <CardDescription className="text-base">
              {product.shortDescription}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1 pt-0">
            <p className="text-4xl font-bold">{product.priceDisplay}</p>
            {product.priceDetail ? (
              <p className="mt-2 text-sm text-muted-foreground">
                {product.priceDetail}
              </p>
            ) : null}
          </CardContent>
          <CardFooter className="pb-6 sm:justify-start">
            <Button asChild size="lg">
              <Link href={`/products/${product.slug}`}>{product.ctaLabel}</Link>
            </Button>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
}
