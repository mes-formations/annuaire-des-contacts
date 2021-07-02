import { combineReducers } from "redux";
import { contactsReducer } from "./contacts/contacts.reducer";
import { apiLoadingReducer } from "./api/api-loading-reducer";
import { apiErrorReducer } from "./api/api-error-reducer";

const rootReducer = combineReducers({
  contacts: contactsReducer, //Les reducers sont des fonctions
  apiLoading: apiLoadingReducer,
  apiError: apiErrorReducer,
});

export default rootReducer;
