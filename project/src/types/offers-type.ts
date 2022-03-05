export type CityLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type RentPoint = {
  latitude: number;
  longitude: number;
}

export type RentPoints = RentPoint[];

export type OffersType = {
  bedrooms?: number;
  city?: {
    location: CityLocation;
    name: string;
  };
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
  location?: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  maxAdults?: number;
  previewImage?: string;
  price: number;
  rating?: number;
  title?: string;
  type?: string;
};
