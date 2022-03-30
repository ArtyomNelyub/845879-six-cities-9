import { createReducer } from '@reduxjs/toolkit';
import {
  selectCity,
  loadOffers,
  requireAuthorization,
  setError,
  loadSelectedOffer,
  loadComments,
  loadNearbyOffers,
  checkSendForm,
  clearForm
} from './action';
import { City, Offers, Offer, Reviews } from '../types/types';
import { cities as mockCities } from '../mocks/mocks';
import { AuthorizationStatus } from '../const';

type InitialState = {
  currentCity: City;
  offers: Offers;
  isDataLoaded: boolean;
  authorizationStatus: AuthorizationStatus;
  error: string;
  selectedOffer: Offer | undefined;
  offerComments: Reviews;
  nearbyOffers: Offers;
  isFormSend: boolean;
  isFormCleared: boolean;
};

const initialState: InitialState = {
  currentCity: mockCities[0],
  offers: [],
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  error: '',
  selectedOffer: undefined,
  offerComments: [],
  nearbyOffers: [],
  isFormSend: false,
  isFormCleared: true,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(loadSelectedOffer, (state, action) => {
      state.selectedOffer = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.offerComments = action.payload;
    })
    .addCase(loadNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(checkSendForm, (state, action) => {
      state.isFormSend = action.payload;
    })
    .addCase(clearForm,(state, action) => {
      state.isFormCleared = action.payload;
    });
});

export { reducer };
