import { IContact } from "../../interfaces/i-contact";

interface ContactState {
  contact: IContact | null;
}

const initialState = {
  contact: null,
};
export const contactReducer = (
  state: ContactState = initialState,
  action: any
): ContactState => {
  if (action.type === "get_contact_success") {
    return { ...state, contact: action.payload };
  }
  return state;
};
