/* global module */
import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import configureStore from './store/configureStore';

import App from './App';
import './app.module.scss';

const store = configureStore(window.__PRELOADED_STATE__);

// const container = document.getElementById('root');

hydrateRoot(
  document.getElementById('root') || document.createElement('div'),
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

if (module.hot) {
  module.hot.accept();
}
