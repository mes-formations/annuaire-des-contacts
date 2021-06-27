import { combineReducers } from "redux";
import { contactsReducer } from "./contacts/contacts.reducer";

const rootReducer = combineReducers({
  contacts: contactsReducer, //Les reducers sont des fonctions
});

export default rootReducer;
