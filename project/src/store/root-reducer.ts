import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { offersProcess } from './offers-process/offers-process';
import { appProcess } from './app-process/app-process';
import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.offers] : offersProcess.reducer,
  [NameSpace.app] : appProcess.reducer,
  [NameSpace.user] : userProcess.reducer,
});
