import { createAsyncThunk } from '@reduxjs/toolkit';
import API from 'src/components/services/API';

export const getContactsList = createAsyncThunk(
  'contacts/getContactsList',
  async (_, { rejectWithValue }) => {
    try {
      const res = await API.getContacts();
      if (res.statusText !== 'OK') {
        throw new Error(res);
      }
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (data, { rejectWithValue }) => {
    try {
      const res = await API.postContact(data);
      if (res.status > 300) {
        throw new Error(res);
      }
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const res = await API.deleteContact(id);
      if (res.status > 300) {
        throw new Error(res);
      }
      dispatch(getContactsList());
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
