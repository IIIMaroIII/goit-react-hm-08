import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { handleToken } from 'src/utils/axios/handleToken';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await axios.post('/users/signup', credentials);
      handleToken.set(res.data.token);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await axios.post('/users/login', credentials);
      handleToken.set(res.data.token);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.post('/users/logout');
      handleToken.unset(res.data.token);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
