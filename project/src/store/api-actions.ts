import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from './index';
import {
  AuthData,
  Offers,
  UserData,
  Offer,
  Reviews,
  CommentData
} from '../types/types';
import {
  loadComments,
  loadNearbyOffers,
  loadOffers,
  loadSelectedOffer,
  redirectToRoute,
  requireAuthorization,
  setError
} from './action';
import {
  APIRouts,
  AppRoute,
  AuthorizationStatus,
  TIMEOUT_SHOW_ERROR
} from '../const';
import { dropToken, saveToken } from '../services/token';
import { errorHandle } from '../services/errorHandle';

export const clearErrorAction = createAsyncThunk('city/clearError', () => {
  setTimeout(() => store.dispatch(setError('')), TIMEOUT_SHOW_ERROR);
});

export const fetchOffersAction = createAsyncThunk(
  'data/fetchOffers',
  async () => {
    try {
      const { data } = await api.get<Offers>(APIRouts.Hotels);
      store.dispatch(loadOffers(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchSelectedOfferAction = createAsyncThunk(
  'data/fetchSelectedOffer',
  async (id: string | undefined) => {
    try {
      const { data } = await api.get<Offer>(`${APIRouts.Hotels}/${id}`);
      store.dispatch(loadSelectedOffer(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const checkAuthAction = createAsyncThunk('user/checkAuth', async () => {
  try {
    await api.get(APIRouts.Login);
    store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
  } catch (error) {
    errorHandle(error);
    store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
});

export const loginAction = createAsyncThunk(
  'user/login',
  async ({ login: email, password }: AuthData) => {
    try {
      const {
        data: { token },
      } = await api.post<UserData>(APIRouts.Login, { email, password });
      saveToken(token);
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
  'city/fetchLoadComments',
  async (id: string) => {
    try {
      const { data } = await api.get<Reviews>(`${APIRouts.Comments}/${id}`);
      store.dispatch(loadComments(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

type SendCommentArgs = CommentData & { id: string };
export const sendComment = createAsyncThunk(
  'user/sendComment',
  async ({ review, rating, id }: SendCommentArgs) => {
    try {
      const { data } = await api.post<Reviews>(`${APIRouts.Comments}/${id}`, {
        comment: review,
        rating,
      });
      store.dispatch(loadComments(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchLoadNearbyOffers = createAsyncThunk(
  'city/fetchLoadNearbyOffers',
  async (id: string) => {
    try {
      const { data } = await api.get<Offers>(`${APIRouts.Hotels}/${id}/nearby`);
      store.dispatch(loadNearbyOffers(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);
