const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/bookssearcher", { useNewUrlParser: true }
);

const bookSeed = [
  {
    title: "Oh, the Places You'll Go!",
    author: "Dr. Seuss",
    synopsis:
      "From soaring to high heights and seeing great sights to being left in a Lurch on a prickle-ly perch, Dr. Seuss addresses life’s ups and downs with his trademark humorous verse and illustrations, while encouraging readers to find the success that lies within. In a starred review, Booklist notes, “Seuss’s message is simple but never sappy: life may be a ‘Great Balancing Act,’ but through it all ‘There’s fun to be done.’” A perennial favorite and a perfect gift for anyone starting a new phase in their life!",
    date: new Date(Date.now())
  },
  {
    title: "Dare to Lead",
    author: "Brene Brown",
    synopsis:
      "#1 NEW YORK TIMES BESTSELLER • Brené Brown has taught us what it means to dare greatly, rise strong, and brave the wilderness. Now, based on new research conducted with leaders, change makers, and culture shifters, she’s showing us how to put those ideas into practice so we can step up and lead.",
    date: new Date(Date.now())
  },
  {
    title: "Game of Thrones",
    author: "George R. R. Martin",
    synopsis:
      "Long ago, in a time forgotten, a preternatural event threw the seasons out of balance. In a land where summers can last decades and winters a lifetime, trouble is brewing. The cold is returning, and in the frozen wastes to the north of Winterfell, sinister and supernatural forces are massing beyond the kingdom's protective Wall. At the center of the conflict lie the Starks of Winterfell, a family as harsh and unyielding as the land they were born to. Sweeping from a land of brutal cold to a distant summertime kingdom of epicurean plenty, here is a tale of lords and ladies, soldiers and sorcerers, assassins and bastards, who come together in a time of grim omens.Here an enigmatic band of warriors bear swords of no human metal; a tribe of fierce wildlings carry men off into madness; a cruel young dragon prince barters his sister to win back his throne; and a determined woman undertakes the most treacherous of journeys. Amid plots and counterplots, tragedy and betrayal, victory and terror, the fate of the Starks, their allies, and their enemies hangs perilously in the balance, as each endeavors to win that deadliest of conflicts: the game of thrones.",
    date: new Date(Date.now())
  },
  {
    title: "The Punch Escrow",
    author: "Tal M. Klein",
    synopsis:
      "It's the year 2147. Advancements in nanotechnology have enabled us to control aging. We’ve genetically engineered mosquitoes to feast on carbon fumes instead of blood, ending air pollution. And teleportation has become the ideal mode of transportation, offered exclusively by International Transport―the world’s most powerful corporation, in a world controlled by corporations. Joel Byram spends his days training artificial-intelligence engines to act more human and trying to salvage his deteriorating marriage. He’s pretty much an everyday twenty-second century guy with everyday problems―until he’s accidentally duplicated while teleporting. Now Joel must outsmart the shadowy organization that controls teleportation, outrun the religious sect out to destroy it, and find a way to get back to the woman he loves in a world that now has two of him.",
    date: new Date(Date.now())
  },
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
    synopsis:
      "Harry Potter's summer has included the worst birthday ever, doomy warnings from a house-elf called Dobby, and rescue from the Dursleys by his friend Ron Weasley in a magical flying car! Back at Hogwarts School of Witchcraft and Wizardry for his second year, Harry hears strange whispers echo through empty corridors - and then the attacks start. Students are found as though turned to stone... Dobby's sinister predictions seem to be coming true.",
    date: new Date(Date.now())
  },
  {
    title: "The Hunger Games",
    author: "Suzanne Collins",
    synopsis:
      "Could you survive on your own, in the wild, with everyone fighting against you? Twenty-four are forced to enter. Only the winner survives. In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. Each year, the districts are forced by the Capitol to send one boy and one girl between the ages of twelve and eighteen to participate in the Hunger Games, a brutal and terrifying fight to the death -- televised for all of Panem to see. Survival is second nature for sixteen-year-old Katniss Everdeen, who struggles to feed her mother and younger sister by secretly hunting and gathering beyond the fences of District 12. When Katniss steps in to take the place of her sister in the Hunger Games, she knows it may be her death sentence. If she is to survive, she must weigh survival against humanity and life against love.",
    date: new Date(Date.now())
  },
  {
    title: "Code: The Hidden Language of Computer Hardware and Software",
    author: "Charles Petzold",
    synopsis:
      "What do flashlights, the British invasion, black cats, and seesaws have to do with computers? In CODE, they show us the ingenious ways we manipulate language and invent new means of communicating with each other. And through CODE, we see how this ingenuity and our very human compulsion to communicate have driven the technological innovations of the past two centuries. Using everyday objects and familiar language systems such as Braille and Morse code, author Charles Petzold weaves an illuminating narrative for anyone who’s ever wondered about the secret inner life of computers and other smart machines. It’s a cleverly illustrated and eminently comprehensible story—and along the way, you’ll discover you’ve gained a real context for understanding today’s world of PCs, digital media, and the Internet. No matter what your level of technical savvy, CODE will charm you—and perhaps even awaken the technophile within.",
    date: new Date(Date.now())
  },
  {
    title: "HTML and CSS",
    author: "Jon Duckett",
    synopsis:
      "Every day, more and more people want to learn some HTML and CSS. Joining the professional web designers and programmers are new audiences who need to know a little bit of code at work (update a content management system or e-commerce store) and those who want to make their personal blogs more attractive. Many books teaching HTML and CSS are dry and only written for those who want to become programmers, which is why this book takes an entirely new approach.",
    date: new Date(Date.now())
  },
  {
    title: "Divergent",
    author: "Veronica Roth",
    synopsis:
      "The explosive debut by No. 1 New York Times bestselling author Veronica Roth. DIVERGENT - a major motion picture franchise. The first book in the DIVERGENT series that has swept the globe - selling millions of copies world-wide. In the world of Divergent, society is divided into five factions - Candor, Abnegation, Dauntless, Amity and Erudite. Every year, all sixteen-year-olds must select the faction to which they will devote the rest of their lives. For Beatrice Prior, the decision is between staying with her family and being who she really is. Her choice shocks everyone, including herself. During the initiation that follows, Tris and her fellow initiates undergo extreme physical tests of endurance and intense psychological simulations, with devastating consequences. As initiation transforms them, Tris must determine who her friends really are - and whether she can trust the man who both threatens and protects her. Because Tris has a deadly secret. And as growing conflict threatens to unravel their seemingly perfect society, this secret might save those she loves... or it might destroy her. Debut author Veronica Roth bursts onto the scene with the first book in the Divergent trilogy - dystopian thrillers filled with electrifying decisions, heartbreaking betrayals, stunning consequences and unexpected romance.",
    date: new Date(Date.now())
  },
  {
    title: "The Iliad",
    author: "Homer",
    synopsis:
      "In 2002, the University of Michigan Press published Rodney Merrill's translation of Homer's Odyssey, an interpretation of the classic that was unique in employing the meter of Homer's original. Praising Merrill's translation of the Odyssey, Gregory Nagy of Harvard wrote, Merrills fine ear for the sound of ancient Greek makes the experience of reading his Homer the nearest thing in English to actually hearing Homer. The translators English renders most faithfully the poets ancient Greek---not only the words and meaning but even the voice.",
    date: new Date(Date.now())
  },
  {
    title: "The Odyssey",
    author: "Homer",
    synopsis:
      "A translation of the epic poem retells the story of Odysseus's ten-year voyage home to Ithaca after the Trojan War.",
    date: new Date(Date.now())
  },
  {
    title: "The Alchemist",
    author: "P.Coelho",
    synopsis:
      "The Alchemist By Paulo Coelho While sleeping near a sycamore tree in the sacristy of an abandoned church, Santiago, a shepherd boy, has a recurring dream about a child who tells him that he will find a hidden treasure if he travels to the Egyptian pyramids. An old woman tells Santiago that this dream is prophetic and that he must follow its instructions. Santiago is uncertain, however, since he enjoys the life of a shepherd. Next Santiago meets a mysterious old man who seems able to read his mind. This man introduces himself as Melchizedek, or the King of Salem. He tells Santiago about good and bad omens and says that it is the shepherd boy's duty to pursue his Personal Legend. Melchizedek then gives Santiago two stones, Urim and Thummim, with which to interpret omens. Santiago wavers briefly before selling his flock and purchasing a ticket to Tangier, in northern Africa, to which he travels by boat. Shortly after he arrives there, a thief steals all of Santiago's money, so the shepherd boy decides to look for a way to make enough money to return home. He finds work in the shop of a crystal merchant, where Santiago makes improvements that reap considerable financial rewards. After eleven months of working in the shop, Santiago is unsure of how to proceed. Should he return to Andalusia a rich man and buy more sheep? Or should he cross the vast Sahara in pursuit of the hidden treasure of his dreams? He joins a caravan traveling to Egypt. Santiago meets an Englishman who wants to learn the secret of alchemy, or turning any metal into gold, from a famous alchemist who lives at an oasis on the way to the pyramids. While traveling, Santiago begins listening to the desert and discovering the Soul of the World. The caravan eventually reaches the oasis, and there Santiago meets an Arab girl named Fatima and falls in love with her instantly. The caravan leader gathers the travelers together and tells them that tribal warfare prevents them from continuing their journey. Santiago wanders from the oasis into the desert and, seeing two hawks fighting in the sky, has a vision of an army entering the oasis. Because attacking an oasis is a violation of the rules of the desert, Santiago shares his vision with the oasis's tribal chieftain. Soon afterward, Santiago is confronted by a black-garbed, veiled stranger with a sword, who sits atop a white horse. It is the alchemist. The tribal chieftain arms his men, and they are well-prepared when the oasis is indeed invaded. The alchemist offers to cross the desert with Santiago. Soon the two men enter into an area of intense tribal warfare. Warriors hold the two men captive, but eventually allow them to continue their journey. The alchemist tells Santiago that he needs to return to the oasis, and that the rest of the trip is Santiago's to make alone so that he can claim his Personal Legend. Santiago arrives at the Egyptian pyramids and begins to dig. He finds nothing buried in the ground. Thieves beat Santiago and rob him of his money. After he tells them of his dream, though, one of the thieves recounts his own dream about a buried treasure in the sacristy of an abandoned church. Returning to Andalusia, Santiago goes back to the church where he dreamed of the treasure near the pyramids. He digs where he slept, beneath a sycamore tree, and there it is: Santiago's treasure.",
    date: new Date(Date.now())
  },
  {
    title: "1984",
    author: "George Orwell",
    synopsis:
      "Winston Smith toes the Party line, rewriting history to satisfy the demands of the Ministry of Truth. With each lie he writes, Winston grows to hate the Party that seeks power for its own sake and persecutes those who dare to commit thoughtcrimes. But as he starts to think for himself, Winston can’t escape the fact that Big Brother is always watching... A startling and haunting vision of the world, 1984 is so powerful that it is completely convincing from start to finish. No one can deny the influence of this novel, its hold on the imaginations of multiple generations of readers, or the resiliency of its admonitions—a legacy that seems only to grow with the passage of time.",
    date: new Date(Date.now())
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    synopsis:
      "Austen’s most celebrated novel tells the story of Elizabeth Bennet, a bright, lively young woman with four sisters, and a mother determined to marry them to wealthy men. At a party near the Bennets’ home in the English countryside, Elizabeth meets the wealthy, proud Fitzwilliam Darcy. Elizabeth initially finds Darcy haughty and intolerable, but circumstances continue to unite the pair. Mr. Darcy finds himself captivated by Elizabeth’s wit and candor, while her reservations about his character slowly vanish. The story is as much a social critique as it is a love story, and the prose crackles with Austen’s wry wit.",
    date: new Date(Date.now())
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    synopsis:
      "The authentic edition from Fitzgerald's original publisher. This edition approved by the Holden-Crowther Literary Organisation. The Great Gatsby, F. Scott Fitzgerald's third book, stands as the supreme achievement of his career. This exemplary novel of the Jazz Age has been acclaimed by generations of readers. The story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted \"gin was the national drink and sex the national obsession,\" it is an exquisitely crafted tale of America in the 1920s. The Great Gatsby is one of the great classics of twentieth-century literature.",
    date: new Date(Date.now())
  },
  {
    title: "Bridge to Terabithia",
    author: "Katherine Paterson",
    synopsis:
      "All summer, Jess pushed himself to be the fastest boy in the fifth grade, and when the year's first school-yard race was run, he was going to win.But his victory was stolen by a newcomer, by a girl, one who didn't even know enough to stay on the girls' side of the playground. Then, unexpectedly, Jess finds himself sticking up for Leslie, for the girl who breaks rules and wins races. The friendship between the two grows as Jess guides the city girl through the pitfalls of life in their small, rural town, and Leslie draws him into the world of imaginations world of magic and ceremony called Terabithia. Here, Leslie and Jess rule supreme among the oaks and evergreens, safe from the bullies and ridicule of the mundane world. Safe until an unforeseen tragedy forces Jess to reign in Terabithia alone, and both worlds are forever changed.",
    date: new Date(Date.now())
  }
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });