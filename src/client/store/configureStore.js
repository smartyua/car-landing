/* global process, module, require */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';

import rootReducer from './reducers';

const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: false
});

const configureStore = preloadedState => {
  const middlewares =
    process.env.NODE_ENV === 'development'
      ? applyMiddleware(promiseMiddleware, thunk, loggerMiddleware)
      : applyMiddleware(promiseMiddleware, thunk);

  const store = createStore(rootReducer, preloadedState, middlewares);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      // eslint-disable-next-line global-require
      const nextRootReducer = require('./reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
