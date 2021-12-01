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

export const addUser = () => (dispatch) => {
  axios.post('/api/user')
    .then((res) => dispatch({
      type: ADD_USER,
      payload: res.data,
    }))
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const setOrdersLoading = () => ({
  type: USER_LOADING,
});
