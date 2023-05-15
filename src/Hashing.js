import React from "react";
import { HashRouter, Route } from "react-router-dom";
import FilmPage from "./FilmPage";
import App from "./App";

function Hashing() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={App} />
      <Route path="/film-page" component={FilmPage} />
    </HashRouter>
  );
}

export default Hashing;