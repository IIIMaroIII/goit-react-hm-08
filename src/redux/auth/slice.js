import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { register } from './operations';

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  extraReducers: builder => {
    builder.addCase(register.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      console.log(action.payload);
      console.log('Register has been success🎊');
    });
    builder.addCase(register.rejected, (state, action) => {
      console.log(action);
    });
  },
});

export const authReducer = authSlice.reducer;

/**
 * name:
 *
 *
 */
