import { ActionTypes } from "./form.action-types";
import { IContact } from "../../interfaces/i-contact";
import { Action } from "./form.actions";

const initialState: IContact = {
  first_name: "",
  last_name: "",
  email: "",
  phone_number: "",
  position: "",
  work_address: "",
};

const reducer = (state: IContact = initialState, action: Action): IContact => {
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

export default reducer;
