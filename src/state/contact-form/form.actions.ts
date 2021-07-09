import { ActionTypes } from "./form.action-types";

export interface IContactFormUpdate {
  type: ActionTypes.UPDATE_CONTACT_FORM;
  payload: React.ChangeEvent<HTMLInputElement>;
}

export interface IResetContactForm {
  type: ActionTypes.RESET_CONTACT_FORM;
}

export type Action = IContactFormUpdate | IResetContactForm;
