export type OfferLocation = {
  latitude: number;
  longitude: number;
  zoom?: number;
}

export type OffersLocation = OfferLocation[];

export type Review = {
  urlAuthorAvatar: string;
  authorName: string;
  authorRating: string;
  reviewText: string;
  reviewData: string;
  reviewId: string;
}

export type Reviews = Review[];

export type Offer = {
  bedrooms?: number;
  city: City;
  description?: string;
  goods?: [string];
  host?: {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
  };
  id?: number;
  images?: [string];
  isFavorite?: boolean;
  isPremium?: boolean;
  location: OfferLocation;
  maxAdults?: number;
  previewImage?: string;
  price: number;
  rating?: number;
  title?: string;
  type?: string;
};

export type Offers = Offer[];

export type City =  {
  location: {
    latitude: number,
    longitude: number,
    zoom: number,
  },
  name: string,
};
