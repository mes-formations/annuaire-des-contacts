import { combineReducers } from "redux";
import { contactsReducer } from "./contacts/contacts.reducer";
import { apiLoadingReducer } from "./api/api-loading-reducer";
import { apiErrorReducer } from "./api/api-error-reducer";
import { formReducer } from "./contact-form/form.reducer";

// The following 2 lines are needed to delete data from HashMap usinf immer
import { enableMapSet } from "immer";

enableMapSet();

const rootReducer = combineReducers({
  contacts: contactsReducer,
  apiLoading: apiLoadingReducer,
  apiError: apiErrorReducer,
  form: formReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
