import { ActionTypes } from "./contacts.action-types";
import { Action } from "./contacts.actions";
import { IContact } from "../../interfaces/i-contact";

export interface IContactsState {
  contacts: Map<string, IContact> | null;
  contact: IContact | null;
}

const initialState: IContactsState = {
  contacts: new Map<string, IContact>(),
  contact: null,
};

export const contactsReducer = (
  state: IContactsState = initialState,
  action: Action
): IContactsState => {
  // GET /contacts

  if (action.type === ActionTypes.GET_CONTACTS_SUCESS) {
    return { ...state, contacts: action.payload };
  }

  // GET /contacts:id
  if (action.type === ActionTypes.GET_CONTACT_SUCCESS) {
    return { ...state, contact: action.payload };
  }

  return state;
};
