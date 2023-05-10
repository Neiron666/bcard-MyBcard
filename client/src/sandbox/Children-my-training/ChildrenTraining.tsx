import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import NavItem from "../../layout/components/NavItem";
import { SANDBOX_ROUTES } from "../../routes/routesModel";
import { Outlet } from "react-router-dom";

const ChildrenTraining = (props: any) => {
  return (
    <>
      <AppBar position="sticky" color="transparent">
        <Toolbar>
          <NavItem label="Parent" to={SANDBOX_ROUTES.PARENT} color="blue" />
          <NavItem label="Child" to={SANDBOX_ROUTES.CHILD} color="pink" />
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default ChildrenTraining;
