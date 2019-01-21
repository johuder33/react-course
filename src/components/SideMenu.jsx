import React, { Component } from "react";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";

export default class SideMenu extends Component {
  render() {
    return (
      <MenuList>
        <MenuItem>Dashboard</MenuItem>
        <MenuItem>Usuarios</MenuItem>
        <MenuItem>Configuraciones</MenuItem>
      </MenuList>
    );
  }
}
