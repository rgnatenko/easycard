import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CardsState } from '../../../types/State/CardsState';
import { Card } from '../../../types/Card';
import { useDataFromStorage } from '../../../helpers/useDataFromStorage';

const initialState: CardsState = {
  cards: useDataFromStorage.getCards(),
  cardFormIsOpened: false,
  selectedCard: null,
  query: '',
  isFirstAdded: false
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCards: (state, action: PayloadAction<Card[]>) => {
      state.cards = action.payload;
    },

    setCardFormIsOpened: (state, action: PayloadAction<boolean>) => {
      state.cardFormIsOpened = action.payload;
    },

    setSelectedCard: (state, action: PayloadAction<Card | null>) => {
      state.selectedCard = action.payload;
    },

    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },

    setIsFirstAdded: (state, action: PayloadAction<boolean>) => {
      state.isFirstAdded = action.payload;
    },
  }
});

export const {
  setCards,
  setCardFormIsOpened,
  setSelectedCard,
  setQuery,
  setIsFirstAdded
} = cardsSlice.actions;

export const cardsReducer = cardsSlice.reducer;
