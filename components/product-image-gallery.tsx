"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { ProductImage } from "@/lib/products";

type ProductImageGalleryProps = {
  images: ProductImage[];
};

export function ProductImageGallery({ images }: ProductImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (images.length === 0) {
    return (
      <div
        className="flex aspect-square w-full max-w-xs items-center justify-center rounded-xl border border-dashed border-border bg-muted text-sm text-muted-foreground"
        aria-hidden
      >
        Product image coming soon
      </div>
    );
  }

  const active = images[activeIndex] ?? images[0];

  return (
    <figure
      className="flex w-full max-w-md flex-col gap-4 md:max-w-none md:flex-row md:items-start md:gap-3"
      aria-label="Product images"
    >
      <div
        role="tabpanel"
        id="product-gallery-main"
        aria-labelledby={`product-gallery-tab-${activeIndex}`}
        className="order-1 flex min-h-0 flex-1 items-center justify-center rounded-xl border bg-background p-4 md:order-2 md:min-h-[20rem]"
      >
        <img
          src={active.src}
          alt={active.alt}
          className="h-auto max-h-80 w-full object-contain"
        />
      </div>

      <p className="sr-only" aria-live="polite" aria-atomic="true">
        Image {activeIndex + 1} of {images.length}
      </p>

      <div
        role="tablist"
        aria-label="Select product image"
        className="order-2 flex flex-row justify-center gap-2 overflow-x-auto pb-1 md:order-1 md:flex-col md:overflow-visible md:pb-0"
      >
        {images.map((image, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={image.src}
              type="button"
              role="tab"
              id={`product-gallery-tab-${index}`}
              aria-selected={isActive}
              aria-controls="product-gallery-main"
              aria-label={`Show image ${index + 1} of ${images.length}: ${image.alt}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "size-14 shrink-0 overflow-hidden rounded-md border bg-background p-1 transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                isActive
                  ? "ring-2 ring-primary ring-offset-2"
                  : "border-border hover:border-primary/50"
              )}
            >
              <img
                src={image.src}
                alt=""
                className="size-full object-contain"
              />
            </button>
          );
        })}
      </div>
    </figure>
  );
}
