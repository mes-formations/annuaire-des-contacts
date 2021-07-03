import { createSelector } from "reselect";

// Select all contacts
export const selectContacts = (state: any) => state.contacts.contacts;
export const selectContactsLoading = (actionType: any) => (state: any) =>
  state.apiLoading[actionType];

export const selectContactsError = (actionType: any) => (state: any) =>
  state.apiError[actionType];
