import { IContact } from "../../interfaces/i-contact";
import { ActionTypes } from "./contacts.action-types";

/**
 *  GET /contacts
 */
export interface IGetContactsRequest {
  type: ActionTypes.GET_CONTACTS_REQUEST;
}

export interface IGetContactsSuccess {
  type: ActionTypes.GET_CONTACTS_SUCCESS;
  payload: Map<string, IContact>;
}

export interface IGetContactsFailure {
  type: ActionTypes.GET_CONTACTS_FAILURE;
  payload: string;
}

/**
 * GET /api/contacts/:id
 */
export interface IGetContact {
  type: ActionTypes.GET_CONTACT_REQUEST;
}

export type Action =
  | IGetContactsRequest
  | IGetContactsSuccess
  | IGetContactsFailure
  | IGetContact;
