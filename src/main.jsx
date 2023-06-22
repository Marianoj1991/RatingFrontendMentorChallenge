import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

import "./main.css";
import { RateContextProvider } from "./context/RateContext";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <RateContextProvider>
      <App />
    </RateContextProvider>
  </React.StrictMode>
);
