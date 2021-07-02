import { IContact } from "../../interfaces/i-contact";
import { ActionTypes } from "./contacts.action-types";

/**
 *  GET /contacts
 */
export interface IGetContactsRequest {
  type: ActionTypes.GET_CONTACTS_REQUEST;
  payload?: any;
}

export interface IGetContactsSuccess {
  type: ActionTypes.GET_CONTACTS_SUCESS;
  payload: Map<string, IContact>;
}

export interface IGetContactsFailure {
  type: ActionTypes.GET_CONTACTS_FAILURE;
  payload: string;
}

/**
 * GET /api/contacts/:id
 */
export interface IGetContactRequest {
  type: ActionTypes.GET_CONTACT_REQUEST;
  payload?: any;
}

export interface IGetContactSuccess {
  type: ActionTypes.GET_CONTACT_SUCCESS;
  payload: IContact;
}

export interface IGetContactFailure {
  type: ActionTypes.GET_CONTACT_FAILURE;
  payload: string;
}

export type Action =
  | IGetContactsRequest
  | IGetContactsSuccess
  | IGetContactsFailure
  | IGetContactRequest
  | IGetContactSuccess
  | IGetContactFailure;
