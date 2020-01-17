import { combineReducers } from 'redux';

import { UI_ROOT_STORE_SLICE_NAME, reducer as uiReducer } from '~/containers';

export default combineReducers({
  [UI_ROOT_STORE_SLICE_NAME]: uiReducer,
});
