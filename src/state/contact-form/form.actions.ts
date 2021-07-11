import { IContact } from "../../interfaces/i-contact";
import { ActionTypes } from "./form.action-types";

export interface IContactFormUpdate {
  type: ActionTypes.UPDATE_CONTACT_FORM;
  payload: React.ChangeEvent<HTMLFormElement>;
}

export interface IResetContactForm {
  type: ActionTypes.RESET_CONTACT_FORM;
}

export interface IPopulateContactForm {
  type: ActionTypes.POPULATE_EDIT_FORM;
  payload: IContact | null;
}

export type Action =
  | IContactFormUpdate
  | IResetContactForm
  | IPopulateContactForm;
