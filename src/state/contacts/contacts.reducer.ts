import { ActionTypes } from "./contacts.action-types";
import { Action } from "./contacts.actions";
import { IContact } from "../../interfaces/i-contact";

export interface IContactsState {
  contacts: Map<string, IContact> | null;
  contact: IContact | null;
  loading_contacts: boolean;
  contacts_error: string | null;
}

const initialState: IContactsState = {
  contacts: new Map<string, IContact>(),
  contact: null,
  loading_contacts: false,
  contacts_error: "",
};

export const contactsReducer = (
  state: IContactsState = initialState,
  action: Action
): IContactsState => {
  if (action.type === ActionTypes.GET_CONTACTS_REQUEST) {
    return {
      ...state,
      loading_contacts: true,
      contacts_error: null,
      contacts: null,
    };
  }

  if (action.type === ActionTypes.GET_CONTACTS_SUCCESS) {
    return {
      ...state,
      loading_contacts: false,
      contacts_error: null,
      contacts: action.payload,
    };
  }

  if (action.type === ActionTypes.GET_CONTACTS_FAILURE) {
    return {
      ...state,
      loading_contacts: false,
      contacts: null,
      contacts_error: action.payload,
    };
  }

  return state;
};
