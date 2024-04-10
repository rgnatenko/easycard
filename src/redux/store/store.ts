import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from '../features/user';
import { productsReducer } from '../features/products';
import { locationsReducer } from '../features/locations';
import { cardsReducer } from '../features/cards';
import { paginationReducer } from '../features/pagination';
import { challengeReducer } from '../features/challenge';

const store = configureStore({
  reducer: {
    user: userReducer,
    products: productsReducer,
    locations: locationsReducer,
    cards: cardsReducer,
    pagination: paginationReducer,
    challenge: challengeReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
