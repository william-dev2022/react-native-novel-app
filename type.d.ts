type IBook = {
  id: string;
  title: string;
  image: any;
};

export type Book = {
  id: string;
  title: string;
  author: string;
  // I've kept your 'image' key, but renamed the prop in the component to match
  // or you can rename this to 'coverImage' to match the component directly.
  image: any;
  rating: number;
  reviewsCount: number;
  genre: string;
  synopsis: string;
  reviews: {
    id: string;
    reviewerName: string;
    reviewerImage: string;
    rating: number;
    date: string;
    text: string;
  }[];
};
