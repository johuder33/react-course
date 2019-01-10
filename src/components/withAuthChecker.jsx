import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import SessionManager from "../services/Storage";

export const WithAuthChecker = (WrapComponent, isLogin = false) => props => {
  if (!SessionManager.isLogged() && !isLogin) {
    return <Redirect to={"/login"} />;
  }

  if (isLogin && SessionManager.isLogged()) {
    return <Redirect to={"/"} />;
  }

  return <WrapComponent {...props} />;
};
