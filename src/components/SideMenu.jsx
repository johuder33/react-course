import React, { Component } from "react";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import Logo from "./Logo";

export default class SideMenu extends Component {
  render() {
    return (
      <div>
        <Logo />
        <MenuList xs={12}>
          <MenuItem>Dashboard</MenuItem>
          <MenuItem>Usuarios</MenuItem>
          <MenuItem>Configuraciones</MenuItem>
        </MenuList>
      </div>

    );
  }
}
