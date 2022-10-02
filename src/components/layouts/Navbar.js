import * as React from "react";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Avatar, Box, Tooltip } from "@mui/material";
import { useSelector } from "react-redux";
// import DefaultProfiles from "../../../assets/img/default-profiles.png";

function Navbar(props) {
  const { auth } = useSelector((state) => state);

  return (
    <AppBar
      color="appbarColor"
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${props.drawerWidth}px)` },
        ml: { sm: `${props.drawerWidth}px` },
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={props.handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Typography variant="h6" noWrap component="div">
            {auth?.auth?.data?.role === 2 ? "ADMIN" : "PEGAWAI"}
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
          <Tooltip title="See Profiles">
            <Box
              sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
            >
              {/* <Avatar alt="Remy Sharp" src={DefaultProfiles} /> */}
              <Box sx={{ ml: 1 }}>
                <Box component="h5" sx={{ my: 0 }}>
                  {auth?.auth?.data?.full_name}
                </Box>
                <Box component="span">
                  {auth?.auth?.data?.role === 2 ? "ADMIN" : "PEGAWAI"}
                </Box>
              </Box>
            </Box>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
