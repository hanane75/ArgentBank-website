// store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Reducer/authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  devTools: process.env.NODE_ENV !== 'production', // Activer les DevTools seulement en développement
});

export default store;