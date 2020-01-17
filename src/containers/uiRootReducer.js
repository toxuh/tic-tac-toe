import { combineReducers } from 'redux';

import appBootstrapReducer from './App/reducer';
import { STORE_SLICE_NAME as APP_STORE_SLICE_NAME } from './App/constants';

const uiRootReducer = combineReducers({
  [APP_STORE_SLICE_NAME]: appBootstrapReducer,
});

export default uiRootReducer;
