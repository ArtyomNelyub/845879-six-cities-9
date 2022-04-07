import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { City } from '../../types/types';

export const getCurrentCity = (state: State): City => state[NameSpace.App].currentCity;
export const getError = (state: State): string => state[NameSpace.App].error;
export const getIsPropertyFormSend = (state: State): boolean => state[NameSpace.App].isPropertyFormSend;
export const getIsPropertyFormCleared = (state: State): boolean => state[NameSpace.App].isPropertyFormCleared;

