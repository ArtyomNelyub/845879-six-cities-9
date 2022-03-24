import { createReducer } from '@reduxjs/toolkit';
import { selectCity, loadOffers, requireAuthorization, setError } from './action';
import { City, Offers } from '../types/types';
import {cities as mockCities} from '../mocks/mocks';
import { AuthorizationStatus } from '../const';

type InitialState = {
  currentCity: City;
  offers: Offers;
  isDataLoaded: boolean;
  authorizationStatus:  AuthorizationStatus;
  error: string;
};

const initialState: InitialState = {
  currentCity: mockCities[0],
  offers: [],
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  error: '',
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
    });
});

export { reducer };
