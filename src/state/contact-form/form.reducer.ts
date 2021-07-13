import { ActionTypes } from "./form.action-types";
import { IContact } from "../../interfaces/i-contact";
import { Action } from "./form.actions";
import { produce } from "immer";

const initialState = {
  first_name: "",
  last_name: "",
  email: "",
  phone_number: "",
  position: "",
  work_address: "",
};

export const formReducer = produce(
  (state = initialState, action: Action): IContact => {
    if (action.type === ActionTypes.UPDATE_CONTACT_FORM) {
      state[action.payload.target.name] = action.payload.target.value;
      return state;
    }
    if (action.type === ActionTypes.RESET_CONTACT_FORM) {
      return initialState;
    }
    if (action.type === ActionTypes.POPULATE_EDIT_FORM)
      return {
        ...state,
        first_name: action.payload?.first_name || "",
        last_name: action.payload?.last_name || "",
        email: action.payload?.email || "",
        phone_number: action.payload?.phone_number || "",
        position: action.payload?.position || "",
        work_address: action.payload?.work_address || "",
      };
    return state;
  },
  initialState
);
