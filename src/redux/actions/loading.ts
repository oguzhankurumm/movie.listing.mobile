import { createAsyncThunk } from '@reduxjs/toolkit';

import { IsLoadingType } from '_redux/stateTypes/LoadingType';

export const fillLoading = createAsyncThunk('fillLoading', async (form: IsLoadingType) => {
  return { data: form };
});
