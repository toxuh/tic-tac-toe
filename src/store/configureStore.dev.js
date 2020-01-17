import { compose } from 'redux';

import configureProdStore from './configureStore.prod';
import actionLogger from './actionLogger.dev';

const reduxDevToolsCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const composeEnhancers = reduxDevToolsCompose
  ? reduxDevToolsCompose({ shouldHotReload: false })
  : compose;

const configureStore = (initialState) => {
  return configureProdStore(initialState, [actionLogger], composeEnhancers);
};

export default configureStore;
