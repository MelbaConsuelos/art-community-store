import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import cartReducer from './cartReducer';
import orderReducer from './orderReducer';
import userReducer from './userReducer';

const storeApp = combineReducers({
  item: itemReducer,
  error: errorReducer,
  auth: authReducer,
  cart: cartReducer,
  order: orderReducer,
  user: userReducer,
});

export default storeApp;
