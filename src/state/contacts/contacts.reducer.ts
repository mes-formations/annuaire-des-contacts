import { ActionTypes } from "./contacts.action-types";
import { Action } from "./contacts.actions";
import { IContact } from "../../interfaces/i-contact";

export interface IContactsState {
  collection: Map<string, IContact>;
  selected: IContact | null;
}

const initialState: IContactsState = {
  collection: new Map<string, IContact>(),
  selected: null,
};

export const contactsReducer = (
  state: IContactsState = initialState,
  action: Action
): IContactsState => {
  // GET /api/contacts

  if (action.type === ActionTypes.GET_CONTACTS_SUCESS) {
    return { ...state, collection: action.payload };
  }

  // GET /api/contacts/:id
  if (action.type === ActionTypes.GET_CONTACT_SUCCESS) {
    return { ...state, selected: action.payload };
  }

  // DELETE /api/contacts/:id
  if (action.type === ActionTypes.DELETE_CONTACT_SUCCESS) {
    const updatedContactsList = new Map<string, IContact>(state.collection);
    updatedContactsList.delete(action.payload.id);
    return { ...state, collection: updatedContactsList };
  }

  return state;
};
