/* eslint-disable import/no-extraneous-dependencies */
import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./mediaQueries.css";
import { Provider } from "react-redux";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
