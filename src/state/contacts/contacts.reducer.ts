import { ActionTypes } from "./contacts.action-types";
import { Action } from "./contacts.actions";
import { IContact } from "../../interfaces/i-contact";

export interface IContactsState {
  collection: Map<string, IContact> | null;
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
  // GET /contacts

  if (action.type === ActionTypes.GET_CONTACTS_SUCESS) {
    return { ...state, collection: action.payload };
  }

  // GET /contacts:id
  if (action.type === ActionTypes.GET_CONTACT_SUCCESS) {
    return { ...state, selected: action.payload };
  }

  return state;
};
