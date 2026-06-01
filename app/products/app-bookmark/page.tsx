import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetailLayout } from "@/components/product-detail-layout";
import { getProductBySlug } from "@/lib/products";

const product = getProductBySlug("app-bookmark");

export const metadata: Metadata = {
  title: product
    ? `${product.title} – Trace-That-Tome`
    : "Product – Trace-That-Tome",
  description: product?.metaDescription,
};

export default function AppBookmarkProductPage() {
  if (!product) {
    notFound();
  }

  return <ProductDetailLayout product={product} />;
}
