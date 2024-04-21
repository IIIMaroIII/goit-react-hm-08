import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { login, logout, register } from './operations';

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isLoading = null;
        state.error = null;
        console.log('Register has been success🎊');
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(login.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isLoading = null;
        state.error = null;
        console.log('login has been success🎊');
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(logout.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, state => {
        state.isLoggedIn = false;
        state.isLoading = null;
        state.error = null;
        console.log('logout has been success🎊');
      })
      .addCase(logout.rejected, (state, { payload }) => {
        state.error = payload;
      });
  },
});

export const authReducer = authSlice.reducer;

/**
 * name:
 *
 *
 */
