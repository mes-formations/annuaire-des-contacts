import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getContactByID,
  getContacts,
} from "../state/contacts/contacts.action-creators";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators({ getContacts, getContactByID }, dispatch);
};
