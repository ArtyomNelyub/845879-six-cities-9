import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { Offer, Offers, Reviews } from '../../types/types';

type CityProcess = {
  offers: Offers;
  isDataLoaded: boolean;
  selectedOffer: Offer | undefined;
  offerComments: Reviews;
  nearbyOffers: Offers;
}

const initialState: CityProcess = {
  offers: [],
  isDataLoaded: false,
  selectedOffer: undefined,
  offerComments: [],
  nearbyOffers: [],
};

export const cityProcess = createSlice({
  name: NameSpace.city,
  initialState,
  reducers: {
    loadOffers: (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    },
    loadSelectedOffer: (state, action) => {
      state.selectedOffer = action.payload;
    },
    loadComments: (state, action) => {
      state.offerComments = action.payload;
    },
    loadNearbyOffers: (state, action) => {
      state.nearbyOffers = action.payload;
    },
  },
});

export const {loadComments, loadNearbyOffers, loadOffers, loadSelectedOffer} = cityProcess.actions;
