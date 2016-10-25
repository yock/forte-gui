import React from 'react';
import { render }  from 'react-dom';
import ForteApplication from './js/forte_application';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import forteApp from './js/reducers';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { persistStore, autoRehydrate } from 'redux-persist';

const loggerMiddleware = createLogger();

const store = createStore(
  forteApp,
  {},
  compose(
    autoRehydrate(),
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    )
  )
);

persistStore(store);

render(
  <Provider store={store}>
    <ForteApplication />
  </Provider>,
  document.getElementById('container')
);
