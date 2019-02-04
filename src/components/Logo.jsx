import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";


export default class Logo extends Component {

    render() {
        return (
            <Grid container justify="center" alignItems="center">
                <img alt="Marvel Comm" src="https://media.vandalimg.com/common/640x360/200838182.jpg" className="logo-marvel" />
            </Grid>
        );
    }
}