import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import jwt from "jsonwebtoken";

import store from "./store";

import App from "./App";

import "semantic-ui-css/semantic.min.css";
import "./styles.css";

import { login } from "./actions/auth";

import registerServiceWorker from "./registerServiceWorker";
import { albumsAPI } from "./actions/albums";

if (localStorage.token) {
  const payload = jwt.decode(localStorage.token);
  const user = payload.token;
  store.dispatch(albumsAPI(user));
  store.dispatch(login(user));
}

store.subscribe(() => console.log("Store changed", store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
