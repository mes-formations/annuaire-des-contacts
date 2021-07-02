import { combineReducers } from "redux";
import { contactsReducer } from "./contacts/contacts.reducer";
import { loadingReducer } from "./api/api-loading";

const rootReducer = combineReducers({
  contacts: contactsReducer, //Les reducers sont des fonctions
  apiLoading: loadingReducer,
});

export default rootReducer;
