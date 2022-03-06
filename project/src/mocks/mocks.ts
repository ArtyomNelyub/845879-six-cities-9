import { OffersType, CityLocation, RentPoints, Reviews } from '../types/offers-type';

export const cityLocation: CityLocation = {
  latitude: 52.370216,
  longitude: 4.895168,
  zoom: 10,
};

export const rentPoints: RentPoints = [
  { latitude: 52.3909553943508, longitude: 4.85309666406198 },
  { latitude: 52.369553943508, longitude: 4.85309666406198 },
  { latitude: 52.3909553943508, longitude: 4.929309666406198 },
  { latitude: 52.3809553943508, longitude: 4.939309666406198 },
];

export const reviews: Reviews = [
  {
    urlAuthorAvatar: 'img/avatar-angelina.jpg',
    authorName: 'Kate',
    authorRating: '80%',
    reviewText: 'norm',
    reviewData: '25 spt 2021',
    reviewId : '1',
  },
  {
    urlAuthorAvatar: 'img/avatar-max.jpg',
    authorName: 'Max',
    authorRating: '60%',
    reviewText: 'so so',
    reviewData: '01 spt 2021',
    reviewId: '2',
  },


];

export const offers: OffersType[] = [
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'description1',
    goods: ['goods1'],
    host: {
      avatarUrl: 'img/1.png',
      id: 3,
      isPro: true,
      name: 'Angelina',
    },
    id: 1,
    images: ['img/1.png'],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'img/apartment-01.jpg',
    price: 10,
    rating: 4.8,
    title: 'title1',
    type: 'apartment1',
  },
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'description2',
    goods: ['goods2'],
    host: {
      avatarUrl: 'img/1.png',
      id: 3,
      isPro: true,
      name: 'Angelina',
    },
    id: 2,
    images: ['img/1.png'],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'img/apartment-02.jpg',
    price: 20,
    rating: 4.8,
    title: 'title2',
    type: 'apartment2',
  },
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'description3',
    goods: ['goods3'],
    host: {
      avatarUrl: 'img/1.png',
      id: 3,
      isPro: true,
      name: 'Angelina',
    },
    id: 3,
    images: ['img/1.png'],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: '../../../../img/apartment-03.jpg',
    price: 30,
    rating: 4.8,
    title: 'title3',
    type: 'apartment3',
  },
  {
    bedrooms: 4,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'description4',
    goods: ['goods4'],
    host: {
      avatarUrl: 'img/1.png',
      id: 3,
      isPro: true,
      name: 'Angelina',
    },
    id: 4,
    images: ['img/1.png'],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: '../../../../img/apartment-01.jpg',
    price: 40,
    rating: 4.8,
    title: 'title4',
    type: 'apartment4',
  },
];
