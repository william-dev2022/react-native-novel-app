// A more detailed type definition for a book object

import { Book } from "@/type";

export const books: Book[] = [
  {
    id: "1",
    title: "Hide and Seek",
    author: "Mary Burton",
    image: require("../assets/images/book-cover/cover-1.jpg"),
    rating: 4.3,
    reviewsCount: 872,
    genre: "Thriller",
    synopsis:
      "A childhood game turns deadly when a group of friends reunites in their old hometown, only to find that a sinister player from their past has joined the game, and the stakes are now life and death.",
    reviews: [
      {
        id: "r1-1",
        reviewerName: "Chris Evans",
        reviewerImage: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 5,
        date: "Nov 01, 2023",
        text: "Edge-of-your-seat suspense! I couldn't guess the ending until the very last page. A brilliant thriller.",
      },
      {
        id: "r1-2",
        reviewerName: "Sarah Lee",
        reviewerImage: "https://randomuser.me/api/portraits/women/48.jpg",
        rating: 4,
        date: "Oct 29, 2023",
        text: "Very gripping, though some character decisions were a bit frustrating. Overall, a solid read for any mystery fan.",
      },
    ],
  },
  {
    id: "2",
    title: "Memory Lane",
    author: "Sara Sheridan",
    image: require("../assets/images/book-cover/cover-2.jpg"),
    rating: 4.7,
    reviewsCount: 1530,
    genre: "Mystery",
    synopsis:
      "A detective with amnesia must piece together his own forgotten past to solve a string of murders that are eerily connected to his life before the accident. What he uncovers is more shocking than the crimes themselves.",
    reviews: [
      {
        id: "r2-1",
        reviewerName: "Jessica Day",
        reviewerImage: "https://randomuser.me/api/portraits/women/50.jpg",
        rating: 5,
        date: "Nov 05, 2023",
        text: "The amnesia trope has been done before, but not like this. The twists were genuinely surprising. Highly recommended!",
      },
      {
        id: "r2-2",
        reviewerName: "Mark Roberts",
        reviewerImage: "https://randomuser.me/api/portraits/men/51.jpg",
        rating: 4,
        date: "Nov 02, 2023",
        text: "A compelling narrative that keeps you hooked. The main character is complex and well-written.",
      },
      {
        id: "r2-3",
        reviewerName: "Emily White",
        reviewerImage: "https://randomuser.me/api/portraits/women/52.jpg",
        rating: 5,
        date: "Oct 31, 2023",
        text: "Absolutely loved it. The pacing was perfect and the atmosphere was incredible. A must-read.",
      },
    ],
  },
  {
    id: "3",
    title: "Ghost In the House",
    author: "H. P. Lovecraft",
    image: require("../assets/images/book-cover/cover-3.jpg"),
    rating: 4.1,
    reviewsCount: 641,
    genre: "Horror",
    synopsis:
      "When a young family moves into a derelict Victorian mansion, they dismiss the local legends as folklore. But as chilling events escalate, they must confront the malevolent spirit that has haunted the halls for over a century.",
    reviews: [
      {
        id: "r3-1",
        reviewerName: "Tom Holland",
        reviewerImage: "https://randomuser.me/api/portraits/men/55.jpg",
        rating: 4,
        date: "Oct 15, 2023",
        text: "Genuinely creepy! I had to sleep with the lights on after reading this. A great modern ghost story.",
      },
    ],
  },
  {
    id: "4",
    title: "The Evil Behind Halloween",
    author: "Jack Olsen",
    image: require("../assets/images/book-cover/cover-4.jpg"),
    rating: 3.9,
    reviewsCount: 450,
    genre: "Supernatural",
    synopsis:
      "Every Halloween, a small town is plagued by a series of ritualistic disappearances. A skeptical folklorist arrives to debunk the myths but soon finds herself at the center of a terrifying ancient pact.",
    reviews: [
      {
        id: "r4-1",
        reviewerName: "Laura Palmer",
        reviewerImage: "https://randomuser.me/api/portraits/women/60.jpg",
        rating: 4,
        date: "Oct 30, 2023",
        text: "Perfect book for the Halloween season. It's got all the spooky vibes you could ask for.",
      },
      {
        id: "r4-2",
        reviewerName: "Kevin Finn",
        reviewerImage: "https://randomuser.me/api/portraits/men/61.jpg",
        rating: 3,
        date: "Oct 28, 2023",
        text: "The premise was interesting, but the execution felt a bit predictable. Still a fun, quick read.",
      },
    ],
  },
  {
    id: "5",
    title: "Tree of Knowledge",
    author: "Elara Vance",
    image: require("../assets/images/book-cover/cover-5.jpg"),
    rating: 4.8,
    reviewsCount: 2105,
    genre: "Fantasy",
    synopsis:
      "In a world where knowledge is a tangible resource, guarded by ancient sentinels, a young scribe embarks on a perilous quest to find the legendary Tree of Knowledge, hoping to save her dying civilization.",
    reviews: [
      {
        id: "r5-1",
        reviewerName: "Gandalf The Grey",
        reviewerImage: "https://randomuser.me/api/portraits/men/71.jpg",
        rating: 5,
        date: "Sep 22, 2023",
        text: "A truly epic fantasy with incredible world-building. I was completely immersed from start to finish.",
      },
      {
        id: "r5-2",
        reviewerName: "Arya Stark",
        reviewerImage: "https://randomuser.me/api/portraits/women/72.jpg",
        rating: 5,
        date: "Sep 20, 2023",
        text: "The magic system is one of the most original I've ever read about. The protagonist is strong and inspiring.",
      },
    ],
  },
  {
    id: "6",
    title: "Echoes of Infinity",
    author: "K. L. Sterling",
    image: require("../assets/images/book-cover/cover-6.jpg"),
    rating: 4.6,
    reviewsCount: 1890,
    genre: "Sci-Fi",
    synopsis:
      "A lone astronaut discovers a derelict starship at the edge of the galaxy. Its log reveals a chilling truth: the ship didn't travel through space, but through time, and it brought something back with it.",
    reviews: [
      {
        id: "r6-1",
        reviewerName: "Leo Barnes",
        reviewerImage: "https://randomuser.me/api/portraits/men/81.jpg",
        rating: 5,
        date: "Aug 15, 2023",
        text: "Mind-bending science fiction at its best. It makes you think about time, space, and humanity's place in the cosmos.",
      },
      {
        id: "r6-2",
        reviewerName: "Riley North",
        reviewerImage: "https://randomuser.me/api/portraits/women/82.jpg",
        rating: 4,
        date: "Aug 14, 2023",
        text: "A bit heavy on the technical jargon at times, but the story is so compelling that it doesn't matter. A great read.",
      },
    ],
  },
];
