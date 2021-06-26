import ReactDOM from "react-dom";
import "./sass/main.scss";
import App from "./app";
import store from "./state/store";
import { Provider } from "react-redux";

const root = document.querySelector("#root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
