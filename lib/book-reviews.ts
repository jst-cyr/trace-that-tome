export type BookReview = {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  coverAlt: string;
  quote: string;
  sourceName: string;
  sourceUrl: string;
};

/** Books from Featured Author, Try These Great Books, and extra picks — with quoted public reviews. */
export const bookReviews: BookReview[] = [
  {
    id: "meet-yasmin",
    title: "Meet Yasmin!",
    author: "Saadia Faruqui",
    coverImage:
      "https://covers.openlibrary.org/b/isbn/9781684360222-M.jpg",
    coverAlt: "Cover of Meet Yasmin! by Saadia Faruqui",
    quote:
      "Readers will be charmed by this one-of-a-kind character and won't tire of her small but significant dilemmas. Faruqi nails the child's perspective.",
    sourceName: "Kirkus Reviews",
    sourceUrl:
      "https://www.kirkusreviews.com/book-reviews/saadia-faruqi/meet-yasmin/",
  },
  {
    id: "partition-project",
    title: "The Partition Project",
    author: "Saadia Faruqui",
    coverImage:
      "https://covers.openlibrary.org/b/isbn/9780063115811-M.jpg",
    coverAlt: "Cover of The Partition Project by Saadia Faruqui",
    quote: "Powerful and timely.",
    sourceName: "Kirkus Reviews",
    sourceUrl:
      "https://www.kirkusreviews.com/book-reviews/saadia-faruqi/the-partition-project/",
  },
  {
    id: "place-at-the-table",
    title: "A Place at the Table",
    author: "Saadia Faruqi & Laura Shovan",
    coverImage:
      "https://covers.openlibrary.org/b/isbn/9780358116684-M.jpg",
    coverAlt: "Cover of A Place at the Table",
    quote:
      "Writing in alternating voices, the authors elegantly interweave issues of racism, financial insecurity, and mental illness into a familiar middle school narrative of identity formation.",
    sourceName: "Kirkus Reviews",
    sourceUrl:
      "https://www.kirkusreviews.com/book-reviews/saadia-faruqi/a-place-at-the-table-faruqi/",
  },
  {
    id: "yusuf-azeem",
    title: "Yusuf Azeem Is Not a Hero",
    author: "Saadia Faruqui",
    coverImage:
      "https://covers.openlibrary.org/b/isbn/9780062943255-M.jpg",
    coverAlt: "Cover of Yusuf Azeem Is Not a Hero by Saadia Faruqui",
    quote:
      "A timely, emotional story full of hope and love even in the face of discrimination and prejudice.",
    sourceName: "Kirkus Reviews",
    sourceUrl:
      "https://www.kirkusreviews.com/book-reviews/saadia-faruqi/yusuf-azeem-is-not-a-hero/",
  },
  {
    id: "front-desk",
    title: "Front Desk",
    author: "Kelly Yang",
    coverImage: "https://covers.openlibrary.org/b/id/8803949-M.jpg",
    coverAlt: "Cover of Front Desk by Kelly Yang",
    quote:
      "Many readers will recognize themselves or their neighbors in these pages.",
    sourceName: "Kirkus Reviews",
    sourceUrl:
      "https://www.kirkusreviews.com/book-reviews/kelly-yang/front-desk/",
  },
  {
    id: "keeper-lost-cities",
    title: "Keeper of the Lost Cities",
    author: "Shannon Messenger",
    coverImage: "https://covers.openlibrary.org/b/id/9320507-M.jpg",
    coverAlt: "Cover of Keeper of the Lost Cities by Shannon Messenger",
    quote:
      "Wholesome shading to bland, but well-stocked with exotic creatures and locales, plus an agreeable cast headed by a child who, while overly fond of screaming, rises to every challenge.",
    sourceName: "Kirkus Reviews",
    sourceUrl:
      "https://www.kirkusreviews.com/book-reviews/shannon-messenger/keeper-lost-cities/",
  },
  {
    id: "lightning-thief",
    title: "Percy Jackson and the Lightning Thief",
    author: "Rick Riordan",
    coverImage: "https://covers.openlibrary.org/b/id/7239831-M.jpg",
    coverAlt: "Cover of The Lightning Thief by Rick Riordan",
    quote:
      "The sardonic tone of the narrator's voice lends a refreshing air of realism to this riotously paced quest tale of heroism that questions the realities of our world, family, friendship and loyalty.",
    sourceName: "Kirkus Reviews",
    sourceUrl:
      "https://www.kirkusreviews.com/book-reviews/rick-riordan/lightning-thief/",
  },
  {
    id: "mr-wolfs-class",
    title: "Mr. Wolf's Class",
    author: "Aron Nels Steinke",
    coverImage:
      "https://covers.openlibrary.org/b/isbn/9781338047691-M.jpg",
    coverAlt: "Cover of Mr. Wolf's Class by Aron Nels Steinke",
    quote: "This class gets an A.",
    sourceName: "Kirkus Reviews",
    sourceUrl:
      "https://www.kirkusreviews.com/book-reviews/aron-nels-steinke/mr-wolfs-class/",
  },
  {
    id: "vanderbeekers",
    title: "The Vanderbeekers of 141st Street",
    author: "Karina Yan Glaser",
    coverImage:
      "https://covers.openlibrary.org/b/isbn/9780544876392-M.jpg",
    coverAlt: "Cover of The Vanderbeekers of 141st Street",
    quote:
      "A heartwarming story about family and community that will appeal to readers who also enjoy an old-fashioned feel.",
    sourceName: "Kirkus Reviews",
    sourceUrl:
      "https://www.kirkusreviews.com/book-reviews/karina-yan-glaser/the-vanderbeekers-of-141st-street/",
  },
  {
    id: "five-worlds",
    title: "5 Worlds: The Sand Warrior",
    author: "Mark Siegel, Alexis Siegel, Xanthe Bouma, Matt Rockefeller & Boya Sun",
    coverImage:
      "https://covers.openlibrary.org/b/isbn/9781101935866-M.jpg",
    coverAlt: "Cover of 5 Worlds: The Sand Warrior",
    quote:
      "A headlong, if visually busy, opener for what promises to be a rare adventure.",
    sourceName: "Kirkus Reviews",
    sourceUrl:
      "https://www.kirkusreviews.com/book-reviews/mark-siegel/the-sand-warrior/",
  },
  {
    id: "unteachables",
    title: "The Unteachables",
    author: "Gordon Korman",
    coverImage:
      "https://covers.openlibrary.org/b/isbn/9780062563880-M.jpg",
    coverAlt: "Cover of The Unteachables by Gordon Korman",
    quote:
      "Funny and endearing, though incomplete characterizations provoke questions.",
    sourceName: "Kirkus Reviews",
    sourceUrl:
      "https://www.kirkusreviews.com/book-reviews/gordon-korman/the-unteachables/",
  },
];
