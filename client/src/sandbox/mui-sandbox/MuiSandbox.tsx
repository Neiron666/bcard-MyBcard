import React from "react";
// import MuiButton from "./data-display/MuiButton";
// import MuiDivider from "./MuiDivider";
// import TypographyComponent from "./TypographyComponent";
// import MuiBox from "../mui-sandbox/layout/MuiBox";
// import MuiContainer from "./layout/MuiContainer";
// import MuiStack from "./layout/MuiStack";
import MuiGrid from "./layout/MuiGrid";
import MuiAppBar from "./navigations/MuiAppBar";
import MuiBottomNavigation from "./navigations/MuiBottomNavigation";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
// import NavItem from "../../routes/components/NavItem";
import { Outlet } from "react-router-dom";
import NavItem from "../../layout/components/NavItem";
import { SANDBOX_ROUTES } from "../../routes/routesModel";

const MuiSandbox = () => {
  return (
    <>
      <AppBar position="sticky" color="secondary">
        <Toolbar>
          <NavItem
            label="data-display"
            to={SANDBOX_ROUTES.DATA_DISPLAY}
            color="black"
          />
          <NavItem label="layout" to={SANDBOX_ROUTES.LAYOUT} color="black" />
          {/* <NavItem label="Divider" to="divider" sx={{ color: "black" }} /> */}
        </Toolbar>
      </AppBar>
      {/* <TypographyComponent /> */}
      {/* <MuiDivider /> */}
      {/* <MuiButton /> */}
      {/* <MuiBox /> */}
      {/* <MuiContainer /> */}
      {/* <MuiStack /> */}
      {/* <MuiGrid /> */}
      {/* <MuiAppBar /> */}
      {/* <MuiBottomNavigation />/ */}

      <Outlet />
    </>
  );
};

export default MuiSandbox;
