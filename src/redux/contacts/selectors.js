import { createSelector } from "@reduxjs/toolkit";

import { selectNameFilter } from "./slice";

export function selectContacts(state) {
  return state.contacts.items;
}

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (people, filterName) => {
    return people.filter((contact) =>
      contact.name.toLowerCase().includes(filterName.toLowerCase())
    );
  }
);
