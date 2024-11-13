import {configureStore} from '@reduxjs/toolkit';
import internetReducer from './src/features/internetSlice';
import themeReducer from './src/features/themeSlice';

export const store = configureStore({
  reducer: {
    internet: internetReducer,
    theme: themeReducer,
  },
});
