import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getContactByID,
  getContacts,
  deleteContact,
} from "../state/contacts/contacts.action-creators";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(
    { getContacts, getContactByID, deleteContact },
    dispatch
  );
};
