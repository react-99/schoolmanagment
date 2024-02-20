import React from "react";
import AppHeader from "./AppHeader";
import AppSidebar from "./AppSidebar";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

const drawerWidth = 240;

const DashboardLayout = () => {
  return (
    <>
      <AppHeader />
      <AppSidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(97% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          mt: { xs: "70px", md: "80px" },
        }}
      >
        <Outlet />
      </Box>
    </>
  );
};

export default DashboardLayout;
