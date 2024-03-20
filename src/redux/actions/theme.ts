import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThemeType } from '_redux/stateTypes/ThemeType';

export const fillTheme = createAsyncThunk('theme/fillTheme', async (form: ThemeType) => {
  return { data: form };
});
