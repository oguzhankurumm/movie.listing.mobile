import { createSlice } from '@reduxjs/toolkit';

import { fillLoading } from '_redux/actions/loading';

import { IsLoadingType } from '../stateTypes/LoadingType';
import { RootState } from '../store/configureStore';

// Define the initial state
const initialState: IsLoadingType = {
  isLoading: false,
};

export const appLoading = createSlice({
  name: 'loading',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fillLoading.fulfilled, (state, action) => {
      state.isLoading = action.payload.data.isLoading;
    });
  },
});

export const loadingStore = (state: RootState) => state.loadingState;

export default appLoading.reducer;
