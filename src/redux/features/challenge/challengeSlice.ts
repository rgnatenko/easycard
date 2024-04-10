import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { useDataFromStorage } from '../../../helpers/useDataFromStorage';

const initialState = {
  challengeHasStarted: useDataFromStorage.getChallengeStatus(),
  error: '',
  successfullStart: false
};

export const challengeSlice = createSlice({
  name: 'challenge',
  initialState,
  reducers: {
    setChallengeHasStarted: (state, action: PayloadAction<boolean>) => {
      state.challengeHasStarted = action.payload;
    },

    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },

    setSuccessfullStart: (state, action: PayloadAction<boolean>) => {
      state.successfullStart = action.payload;
    },
  }
});

export const challengeReducer = challengeSlice.reducer;
export const { setChallengeHasStarted, setError, setSuccessfullStart } = challengeSlice.actions;
