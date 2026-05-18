export type ProductVariant = {
  id: string;
  label: string;
};

/** Bookmark themes (alphabetical by label). Shared by all PDPs. */
export const productThemes: ProductVariant[] = [
  { id: "assorted", label: "Assorted" },
  { id: "butterfly-and-insects", label: "Butterfly and Insects" },
  { id: "cute-animals", label: "Cute Animals" },
  { id: "space", label: "Space" },
  { id: "wild-animals", label: "Wild Animals" },
];

export type ProductId = "app-bookmark" | "offline-pack";

export type Product = {
  id: ProductId;
  slug: string;
  title: string;
  shortDescription: string;
  priceDisplay: string;
  priceDetail?: string;
  features: string[];
  variants: ProductVariant[];
  imageSrc?: string;
  imageAlt: string;
  /** Short line for page metadata */
  metaDescription: string;
  /** Label for the primary CTA on the homepage offer card */
  ctaLabel: string;
};

export const products: Product[] = [
  {
    id: "app-bookmark",
    slug: "app-bookmark",
    title: "1 Bookmark with App",
    shortDescription:
      "One Trace That Tome bookmark with free app access. Find your book anywhere from your mobile device! It's like a treasure hunt with a map, and your lost book is certainly an amazing treasure!",
    priceDisplay: "$12",
    priceDetail: "$12 per bookmark",
    features: [
      "One custom Trace That Tome bookmark with built-in tracking tag",
      "Free app access to locate your book from your mobile device",
      "Includes a free spare tracker you can swap in if needed",
      "No batteries to replace—the tracker lasts for years",
    ],
    variants: productThemes,
    imageSrc: "/assets/blue-dragon-with-book.avif",
    imageAlt: "Trace That Tome bookmark with app tracking",
    metaDescription:
      "One Trace That Tome bookmark with free app access. Find your misplaced book from your phone. It's like a treasure hunt with a map, and your lost book is certainly an amazing treasure!",
    ctaLabel: "Get Bookmark with App",
  },
  {
    id: "offline-pack",
    slug: "offline-pack",
    title: "6 Offline Bookmarks",
    shortDescription:
      "Six Trace That Tome bookmarks with a remote tracker that works without an internet connection. The best deal is for six bookmarks with an offline tracker!",
    priceDisplay: "$36",
    priceDetail: "$6 per bookmark",
    features: [
      "Six Trace That Tome bookmarks with built-in tracking tags",
      "Remote tracker works without an internet connection",
      "Great value for families, classrooms, or avid readers",
      "No batteries to replace—the trackers last for years",
    ],
    variants: productThemes,
    imageSrc: "/assets/blue-dragon-with-book.avif",
    imageAlt: "Trace That Tome offline bookmark pack",
    metaDescription:
      "Six Trace That Tome bookmarks with an offline remote tracker—no internet required. The best deal is for six bookmarks with an offline tracker!",
    ctaLabel: "Get 6 Offline Bookmarks",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getSiblingProduct(product: Product): Product | undefined {
  return products.find((p) => p.id !== product.id);
}
