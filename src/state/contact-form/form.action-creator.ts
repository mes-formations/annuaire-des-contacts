import { ActionTypes } from "./form.action-types";
import { IContactFormUpdate } from "./form.actions";

export const updateContactForm = (
  e: React.ChangeEvent<HTMLInputElement>
): IContactFormUpdate => {
  return {
    type: ActionTypes.UPDATE_CONTACT_FORM,
    payload: e,
  };
};
