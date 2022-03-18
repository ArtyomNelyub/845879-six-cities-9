import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { AuthorizationStatus } from './const';
import { Provider } from 'react-redux';
import { store } from './store';


const Setting = {
  AUTHORIZATION_STATUS:  AuthorizationStatus.Auth,
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        authorizationStatus = {Setting.AUTHORIZATION_STATUS}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
