import React from "react";
import ReactDOM from "react-dom/client";

//Import CSS stylesheet
import "./styles/elements/base.css";
import "./styles/settings/colors.css";

import App from "../src/components/App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
