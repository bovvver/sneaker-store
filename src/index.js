import React from "react";
import * as ReactDOM from "react-dom/client";
import ContextProviders from "./providers/ContextProviders";
import Root from "./views/Root/Root";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ContextProviders>
    <Root />
  </ContextProviders>
);
