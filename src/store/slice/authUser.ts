// Absolute imports
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Services
import auth from '@/services/authService';

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
  loginSuccess: false,
};

export const login = createAsyncThunk(`auth/login`, async (userData: IUserData) => {
  const res = await auth.login({
    username: userData.username,
    password: userData.password,
  });
  return res;
});

export const logout = createAsyncThunk(`auth/logout`, async () => {
  await auth.logout();
});

export const registration = createAsyncThunk(`auth/registration`, async (userData: IUserData) => {
  const res = await auth.registration({
    username: userData.username,
    password: userData.password,
    displayName: userData.displayName,
  });
  return res;
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.userDto;
        state.loading = false;
        state.loginSuccess = true;
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.loginSuccess = false;
      })
      .addCase(login.rejected, (state) => {
        state.error = true;
        state.loading = false;
        state.loginSuccess = false;
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
