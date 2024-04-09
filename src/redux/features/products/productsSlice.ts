import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { useDataFromStorage } from '../../../helpers/useDataFromStorage';
import { ProductsState } from '../../../types/State/ProductsState';
import { Product } from '../../../types/Product';

const initialState: ProductsState = {
  products: useDataFromStorage.getProducts(),
  selectedProduct: useDataFromStorage.getSelectedProduct(),
  isfirstProduct: false
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSelectedProduct: (state, action: PayloadAction<Product>) => {
      state.selectedProduct = action.payload;
    },

    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },

    setIsFirstProduct: (state, action: PayloadAction<boolean>) => {
      state.isfirstProduct = action.payload;
    },
  },
});

export const { setSelectedProduct, setProducts, setIsFirstProduct } = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
