import { createSelector } from "@reduxjs/toolkit";
import { selectFilterName } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilterName],
  (contacts, name) => {
    return contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(name.toLowerCase());
    });
  }
);
