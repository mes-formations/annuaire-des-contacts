import { ActionTypes } from "../contacts/contacts.action-types";
import {
  IGetContactFailure,
  IGetContactRequest,
  IGetContactsFailure,
  IGetContactsRequest,
} from "../contacts/contacts.actions";

type LoadingState = { [key in ActionTypes]?: string };

type Actions =
  | IGetContactRequest
  | IGetContactsRequest
  | IGetContactsFailure
  | IGetContactFailure;

const initialState: LoadingState = {
  get_contact: "",
  get_contacts: "false",
};

export const apiErrorReducer = (
  state: LoadingState = initialState,
  action: Actions
): LoadingState => {
  const { type, payload } = action;
  const matches = /(.*)_(request|failure)/.exec(type);
  if (!matches) return state;
  const [, requestName, requestStatus] = matches;
  return {
    ...state,
    [requestName]: requestStatus === "failure" ? payload : "",
  };
};
