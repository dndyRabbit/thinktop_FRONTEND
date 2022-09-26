import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import { Collapse, ListItemButton, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import Menu from "./menu";
import { useLocation, useNavigate } from "react-router-dom";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useDispatch } from "react-redux";
import { logout } from "../../core/redux/actions/auth.action";

function DrawerApp(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const urlPath = pathname.split("/");
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const styleBoxMenu = (pathName) => {
    return {
      display: "flex",
      alignItems: "center",
      width: "100%",
      borderRadius: "10px",
      marginLeft: "2px",
      paddingLeft: 2,
      paddingRight: props.mobileOpen ? "40px" : 2,
      paddingTop: "4px",
      paddingBottom: "4px",
      backgroundColor: pathName ? "#3E79BA" : "",
    };
  };

  const openMenu = (path) => {
    handleClick();
  };

  const drawer = (
    <div>
      <Toolbar sx={{ my: props.mobileOpen ? 0 : 4 }}>
        {/* {!props.mobileOpen && <img src={AULogo.AULogo190x140} alt="au-logo" style={{ width: '100%' }} />} */}
        {props.mobileOpen && <Typography>NT</Typography>}
      </Toolbar>
      <List>
        {Menu.map((text, index) => (
          <div key={index}>
            <ListItem
              onClick={() =>
                text.children ? openMenu(text.path) : navigate(`${text.path}`)
              }
              button
              key={text.title}
              sx={{ paddingLeft: 0 }}
            >
              <Box
                component="div"
                sx={styleBoxMenu(text.parent === urlPath[2])}
              >
                <ListItemIcon>
                  {/* <img src={text.icon} alt="menu-svg" /> */}
                </ListItemIcon>
                {props.mobileOpen ? null : (
                  <ListItemText primary={text.title} />
                )}
                {text.children && (open ? <ExpandLess /> : <ExpandMore />)}
              </Box>
            </ListItem>
            {text.children && (
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {text.children.map((dataChildren, keyChildren) => (
                    <Box
                      key={keyChildren}
                      component="div"
                      onClick={() => navigate(`${dataChildren.path}`)}
                      sx={{
                        background:
                          urlPath[3] === dataChildren.parent ? "#062F5E" : "",
                      }}
                    >
                      <ListItemButton sx={{ pl: 4 }} key={keyChildren}>
                        <ListItemIcon></ListItemIcon>
                        <ListItemText primary={dataChildren.title} />
                      </ListItemButton>
                    </Box>
                  ))}
                </List>
              </Collapse>
            )}
          </div>
        ))}
        <ListItem sx={{ paddingLeft: 0, cursor: "pointer" }}>
          <Box
            component="div"
            sx={styleBoxMenu(false)}
            onClick={() => dispatch(logout())}
          >
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            {props.mobileOpen ? null : <ListItemText primary={"Logout"} />}
          </Box>
        </ListItem>
      </List>
    </div>
  );
  return (
    <Box
      component="nav"
      sx={{ width: { sm: props.drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        container={props.container}
        variant="temporary"
        open={props.mobileOpen}
        onClose={props.handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: props.drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: props.drawerWidth,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

export default DrawerApp;
