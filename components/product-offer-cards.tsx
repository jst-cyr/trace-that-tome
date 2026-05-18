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
    <div className="grid w-full max-w-3xl gap-6 sm:grid-cols-2">
      {products.map((product) => (
        <Card
          key={product.id}
          className="border-primary/20 bg-card shadow-lg"
        >
          <CardHeader>
            <CardTitle className="text-2xl">{product.title}</CardTitle>
            <CardDescription>{product.shortDescription}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{product.priceDisplay}</p>
            {product.priceDetail ? (
              <p className="mt-2 text-sm text-muted-foreground">
                {product.priceDetail}
              </p>
            ) : null}
          </CardContent>
          <CardFooter className="flex justify-center pb-6">
            <Button asChild size="lg">
              <Link href={`/products/${product.slug}`}>{product.ctaLabel}</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
