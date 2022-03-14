import { createAction } from '@reduxjs/toolkit';
import { City, Offers } from '../types/types';

export const selectCity = createAction<{selectedCity: City}>('city/selectCity');

export const loadOffers = createAction<{offers: Offers}>('city/loadOffers');
