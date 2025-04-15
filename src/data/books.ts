export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  shortDescription: string;
  coverImage: string;
  category: string;
  price: number;
  amazonLink: string;
  inStock: boolean;
  isBestseller: boolean;
  isNewRelease: boolean;
}

// Mock data for books
export const books: Book[] = [
  // Fiction Category
  {
    id: "f1",
    title: "The Silent Patient",
    author: "Alex Michaelides",
    description: "Alicia Berenson's life is seemingly perfect. A famous painter married to an in-demand fashion photographer, she lives in a grand house with big windows overlooking a park in one of London's most desirable areas. One evening her husband Gabriel returns home late from a fashion shoot, and Alicia shoots him five times in the face, and then never speaks another word. Alicia's refusal to talk, or give any kind of explanation, turns a domestic tragedy into something far grander, a mystery that captures the public imagination and casts Alicia into notoriety.",
    shortDescription: "A psychological thriller about a woman's act of violence against her husband—and of the therapist obsessed with uncovering her motive.",
    coverImage: "https://m.media-amazon.com/images/I/41UG6tNeaOL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    category: "Fiction",
    price: 299,
    amazonLink: "https://www.amazon.in/Silent-Patient-Alex-Michaelides/dp/1409181634/",
    inStock: true,
    isBestseller: true,
    isNewRelease: false
  },
  {
    id: "f2",
    title: "The Midnight Library",
    author: "Matt Haig",
    description: "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. To see how things would be if you had made other choices... Would you have done anything different, if you had the chance to undo your regrets? Somewhere out beyond the edge of the universe there is a library that contains an infinite number of books, each one the story of another reality. One tells the story of your life as it is, along with another book for the other life you could have lived if you had made a different choice at any point in your life.",
    shortDescription: "A dazzling novel about all the choices that go into a life well lived.",
    coverImage: "https://m.media-amazon.com/images/I/41UWAQ6DxdL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    category: "Fiction",
    price: 399,
    amazonLink: "https://www.amazon.in/Midnight-Library-Matt-Haig/dp/0786868473/",
    inStock: true,
    isBestseller: true,
    isNewRelease: false
  },
  {
    id: "f3",
    title: "Verity",
    author: "Colleen Hoover",
    description: "Lowen Ashleigh is a struggling writer on the brink of financial ruin when she accepts the job offer of a lifetime. Jeremy Crawford, husband of bestselling author Verity Crawford, has hired Lowen to complete the remaining books in a successful series his injured wife is unable to finish. Lowen arrives at the Crawford home, ready to sort through years of Verity's notes and outlines, hoping to find enough material to get her started. What Lowen doesn't expect to uncover in the chaotic office is an unfinished autobiography Verity never intended for anyone to read.",
    shortDescription: "A thriller about a writer who discovers a manuscript that reveals shocking truths about its author.",
    coverImage: "https://m.media-amazon.com/images/I/41wFGvlGUmL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    category: "Fiction",
    price: 279,
    amazonLink: "https://www.amazon.in/Verity-Colleen-Hoover/dp/1538724731/",
    inStock: true,
    isBestseller: true,
    isNewRelease: false
  },
  {
    id: "f4",
    title: "The Housemaid",
    author: "Freida McFadden",
    description: "Every day I clean the Winchesters' beautiful house top to bottom. I collect their daughter from school. And I cook a delicious meal for the whole family before heading up to eat alone in my tiny room on the top floor. I try to ignore how Nina makes a mess just to watch me clean it up. How she tells strange lies about her own daughter. And how her husband Andrew seems more broken every day. But as I look into Andrew's handsome but haunted eyes, I know I can't leave. My past is here in this house, buried in the darkness. And if I want to free myself, and the girl upstairs, I'll have to start by unburying the truth.",
    shortDescription: "A thrilling mystery about a housemaid who discovers dark secrets in her employers' home.",
    coverImage: "https://m.media-amazon.com/images/I/41WXj1XKf1L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    category: "Fiction",
    price: 249,
    amazonLink: "https://www.amazon.in/Housemaid-Freida-McFadden/dp/1538742578/",
    inStock: true,
    isBestseller: false,
    isNewRelease: true
  },
  {
    id: "f5",
    title: "The Last Thing He Told Me",
    author: "Laura Dave",
    description: "Before Owen Michaels disappears, he smuggles a note to his beloved wife of one year: Protect her. Despite her confusion and fear, Hannah Hall knows exactly to whom the note refers—Owen's sixteen-year-old daughter, Bailey. Bailey, who lost her mother tragically as a child. Bailey, who wants absolutely nothing to do with her new stepmother. As Hannah's increasingly desperate calls to Owen go unanswered, as the FBI arrests Owen's boss, as a US marshal and federal agents arrive at her Sausalito home unannounced, Hannah quickly realizes her husband isn't who he said he was. And that Bailey just may hold the key to figuring out Owen's true identity—and why he really disappeared.",
    shortDescription: "A gripping mystery about a woman who thinks she's found the love of her life—until he disappears.",
    coverImage: "https://m.media-amazon.com/images/I/41zFXA+ONkL._SY344_BO1,204,203,200_.jpg",
    category: "Fiction",
    price: 350,
    amazonLink: "https://www.amazon.in/Last-Thing-He-Told-Me/dp/1501171348/",
    inStock: true,
    isBestseller: false,
    isNewRelease: true
  },

  // Technology Category
  {
    id: "t1",
    title: "The Lean Startup",
    author: "Eric Ries",
    description: "Most startups fail. But many of those failures are preventable. The Lean Startup is a new approach being adopted across the globe, changing the way companies are built and new products are launched. Eric Ries defines a startup as an organization dedicated to creating something new under conditions of extreme uncertainty. This is just as true for one person in a garage or a group of seasoned professionals in a Fortune 500 boardroom. What they have in common is a mission to penetrate that fog of uncertainty to discover a successful path to a sustainable business.",
    shortDescription: "A practical approach to creating and managing a successful startup in an age when companies need to innovate more than ever.",
    coverImage: "https://m.media-amazon.com/images/I/51aEhyjQGrL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    category: "Technology",
    price: 499,
    amazonLink: "https://www.amazon.in/Lean-Startup-Entrepreneurs-Continuous-Innovation/dp/0307887898/",
    inStock: true,
    isBestseller: true,
    isNewRelease: false
  },
  {
    id: "t2",
    title: "Zero to One",
    author: "Peter Thiel",
    description: "The great secret of our time is that there are still uncharted frontiers to explore and new inventions to create. In Zero to One, legendary entrepreneur and investor Peter Thiel shows how we can find singular ways to create those new things. Thiel begins with the contrarian premise that we live in an age of technological stagnation, even if we're too distracted by shiny mobile devices to notice. Information technology has improved rapidly, but there is no reason why progress should be limited to computers or Silicon Valley. Progress can be achieved in any industry or area of business. It comes from the most important skill that every leader must master: learning to think for yourself.",
    shortDescription: "Notes on startups, or how to build the future.",
    coverImage: "https://m.media-amazon.com/images/I/41n1edvVlLL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    category: "Technology",
    price: 450,
    amazonLink: "https://www.amazon.in/Zero-One-Start-Build-Future/dp/0804139296/",
    inStock: true,
    isBestseller: true,
    isNewRelease: false
  },
  {
    id: "t3",
    title: "Artificial Intelligence: A Guide for Thinking Humans",
    author: "Melanie Mitchell",
    description: "In Artificial Intelligence, Mitchell turns to the most urgent questions concerning AI today: How intelligent—really—are the best AI programs? How do they work? What can they actually do, and when do they fail? How humanlike do we expect them to become, and how soon do we need to worry about them surpassing us? Along the way, she introduces the dominant models of modern AI and machine learning, describing cutting-edge AI programs, their human inventors, and the historical lines of thought that led to recent achievements. She meets with fellow experts like Douglas Hofstadter, the cognitive scientist and Pulitzer Prize–winning author of the modern classic Gödel, Escher, Bach, who explains why he is 'terrified' about the future of AI.",
    shortDescription: "A sweeping examination of the current state of artificial intelligence and how it is remaking our world.",
    coverImage: "https://m.media-amazon.com/images/I/51GxW4zdIyL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    category: "Technology",
    price: 599,
    amazonLink: "https://www.amazon.in/Artificial-Intelligence-Guide-Thinking-Humans/dp/0374257833/",
    inStock: true,
    isBestseller: false,
    isNewRelease: true
  },
  {
    id: "t4",
    title: "The Innovator's Dilemma",
    author: "Clayton M. Christensen",
    description: "In this revolutionary bestseller, Clayton Christensen demonstrates how successful, outstanding companies can do everything \"right\" and yet still lose their market leadership—or even fail—as new, unexpected competitors rise and take over the market. Through this compelling multi-industry study, Christensen introduces his seminal theory of 'disruptive innovation' that has changed the way managers and CEOs around the world think about innovation. He explains why most companies miss out on new waves of innovation. No matter the industry, he says, a successful company with established products will get pushed aside unless managers know how and when to abandon traditional business practices.",
    shortDescription: "When new technologies cause great firms to fail.",
    coverImage: "https://m.media-amazon.com/images/I/51BDG2dTn4L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    category: "Technology",
    price: 550,
    amazonLink: "https://www.amazon.in/Innovators-Dilemma-Technologies-Management-Innovation/dp/1633691780/",
    inStock: true,
    isBestseller: false,
    isNewRelease: false
  },
  {
    id: "t5",
    title: "Building a Second Brain",
    author: "Tiago Forte",
    description: "For the first time in history, we have instantaneous access to the world's knowledge. There has never been a better time to learn, to contribute, and to improve ourselves. Yet, rather than feeling empowered, we are often left feeling overwhelmed by this constant influx of information. The very knowledge that was supposed to set us free has instead led to the paralyzing stress of believing we'll never know or remember enough. Now, this eye-opening and accessible guide shows how you can easily create your own personal system for knowledge management, otherwise known as a Second Brain.",
    shortDescription: "A proven method to organize your digital life and unlock your creative potential.",
    coverImage: "https://m.media-amazon.com/images/I/41avYRtbP7L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    category: "Technology",
    price: 499,
    amazonLink: "https://www.amazon.in/Building-Second-Brain-Organise-Creative/dp/1800812019/",
    inStock: true,
    isBestseller: false,
    isNewRelease: true
  },

  // Romance Category
  {
    id: "r1",
    title: "It Ends with Us",
    author: "Colleen Hoover",
    description: "Lily hasn't always had it easy, but that's never stopped her from working hard for the life she wants. She's come a long way from the small town where she grew up—she graduated from college, moved to Boston, and started her own business. And when she feels a spark with a gorgeous neurosurgeon named Ryle Kincaid, everything in Lily's life seems too good to be true. Ryle is assertive, stubborn, maybe even a little arrogant. He's also sensitive, brilliant, and has a total soft spot for Lily. And the way he looks in scrubs certainly doesn't hurt. Lily can't get him out of her head. But Ryle's complete aversion to relationships is disturbing.",
    shortDescription: "A beautiful and deeply moving novel about a woman who finds herself in an impossible situation.",
    coverImage: "https://m.media-amazon.com/images/I/51Zu0ZwT0jL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    category: "Romance",
    price: 259,
    amazonLink: "https://www.amazon.in/Ends-Us-Colleen-Hoover/dp/1501110365/",
    inStock: true,
    isBestseller: true,
    isNewRelease: false
  },
  {
    id: "r2",
    title: "The Love Hypothesis",
    author: "Ali Hazelwood",
    description: "As a third-year Ph.D. candidate, Olive Smith doesn't believe in lasting romantic relationships—but her best friend does, and that's what got her into this situation. Convincing Anh that Olive is dating and well on her way to a happily ever after was always going to take more than hand-wavy Jedi mind tricks: Scientists require proof. So, like any self-respecting biologist, Olive panics and kisses the first man she sees. That man is none other than Adam Carlsen, a young hotshot professor—and well-known ass. Which is why Olive is positively floored when Stanford's reigning lab tyrant agrees to keep her charade a secret and be her fake boyfriend.",
    shortDescription: "A hilarious and heartwarming romance about a fake relationship between a Ph.D. candidate and a professor.",
    coverImage: "https://m.media-amazon.com/images/I/41LBB+aNQuL._SY344_BO1,204,203,200_.jpg",
    category: "Romance",
    price: 329,
    amazonLink: "https://www.amazon.in/Love-Hypothesis-Ali-Hazelwood/dp/0593336828/",
    inStock: true,
    isBestseller: true,
    isNewRelease: false
  },
  {
    id: "r3",
    title: "People We Meet on Vacation",
    author: "Emily Henry",
    description: "Poppy and Alex. Alex and Poppy. They have nothing in common. She's a wild child; he wears khakis. She has insatiable wanderlust; he prefers to stay home with a book. And somehow, ever since a fateful car share home from college many years ago, they are the very best of friends. For most of the year they live far apart—she's in New York City, and he's in their small hometown—but every summer, for a decade, they have taken one glorious week of vacation together. Until two years ago, when they ruined everything. They haven't spoken since.",
    shortDescription: "When two best friends go on vacation together, everything goes wrong—but it might be just right.",
    coverImage: "https://m.media-amazon.com/images/I/51MCSTAlA8L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    category: "Romance",
    price: 299,
    amazonLink: "https://www.amazon.in/People-Meet-Vacation-Emily-Henry/dp/1984806750/",
    inStock: true,
    isBestseller: false,
    isNewRelease: false
  },
  {
    id: "r4",
    title: "Book Lovers",
    author: "Emily Henry",
    description: "Nora Stephens' life is books—she's read them all—and she is not that type of heroine. Not the plucky one, not the laidback dream girl, and especially not the sweetheart. In fact, the only people Nora is a heroine for are her clients, for whom she lands enormous deals as a cutthroat literary agent, and her beloved little sister Libby. Which is why she agrees to go to Sunshine Falls, North Carolina for the month of August when Libby begs her for a sisters' trip away—with visions of a small town transformation for Nora, who she's convinced needs to become the heroine in her own story.",
    shortDescription: "A story about a literary agent who finds herself living out the plot of a book she'd typically represent.",
    coverImage: "https://m.media-amazon.com/images/I/51YPR8FwJ0L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    category: "Romance",
    price: 350,
    amazonLink: "https://www.amazon.in/Book-Lovers-Emily-Henry/dp/0593440870/",
    inStock: true,
    isBestseller: false,
    isNewRelease: true
  },
  {
    id: "r5",
    title: "The Unhoneymooners",
    author: "Christina Lauren",
    description: "Olive is always unlucky: in her career, in love, in…well, everything. Her identical twin sister Ami, on the other hand, is probably the luckiest person in the world. Her meet-cute with her fiancé is something out of a romantic comedy (gag) and she's managed to finance her entire wedding by winning a series of Internet contests (double gag). Worst of all, she's forcing Olive to spend the day with her sworn enemy, Ethan, who just happens to be the best man. Olive braces herself to get through 24 hours of wedding hell before she can return to her comfortable, unlucky life. But when the entire wedding party gets food poisoning from eating bad shellfish, the only people who aren't affected are Olive and Ethan.",
    shortDescription: "A hilarious romantic comedy about a woman who must spend her twin's honeymoon with her nemesis.",
    coverImage: "https://m.media-amazon.com/images/I/51KZDzNQIIL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    category: "Romance",
    price: 299,
    amazonLink: "https://www.amazon.in/Unhoneymooners-Christina-Lauren/dp/1501128035/",
    inStock: true,
    isBestseller: false,
    isNewRelease: false
  },

  // Biography Category
  {
    id: "b1",
    title: "Becoming",
    author: "Michelle Obama",
    description: "In a life filled with meaning and accomplishment, Michelle Obama has emerged as one of the most iconic and compelling women of our era. As First Lady of the United States of America—the first African American to serve in that role—she helped create the most welcoming and inclusive White House in history, while also establishing herself as a powerful advocate for women and girls in the U.S. and around the world, dramatically changing the ways that families pursue healthier and more active lives, and standing with her husband as he led America through some of its most harrowing moments.",
    shortDescription: "An intimate, powerful, and inspiring memoir by the former First Lady of the United States.",
    coverImage: "https://m.media-amazon.com/images/I/41zKZHNe4gL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    category: "Biography",
    price: 599,
    amazonLink: "https://www.amazon.in/Becoming-Michelle-Obama/dp/0241334144/",
    inStock: true,
    isBestseller: true,
    isNewRelease: false
  },
  {
    id: "b2",
    title: "Shoe Dog",
    author: "Phil Knight",
    description: "In this instant and tenacious New York Times bestseller, Nike founder and board chairman Phil Knight offers a rare and revealing look at the notoriously media-shy man behind the swoosh, illuminating his company's early days as an intrepid start-up and its evolution into one of the world's most iconic, game-changing, and profitable brands. Young, searching, fresh out of business school, Phil Knight borrowed fifty dollars from his father and launched a company with one simple mission: import high-quality, low-cost running shoes from Japan.",
    shortDescription: "A memoir by the creator of Nike.",
    coverImage: "https://m.media-amazon.com/images/I/41y1yjHSv3L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    category: "Biography",
    price: 399,
    amazonLink: "https://www.amazon.in/Shoe-Dog-Memoir-Creator-Nike/dp/1501135929/",
    inStock: true,
    isBestseller: true,
    isNewRelease: false
  },
  {
    id: "b3",
    title: "Steve Jobs",
    author: "Walter Isaacson",
    description: "Based on more than forty interviews with Jobs conducted over two years—as well as interviews with more than a hundred family members, friends, adversaries, competitors, and colleagues—Walter Isaacson has written a riveting story of the roller-coaster life and searingly intense personality of a creative entrepreneur whose passion for perfection and ferocious drive revolutionized six industries: personal computers, animated movies, music, phones, tablet computing, and digital publishing.",
    shortDescription: "The exclusive biography of Steve Jobs.",
    coverImage: "https://m.media-amazon.com/images/I/419S6MYnhOL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    category: "Biography",
    price: 499,
    amazonLink: "https://www.amazon.in/Steve-Jobs-Isaacson-Walter/dp/1408703742/",
    inStock: true,
    isBestseller: false,
    isNewRelease: false
  },
  {
    id: "b4",
    title: "Educated",
    author: "Tara Westover",
    description: "Born to survivalists in the mountains of Idaho, Tara Westover was seventeen the first time she set foot in a classroom. Her family was so isolated from mainstream society that there was no one to ensure the children received an education, and no one to intervene when one of Tara's older brothers became violent. When another brother got himself into college, Tara decided to try a new kind of life. Her quest for knowledge transformed her, taking her over oceans and across continents, to Harvard and to Cambridge University. Only then would she wonder if she'd traveled too far, if there was still a way home.",
    shortDescription: "A memoir about a young girl who leaves her survivalist family and goes on to earn a PhD from Cambridge University.",
    coverImage: "https://m.media-amazon.com/images/I/41csPCM1yVL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    category: "Biography",
    price: 450,
    amazonLink: "https://www.amazon.in/Educated-Memoir-Tara-Westover/dp/0399590501/",
    inStock: true,
    isBestseller: false,
    isNewRelease: false
  },
  {
    id: "b5",
    title: "Born a Crime",
    author: "Trevor Noah",
    description: "The compelling, inspiring, and comically sublime story of one man's coming-of-age, set during the twilight of apartheid and the tumultuous days of freedom that followed. Trevor Noah's unlikely path from apartheid South Africa to the desk of The Daily Show began with a criminal act: his birth. Trevor was born to a white Swiss father and a black Xhosa mother at a time when such a union was punishable by five years in prison. Living proof of his parents' indiscretion, Trevor was kept mostly indoors for the earliest years of his life, bound by the extreme and often absurd measures his mother took to hide him from a government that could, at any moment, steal him away.",
    shortDescription: "Stories from a South African childhood.",
    coverImage: "https://m.media-amazon.com/images/I/51OHaPluYOL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    category: "Biography",
    price: 399,
    amazonLink: "https://www.amazon.in/Born-Crime-Trevor-Noah/dp/0399588175/",
    inStock: true,
    isBestseller: false,
    isNewRelease: true
  },

  // Children's Books
  {
    id: "c1",
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    description: "Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin!",
    shortDescription: "The first book in the Harry Potter series - a global phenomenon that has captured the hearts of readers worldwide.",
    coverImage: "https://m.media-amazon.com/images/I/51xJbFMRrxL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    category: "Children",
    price: 350,
    amazonLink: "https://www.amazon.in/Harry-Potter-Philosophers-Stone-Rowling/dp/1408855895/",
    inStock: true,
    isBestseller: true,
    isNewRelease: false
  },
  {
    id: "c2",
    title: "The Very Hungry Caterpillar",
    author: "Eric Carle",
    description: "This is the classic edition of the bestselling story written for the very young. A newly hatched caterpillar eats his way through all kinds of food, getting bigger and bigger, until eventually he turns into a beautiful butterfly. One of the most important picture books of our time, this colorful tale has delighted generations of children as they learn about food and counting, growth and development, and the wonders of nature.",
    shortDescription: "A classic children's book about a caterpillar's journey to become a butterfly.",
    coverImage: "https://m.media-amazon.com/images/I/51Umx3FZA9L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    category: "Children",
    price: 199,
    amazonLink: "https://www.amazon.in/Very-Hungry-Caterpillar-Eric-Carle/dp/0141338484/",
    inStock: true,
    isBestseller: true,
    isNewRelease: false
  },
  {
    id: "c3",
    title: "The Gruffalo",
    author: "Julia Donaldson",
    description: "A mouse took a stroll through the deep dark wood. A fox saw the mouse and the mouse looked good. Walk further into the deep dark wood, and discover what happens when a quick-witted mouse comes face to face with an owl, a snake, and a hungry gruffalo... Julia Donaldson and Axel Scheffler's The Gruffalo is an undisputed modern classic and has become a bestselling phenomenon across the world with over 13.5 million copies sold. This award-winning rhyming story of a mouse and a monster has found its way into the hearts and bedtimes of an entire generation of children.",
    shortDescription: "A delightful tale of a clever mouse who outwits predators in a forest.",
    coverImage: "https://m.media-amazon.com/images/I/51wvUFK9IVL._SX258_BO1,204,203,200_.jpg",
    category: "Children",
    price: 250,
    amazonLink: "https://www.amazon.in/Gruffalo-Julia-Donaldson/dp/0333710932/",
    inStock: true,
    isBestseller: false,
    isNewRelease: false
  },
  {
    id: "c4",
    title: "Where the Wild Things Are",
    author: "Maurice Sendak",
    description: "This iconic story has inspired a movie, an opera, and the imagination of generations. When Max dresses in his wolf suit and causes havoc in the house, his mother sends him to bed. From there, Max sets sail to an island inhabited by the Wild Things, who name him king and share a wild rumpus with him. But then from far away across the world, Max smells good things to eat...",
    shortDescription: "A story about a mischievous boy who sails to a land of wild creatures.",
    coverImage: "https://m.media-amazon.com/images/I/51lo1kgHnTL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    category: "Children",
    price: 299,
    amazonLink: "https://www.amazon.in/Where-Wild-Things-Maurice-Sendak/dp/0099408392/",
    inStock: true,
    isBestseller: false,
    isNewRelease: false
  },
  {
    id: "c5",
    title: "Charlotte's Web",
    author: "E.B. White",
    description: "This beloved book by E. B. White, author of Stuart Little and The Trumpet of the Swan, is a classic of children's literature that is just about perfect. This paper-over-board edition includes a foreword by two-time Newbery winning author Kate DiCamillo. Some Pig. Humble. Radiant. These are the words in Charlotte's Web, high up in Zuckerman's barn. Charlotte's spiderweb tells of her feelings for a little pig named Wilbur, who simply wants a friend. They also express the love of a girl named Fern, who saved Wilbur's life when he was born the runt of his litter.",
    shortDescription: "The classic tale of friendship between a pig named Wilbur and a spider named Charlotte.",
    coverImage: "https://m.media-amazon.com/images/I/61+3z1o4oUL._SY344_BO1,204,203,200_.jpg",
    category: "Children",
    price: 275,
    amazonLink: "https://www.amazon.in/Charlottes-Web-B-White/dp/0064410935/",
    inStock: true,
    isBestseller: false,
    isNewRelease: true
  }
];

// Helper function to get books by category
export const getBooksByCategory = (category: string): Book[] => {
  if (!category) return [];
  return books.filter(book => book.category.toLowerCase() === category.toLowerCase());
};

// Helper function to get bestsellers
export const getBestsellers = (): Book[] => {
  return books.filter(book => book.isBestseller);
};

// Helper function to get new releases
export const getNewReleases = (): Book[] => {
  return books.filter(book => book.isNewRelease);
};

// Helper function to get book by id
export const getBookById = (id: string): Book | undefined => {
  return books.find(book => book.id === id);
};

// Helper function to search books
export const searchBooks = (query: string): Book[] => {
  const lowerCaseQuery = query.toLowerCase();
  return books.filter(
    book => 
      book.title.toLowerCase().includes(lowerCaseQuery) ||
      book.author.toLowerCase().includes(lowerCaseQuery) ||
      book.description.toLowerCase().includes(lowerCaseQuery)
  );
};

// Get unique categories
export const getCategories = (): string[] => {
  return Array.from(new Set(books.map(book => book.category)));
};
