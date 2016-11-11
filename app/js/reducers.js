import { combineReducers } from 'redux';
import { publicKeys, publicKeysUI } from './public_keys/reducers';
import { servers, serversUI } from './servers/reducers';

const forteApp = combineReducers({
  publicKeys,
  publicKeysUI,
  servers,
  serversUI
});

export default forteApp;
