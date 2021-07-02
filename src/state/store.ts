import { createStore, compose, applyMiddleware } from "redux";
import Thunk from "redux-thunk";
import rootReducer from "./root.reducer";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(Thunk)
    /*(window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()*/
  )
);

export default store;
