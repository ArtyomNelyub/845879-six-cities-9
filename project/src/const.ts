import { City } from './types/types';

export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  Favorites = '/favorites',
  Room = '/offer',
  NotFound = '/not_found',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  UNKNOWN = 'UNKNOWN',
}

export enum APIRouts {
  Hotels = '/hotels',
  Favorite = '/favorite',
  Comments = '/comments',
  Login = '/login',
  Logout ='/logout',
}

export enum SortMethods {
  POPULAR = 'Popular',
  PRICE_LOW_TO_HIGH = 'Price: low to high',
  PRICE_HIGH_TO_LOW = 'Price: high to low',
  TOP_RATED_FIRST = 'Top rated first'
}

export const MAX_STAR_RATING = 5;

export enum HttpCode {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}

export enum NameSpace {
  app = 'APP',
  offers = 'OFFERS',
  user = 'USER',
}

export const FAVORITE_STATUS_ADDED = 1;

export const FAVORITE_STATUS_NOT_ADDED = 0;

export const TIMEOUT_SHOW_ERROR = 2000;

export const USER_EMAIL = 'USER_EMAIL';

export const CITIES: City[] = [
  {
    location: {
      latitude: 48.864716,
      longitude: 2.349014,
      zoom: 12,
    },
    name: 'Paris',
  },
  {
    location: {
      latitude: 50.935173,
      longitude: 6.953101,
      zoom: 12,
    },
    name: 'Cologne',
  },
  {
    location: {
      latitude: 50.8505,
      longitude: 4.3488,
      zoom: 12,
    },
    name: 'Brussels',
  },
  {
    location: {
      latitude: 52.377956,
      longitude: 4.89707,
      zoom: 12,
    },
    name: 'Amsterdam',
  },
  {
    location: {
      latitude: 53.551086,
      longitude: 9.993682,
      zoom: 12,
    },
    name: 'Hamburg',
  },
  {
    location: {
      latitude: 51.233334,
      longitude: 6.783333,
      zoom: 12,
    },
    name: 'Dusseldorf',
  },
];
