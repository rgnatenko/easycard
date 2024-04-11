import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useDataFromStorage } from '../../../helpers/useDataFromStorage';
import { ProductsState } from '../../../types/State/ProductsState';
import { Product } from '../../../types/Product';
import { addCard, updateCard } from '../cards';
import { updateElementInArray } from '../../../helpers/updateElementInArray';

const initialState: ProductsState = {
  products: useDataFromStorage.getProducts(),
  selectedProduct: useDataFromStorage.getSelectedProduct(),
  isfirstProduct: false
};

export const addProduct = createAsyncThunk('products/add', (product: Product) => {
  useDataFromStorage.addProduct(product);

  return product;
});

export const selectProduct = createAsyncThunk('select/add', (product: Product) => {
  useDataFromStorage.setSelectedProduct(product);

  return product;
});

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

  extraReducers: (builder) => {
    builder.addCase(updateCard.fulfilled, state => {
      const productToSet = useDataFromStorage.getSelectedProduct();

      if (productToSet) {
        state.products = updateElementInArray<Product, Product>(state.products, productToSet);
      }
    });

    builder.addCase(addCard.fulfilled, state => {
      const productToSet = useDataFromStorage.getSelectedProduct();

      if (productToSet) {
        state.products = updateElementInArray<Product, Product>(state.products, productToSet);
      }
    });

    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.selectedProduct = action.payload;
      state.products.push(action.payload);
    });

    builder.addCase(selectProduct.fulfilled, (state, action) => {
      state.selectedProduct = action.payload;
    });
  }
});

export const { setSelectedProduct, setProducts, setIsFirstProduct } = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
