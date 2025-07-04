import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter } from "react-router-dom";
import "./index.scss";

// Create root with error handling
const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error("Failed to find the root element");
} else {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      {/* <HashRouter> */}
        <App />
      {/* </HashRouter> */}
    </React.StrictMode>
  );
}