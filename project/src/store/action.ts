import { createAction } from '@reduxjs/toolkit';
import { City, Offers } from '../types/types';
import { AppRoute, AuthorizationStatus } from '../const';

export const selectCity = createAction<{selectedCity: City}>('city/selectCity');

export const loadOffers = createAction<Offers>('city/loadOffers');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string>('city/setError');

export const redirectToRoute = createAction<AppRoute>('city/redirectToRoute');
