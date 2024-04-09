import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  itemsPerPage: 10,
  currentPage: 0,
};

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setitemsPerPage: (state, action: PayloadAction<number>) => {
      state.itemsPerPage = action.payload;
    },

    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    }
  },
});

export const { setitemsPerPage, setCurrentPage } = paginationSlice.actions;
export const paginationReducer = paginationSlice.reducer;
