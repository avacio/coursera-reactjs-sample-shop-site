// store.js
import { configureStore } from '@reduxjs/toolkit';
import venueReducer from './plantSlice';

export default configureStore({
  reducer: {
    venue: venueReducer,
  },
});
