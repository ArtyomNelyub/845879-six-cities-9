export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  Favorites = '/favorites',
  Room = '/offer',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  UNKNOWN = 'UNKNOWN',
}

export const starValues: string[] = [
  '5-stars',
  '4-stars',
  '3-stars',
  '2-stars',
  '1-star',
];

export const starTitles: string[] = [
  'perfect',
  'good',
  'not bad',
  'badly',
  'terribly',
];

export enum SortMethods {
  POPULAR = 'Popular',
  PRICE_LOW_TO_HIGH = 'Price: low to high',
  PRICE_HIGH_TO_LOW = 'Price: high to low',
  TOP_RATED_FIRST = 'Top rated first'
}

export const MAX_STAR_VALUE = 5;
