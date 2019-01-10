import React, { Component } from "react";
import { Grid, TextField, Paper, Button } from "@material-ui/core";
import { WithAuthChecker } from "./withAuthChecker";

class Login extends Component {
  state = {
    username: "",
    password: "",
    logging: false,
    error: ""
  };

  makeLogin = () => {
    this.setState({ error: "" });
    const { username, password } = this.state;

    if (username === "user" && password === "pass") {
      this.setState({ logging: true }, () => {
        setTimeout(() => {
          this.setState({ logging: false });
        }, 3000);
      });
      return;
    }

    this.setState({ error: "usuario incorrecto" });
  };

  onChange = event => {
    const { target } = event;
    const { name, value } = target;
    const st = { [name]: value };
    this.setState(st);
  };

  render() {
    const { error, logging, username, password } = this.state;
    return (
      <Grid
        container
        justify={"center"}
        alignItems={"center"}
        className={"containerLogin"}
      >
        <Grid item style={{ maxWidth: 250, width: "100%" }}>
          <Paper style={{ padding: 10 }}>
            <TextField
              onChange={this.onChange}
              name={"username"}
              placeholder={"Usuario"}
              fullWidth
              value={username}
            />
            <br />
            <br />
            <TextField
              onChange={this.onChange}
              name={"password"}
              placeholder={"Contrasela"}
              type={"password"}
              fullWidth
              value={password}
            />
            <br />
            <br />
            <Button fullWidth color={"primary"} onClick={this.makeLogin}>
              Iniciar Sesión
            </Button>
            {error && <div style={{ color: "red" }}>{error}</div>}
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

const LoginWithAuthChecker = WithAuthChecker(Login, true);

export default LoginWithAuthChecker;
