import { ActionTypes } from "./contacts.action-types";
import { ActionTypes as FormActionTypes } from "../contact-form/form.action-types";
import { IContact, IContactResponse } from "../../interfaces/i-contact";
import { Dispatch } from "redux";
import ContactsAPI from "../../configs/contact.api";
import { Action as ContactsActions } from "./contacts.actions";
import { Action as FormActions } from "../contact-form/form.actions";
import axios from "axios";
import { mapKeys } from "../../utils/map-keys";
import { history } from "../store";

// GET /api/contacts
export const getContacts = () => {
  return async (dispatch: Dispatch<ContactsActions>) => {
    dispatch({ type: ActionTypes.GET_CONTACTS_REQUEST });
    try {
      const contacts = await ContactsAPI.get<IContactResponse[]>("/").then(
        (res) => res.data
      );

      dispatch({
        type: ActionTypes.GET_CONTACTS_SUCESS,
        payload: mapKeys<string, IContactResponse>(
          contacts,
          (normalized, item) => {
            normalized.set(item.id, item);
          }
        ),
      });
    } catch (err) {
      if (axios.isAxiosError(err)) {
        dispatch({
          type: ActionTypes.GET_CONTACTS_FAILURE,
          payload: err.message,
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
      const contact = await ContactsAPI.get<IContactResponse>("/" + id).then(
        (res) => res.data
      );
      dispatch({ type: ActionTypes.GET_CONTACT_SUCCESS, payload: contact });
    } catch (err) {
      if (axios.isAxiosError(err)) {
        dispatch({
          type: ActionTypes.GET_CONTACT_FAILURE,
          payload: err.message,
        });
      } else {
        dispatch({ type: ActionTypes.GET_CONTACT_FAILURE, payload: "Erreur" });
      }
    }
  };
};

// GET /api/contacts/:id
export const deleteContact = (id: string) => {
  return async (dispatch: Dispatch<ContactsActions | any>) => {
    try {
      dispatch({ type: ActionTypes.DELETE_CONTACT_REQUEST });
      await ContactsAPI.delete("/" + id);
      // if(res.status>=200 || res.status<300){
      //   dispatch
      // }
      dispatch({ type: ActionTypes.DELETE_CONTACT_SUCCESS, payload: { id } });
      history.push("/contacts");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        dispatch({
          type: ActionTypes.DELETE_CONTACT_FAILURE,
          payload: err.message,
        });
      } else {
        dispatch({
          type: ActionTypes.DELETE_CONTACT_FAILURE,
          payload: "Erreur",
        });
      }
    }
  };
};

// POST /api/contacts
export const createContact = (contact: IContact) => {
  return async (dispatch: Dispatch<ContactsActions | FormActions>) => {
    try {
      dispatch({ type: ActionTypes.CREATE_CONTACT_REQUEST });
      const res = await ContactsAPI.post<IContactResponse>("/", contact);
      dispatch({ type: ActionTypes.CREATE_CONTACT_SUCCESS, payload: res });
      dispatch({ type: FormActionTypes.RESET_CONTACT_FORM });
      history.push("/contacts");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        dispatch({
          type: ActionTypes.CREATE_CONTACT_FAILURE,
          payload: err.message,
        });
      } else {
        dispatch({
          type: ActionTypes.CREATE_CONTACT_FAILURE,
          payload: "Erreur",
        });
      }
    }
  };
};

//PUT /api/contacts/:id
export const updateContact = (id: string, contact: IContact) => {
  return async (dispatch: Dispatch<ContactsActions | FormActions>) => {
    try {
      dispatch({ type: ActionTypes.UPDATE_CONTACT_REQUEST });
      const res = await ContactsAPI.put<IContactResponse>("/" + id, contact);
      dispatch({ type: ActionTypes.UPDATE_CONTACT_SUCCESS, payload: res });
      dispatch({ type: FormActionTypes.RESET_CONTACT_FORM });
      history.push("/contacts");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        dispatch({
          type: ActionTypes.UPDATE_CONTACT_FAILURE,
          payload: err.message,
        });
      } else {
        dispatch({
          type: ActionTypes.UPDATE_CONTACT_FAILURE,
          payload: "Erreur",
        });
      }
    }
  };
};
