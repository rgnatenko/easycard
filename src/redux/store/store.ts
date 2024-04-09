import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from '../features/user';
import { productsReducer } from '../features/products';
import { locationsReducer } from '../features/locations';
import { cardsReducer } from '../features/cards';
import { paginationReducer } from '../features/pagination';

const store = configureStore({
  reducer: {
    user: userReducer,
    products: productsReducer,
    locations: locationsReducer,
    cards: cardsReducer,
    pagination: paginationReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
