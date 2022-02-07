import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HashRouter } from "react-router-dom";
import Lang from "./lang/Lang";

ReactDOM.render(
  <HashRouter>
    <Lang>
      <App />
    </Lang>
  </HashRouter>,
  document.getElementById("root")
);
