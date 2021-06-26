import { combineReducers } from "redux";

const rootReducer = combineReducers({
  test: () => ["Christian", "Jean", "Alain", "Victor"], //Les reducers sont des fonctions
});

export default rootReducer;
