import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  COUNT_OFFERS: 112358,
};

ReactDOM.render(
  <React.StrictMode>
    <App countOffers={Setting.COUNT_OFFERS} />
  </React.StrictMode>,
  document.getElementById('root'),
);
