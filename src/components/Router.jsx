import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Login";
import ErrorPage from "./Error";
import LayoutApp from "./LayoutApp";

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={"/login"} component={Login} />
          <Route exact path={"/error"} component={ErrorPage} />
          <Route path={"/"} component={LayoutApp} />
        </Switch>
      </BrowserRouter>
    );
  }
}
