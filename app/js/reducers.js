import { combineReducers } from 'redux';
import publicKeys from './public_keys/reducer';

const forteApp = combineReducers({
  publicKeys
});

export default forteApp;
