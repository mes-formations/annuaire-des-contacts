import { ActionTypes } from "./contacts.action-types";
import { Action } from "./contacts.actions";
import { IContactResponse } from "../../interfaces/i-contact";

export interface IContactsState {
  collection: Map<string, IContactResponse>;
  selected: IContactResponse | null;
}

const initialState: IContactsState = {
  collection: new Map<string, IContactResponse>(),
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
    const updatedContactsList = new Map<string, IContactResponse>(
      state.collection
    );
    updatedContactsList.delete(action.payload.id);
    return { ...state, collection: updatedContactsList };
  }

  //POST /api/contacts : Ici ça dépend de l'action.Si par exemple, on veut créer un contact, on doit créer un objet IContactResponse et le pousser dans le store.

  return state;
};
