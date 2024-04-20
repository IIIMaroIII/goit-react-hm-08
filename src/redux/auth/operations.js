import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { handleToken } from 'src/utils/axios/handleToken';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkApi) => {
    try {
      const res = await axios.post('/users/signup', credentials);
      console.log('res.data', res.data);
      console.log('res', res);
      // return res;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);
export const logout = createAsyncThunk('auth/logout', async () => {});
