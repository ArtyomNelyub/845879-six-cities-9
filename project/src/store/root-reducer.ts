import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { cityProcess } from './city-process/city-process';
import { dataProcess } from './data-process/data-process';
import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.city] : cityProcess.reducer,
  [NameSpace.data] : dataProcess.reducer,
  [NameSpace.user] : userProcess.reducer,
});
