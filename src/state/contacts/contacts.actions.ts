import { IContactResponse } from "../../interfaces/i-contact";
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
  payload: Map<string, IContactResponse>;
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
  payload: IContactResponse;
}

export interface IGetContactFailure {
  type: ActionTypes.GET_CONTACT_FAILURE;
  payload: string;
}

// DELETE /api/contacts/:id
export interface IDeleteContactRequest {
  type: ActionTypes.DELETE_CONTACT_REQUEST;
}

export interface IDeleteContactSuccess {
  type: ActionTypes.DELETE_CONTACT_SUCCESS;
  payload: { id: string }; //With this id i'll delete the ressource locally
}

export interface IDeleteContactFailure {
  type: ActionTypes.DELETE_CONTACT_FAILURE;
  payload: string;
}

//POST /api/contacts
export interface IPostContactRequest {
  type: ActionTypes.CREATE_CONTACT_REQUEST;
}

export interface IPostContactSuccess {
  type: ActionTypes.CREATE_CONTACT_SUCCESS;
  payload: any; //TODO : A revoir quelle information on doit renvoyée
}

export interface IPostContactFailure {
  type: ActionTypes.CREATE_CONTACT_FAILURE;
  payload: string;
}

export type Action =
  | IGetContactsRequest
  | IGetContactsSuccess
  | IGetContactsFailure
  | IGetContactRequest
  | IGetContactSuccess
  | IGetContactFailure
  | IDeleteContactRequest
  | IDeleteContactSuccess
  | IDeleteContactFailure
  | IPostContactRequest
  | IPostContactSuccess
  | IPostContactFailure;
