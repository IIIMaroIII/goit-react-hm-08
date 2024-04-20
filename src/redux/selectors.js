import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.isLoading;
export const selectNameFilter = state => state.filters.name;
export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (items, filterName) => {
    return items.filter(item =>
      item.name.toLowerCase().includes(filterName.toLowerCase()),
    );
  },
);
