import { IContact } from "../../interfaces/i-contact";
import { ActionTypes } from "./contacts.action-types";

/**
 *  GET /contacts
 */
export interface IGetContactsRequest {
  type: ActionTypes.GET_CONTACTS_REQUEST;
}

export interface IGetContactsSuccess {
  type: ActionTypes.GET_CONTACTS_SUCESS;
  payload: IContact[];
}

export interface IGetContactsFailure {
  type: ActionTypes.GET_CONTACTS_FAILURE;
  payload: string;
}

export type Action =
  | IGetContactsRequest
  | IGetContactsSuccess
  | IGetContactsFailure;
