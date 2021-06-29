import { ActionTypes } from "./contacts.action-types";
import { Action } from "./contacts.actions";
import { IContact } from "../../interfaces/i-contact";

export interface IContactsState {
  contacts: IContact[];
  contact: IContact | null;
  loading: boolean;
  error: string | null;
}

const initialState: IContactsState = {
  contacts: [],
  contact: null,
  loading: false,
  error: "",
};

export const contactsReducer = (
  state: IContactsState = initialState,
  action: Action
): IContactsState => {
  if (action.type === ActionTypes.GET_CONTACTS_REQUEST) {
    return { ...state, loading: true, error: null, contacts: [] };
  }

  if (action.type === ActionTypes.GET_CONTACTS_SUCESS) {
    return { ...state, loading: false, error: null, contacts: action.payload };
  }

  if (action.type === ActionTypes.GET_CONTACTS_FAILURE) {
    return { ...state, loading: false, contacts: [], error: action.payload };
  }

  return state;
};
