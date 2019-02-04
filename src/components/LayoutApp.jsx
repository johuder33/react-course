import React, { Component } from "react";
import { WithAuthChecker } from "./withAuthChecker";
import MenuAppBar from "../components/AppBar";
import { Grid } from "@material-ui/core";
import Content from "./Content";
import SideMenu from "../components/SideMenu";

class LayoutApp extends Component {
  render() {
    return (
      <Grid container>
        <Grid item xs={2} >
          <SideMenu />
        </Grid>
        <Grid item  xs={10} >
          <MenuAppBar />
          <Grid item xs={12}>
            <Content />
          </Grid>
        </Grid>
      </Grid>
    );
    // return <MenuAppBar/>;
  }
}

const LayoutAppWithCheckerAuth = WithAuthChecker(LayoutApp);

export default LayoutAppWithCheckerAuth;
