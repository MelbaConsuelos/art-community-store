/* eslint-disable camelcase */
/* eslint-disable max-len */
/* eslint-disable no-use-before-define */
import axios from 'axios';
import { returnErrors } from './errorActions';
import { GET_USER, ADD_USER, USER_LOADING } from './types';

export const getUser = (id) => (dispatch) => {
  dispatch(setOrdersLoading());
  axios.get(`/api/user/${id}`)
    .then((res) => dispatch({
      type: GET_USER,
      payload: res.data,
    }))
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const addUser = (userId, shipping_address, client_name, client_lastname, client_email) => (dispatch) => {
  // headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  // request body
  const body = JSON.stringify({
    userId, shipping_address, client_name, client_lastname, client_email,
  });
  console.log(body);
  axios.post('/api/user', body, config)
    .then((res) => ({
      type: ADD_USER,
      payload: res.data,
    }))
    .then((res) => res.data)
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const setOrdersLoading = () => ({
  type: USER_LOADING,
});
