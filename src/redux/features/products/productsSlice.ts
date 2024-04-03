import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { useDataFromStorage } from '../../../helpers/useDataFromStorage';
import { ProductsState } from '../../../types/ProductsState';
import { Location } from '../../../types/Location';

const initialState: ProductsState = {
  products: useDataFromStorage.getProducts(),
  selectedLocation: null
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSelectedLocation: (state, action: PayloadAction<Location | null>) => {
      state.selectedLocation = action.payload;
    }
  },
});

export const { setSelectedLocation } = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
