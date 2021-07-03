import { RootState } from "../root.reducer";
import { ActionTypes } from "./contacts.action-types";

// Select all contacts
export const selectContacts = (state: RootState) => state.contacts.contacts;

//   select single contact
export const selectContact = (state: RootState) => state.contacts.contact;

// Common selectors
export const selectContactsLoading =
  (actionType: ActionTypes) => (state: RootState) =>
    state.apiLoading[actionType];

export const selectContactsError =
  (actionType: ActionTypes) => (state: RootState) =>
    state.apiError[actionType];
