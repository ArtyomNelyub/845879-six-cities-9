import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from './index';
import { USER_EMAIL } from '../const';
import {
  AuthData,
  Offers,
  UserData,
  Offer,
  Reviews,
  SendCommentArgs,
  CheckFavoriteStatus
} from '../types/types';
import { redirectToRoute } from './action';
import {
  loadComments,
  changeOfferFavoriteStatus,
  loadNearbyOffers,
  loadOffers,
  loadSelectedOffer,
  fillFavoriteOffers,
  changeSelectedOfferFavoriteStatus
} from './offers-process/offers-process';
import {
  selectCity,
  setError,
  checkSendForm,
  clearForm
} from './app-process/app-process';
import { requireAuthorization } from './user-process/user-process';
import {
  APIRouts,
  AppRoute,
  AuthorizationStatus,
  TIMEOUT_SHOW_ERROR
} from '../const';
import { dropToken, saveToken } from '../services/token';
import { errorHandle } from '../services/error-handle';
import axios from 'axios';

export const clearErrorAction = createAsyncThunk('city/clearError', () => {
  setTimeout(() => store.dispatch(setError('')), TIMEOUT_SHOW_ERROR);
});

export const fetchOffersAction = createAsyncThunk(
  'data/fetchOffers',
  async () => {
    try {
      const { data } = await api.get<Offers>(`${APIRouts.Hotels}`);
      store.dispatch(loadOffers(data));
    } catch (error) {
      errorHandle(error);
      store.dispatch(loadOffers([]));
    }
  },
);

export const fetchSelectedOfferAction = createAsyncThunk(
  'data/fetchSelectedOffer',
  async (id: string | undefined) => {
    try {
      const { data } = await api.get<Offer>(`${APIRouts.Hotels}/${id}`);
      store.dispatch(loadSelectedOffer(data));
      store.dispatch(selectCity(data.city));
    } catch (error) {
      errorHandle(error);
      if (axios.isAxiosError(error) && error.message.includes('404')) {
        store.dispatch(redirectToRoute(AppRoute.NotFound));
      }
    }
  },
);

export const checkAuthAction = createAsyncThunk('user/checkAuth', async () => {
  try {
    await api.get(APIRouts.Login);
    store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
  } catch (error) {
    if (!(axios.isAxiosError(error) && error.message.includes('401'))) {
      errorHandle(error);
    }
    store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
});

export const loginAction = createAsyncThunk(
  'user/login',
  async ({ login: email, password }: AuthData) => {
    try {
      const {
        data: { token, email: userEmail },
      } = await api.post<UserData>(APIRouts.Login, { email, password });
      saveToken(token);
      localStorage.setItem(USER_EMAIL, userEmail);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
      store.dispatch(redirectToRoute(AppRoute.Main));
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const logoutAction = createAsyncThunk('user/logout', async () => {
  try {
    await api.delete(APIRouts.Logout);
    dropToken();
    store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  } catch (error) {
    errorHandle(error);
  }
});

export const fetchLoadComments = createAsyncThunk(
  'data/fetchLoadComments',
  async (id: string) => {
    try {
      const { data } = await api.get<Reviews>(`${APIRouts.Comments}/${id}`);
      store.dispatch(loadComments(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const sendComment = createAsyncThunk(
  'data/sendComment',
  async ({ review, rating, id }: SendCommentArgs) => {
    try {
      store.dispatch(checkSendForm(true));
      const { data } = await api.post<Reviews>(`${APIRouts.Comments}/${id}`, {
        comment: review,
        rating,
      });
      store.dispatch(loadComments(data));
      store.dispatch(checkSendForm(false));
      store.dispatch(clearForm(false));
    } catch (error) {
      errorHandle(error);
      store.dispatch(checkSendForm(false));
    }
  },
);

export const fetchLoadNearbyOffers = createAsyncThunk(
  'data/fetchLoadNearbyOffers',
  async (id: string) => {
    try {
      const { data } = await api.get<Offers>(`${APIRouts.Hotels}/${id}/nearby`);
      store.dispatch(loadNearbyOffers(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchLoadFavorites = createAsyncThunk(
  'data/fetchLoadFavorites',
  async () => {
    try {
      const {data} = await api.get<Offers>(`${APIRouts.Favorite}`);
      store.dispatch(fillFavoriteOffers(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const changeFavoriteStatus = createAsyncThunk(
  'data/changeFavoriteStatus',
  async ({id, favoriteStatus}: CheckFavoriteStatus) => {
    try {
      const {data} = await api.post<Offer>(`${APIRouts.Favorite}/${id}/${favoriteStatus}`);
      store.dispatch(changeOfferFavoriteStatus(data));
      store.dispatch(changeSelectedOfferFavoriteStatus(data.isFavorite));
      return data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.message.includes('401')) {
        store.dispatch(redirectToRoute(AppRoute.SignIn));
      } else {
        errorHandle(error);
      }
    }
  },
);
