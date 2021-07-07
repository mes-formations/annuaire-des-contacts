import ReactDOM from "react-dom";
import "./sass/main.scss";
import App from "./app";
import store from "./state/store";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { history } from "./state/store";

const root = document.querySelector("#root");
ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  root
);
