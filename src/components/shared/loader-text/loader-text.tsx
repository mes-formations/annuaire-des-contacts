import { ActionTypes } from "../../../state/contacts/contacts.action-types";
import "./style.scss";

interface LoaderText {
  message: string;
  action: ActionTypes;
}

export const LoaderText: React.FC<LoaderText> = ({ message, action }) => {
  const setActionClass = (actionType: ActionTypes) => {
    if (
      actionType === ActionTypes.GET_CONTACTS ||
      actionType === ActionTypes.GET_CONTACT
    ) {
      return "primary";
    } else if (actionType === ActionTypes.DELETE_CONTACT) {
      return "danger";
    }
  };
  return <div className={`toast ${setActionClass(action)}`}>{message}...</div>;
};
