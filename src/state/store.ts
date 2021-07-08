import { createStore, compose, applyMiddleware } from "redux";
import { createBrowserHistory } from "history";
import Thunk from "redux-thunk";
import rootReducer from "./root.reducer";
import { ActionTypes } from "./contacts/contacts.action-types";

export const history = createBrowserHistory();

const middlewares = [Thunk];

// Simple configuration
// if (process.env.NODE_ENV === "development") {
//   const { logger } = require("redux-logger");

//   middlewares.push(logger);
// }

if (process.env.NODE_ENV === "development") {
  const { createLogger } = require("redux-logger");
  const logger = createLogger({
    duration: true,
    diff: true,
    predicate: (getState: any, action: any) =>
      action.type !== ActionTypes.GET_CONTACTS_REQUEST, //Action à ne pass logger
  });
  middlewares.push(logger);
}

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middlewares),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
(window as any).store = store;
