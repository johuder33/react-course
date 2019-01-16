import React, { Component } from "react";
import { WithAuthChecker } from "./withAuthChecker";
import MenuAppBar from "../components/AppBar";


class LayoutApp extends Component {
  render() {
    return <MenuAppBar/>;
  }
}

const LayoutAppWithCheckerAuth = WithAuthChecker(LayoutApp);

export default LayoutAppWithCheckerAuth;
