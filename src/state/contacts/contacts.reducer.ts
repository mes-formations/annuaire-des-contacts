import { ActionTypes } from "./contacts.action-types";
import { Action } from "./contacts.actions";
import { IContact } from "../../interfaces/i-contact";

export interface IContactsState {
  contacts: Map<string, IContact> | null;
  contact: IContact | null;
  loading: boolean;
  error: string | null;
}

const initialState: IContactsState = {
  contacts: new Map<string, IContact>(),
  contact: null,
  loading: false,
  error: "",
};

export const contactsReducer = (
  state: IContactsState = initialState,
  action: Action
): IContactsState => {
  if (action.type === ActionTypes.GET_CONTACTS_REQUEST) {
    return { ...state, loading: true, error: null, contacts: null };
  }

  if (action.type === ActionTypes.GET_CONTACTS_SUCCESS) {
    return { ...state, loading: false, error: null, contacts: action.payload };
  }

  if (action.type === ActionTypes.GET_CONTACTS_FAILURE) {
    return { ...state, loading: false, contacts: null, error: action.payload };
  }

  if (action.type === ActionTypes.GET_CONTACT) {
    return {
      ...state,
      loading: false,
      error: null,
      contact: state.contacts?.get(action.payload.id) || null,
    };
  }

  return state;
};
