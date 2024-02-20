import { Menu } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";

const drawerWidth = 240;

const AppHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  return (
    <>
      <AppBar
        // color="secondary"
        position="fixed"
        sx={{
          backgroundColor: "secondary.dark",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <Menu color="#e3f2fd" />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Student Managment
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default AppHeader;
