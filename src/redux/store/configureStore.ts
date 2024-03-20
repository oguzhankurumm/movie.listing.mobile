import { useDispatch } from 'react-redux';

import { Action, ThunkDispatch, configureStore } from '@reduxjs/toolkit';

import reducers from '../reducers/index';

const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware => {
    const middleware = getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    });
    return middleware;
  },
});
export { store };
export type RootState = ReturnType<typeof store.getState>;
export type ThunkAppDispatch = ThunkDispatch<RootState, void, Action>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<ThunkAppDispatch>();
