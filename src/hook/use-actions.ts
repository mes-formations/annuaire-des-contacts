import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getContactByID,
  getContacts,
  deleteContact,
  createContact,
} from "../state/contacts/contacts.action-creators";

import {
  updateContactForm,
  populateEditForm,
} from "../state/contact-form/form.action-creator";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(
    {
      getContacts,
      getContactByID,
      deleteContact,
      createContact,
      updateContactForm,
      populateEditForm,
    },
    dispatch
  );
};
