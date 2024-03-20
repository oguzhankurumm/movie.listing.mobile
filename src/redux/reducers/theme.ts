import { createSlice } from '@reduxjs/toolkit';

import { fillTheme } from '_redux/actions/theme';
import { themes } from '_styles/theming';

import { State } from '../stateTypes/ThemeType';
import { RootState } from '../store/configureStore';

// Define the initial state using that type
const initialState: State = {
  loading: false,
  data: themes?.dark,
};

export const appSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fillTheme.pending, state => {
      state.loading = true;
    });
    builder.addCase(fillTheme.fulfilled, (state, action) => {
      state.data = action.payload.data;
      state.loading = false;
    });
    builder.addCase(fillTheme.rejected, state => {
      state.loading = false;
    });
  },
});

export const themeStore = (state: RootState) => state.themeState;

export default appSlice.reducer;
