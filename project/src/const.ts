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

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

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
