import { ActionTypes } from "../contacts/contacts.action-types";
import {
  IGetContactRequest,
  IGetContactsRequest,
} from "../contacts/contacts.actions";

// type LoadingState = Record<
//   ActionTypes.GET_CONTACT | ActionTypes.GET_CONTACTS,
//   boolean
// >;

type LoadingState = { [key in ActionTypes]?: boolean };

type Actions = IGetContactRequest | IGetContactsRequest;

export const loadingReducer = (
  state: LoadingState,
  action: Actions
): LoadingState => {
  const { type } = action;
  const matches = /(.*)_(request|success|failure)/.exec(type);
  if (!matches) return state;
  const [, requestName, requestStatus] = matches;
  return { ...state, [requestName]: requestStatus === "request" };
};
