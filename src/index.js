import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Present21 from "./Present21";
import Present22 from "./Present22";
import Present23 from "./Present23";
import Present24 from "./Present24";
import * as serviceWorker from "./serviceWorker";

import { Switch, BrowserRouter, Route } from "react-router-dom";

var style = { backgroundColor: "#f6f6f6", width: "100%", height: "100%" };

ReactDOM.render(
  <div style={style}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/present21" component={Present21} />
        <Route exact path="/present22" component={Present22} />
        <Route exact path="/present24" component={Present24} />
        <Route exact path="/present23" component={Present23} />
      </Switch>
    </BrowserRouter>
  </div>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
