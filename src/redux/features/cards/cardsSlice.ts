import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CardsState } from '../../../types/State/CardsState';
import { Card } from '../../../types/Card';
import { useDataFromStorage } from '../../../helpers/useDataFromStorage';
import { cardInState } from '../../../helpers/cardInState';
import { generateCard } from '../../../helpers/generateCard';
import { addProduct, selectProduct } from '../products';

const initialState: CardsState = {
  cards: useDataFromStorage.getCards(),
  cardFormIsOpened: false,
  selectedCard: null,
  query: '',
  isFirstAdded: false
};

export const updateCard = createAsyncThunk('cards/update', (
  { updatedCard, cards }: { updatedCard: Card, cards: Card[] }
) => {
  const updatedCards = cardInState.changeCard({
    cards,
    updatedCard
  });

  useDataFromStorage.updateCard(updatedCards);

  return updatedCards;
});

export const addCard = createAsyncThunk('cards/add', (ownerName: string) => {
  const newCard = generateCard(ownerName);

  useDataFromStorage.addCard(newCard);

  return newCard;
});

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
  },

  extraReducers: (builder) => {
    builder.addCase(updateCard.fulfilled, (state, action) => {
      state.cards = action.payload;
    });

    builder.addCase(addCard.fulfilled, (state, action) => {
      state.cards.push(action.payload);
    });

    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.cards = action.payload.cards;
    });

    builder.addCase(selectProduct.fulfilled, (state, action) => {
      state.cards = action.payload.cards;
    });
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
