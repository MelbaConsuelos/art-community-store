import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import cartReducer from './cartReducer';
import orderReducer from './orderReducer';

const storeApp = combineReducers({
  item: itemReducer,
  error: errorReducer,
  auth: authReducer,
  cart: cartReducer,
  order: orderReducer,
});

export default storeApp;
