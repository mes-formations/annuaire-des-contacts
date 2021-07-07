import { createStore, compose, applyMiddleware } from "redux";
import { createBrowserHistory } from "history";
import Thunk from "redux-thunk";
import rootReducer from "./root.reducer";

export const history = createBrowserHistory();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(Thunk),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
(window as any).store = store;
