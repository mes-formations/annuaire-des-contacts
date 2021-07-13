import { ActionTypes } from "./contacts.action-types";
import { Action } from "./contacts.actions";
import { IContactResponse } from "../../interfaces/i-contact";
import { produce } from "immer";

export interface IContactsState {
  collection: Map<string, IContactResponse>;
  selected: IContactResponse | null;
}

const initialState: IContactsState = {
  collection: new Map<string, IContactResponse>(),
  selected: null,
};

export const contactsReducer = produce(
  (state: IContactsState, action: Action): IContactsState => {
    // GET /api/contacts

    if (action.type === ActionTypes.GET_CONTACTS_SUCESS) {
      state.collection = new Map<string, IContactResponse>(action.payload);
      return state;
    }

    // GET /api/contacts/:id
    if (action.type === ActionTypes.GET_CONTACT_SUCCESS) {
      state.selected = action.payload;
      return state;
    }

    // DELETE /api/contacts/:id
    if (action.type === ActionTypes.DELETE_CONTACT_SUCCESS) {
      state.collection.delete(action.payload.id);
      return state;
    }

    //POST /api/contacts : Ici ça dépend de l'action.Si par exemple, on veut créer un contact, on doit créer un objet IContactResponse et le pousser dans le store.

    return state;
  },
  initialState
);
