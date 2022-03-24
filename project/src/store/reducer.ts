import { createReducer } from '@reduxjs/toolkit';
import { selectCity, loadOffers, requireAuthorization, setError, loadSelectedOffer } from './action';
import { City, Offers, Offer } from '../types/types';
import { cities as mockCities } from '../mocks/mocks';
import { AuthorizationStatus } from '../const';


type InitialState = {
  currentCity: City;
  offers: Offers;
  isDataLoaded: boolean;
  authorizationStatus:  AuthorizationStatus;
  error: string;
  selectedOffer: Offer | null;
};

const initialState: InitialState = {
  currentCity: mockCities[0],
  offers: [],
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  error: '',
  selectedOffer: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCity, (state, action) => {
      state.currentCity = action.payload.selectedCity;
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
    });
});

export { reducer };
