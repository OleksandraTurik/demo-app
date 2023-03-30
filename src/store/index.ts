import { configureStore } from '@reduxjs/toolkit';

// Reducers
import userReducer from './slice/authUser';

// create store
export const store = configureStore({
  reducer: {
    userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
