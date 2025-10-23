import { configureStore } from '@reduxjs/toolkit';
import freelancersSlice from './slices/freelancersSlice';
import filtersSlice from './slices/filtersSlice';

export const store = configureStore({
  reducer: {
    freelancers: freelancersSlice,
    filters: filtersSlice,
  },
});