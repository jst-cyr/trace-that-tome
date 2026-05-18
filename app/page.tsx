import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProductOfferCards } from "@/components/product-offer-cards";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative border-b">
        <img
          src="/assets/hero-children-reading.jpg"
          alt="Children smiling while reading a book"
          className="h-[400px] w-full object-cover md:h-[480px] lg:h-[520px]"
        />
        <div className="absolute inset-0 bg-black/45" aria-hidden />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 py-10 text-center text-white">
          <h1 className="font-heading text-4xl font-bold tracking-tight drop-shadow-md md:text-5xl lg:text-6xl">
            Never lose your book again
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg drop-shadow-md [text-shadow:0_1px_2px_rgba(0,0,0,0.8)]">
            Trace That Tome is a bookmark with a built-in tracking tag. When you
            misplace your book, find it in seconds with the free app.
          </p>
          <p className="hero-tagline mx-auto mt-6 max-w-xl">
            Put your trust in Trace that Tome
            <br />
            For those treasured books that roam
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
                replace—it lasts for years. It also comes with a free tracker too! This free tracker can replace the other one if needed.
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
      <section
        id="order"
        className="scroll-mt-6 border-y bg-muted/30 px-6 py-16 md:py-24"
      >
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 md:flex-row md:items-start md:justify-center md:gap-10">
          <ProductOfferCards />
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

      {/* Featured author */}
      <section className="border-b bg-muted/20 px-6 py-16 md:py-24">
        <h2 className="font-heading text-center text-2xl font-semibold md:text-3xl">
          Featured Author
        </h2>
        <p className="mx-auto mt-2 text-center text-muted-foreground">
          This month&apos;s feature
        </p>
        <div
          className="mx-auto mt-10 flex max-w-4xl flex-col gap-8 md:flex-row md:items-start md:gap-10"
        >
          <figure className="mx-auto shrink-0 md:mx-0">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Saadia_Faruqi_2022_Texas_Book_Festival.jpg/500px-Saadia_Faruqi_2022_Texas_Book_Festival.jpg"
              alt="Saadia Faruqui at the Texas Book Festival"
              className="h-auto w-56 rounded-xl border border-border object-cover shadow-md md:w-64"
              width={500}
              height={750}
            />
            <figcaption className="mt-2 max-w-64 text-center text-xs text-muted-foreground md:text-left">
              Photo: Larry D. Moore,{" "}
              <a
                href="https://creativecommons.org/licenses/by/4.0/"
                className="underline hover:text-foreground"
                rel="license noreferrer"
                target="_blank"
              >
                CC BY 4.0
              </a>
              , via Wikimedia Commons
            </figcaption>
          </figure>
          <div className="min-w-0 flex-1">
            <h3 className="font-heading text-xl font-semibold md:text-2xl">
              Saadia Faruqi
            </h3>
            <p className="author-bio mt-4 text-base md:text-lg">
              Saadia Faruqi grew up in Karachi, Pakistan, and now lives in
              Houston, Texas, with her family. She writes books for kids about
              Pakistani-American families, friendship, food, and finding where
              you belong. Her Yasmin series follows a clever second-grader who
              uses imagination to solve everyday problems. Her novels The
              Partition Project, A Place at the Table, and Yusuf
              Azeem Is Not a Hero explore unlikely friendships,
              different cultures, and standing up for what is right. When she
              is not writing, she helps people learn about one another and work
              together peacefully.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="overflow-hidden">
            <div className="aspect-[2/3] w-full bg-muted">
              <img
                src="https://covers.openlibrary.org/b/isbn/9781684360222-M.jpg"
                alt="Meet Yasmin! by Saadia Faruqui"
                className="h-full w-full object-cover"
              />
            </div>
            <CardHeader className="p-4">
              <CardTitle className="text-lg">Meet Yasmin!</CardTitle>
            </CardHeader>
          </Card>
          <Card className="overflow-hidden">
            <div className="aspect-[2/3] w-full bg-muted">
              <img
                src="https://covers.openlibrary.org/b/isbn/9780063115811-M.jpg"
                alt="The Partition Project by Saadia Faruqui"
                className="h-full w-full object-cover"
              />
            </div>
            <CardHeader className="p-4">
              <CardTitle className="text-lg">The Partition Project</CardTitle>
            </CardHeader>
          </Card>
          <Card className="overflow-hidden">
            <div className="aspect-[2/3] w-full bg-muted">
              <img
                src="https://covers.openlibrary.org/b/isbn/9780358116684-M.jpg"
                alt="A Place at the Table by Saadia Faruqui and Laura Shovan"
                className="h-full w-full object-cover"
              />
            </div>
            <CardHeader className="p-4">
              <CardTitle className="text-lg">A Place at the Table</CardTitle>
            </CardHeader>
          </Card>
          <Card className="overflow-hidden">
            <div className="aspect-[2/3] w-full bg-muted">
              <img
                src="https://covers.openlibrary.org/b/isbn/9780062943255-M.jpg"
                alt="Yusuf Azeem Is Not a Hero by Saadia Faruqui"
                className="h-full w-full object-cover"
              />
            </div>
            <CardHeader className="p-4">
              <CardTitle className="text-lg">Yusuf Azeem Is Not a Hero</CardTitle>
            </CardHeader>
          </Card>
        </div>
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
                src="https://covers.openlibrary.org/b/isbn/9780063115811-M.jpg"
                alt="The Partition Project by Saadia Faruqui"
                className="h-full w-full object-cover"
              />
            </div>
            <CardHeader className="p-4">
              <CardTitle className="text-lg">The Partition Project</CardTitle>
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
        <div className="mt-12 flex justify-center">
          <Button asChild size="lg">
            <a href="/reviews">Read reviews on these and other great books</a>
          </Button>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative min-h-[420px] md:min-h-[560px]">
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
            For this school project, ordering is simulated. Choose a bookmark
            option below to learn more.
          </p>
          <Button asChild size="lg" className="mt-6">
            <a href="#order">Order now</a>
          </Button>
        </div>
      </section>
    </main>
  );
}
