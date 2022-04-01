import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { City } from '../../types/types';
import {cities as mockCities} from '../../mocks/mocks';

type DataProcess = {
  currentCity: City;
  error: string;
  isFormSend: boolean;
  isFormCleared: boolean;
}

const initialState: DataProcess = {
  currentCity: mockCities[0],
  error: '',
  isFormSend: false,
  isFormCleared: true,
};

export const dataProcess = createSlice({
  name: NameSpace.data,
  initialState,
  reducers: {
    selectCity: (state, action) => {
      state.currentCity = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    checkSendForm: (state, action) => {
      state.isFormSend = action.payload;
    },
    clearForm: (state, action) => {
      state.isFormCleared = action.payload;
    },
  },
});

export const {selectCity, setError, checkSendForm, clearForm} = dataProcess.actions;
