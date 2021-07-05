import { createStore, compose, applyMiddleware } from "redux";
import { createBrowserHistory } from "history";
import Thunk from "redux-thunk";
import rootReducer from "./root.reducer";
import { routerMiddleware } from "connected-react-router";

export const history = createBrowserHistory();

const store = createStore(
  rootReducer(history),
  compose(
    applyMiddleware(Thunk),
    routerMiddleware(history),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
