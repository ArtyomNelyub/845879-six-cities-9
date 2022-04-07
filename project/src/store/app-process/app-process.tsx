import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, CITIES } from '../../const';
import { City } from '../../types/types';

type AppProcess = {
  currentCity: City;
  error: string;
  isPropertyFormSend: boolean;
  isPropertyFormCleared: boolean;
}

const initialState: AppProcess = {
  currentCity: CITIES[0],
  error: '',
  isPropertyFormSend: false,
  isPropertyFormCleared: true,
};

export const appProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    selectCity: (state, action) => {
      state.currentCity = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    checkSendForm: (state, action) => {
      state.isPropertyFormSend = action.payload;
    },
    clearForm: (state, action) => {
      state.isPropertyFormCleared = action.payload;
    },
  },
});

export const {selectCity, setError, checkSendForm, clearForm} = appProcess.actions;
