import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserState } from '../../../types/State/UserState';
import { User } from '../../../types/User';
import { useDataFromStorage } from '../../../helpers/useDataFromStorage';

const initialState: UserState = {
  user: useDataFromStorage.getUser()
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    }
  },
});

export const { setUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
