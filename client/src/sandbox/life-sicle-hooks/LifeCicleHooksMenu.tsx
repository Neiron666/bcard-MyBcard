import { AppBar, IconButton } from "@mui/material";
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const LifeCicleHooksMenu = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <AppBar position="sticky" color="transparent">
        <IconButton
          onClick={() => setOpen(true)}
          sx={{ display: { xs: "inline-flex", md: "none" } }}
        >
          <ExpandMoreIcon />
        </IconButton>
      </AppBar>
    </div>
  );
};

export default LifeCicleHooksMenu;
