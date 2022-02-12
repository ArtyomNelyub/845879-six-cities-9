import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  QUANTITY_OFFERS : 112358,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      quantityOffers={Setting.QUANTITY_OFFERS}
    />
  </React.StrictMode>,
  document.getElementById('root'));
