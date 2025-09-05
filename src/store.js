import { configureStore } from '@reduxjs/toolkit';
import { showCaseProduct } from './features/ShowCaseProductSlice';

export const store = configureStore({
  reducer: {
    showCaseProduct:showCaseProduct
  },
})