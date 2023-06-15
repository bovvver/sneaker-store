import React from "react";
import * as ReactDOM from "react-dom/client";
import ContextProviders from "./providers/ContextProviders";
import Root from "./views/Root/Root";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <ContextProviders>
      <Root />
    </ContextProviders>
  </Router>
);
