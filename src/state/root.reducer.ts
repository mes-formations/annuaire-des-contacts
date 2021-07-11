import { combineReducers } from "redux";
import { contactsReducer } from "./contacts/contacts.reducer";
import { apiLoadingReducer } from "./api/api-loading-reducer";
import { apiErrorReducer } from "./api/api-error-reducer";
import { formReducer } from "./contact-form/form.reducer";

const rootReducer = combineReducers({
  contacts: contactsReducer,
  apiLoading: apiLoadingReducer,
  apiError: apiErrorReducer,
  form: formReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
