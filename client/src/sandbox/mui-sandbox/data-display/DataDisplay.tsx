import React from "react";
import NavItem from "../../../layout/components/NavItem";
import AppBar from "@mui/material/AppBar";
import { Toolbar } from "@mui/material";
import { SANDBOX_ROUTES } from "../../../routes/routesModel";
import { Outlet } from "react-router-dom";

const DataDisplay = () => {
  return (
    <>
      <AppBar position="sticky" color="transparent">
        <Toolbar>
          <NavItem
            label="Mui Button"
            to={SANDBOX_ROUTES.MUI_BUTTON}
            color="black"
          />
          <NavItem
            label="Mui Divider"
            to={SANDBOX_ROUTES.MUI_DIVIDER}
            color="black"
          />
          <NavItem
            label="Mui Typography"
            to={SANDBOX_ROUTES.MUI_TYPOGRAPHY}
            color="black"
          />
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default DataDisplay;
