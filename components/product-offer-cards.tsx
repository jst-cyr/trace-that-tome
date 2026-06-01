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
import { products } from "@/lib/products";

export function ProductOfferCards() {
  return (
    <div className="mx-auto grid w-full max-w-5xl gap-6 sm:grid-cols-2">
      {products.map((product) => (
        <Card
          key={product.id}
          className="overflow-hidden border-primary/20 bg-card shadow-lg"
        >
          <div className="flex items-stretch">
            <figure className="w-1/2 shrink-0 self-stretch overflow-hidden border-r">
              {product.imageSrc ? (
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="block size-full min-h-full object-cover object-center"
                />
              ) : (
                <div
                  className="flex min-h-[12rem] size-full items-center justify-center bg-muted text-center text-[10px] text-muted-foreground"
                  aria-hidden
                >
                  Image coming soon
                </div>
              )}
            </figure>

            <div className="flex min-w-0 flex-1 flex-col">
              <CardHeader className="space-y-1 p-4 pb-2">
                <CardTitle className="text-xl leading-tight">
                  {product.title}
                </CardTitle>
                <CardDescription className="line-clamp-4 text-sm">
                  {product.shortDescription}
                </CardDescription>
              </CardHeader>
              <CardContent className="px-4 pb-2 pt-0">
                <p className="text-3xl font-bold">{product.priceDisplay}</p>
                {product.priceDetail ? (
                  <p className="mt-1 text-xs text-muted-foreground">
                    {product.priceDetail}
                  </p>
                ) : null}
              </CardContent>
              <CardFooter className="px-4 pb-4 pt-0">
                <Button asChild size="default" className="w-full sm:w-auto">
                  <Link href={`/products/${product.slug}`}>
                    {product.ctaLabel}
                  </Link>
                </Button>
              </CardFooter>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
