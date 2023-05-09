import React from "react";
import AppBar from "@mui/material/AppBar";
import { Toolbar } from "@mui/material";
import NavItem from "../layout/components/NavItem";
import { SANDBOX_ROUTES } from "../routes/routesModel";
import { Outlet } from "react-router-dom";

const SandboxMenu = () => {
  return (
    <>
      <AppBar position="sticky" color="transparent">
        <Toolbar>
          <NavItem
            label="component"
            to={SANDBOX_ROUTES.COMPONENT}
            color="black"
          />
          <NavItem
            label="conditionalRendering"
            to={SANDBOX_ROUTES.CONDITIONALRENDERING}
            color="black"
          />
          <NavItem label="events" to={SANDBOX_ROUTES.EVENTS} color="black" />
          <NavItem
            label="introduction"
            to={SANDBOX_ROUTES.INTRODUCTION}
            color="black"
          />
          <NavItem
            label="iterations"
            to={SANDBOX_ROUTES.ITERATIONS}
            color="black"
          />
          <NavItem
            label="mui-sandbox"
            to={SANDBOX_ROUTES.MUI_SANDBOX}
            color="black"
          />
          <NavItem
            label="LifecycleExe"
            to={SANDBOX_ROUTES.LIFECYCLEEXE}
            color="black"
          />
        </Toolbar>
      </AppBar>

      <Outlet />
    </>
  );
};

export default SandboxMenu;
