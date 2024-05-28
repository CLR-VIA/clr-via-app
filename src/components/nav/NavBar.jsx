import React from 'react';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { Drawer, List, ListItem, ListItemText, ListItemButton } from "@mui/material";
import { Link } from "react-router-dom";
import logo from '../../assets/clr-via.webp';
import HomeButton from '../HomeButton';

const Navbar = () => {
  // State to manage the menu anchor element
  const [anchorEl, setAnchorEl] = React.useState(null);
  // State to manage the drawer open state
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  // Handler to open the menu
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Handler to close the menu
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Handler to toggle the drawer
  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    // AppBar component to create a fixed navigation bar
    <AppBar position="static" sx={{ width: "100%" }}>
      <Toolbar>
        {/* Menu icon for small screens */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        {/* Drawer for side navigation */}
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              <ListItemButton component={Link} to="/login">
                <ListItemText primary="Login" />
              </ListItemButton>
              <ListItemButton component={Link} to="/register">
                <ListItemText primary="Sign-up" />
              </ListItemButton>
            </List>
          </Box>
        </Drawer>
        {/* Container for logo / title with flex display */}
        <Box display="flex" alignItems="center" flexGrow={1}>
          <HomeButton/> {/* TODO: Fix this, it is not centered */}
          {/* Title */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CLR VIA
          </Typography>
          {/* Navigation buttons (hidden on small screens) */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button color="inherit" component={Link} to="/login">Login</Button>
            <Button color="inherit" component={Link} to="/register">Sign-up</Button>
          </Box>
        </Box>
        {/* Responsive menu */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} component={Link} to="/login">Login</MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/register">Sign-up</MenuItem>
          </Menu>
        </Box>
        {/* Avatar (might not use) */}
        <IconButton color="inherit">
          <Avatar alt="Profile Picture" src="/path/to/profile.jpg" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
