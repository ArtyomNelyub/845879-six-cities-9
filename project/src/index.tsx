import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {offers} from './mocks/offers';
import { AuthorizationStatus } from './const';

const Setting = {
  COUNT_OFFERS: 112358,
  AUTHORIZATION_STATUS:  AuthorizationStatus.Auth,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      countOffers={Setting.COUNT_OFFERS}
      offers={offers}
      authorizationStatus = {Setting.AUTHORIZATION_STATUS}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);
