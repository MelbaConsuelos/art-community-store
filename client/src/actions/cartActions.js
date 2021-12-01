/* eslint-disable no-multi-assign */
/* eslint-disable max-len */
/* eslint-disable no-use-before-define */
import axios from 'axios';
import { returnErrors } from './errorActions';
import {
  GET_CART, ADD_TO_CART, DELETE_FROM_CART, CART_LOADING,
} from './types';

export const getCart = (id) => (dispatch) => {
  dispatch(setCartLoading());
  axios.get(`/api/cart/${id}`)
    .then((res) => dispatch({
      type: GET_CART,
      payload: res.data,
    }))
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const updateCart = (productId, qty) => (dispatch) => {
  console.log(productId, qty);
  const storageProducts = JSON.parse(localStorage.getItem('state'));
  const cartItem = storageProducts.cart.cart.items.findIndex((item) => item.productId === productId);
  console.log(cartItem);
  console.log(storageProducts.cart.cart.items);
  console.log(storageProducts.cart.cart.items[cartItem]);
  storageProducts.cart.cart.items[cartItem].quantity = qty;
  localStorage.setItem('state', JSON.stringify(storageProducts));
};

export const addToCart = (productId, product, quantity) => (dispatch) => {
  console.log(productId, product, quantity);
  const storageProducts = JSON.parse(localStorage.getItem('state'));
  const existingProduct = storageProducts.cart.cart.items.filter((item) => item.productId === productId);
  console.log(existingProduct);

  if (existingProduct.size > 0) {
    storageProducts.cart.cart.items[existingProduct].quantity += 1;
  } else {
    storageProducts.cart.cart.items.push(productId);
  }
  storageProducts.cart.cart.bill += productId.price;
  localStorage.setItem('state', JSON.stringify(storageProducts));
};

export const deleteFromCart = (productId) => (dispatch) => {
  const storageProducts = JSON.parse(localStorage.getItem('state'));
  console.log(storageProducts);
  const cart = storageProducts.cart.cart.items.filter((item) => item.productId !== productId);
  console.log(cart);
  const minus = storageProducts.cart.cart.items.filter((item) => item.productId === productId);
  console.log(minus);
  const bill = storageProducts.cart.cart.bill -= minus[0].price;
  console.log(bill);
  storageProducts.cart.cart.items = cart;
  storageProducts.cart.cart.bill = bill;
  console.log(storageProducts);
  localStorage.setItem('state', JSON.stringify(storageProducts));
};

export const setCartLoading = () => ({
  type: CART_LOADING,
});
