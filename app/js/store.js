import { createStore, applyMiddleware, compose } from 'redux';
import forteApp from './reducers';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { persistStore, autoRehydrate } from 'redux-persist';

const loggerMiddleware = createLogger();

const Store = createStore(
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

persistStore(Store);

export default Store;
