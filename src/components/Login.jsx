import React, { Component } from "react";
import {
  Grid,
  TextField,
  Paper,
  Button,
  CircularProgress
} from "@material-ui/core";
import SessionManager from "../services/Storage";
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
    const { history } = this.props;

    if (username === "user" && password === "pass") {
      this.setState({ logging: true }, () => {
        setTimeout(() => {
          this.setState({ logging: false }, () => {
            SessionManager.setSession("my-token");
            history.push("/");
          });
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
    console.log(this.props);
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
              placeholder={"Contraseña"}
              type={"password"}
              fullWidth
              value={password}
            />
            <br />
            <br />
            <Button fullWidth color={"primary"} onClick={this.makeLogin}>
              Iniciar Sesión
              {logging && <CircularProgress />}
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
