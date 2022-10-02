import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import { Outlet, useNavigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import ThemeConfig from "../../core/theme";
import Navbar from "./Navbar";
import DrawerApp from "./Drawer";
import useDrawer from "../../core/hooks/useDrawer";
import { useDispatch, useSelector } from "react-redux";
import { getAkun } from "../../core/redux/actions/akun.action";
import { getProduct } from "../../core/redux/actions/product.action";

function Layout(props) {
  const { container, drawerWidth, mobileOpen, handleDrawerToggle } =
    useDrawer(props);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { auth } = useSelector((state) => state);

  React.useEffect(() => {
    // dispatch(getAkun({ token: `bearer ${auth?.auth?.access_token}` }));
    dispatch(getAkun());
    dispatch(getProduct());
  }, [auth?.auth?.access_token]);

  // React.useEffect(() => {
  //   if (!auth.auth.access_token) {
  //     navigate("/login");
  //   } else {
  //     navigate("/");
  //   }
  // }, [auth.auth.access_token]);

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
  );
}

export default Layout;
