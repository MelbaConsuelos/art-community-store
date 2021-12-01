/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import storeApp from './reducers';
import { loadState } from './localStorage';

const persistedState = loadState();

const middleWare = [thunk];

const store = createStore(storeApp, persistedState, compose(
  applyMiddleware(...middleWare),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
));

export default store;
