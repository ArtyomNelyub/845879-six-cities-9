import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from './index';
import { AuthData, Offers, UserData } from '../types/types';
import { loadOffers, redirectToRoute, requireAuthorization, setError } from './action';
import { APIRouts, AppRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../const';
import { dropToken, saveToken } from '../services/token';
import { errorHandle } from '../services/errorHandle';

export const clearErrorAction = createAsyncThunk(
  'city/clearError',
  () => {
    setTimeout(
      ()=>store.dispatch(setError('')),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchOffersAction = createAsyncThunk(
  'data/fetchOffers',
  async () => {
    try {
      const {data} = await api.get<Offers>(APIRouts.Hotels);
      store.dispatch(loadOffers(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const checkAuthAction = createAsyncThunk(
  'user/checkAuth',
  async () => {
    try {
      await api.get(APIRouts.Login);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk(
  'user/login',
  async ({login: email, password}: AuthData) => {
    try {
      const {data: {token}} = await api.post<UserData>(APIRouts.Login, {email, password});
      saveToken(token);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
      store.dispatch(redirectToRoute(AppRoute.Main));
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const logoutAction = createAsyncThunk(
  'user/logout',
  async () => {
    try {
      await api.delete(APIRouts.Logout);
      dropToken();
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    } catch (error) {
      errorHandle(error);
    }
  },
);
