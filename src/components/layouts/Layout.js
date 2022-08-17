import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import ThemeConfig from "../../core/theme";
import Navbar from "./Navbar";
import DrawerApp from "./Drawer";
import useDrawer from "../../core/hooks/useDrawer";

function Layout (props) {
  const { container, drawerWidth, mobileOpen, handleDrawerToggle } =
    useDrawer(props);
  return (
    <ThemeProvider theme={ThemeConfig}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Navbar
          mobileOpen={mobileOpen}
          drawerWidth={mobileOpen ? 60 : drawerWidth}
          handleDrawerToggle={handleDrawerToggle}
        />
        <DrawerApp
          drawerWidth={mobileOpen ? 60 : drawerWidth}
          container={container}
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
        <Box
          component="main"
          sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          <Toolbar />
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  )
};

export default Layout;