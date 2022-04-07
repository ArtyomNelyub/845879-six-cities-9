import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { Offer, Offers, Reviews } from '../../types/types';

export const getOffers = (state: State): Offers => state[NameSpace.Offers].offers;
export const getIsOffersLoaded = (state: State): boolean => state[NameSpace.Offers].isOffersLoaded;
export const getFavoriteOffers = (state: State): Offers => state[NameSpace.Offers].favoriteOffers;
export const getIsFavoritesLoaded = (state: State): boolean => state[NameSpace.Offers].isFavoritesLoaded;
export const getSelectedOffer = (state: State): Offer | undefined => state[NameSpace.Offers].selectedOffer;
export const getOfferComments = (state: State): Reviews => state[NameSpace.Offers].offerComments;
export const getNearbyOffers = (state: State): Offers => state[NameSpace.Offers].nearbyOffers;

