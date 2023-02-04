import { Box, Container, CssBaseline, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "./main/navbar";
import Drawer from "./main/drawer";
import useDrawer from "../../hooks/useDrawer";

function Layouts(props) {
  const { container, drawerWidth, mobileOpen, handleDrawerToggle } =
    useDrawer(props);
  return (
    <Box sx={{display: 'flex'}}>
      <CssBaseline />
      <Navbar 
        mobileOpen={mobileOpen}
        drawerWidth={mobileOpen ? 60 : drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Drawer
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
        <Container sx={{pt: 2}}>
          <Outlet />
        </Container>
      </Box>
    </Box>
  )
};

export default Layouts;