import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { bookReviews } from "@/lib/book-reviews";

export const metadata: Metadata = {
  title: "Book Reviews – Trace That Tome",
  description:
    "Read what reviewers say about books we recommend on Trace That Tome.",
};

export default function ReviewsPage() {
  return (
    <main className="min-h-screen px-6 py-12 md:py-16">
      <div className="mx-auto max-w-4xl">
        <p className="text-center">
          <Link
            href="/"
            className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          >
            ← Back to Trace That Tome
          </Link>
        </p>
        <h1 className="font-heading mt-6 text-center text-3xl font-bold md:text-4xl">
          Book Reviews
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          What critics and reviewers are saying about these great reads. Each
          quote is from a published review—follow the link to read more at the
          source.
        </p>

        <ul className="mt-12 space-y-10">
          {bookReviews.map((book) => (
            <li
              key={book.id}
              className="flex flex-col gap-6 rounded-2xl border bg-card p-6 shadow-sm sm:flex-row sm:items-start"
            >
              <div className="mx-auto w-36 shrink-0 sm:mx-0 sm:w-32">
                <img
                  src={book.coverImage}
                  alt={book.coverAlt}
                  className="aspect-[2/3] w-full rounded-lg border border-border object-cover shadow-md"
                  width={128}
                  height={192}
                />
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="font-heading text-xl font-semibold">
                  {book.title}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  by {book.author}
                </p>
                <blockquote className="review-quote mt-4 border-l-4 border-primary/40 pl-4 text-base leading-relaxed text-foreground/90">
                  &ldquo;{book.quote}&rdquo;
                </blockquote>
                <p className="mt-3 text-sm text-muted-foreground">
                  —{" "}
                  <a
                    href={book.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-primary underline-offset-4 hover:underline"
                  >
                    {book.sourceName}
                  </a>
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/">Back to home</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
