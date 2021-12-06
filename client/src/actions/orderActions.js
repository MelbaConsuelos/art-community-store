/* eslint-disable prefer-destructuring */
/* eslint-disable no-use-before-define */
import axios from 'axios';
import { returnErrors } from './errorActions';
import { GET_ORDERS, CHECKOUT, ORDERS_LOADING } from './types';

export const getOrders = (id) => (dispatch) => {
  dispatch(setOrdersLoading());
  axios.get(`/api/order/${id}`)
    .then((res) => dispatch({
      type: GET_ORDERS,
      payload: res.data,
    }))
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const checkout = (id, cart, source) => (dispatch) => {
  const userId = id[0].userId;
  axios.post(`/api/order/${userId}`, cart, { source })
    .then((res) => dispatch({
      type: CHECKOUT,
      payload: res.data,
    }))
    .then((res) => res)
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const setOrdersLoading = () => ({
  type: ORDERS_LOADING,
});
