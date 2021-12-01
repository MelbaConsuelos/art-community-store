/* eslint-disable no-underscore-dangle */
/* eslint-disable no-multi-assign */
/* eslint-disable max-len */
/* eslint-disable no-use-before-define */
import axios from 'axios';
import { returnErrors } from './errorActions';
import {
  GET_CART, ADD_TO_CART, DELETE_FROM_CART, CART_LOADING,
} from './types';

export const getCart = () => {
  console.log(localStorage);
  const storageProducts = JSON.parse(localStorage.getItem('state'));
  console.log(storageProducts?.cart);
  return storageProducts?.cart;
};

export const updateCart = (productId, qty) => (dispatch) => {
  const storageProducts = JSON.parse(localStorage.getItem('state'));
  const cartItem = storageProducts.cart.cart.items.findIndex((item) => item.productId === productId);
  if (qty > 0) {
    storageProducts.cart.cart.bill += storageProducts.cart.cart.items[cartItem].price;
  } else {
    storageProducts.cart.cart.bill -= storageProducts.cart.cart.items[cartItem].price;
  }
  storageProducts.cart.cart.items[cartItem].quantity += qty;
  localStorage.setItem('state', JSON.stringify(storageProducts));
};

export const addToCart = (product, quantity) => (dispatch) => {
  const storageProducts = JSON.parse(localStorage.getItem('state'));
  if (storageProducts.cart.cart === null) {
    const items = [];
    storageProducts.cart.cart = { items };
    const newProduct = {
      productId: product._id, name: product.title, quantity, price: product.price, productImage: product.product_image,
    };
    storageProducts.cart.cart.items.push(newProduct);
    storageProducts.cart.cart.bill = product.price;
    localStorage.setItem('state', JSON.stringify(storageProducts));
  } else {
    const existingProduct = storageProducts.cart.cart.items.findIndex((item) => item.productId === product._id);

    if (existingProduct !== -1) {
      storageProducts.cart.cart.items[existingProduct].quantity += 1;
    } else {
      // eslint-disable-next-line prefer-destructuring
      const newProduct = {
        productId: product._id, name: product.title, quantity, price: product.price, productImage: product.product_image,
      };
      storageProducts.cart.cart.items.push(newProduct);
    }
    storageProducts.cart.cart.bill += product.price;
    localStorage.setItem('state', JSON.stringify(storageProducts));
  }
};

export const deleteFromCart = (productId) => (dispatch) => {
  const storageProducts = JSON.parse(localStorage.getItem('state'));
  const cart = storageProducts.cart.cart.items.filter((item) => item.productId !== productId);
  const minus = storageProducts.cart.cart.items.filter((item) => item.productId === productId);
  const bill = storageProducts.cart.cart.bill -= minus[0].price;
  storageProducts.cart.cart.items = cart;
  storageProducts.cart.cart.bill = bill;
  localStorage.setItem('state', JSON.stringify(storageProducts));
};

export const setCartLoading = () => ({
  type: CART_LOADING,
});
