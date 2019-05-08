const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/googlebooks", { useNewUrlParser: true }
);

const bookSeed = [
  {
    title: "Hoot",
    authors: ["Carl Hiaasen"],
    description: "Unfortunately, Roy’s first acquaintance in Florida is Dana Matherson, a well-known bully. Then again, if Dana hadn’t been sinking his thumbs into Roy’s temples and mashing his face against the school-bus window, Roy might never have spotted the running boy. And the running boy is intriguing: he was running away from the school bus, carried no books, and–here’s the odd part–wore no shoes. Sensing a mystery, Roy sets himself on the boy’s trail. The chase introduces him to potty-trained alligators, a fake-fart champion, some burrowing owls, a renegade eco-avenger, and several extremely poisonous snakes with unnaturally sparkling tails.  Roy has most definitely arrived in Carl Hiaasen’s Florida.",
    image: "https://books.google.com/books/content?id=BTDSfx5bunwC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE7205bk_VldeA3nn1LLKk60bzOj34xPVQZMu9R_iT4L-GlyEz60j09I8wAttjffXW1ftmxDiRCx6aiHRfkoO9BVoTxgpxoXDMKwBHXqRtk2eXJ4h7IQ3sYx4ZRw06dhJ9AIsGqE7",
    link: "https://books.google.com/books?id=BTDSfx5bunwC&dq=hoot&source=gbs_navlinks_s",
    date: new Date(Date.now())
  }
];

db.Book
  .deleteMany({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });