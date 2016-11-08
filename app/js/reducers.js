import { combineReducers } from 'redux';
import { publicKeys, publicKeysUI } from './public_keys/reducers';

const forteApp = combineReducers({
  publicKeys,
  publicKeysUI
});

export default forteApp;
