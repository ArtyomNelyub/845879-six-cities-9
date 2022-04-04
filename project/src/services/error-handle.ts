import request from 'axios';
import { HttpCode } from '../const';
import { store } from '../store';
import { setError } from '../store/app-process/app-process';
import { ErrorType } from '../types/types';
import { clearErrorAction } from '../store/api-actions';

export const errorHandle = (error: ErrorType): void => {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  const handleError = (message : string) => {
    store.dispatch(setError(message));
    store.dispatch(clearErrorAction());
  };

  const {response} = error;

  if (response) {
    switch (response.status) {
      case HttpCode.BAD_REQUEST:
        handleError(response.data.error);
        break;
      case HttpCode.NOT_FOUND:
        handleError(response.data.error);
        break;
      case HttpCode.UNAUTHORIZED:
        handleError(response.data.error);
        break;
    }
  }
};
