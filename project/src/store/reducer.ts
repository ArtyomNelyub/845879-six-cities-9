import { createReducer } from '@reduxjs/toolkit';
import { selectCity, loadOffers } from './action';
import { City, Offers } from '../types/types';
import {cities as mockCities} from '../mocks/mocks';

type State = {
  currentCity: City;
  offers: Offers | [];
};

const initialState: State = {
  currentCity: mockCities[0],
  offers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCity, (state, action) => {
      state.currentCity = action.payload.selectedCity;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload.offers;
    });
});

export { reducer };
