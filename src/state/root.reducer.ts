import { combineReducers } from "redux";
import { contactsReducer } from "./contacts/contacts.reducer";
import { loadingReducer } from "./api/ui-reducer";
import { contactReducer } from "./contacts/contact.reducer";

const rootReducer = combineReducers({
  contacts: contactsReducer, //Les reducers sont des fonctions
  isFetching: loadingReducer,
  oneContact: contactReducer,
});

export default rootReducer;
