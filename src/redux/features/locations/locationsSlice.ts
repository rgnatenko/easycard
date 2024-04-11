import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { LocationState } from '../../../types/State/LocationState';
import fetchLocation from '../../../fetchLocation/fetchLocation';
import { Location } from '../../../types/Location';
import { addProduct } from '../products';

const initialState: LocationState = {
  selectedLocation: null,
  locations: [],
  customName: '',
  locatiansAreLoading: false,
  locationsError: ''
};

export const initLocation = createAsyncThunk('locations/init', (query: string) => {
  return fetchLocation(query);
});

export const locationsSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {
    setSelectedLocation: (state, action: PayloadAction<Location | null>) => {
      state.selectedLocation = action.payload;
    },

    setLocations: (state, action: PayloadAction<Location[]>) => {
      state.locations = action.payload;
    },

    setCustomName: (state, action: PayloadAction<string>) => {
      state.customName = action.payload;
    },

    setError: (state, action: PayloadAction<string>) => {
      state.locationsError = action.payload;
    }
  },

  extraReducers: (builder) => {
    builder.addCase(initLocation.pending, state => {
      state.locatiansAreLoading = true;
      state.selectedLocation = null;
    });

    builder.addCase(initLocation.fulfilled, (state, action) => {
      state.locatiansAreLoading = false;
      state.locations = action.payload;
    });

    builder.addCase(addProduct.fulfilled, state => {
      state.selectedLocation = null;
      state.customName = '';
    });
  }
});

export const { setSelectedLocation,
  setLocations,
  setError,
  setCustomName
} = locationsSlice.actions;

export const locationsReducer = locationsSlice.reducer;
