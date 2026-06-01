"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ProductImage } from "@/lib/products";

type ProductImageGalleryProps = {
  images: ProductImage[];
};

export function ProductImageGallery({ images }: ProductImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const active = images[activeIndex] ?? images[0];
  const hasMultiple = images.length > 1;

  const openLightbox = useCallback(() => {
    dialogRef.current?.showModal();
  }, []);

  const closeLightbox = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  const showPrevious = useCallback(() => {
    setActiveIndex((index) => (index <= 0 ? images.length - 1 : index - 1));
  }, [images.length]);

  const showNext = useCallback(() => {
    setActiveIndex((index) => (index >= images.length - 1 ? 0 : index + 1));
  }, [images.length]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (!dialog.open) return;
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showPrevious();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        showNext();
      }
    };

    dialog.addEventListener("keydown", onKeyDown);
    return () => dialog.removeEventListener("keydown", onKeyDown);
  }, [showNext, showPrevious]);

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

  return (
    <figure
      className="flex w-full flex-col gap-4 md:flex-row md:items-start md:gap-3"
      aria-label="Product images"
    >
      <div
        role="tabpanel"
        id="product-gallery-main"
        aria-labelledby={`product-gallery-tab-${activeIndex}`}
        className="order-1 flex h-80 w-full min-w-0 flex-1 items-center justify-center md:order-2 md:h-96"
      >
        <button
          type="button"
          onClick={openLightbox}
          className="group size-full cursor-zoom-in border-0 bg-transparent p-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          aria-label={`View larger image: ${active.alt}`}
        >
          <img
            src={active.src}
            alt={active.alt}
            className="size-full object-contain transition-opacity group-hover:opacity-90"
          />
        </button>
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

      <dialog
        ref={dialogRef}
        aria-label="Enlarged product image"
        className="product-image-lightbox fixed inset-0 z-50 m-0 hidden h-full w-full max-h-none max-w-none border-0 bg-transparent p-4 shadow-none open:flex open:items-center open:justify-center sm:p-8"
        onClick={(event) => {
          if (event.target === dialogRef.current) {
            closeLightbox();
          }
        }}
      >
        <div
          className="relative flex max-h-full max-w-full flex-col items-center"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="absolute right-0 top-0 z-10 flex gap-2 sm:-top-2 sm:-right-2">
            {hasMultiple ? (
              <>
                <Button
                  type="button"
                  variant="secondary"
                  size="icon"
                  className="rounded-full shadow-md"
                  aria-label="Previous image"
                  onClick={showPrevious}
                >
                  <span aria-hidden className="text-lg leading-none">
                    ‹
                  </span>
                </Button>
                <Button
                  type="button"
                  variant="secondary"
                  size="icon"
                  className="rounded-full shadow-md"
                  aria-label="Next image"
                  onClick={showNext}
                >
                  <span aria-hidden className="text-lg leading-none">
                    ›
                  </span>
                </Button>
              </>
            ) : null}
            <Button
              type="button"
              variant="secondary"
              size="icon"
              className="rounded-full shadow-md"
              aria-label="Close enlarged image"
              onClick={closeLightbox}
            >
              <span aria-hidden className="text-lg leading-none">
                ×
              </span>
            </Button>
          </div>

          <img
            src={active.src}
            alt={active.alt}
            className="max-h-[min(85vh,900px)] max-w-[min(92vw,1100px)] object-contain"
          />

          {hasMultiple ? (
            <p className="mt-4 text-center text-sm text-white/90">
              Image {activeIndex + 1} of {images.length}
            </p>
          ) : null}
        </div>
      </dialog>
    </figure>
  );
}
