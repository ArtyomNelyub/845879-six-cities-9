import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { Offer, Offers, Reviews } from '../../types/types';

type OffersProcess = {
  offers: Offers;
  isOffersLoaded: boolean;
  favoriteOffers: Offers;
  isFavoritesLoaded: boolean;
  selectedOffer: Offer | undefined;
  offerComments: Reviews;
  nearbyOffers: Offers;
};

const initialState: OffersProcess = {
  offers: [],
  favoriteOffers: [],
  isOffersLoaded: false,
  isFavoritesLoaded: false,
  selectedOffer: undefined,
  offerComments: [],
  nearbyOffers: [],
};

export const offersProcess = createSlice({
  name: NameSpace.offers,
  initialState,
  reducers: {
    loadOffers: (state, action) => {
      state.offers = action.payload;
      state.isOffersLoaded = true;
    },
    changeOfferFavoriteStatus: (state, action) => {
      state.offers.map((offer) => {
        if (offer.id === action.payload.id) {
          offer.isFavorite = action.payload.isFavorite;
        }
        return offer;
      });
    },
    changeSelectedOfferFavoriteStatus: (state, action) => {
      if (state.selectedOffer) {
        state.selectedOffer.isFavorite = action.payload;
      }
    },
    fillFavoriteOffers: (state, action) => {
      state.favoriteOffers = action.payload;
      state.isFavoritesLoaded = true;
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

export const {
  loadComments,
  changeOfferFavoriteStatus,
  loadNearbyOffers,
  loadOffers,
  loadSelectedOffer,
  fillFavoriteOffers,
  changeSelectedOfferFavoriteStatus,
} = offersProcess.actions;
