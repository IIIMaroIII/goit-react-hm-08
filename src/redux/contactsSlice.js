import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { addContact, deleteContact, getContactsList } from './contactsOps';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState.contacts,
  extraReducers: builder => {
    builder
      // Get Contacts
      .addCase(getContactsList.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(getContactsList.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
        state.isError = null;
      })
      .addCase(getContactsList.rejected, (state, { payload }) => {
        state.isError = payload;
      })
      // Add Contact
      .addCase(addContact.pending, (state, { payload }) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items.push(payload);
        state.isError = null;
      })
      .addCase(addContact.rejected, (state, { payload }) => {
        state.isError = payload;
      })
      // Delete Contact
      .addCase(deleteContact.pending, (state, { payload }) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = state.items.filter(item => item.id !== payload);
        state.isError = null;
      })
      .addCase(deleteContact.rejected, (state, { payload }) => {
        state.isError = payload;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
