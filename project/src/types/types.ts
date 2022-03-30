export type OfferLocation = {
  latitude: number;
  longitude: number;
  zoom?: number;
}

export type OffersLocation = OfferLocation[];

export type Review = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
  }
}

export type Reviews = Review[];

export type Offer = {
  bedrooms: number;
  city: City;
  description: string;
  goods: [string];
  host: {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
  };
  id: number;
  images: [string];
  isFavorite: boolean;
  isPremium: boolean;
  location: OfferLocation;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
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

export type AuthData = {
  login : string;
  password : string;
}

export type UserData = {
  avatarUrl: string
  email: string
  id: number
  isPro: boolean
  name: string
  token: string
};

export type ErrorType = unknown;


export type CommentData = {
  review: string;
  rating: string;
};
