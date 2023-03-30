import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slice/authUser';

export const store = configureStore({
  reducer: { userReducer },
});

export type RootState = ReturnType<typeof store.getState>;
