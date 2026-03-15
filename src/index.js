import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import './assets/scss/main.scss';
import App from "./containers/App";
import store from "./store";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
