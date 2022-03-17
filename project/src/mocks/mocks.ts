import { Offers, Reviews, City } from '../types/types';

export const city: City = {
  location: { latitude: 52.370216, longitude: 4.895168, zoom: 10 },
  name: 'Amsterdam',
};

export const reviews: Reviews = [
  {
    urlAuthorAvatar: 'img/avatar-angelina.jpg',
    authorName: 'Kate',
    authorRating: '80%',
    reviewText: 'norm',
    reviewData: '25 spt 2021',
    reviewId: '1',
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

export const offers: Offers = [
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 48.864716,
        longitude: 2.349014,
        zoom: 10,
      },
      name: 'Paris',
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
      latitude: 48.9,
      longitude: 2.5,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'img/apartment-01.jpg',
    price: 10,
    rating: 3,
    title: 'title1',
    type: 'apartment1',
  },
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 48.864716,
        longitude: 2.349014,
        zoom: 10,
      },
      name: 'Paris',
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
      latitude: 48.86476,
      longitude: 2.34906,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'img/apartment-02.jpg',
    price: 20,
    rating: 4.6,
    title: 'title2',
    type: 'apartment2',
  },
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 50.8505,
        longitude: 4.3488,
        zoom: 10,
      },
      name: 'Brussels',
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
      latitude: 50.8508,
      longitude: 4.3481,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: '../../../../img/apartment-03.jpg',
    price: 30,
    rating: 4.4,
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
    rating: 4,
    title: 'title4',
    type: 'apartment4',
  },
];

export const CITIES: City[] = [
  {
    location: {
      latitude: 48.864716,
      longitude: 2.349014,
      zoom: 10,
    },
    name: 'Paris',
  },
  {
    location: {
      latitude: 50.935173,
      longitude: 6.953101,
      zoom: 10,
    },
    name: 'Cologne',
  },
  {
    location: {
      latitude: 50.8505,
      longitude: 4.3488,
      zoom: 10,
    },
    name: 'Brussels',
  },
  {
    location: {
      latitude: 52.377956,
      longitude: 4.89707,
      zoom: 10,
    },
    name: 'Amsterdam',
  },
  {
    location: {
      latitude: 53.551086,
      longitude: 9.993682,
      zoom: 10,
    },
    name: 'Hamburg',
  },
  {
    location: {
      latitude: 51.233334,
      longitude: 6.783333,
      zoom: 10,
    },
    name: 'Dusseldorf',
  },
];
