import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./styles/elements/base.css";
import "./styles/settings/colors.css";
import "./styles/settings/sizing.css";
import "./styles/settings/mediaqueries.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
