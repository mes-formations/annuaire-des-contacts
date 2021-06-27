import { ActionTypes } from "./contacts.action-types";
import { Action } from "./contacts.actions";
import { IContact } from "../../interfaces/i-contact";

interface IContactsState {
  contacts: IContact[];
  loading: boolean;
  error: string | null;
}

const initialState: IContactsState = {
  contacts: [
    {
      id: "607cf19e311fcb0015dd6e8b",
      first_name: "Linus",
      last_name: "Torvalds",
      email: "linux@gmail.com",
      phone_number: "+33878578477",
      position: "Software Engineer",
      work_address: "Helsinki",
    },
    {
      id: "6091374a5516790015430f3a",
      first_name: "Vance",
      last_name: "Carney",
      email: "zygave@mailinator.com",
      phone_number: "+243818636535",
      position: "Sint voluptatem dist",
      work_address: "Veniam eaque offici",
    },
    {
      id: "60914868c3c58500158f9927",
      first_name: "Zelda",
      last_name: "Wolf",
      email: "ziky@mailinator.com",
      phone_number: "+243819621840",
      position: "Aliquam deserunt pra",
      work_address: "Debitis dolorem dolo",
    },
    {
      id: "6091487dc3c58500158f9928",
      first_name: "Thomas",
      last_name: "Kim",
      email: "geron@mailinator.com",
      phone_number: "+243810884055",
      position: "Adipisci deserunt ar",
      work_address: "Minima enim dolore i",
    },
  ],
  loading: false,
  error: "",
};

export const contactsReducer = (
  state: IContactsState = initialState,
  action: Action
): IContactsState => {
  if (action.type === ActionTypes.GET_CONTACTS_REQUEST) {
    return { ...state, loading: true, error: null, contacts: [] };
  }

  if (action.type === ActionTypes.GET_CONTACTS_SUCESS) {
    return { ...state, loading: false, error: null, contacts: action.payload };
  }

  if (action.type === ActionTypes.GET_CONTACTS_FAILURE) {
    return { ...state, loading: false, contacts: [], error: action.payload };
  }

  return state;
};