import React from "react";
import NavItem from "../../../layout/components/NavItem";
import AppBar from "@mui/material/AppBar";
import { Toolbar } from "@mui/material";
import { SANDBOX_ROUTES } from "../../../routes/routesModel";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <AppBar position="sticky" color="transparent">
        <Toolbar>
          <NavItem label="MuiBox" to={SANDBOX_ROUTES.MUI_BOX} color="black" />
          <NavItem
            label="MuiContainer"
            to={SANDBOX_ROUTES.MUICONTAINER}
            color="black"
          />
          <NavItem label="MuiGrid" to={SANDBOX_ROUTES.MUIGRID} color="black" />
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default Layout;
