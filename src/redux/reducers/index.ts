import { combineReducers } from '@reduxjs/toolkit';

import loadingReducers from './loading';
import themeReducers from './theme';

export default combineReducers({
  themeState: themeReducers,
  loadingState: loadingReducers,
});
