import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Login";
import ErrorPage from "./Error";
import LayoutApp from "./LayoutApp";
import { Provider } from "react-redux";
import { configStore } from "../store";

const store = configStore();

export default class Router extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path={"/login"} component={Login} />
            <Route exact path={"/error"} component={ErrorPage} />
            <Route path={"/"} component={LayoutApp} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}
