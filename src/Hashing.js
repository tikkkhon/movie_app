import React from "react";
import { HashRouter, Route } from "react-router-dom";
import App from "./App";

function Hashing() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={App} />
    </HashRouter>
  );
}

export default Hashing;