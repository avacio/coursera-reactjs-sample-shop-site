// store.js
import { configureStore } from '@reduxjs/toolkit';
import plantReducer from './CartSlice';

export default configureStore({
  reducer: {
    plant: plantReducer,
  },
});
