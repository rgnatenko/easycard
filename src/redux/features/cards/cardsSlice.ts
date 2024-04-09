import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CardsState } from '../../../types/State/CardsState';
import { Card } from '../../../types/Card';
import { useDataFromStorage } from '../../../helpers/useDataFromStorage';

const initialState: CardsState = {
  cards: useDataFromStorage.getCards(),
  cardFormIsOpened: false,
  selectedCard: null
};

export const cardsSlice = createSlice({
  name: 'locations',
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
  }
});

export const { setCards, setCardFormIsOpened, setSelectedCard } = cardsSlice.actions;

export const cardsReducer = cardsSlice.reducer;
