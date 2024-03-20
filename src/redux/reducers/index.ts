import { combineReducers } from '@reduxjs/toolkit';

import loadingReducers from './loading';
import themeReducers from './theme';
import moviesReducers from './movies';

export default combineReducers({
  themeState: themeReducers,
  loadingState: loadingReducers,
  moviesState: moviesReducers,
});
