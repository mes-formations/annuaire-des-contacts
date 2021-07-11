import { ActionTypes } from "./form.action-types";
import { ActionTypes as ContactActionTypes } from "../contacts/contacts.action-types";
import { IContact } from "../../interfaces/i-contact";
import { Action } from "./form.actions";
import { Action as ContactAction } from "../contacts/contacts.actions";
import { IContactsState } from "../contacts/contacts.reducer";

const initialState: IContact = {
  first_name: "",
  last_name: "",
  email: "",
  phone_number: "",
  position: "",
  work_address: "",
};

export const formReducer = (
  state: IContact = initialState,
  action: Action
): IContact => {
  switch (action.type) {
    case ActionTypes.UPDATE_CONTACT_FORM:
      return {
        ...state,
        [action.payload.target.name]: action.payload.target.value,
      };
    case ActionTypes.RESET_CONTACT_FORM:
      return initialState;
    default:
      return state;
  }
};

// Préremplissage du formulaire à partir des données du contact
export const prepopulateFormReducer = (
  formState: IContact,
  action: ContactAction,
  contactState: IContactsState
): IContact => {
  if (action.type === ContactActionTypes.GET_CONTACT_SUCCESS) {
    return {
      ...formState,
      first_name: contactState.selected?.first_name || "",
      last_name: contactState.selected?.last_name || "",
      email: contactState.selected?.email || "",
      phone_number: contactState.selected?.phone_number || "",
      position: contactState.selected?.position || "",
      work_address: contactState.selected?.work_address || "",
    };
  }
  return formState;
};
