import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import portfolioReducer from './portfolioSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    portfolio: portfolioReducer,
  },
});