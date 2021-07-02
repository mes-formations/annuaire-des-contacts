import { ActionTypes } from "./contacts.action-types";
import { IContact } from "../../interfaces/i-contact";
import { Dispatch } from "redux";
import ContactsAPI from "../../configs/contact.api";
import { Action as ContactsActions } from "./contacts.actions";
import axios, { AxiosError } from "axios";
import { mapKeys } from "../../utils/map-keys";

// GET /api/contacts
export const getContacts = () => {
  return async (dispatch: Dispatch<ContactsActions>) => {
    dispatch({ type: ActionTypes.GET_CONTACTS_REQUEST });
    try {
      const contacts = await ContactsAPI.get<IContact[]>("/").then(
        (res) => res.data
      );

      dispatch({
        type: ActionTypes.GET_CONTACTS_SUCESS,
        payload: mapKeys<string, IContact>(contacts, (normalized, item) => {
          normalized.set(item.id, item);
        }),
      });
    } catch (err: AxiosError | any) {
      if (axios.isAxiosError(err)) {
        dispatch({
          type: ActionTypes.GET_CONTACTS_FAILURE,
          payload: err.response?.data,
        });
      } else {
        dispatch({ type: ActionTypes.GET_CONTACTS_FAILURE, payload: "Erreur" });
      }
    }
  };
};

// GET /api/contacts/:id
export const getContactByID = (id: string) => {
  return async (dispatch: Dispatch<ContactsActions>) => {
    try {
      dispatch({ type: ActionTypes.GET_CONTACT_REQUEST });
      const contact = await ContactsAPI.get<IContact>("/" + id).then(
        (res) => res.data
      );
      dispatch({ type: ActionTypes.GET_CONTACT_SUCCESS, payload: contact });
    } catch (err: AxiosError | any) {
      if (axios.isAxiosError(err)) {
        dispatch({
          type: ActionTypes.GET_CONTACTS_FAILURE,
          payload: err.response?.data,
        });
      } else {
        dispatch({ type: ActionTypes.GET_CONTACTS_FAILURE, payload: "Erreur" });
      }
    }
  };
};
