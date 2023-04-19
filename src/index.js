import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // hide strict mode tags to prevent double rendering
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
