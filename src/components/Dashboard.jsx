import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Search from "./Search";
import Listhero from "./List";


export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Grid container xs={12}>
          <Grid item xs={12}>
            <Search />
          </Grid>
          <Grid item xs={12}>
            <Listhero/>
          </Grid>
          <Grid item xs={12}>

          </Grid>
        </Grid>


      </div>
    );
  }
}
