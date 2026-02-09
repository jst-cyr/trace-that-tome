import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative border-b">
        <img
          src="/assets/hero-children-reading.jpg"
          alt="Children smiling while reading a book"
          className="h-[320px] w-full object-cover md:h-[420px]"
        />
        <div className="absolute inset-0 bg-black/45" aria-hidden />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
          <h1 className="font-heading text-4xl font-bold tracking-tight drop-shadow-md md:text-5xl lg:text-6xl">
            Never lose your book again
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg drop-shadow-md [text-shadow:0_1px_2px_rgba(0,0,0,0.8)]">
            Trace That Tome is a bookmark with a built-in tracking tag. When you
            misplace your book, find it in seconds with the free app.
          </p>
          <Button asChild size="lg" className="mt-8">
            <a href="#order">Order now</a>
          </Button>
        </div>
      </section>

      {/* Info cards + promo */}
      <section className="px-6 py-16 md:py-24">
        <h2 className="mb-10 font-heading text-center text-2xl font-semibold md:text-3xl">
          Why Trace That Tome?
        </h2>
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>How it works</CardTitle>
              <CardDescription>
                Slip the bookmark into your book. The tracker pairs with our free
                app so you can locate your book anytime.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Tracker</CardTitle>
              <CardDescription>
                A small, durable tracker is attached to your custom bookmark. No batteries to
                replace—it lasts for years.
              </CardDescription>
            </CardHeader>
          </Card>
          {/* Promo: right column on desktop; blue border, very light blue bg, headings blue, body black */}
          <aside
            className="flex flex-col justify-between rounded-2xl border-2 border-primary bg-[#e8f1ff] p-6 shadow-lg sm:col-span-2 lg:col-span-1 lg:row-span-2 lg:row-start-1 lg:min-h-0"
            aria-labelledby="promo-heading"
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                Free giveaway
              </p>
              <h3 id="promo-heading" className="mt-2 font-heading text-xl font-bold text-primary sm:text-2xl">
                Win a free bookmark!
              </h3>
              <p className="mt-3 text-sm text-black">
                One winner drawn each month—no purchase necessary. Enter for a chance to win a limited-edition Trace That Tome bookmark.
              </p>
            </div>
            <div className="mt-6">
              <Button asChild>
                <a href="#">Enter the draw</a>
              </Button>
            </div>
          </aside>
          <Card>
            <CardHeader>
              <CardTitle>Easy to use</CardTitle>
              <CardDescription>
                Open the app, tap Trace That Tome, and follow the sound or map. It's like a treasure hunt for your book!
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Perfect for kids and adults</CardTitle>
              <CardDescription>
                Keep your place and never lose your book. Great for school,
                travel, and bedtime reading.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Price / offer */}
      <section className="border-y bg-muted/30 px-6 py-16 md:py-24">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 md:flex-row md:items-start md:justify-center md:gap-10">
          <div className="grid w-full max-w-3xl gap-6 sm:grid-cols-2">
          <Card className="border-primary/20 bg-card shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">1 bookmark</CardTitle>
              <CardDescription>
                One Trace That Tome bookmark and free app access.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">$12</p>
              <p className="mt-2 text-sm text-muted-foreground">
                $12 per bookmark
              </p>
            </CardContent>
            <CardFooter className="flex justify-center pb-6">
              <Button asChild size="lg">
                <a href="#order">Get 1 bookmark</a>
              </Button>
            </CardFooter>
          </Card>
          <Card className="border-primary/20 bg-card shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">6 bookmarks</CardTitle>
              <CardDescription>
                Six Trace That Tome bookmarks and free app access. Save when you buy more.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">$36</p>
              <p className="mt-2 text-sm text-muted-foreground">
                $6 per bookmark
              </p>
            </CardContent>
            <CardFooter className="flex justify-center pb-6">
              <Button asChild size="lg">
                <a href="#order">Get 6 bookmarks</a>
              </Button>
            </CardFooter>
          </Card>
          </div>
          <figure className="flex shrink-0 flex-col items-center md:mt-4">
            <img
              src="/assets/blue-dragon-with-book.avif"
              alt="Cute blue dragon mascot reading a book"
              className="h-auto w-40 rounded-lg object-contain drop-shadow-md md:w-48 lg:w-56"
            />
          </figure>
        </div>
        <p className="mx-auto mt-6 max-w-3xl text-center text-sm text-muted-foreground">
          Free shipping on orders over $25
        </p>
      </section>

      {/* Book recommendations */}
      <section className="px-6 py-16 md:py-24">
        <h2 className="font-heading text-center text-2xl font-semibold md:text-3xl">
          Try These Great Books
        </h2>
        <p className="mx-auto mt-2 text-center text-muted-foreground">
          Recommendations from our team
        </p>
        <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="overflow-hidden">
            <div className="aspect-[2/3] w-full bg-muted">
              <img
                src="https://covers.openlibrary.org/b/id/8803949-M.jpg"
                alt="Front Desk by Kelly Yang"
                className="h-full w-full object-cover"
              />
            </div>
            <CardHeader className="p-4">
              <CardTitle className="text-lg">Front Desk</CardTitle>
              <CardDescription>Kelly Yang</CardDescription>
            </CardHeader>
          </Card>
          <Card className="overflow-hidden">
            <div className="aspect-[2/3] w-full bg-muted">
              <img
                src="https://covers.openlibrary.org/b/id/9320507-M.jpg"
                alt="Keeper of the Lost Cities by Shannon Messenger"
                className="h-full w-full object-cover"
              />
            </div>
            <CardHeader className="p-4">
              <CardTitle className="text-lg">Keeper of the Lost Cities</CardTitle>
              <CardDescription>Shannon Messenger</CardDescription>
            </CardHeader>
          </Card>
          <Card className="overflow-hidden">
            <div className="aspect-[2/3] w-full bg-muted">
              <img
                src="https://covers.openlibrary.org/b/isbn/0062943200-M.jpg"
                alt="A Thousand Questions by Saadia Faruqui"
                className="h-full w-full object-cover"
              />
            </div>
            <CardHeader className="p-4">
              <CardTitle className="text-lg">A Thousand Questions</CardTitle>
              <CardDescription>Saadia Faruqui</CardDescription>
            </CardHeader>
          </Card>
          <Card className="overflow-hidden">
            <div className="aspect-[2/3] w-full bg-muted">
              <img
                src="https://covers.openlibrary.org/b/id/7239831-M.jpg"
                alt="The Lightning Thief (Percy Jackson) by Rick Riordan"
                className="h-full w-full object-cover"
              />
            </div>
            <CardHeader className="p-4">
              <CardTitle className="text-lg">Percy Jackson and the Lightning Thief</CardTitle>
              <CardDescription>Rick Riordan</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section id="order" className="relative min-h-[420px] md:min-h-[560px]">
        <img
          src="/assets/cta-woman-books.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[center_60%]"
          aria-hidden
        />
        <div className="absolute inset-0 bg-black/50" aria-hidden />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
          <h2 className="font-heading text-2xl font-semibold drop-shadow-md md:text-3xl">
            Ready to never lose your book again?
          </h2>
          <p className="mx-auto mt-3 max-w-md [text-shadow:0_1px_2px_rgba(0,0,0,0.8)]">
            For this school project, ordering is simulated. In a real campaign,
            this button would take you to checkout.
          </p>
          <Button asChild size="lg" className="mt-6">
            <a href="mailto:order@trace-that-tome.com?subject=Order%20Trace%20That%20Tome">
              Order now
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
}
