import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from '../features/user';
import { productsReducer } from '../features/products';

const store = configureStore({
  reducer: {
    user: userReducer,
    products: productsReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
