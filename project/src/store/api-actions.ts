import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from './index';
import { Offers } from '../types/types';
import { loadOffers } from './action';
import { APIRouts } from '../const';

export const fetchOffers = createAsyncThunk(
  'data/fetchOffers',
  async () => {
    const {data} = await api.get<Offers>(APIRouts.Hotels);
    store.dispatch(loadOffers(data));
  },
);
