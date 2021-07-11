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
    case ActionTypes.POPULATE_EDIT_FORM:
      return {
        ...state,
        first_name: action.payload?.first_name || "",
        last_name: action.payload?.last_name || "",
        email: action.payload?.email || "",
        phone_number: action.payload?.phone_number || "",
        position: action.payload?.position || "",
        work_address: action.payload?.work_address || "",
      };
    default:
      return state;
  }
};
