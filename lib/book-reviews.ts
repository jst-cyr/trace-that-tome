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
      "In Faruqi's debut for children, transitioning readers watch a fun, curious, and creative Pakistani-American girl solve problems and have adventures. Four separate sections give Yasmin lots of opportunities—from making a neighborhood map at the farmers market to finding inspiration for an art contest, tackling a class project, and turning her mother's closet into a fashion adventure. Each episode spans two to three chapters with full- or half-page art in attractive, bold colors. Readers will be charmed by this one-of-a-kind character and won't tire of her small but significant dilemmas. Faruqi nails the child's perspective, and illustrator Aly gives Yasmin life.",
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
    coverAlt: "Cover of The Partition Project by Saadia Faruqi",
    quote:
      "Pakistani American seventh grader Mahnoor Raheem, an aspiring journalist, must share her home when her grandmother Dadi moves from Lahore to Sugar Land, Texas. Maha gives up her bedroom, cares for Dadi after school, and struggles with a documentary assignment she does not consider real journalism—until conversations with Dadi about the Partition open a history Maha never knew. The Partition forced Dadi to leave her home in the Punjab and settle as a refugee in the newly created Pakistan. Replete with food-related memories, heart-wrenching stories, and warm tales of friendship, this is a riveting read. Maha confronts her own prejudices about the value of stories and what constitutes newsworthiness, and in the process forges a new understanding of herself and her relationships. Powerful and timely.",
    sourceName: "Kirkus Reviews",
    sourceUrl:
      "https://www.kirkusreviews.com/book-reviews/saadia-faruqi/the-partition-project/",
  },
  {
    id: "place-at-the-table",
    title: "A Place at the Table",
    author: "Saadia Faruqui & Laura Shovan",
    coverImage:
      "https://covers.openlibrary.org/b/isbn/9780358116684-M.jpg",
    coverAlt: "Cover of A Place at the Table",
    quote:
      "An after-school South Asian cooking class sparks an unlikely friendship. Pakistani American sixth grader Sara is sick of cooking—especially when her mother starts teaching the class at her new public school and she must watch xenophobic classmates balk at her favorite spices. Elizabeth loves cooking but rarely gets proper meals at home. When the two are paired, they form a friendship—until Elizabeth's best friend's racism threatens to separate them just when they need each other most. Writing in alternating voices, the authors elegantly interweave issues of racism, financial insecurity, and mental illness into a familiar middle school narrative of identity formation. Sara's affectionate family, her insistence that Elizabeth stand up to racist friends, and her love of her culture and religion are refreshingly authentic.",
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
      "Twelve-year-old Yusuf Azeem is excited to start sixth grade until he finds hostile and racist notes in his locker. Pakistani American Yusuf lives in the small town of Frey, Texas, and looks forward to a robotics competition—until he clashes with a bully whose father opposes the construction of a local mosque. With the 20th anniversary of 9/11, Yusuf's social studies teacher makes it the subject of an assignment, and Uncle Rahman's journal from 2001 shows how American Muslims were affected by Islamophobia and why that history still matters. Yusuf endures a life-changing incident when an accusation publicly terrifies and humiliates him. Faruqi seamlessly interweaves the journal entries into the story; surrounded by a loving family and tightknit community, Yusuf slowly finds his voice and the strength to stand up for what is right even when it is scary.",
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
      "Through the story of fifth-grader Mia Tang, readers experience the courage, hard work, and dreams of a young Chinese immigrant. A small room behind the office of the Calivista Motel is home for Mia and her parents, who work bone-numbing hours cleaning rooms, fixing problems, and managing the front desk. Troubles check in from every direction: at home, where her mom belittles her love of writing; at school, where bullies and lies surround her; and especially at the motel, where the family battles financial ruin. Yet along the seemingly endless roller coaster of poverty, hope appears in small places. Debut author Yang weaves in autobiographical content while creating a feisty and empowered heroine. Heavy themes, including extortion, fraud, and racism, are balanced with the naive dreams and determination of a 10-year-old. Many readers will recognize themselves or their neighbors in these pages.",
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
      "A San Diego preteen learns that she's an elf, with a place in magic school if she moves to the elves' hidden realm. Having felt like an outsider since a knock on the head at age 5 left her able to read minds, Sophie is thrilled when teen stranger Fitz convinces her she is not human at all and transports her to Lumenaria, where the ageless elves live. Taken in by a loving couple who run a sanctuary for extinct and mythical animals, Sophie quickly gathers friends and rivals at Foxfire, a distinctly Hogwarts-style school. She also uncovers clues to her mysterious origins and hints that strangely hard-to-quench wildfires on Earth may be signs of a dark scheme. Wholesome shading to bland, but well-stocked with exotic creatures and locales, plus an agreeable cast headed by a child who rises to every challenge.",
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
      "Twelve-year-old Percy Jackson has attended six schools in six years. Officially diagnosed with ADHD, his lack of self-control gets him in trouble again and again—but what if it is not his fault? What if outrageous incidents that get him kicked out of school are the result of his being a half-blood, the child of a human and a Greek god? Could it be true that his math teacher transformed into a Fury and tried to kill him? One need not be an expert in Greek mythology to enjoy Percy's journey to retrieve Zeus's master bolt from the Underworld; along the way he and his friends run into Medusa, Cerberus, and Pan, among others. The sardonic tone of the narrator's voice lends a refreshing air of realism to this riotously paced quest tale of heroism that questions the realities of our world, family, friendship, and loyalty.",
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
    quote:
      "Ring the bell! A class of anthropomorphized animals assembles for their first day of school. At Hazelwood Elementary, Mr. Wolf, the new fourth-grade teacher, meets students including Margot the rabbit, Aziza the duck in a hijab, sleepy Penny the pig, and Sampson the frog with a beloved shell collection. The narrative bounces cheerily around the classroom, encompassing authentic elementary school experiences—embarrassing bathroom moments, cutting in line, silly jokes, missing items, and playground shenanigans. Steinke's character-driven graphic offering pays keen attention to its cheerfully colored denizens and utilizes close-ups to highlight emotion. Young readers should easily self-identify with Steinke's varied and sharply observed characters and wryly perceived classroom minutiae. This class gets an A.",
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
      "A few days before Christmas the Vanderbeeker family finds out they will have to leave their beloved brownstone by the end of the month—or will they? When landlord Mr. Beiderman decides not to renew their lease, the Vanderbeeker kids spring into action: neighbors sign a petition, Isa records violin music, Jessie builds a science project, Oliver writes a haiku, Hyacinth gives him a kitten, and Laney draws the brownstone. Though the final outcome is predictable, it is the warm and supportive depiction of family, friends, and community that carries this book forward. Set in Harlem, the children are well-developed and charged with duties beyond their years—including preparing Christmas dinner for twelve people. A heartwarming story about family and community that will appeal to readers who also enjoy an old-fashioned feel.",
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
      "A sudden attack on the world of Mon Domani and its inhabited moons drives a young dancer, a street urchin, and an illegal android together. Though generally mocked as a poor student of sand dancing—a psychokinetic art that uses hand and body movements to conjure solid forms from mystic vapors—Oona Lee finds her powers growing as mysterious forces work to prevent the relighting of giant, long-dark Beacons that may stave off environmental instability threatening all five worlds. With little time to learn how to dance up a mighty Sand Warrior and rediscover Beacon lighting, Oona is plunged into a running battle with minions of the Mimic, an ancient shape-changing nemesis. The illustrators place Oona in exotic, elaborately envisioned settings and surround her with a notably diverse cast of allies and adversaries. A headlong, if visually busy, opener for what promises to be a rare adventure.",
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
      "An isolated class of misfits and a teacher on the edge of retirement are paired together for a year of supposed failure. Zachary Kermit, haunted for 27 years by a student cheating scandal, is assigned to teach the Self-Contained Special Eighth-Grade Class—a dumping ground for the Unteachables, students with behavior issues, learning problems, and juvenile delinquents. He expects an uncomfortable year until retirement. But when Mr. Kermit unexpectedly stands up for a student, the kids notice his sense of justice and fairness. He finds he may care about them after all, and they start to care back, turning a corner and bringing along ghosts from Mr. Kermit's past. Writing in alternating voices, Korman spins a narrative of redemption and belief in exceeding self-expectations. Funny and endearing, though incomplete characterizations provoke questions.",
    sourceName: "Kirkus Reviews",
    sourceUrl:
      "https://www.kirkusreviews.com/book-reviews/gordon-korman/the-unteachables/",
  },
];
