import React, { Component } from "react";
import { WithAuthChecker } from "./withAuthChecker";

class LayoutApp extends Component {
  render() {
    return <div>Ya estas dentro de la app</div>;
  }
}

const LayoutAppWithCheckerAuth = WithAuthChecker(LayoutApp);

export default LayoutAppWithCheckerAuth;
