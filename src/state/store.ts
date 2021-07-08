import { createStore, compose, applyMiddleware } from "redux";
import { createBrowserHistory } from "history";
import Thunk from "redux-thunk";
import rootReducer from "./root.reducer";

export const history = createBrowserHistory();

const middlewares = [Thunk];

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);

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
