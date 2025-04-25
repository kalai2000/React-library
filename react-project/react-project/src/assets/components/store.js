// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../../store/cartSlice';
import productSlice from '../../store/productSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productSlice,
  },
});

export default store;
