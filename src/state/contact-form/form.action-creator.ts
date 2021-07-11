import { ActionTypes } from "./form.action-types";
import { IContactFormUpdate } from "./form.actions";
import { RootState } from "../root.reducer";
import { Action } from "./form.actions";
import { Dispatch } from "react";

export const updateContactForm = (
  e: React.ChangeEvent<HTMLFormElement>
): IContactFormUpdate => {
  return {
    type: ActionTypes.UPDATE_CONTACT_FORM,
    payload: e,
  };
};

export const populateEditForm = () => {
  return (dispatch: Dispatch<Action>, getState: () => RootState) => {
    const { selected } = getState().contacts;
    return dispatch({
      type: ActionTypes.POPULATE_EDIT_FORM,
      payload: selected,
    });
  };
};
