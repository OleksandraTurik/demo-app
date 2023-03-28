import auth from '@/services/authService';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface IUserData {
  username: string;
  password: string;
  displayName?: string;
}

const initialState = {
  user: {},
  loading: false,
  error: false,
  registrationSuccess: false,
};

const modulePrefix = 'user';

export const login = createAsyncThunk(`/auth/login`, async (userData: IUserData) => {
  const res = await auth.login({
    username: userData.username,
    password: userData.password,
  });
  return res;
});

export const logout = createAsyncThunk(`${modulePrefix}/logout`, async () => {
  await auth.logout();
});

export const registration = createAsyncThunk(
  `${modulePrefix}/registration`,
  async (userData: any) => {
    const res = await auth.registration({
      username: userData.username,
      password: userData.password,
      displayName: userData.displayName,
    });
    return res;
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.userDto;
        state.loading = false;
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.error;
        state.loading = false;
      })
      .addCase(registration.fulfilled, (state) => {
        state.loading = false;
        state.error = false;
        state.registrationSuccess = true;
      })
      .addCase(registration.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.registrationSuccess = false;
      })
      .addCase(registration.rejected, (state) => {
        state.loading = false;
        state.error = true;
        state.registrationSuccess = false;
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.error = false;
        state.registrationSuccess = true;
      })
      .addCase(logout.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.registrationSuccess = false;
      })
      .addCase(logout.rejected, (state) => {
        state.loading = false;
        state.error = true;
        state.registrationSuccess = false;
      });
  },
});

export default userSlice.reducer;
