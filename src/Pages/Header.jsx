import { TwoWheeler } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./header.css";
const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const drawerHandler = (e) => {
    setOpenDrawer(true);
  };

  return (
    <div>
      <AppBar component={"nav"} sx={{ backgroundColor: "black" }}>
        <Toolbar sx={{ display: "flex" }}>
          <Typography
            variant="h5"
            component="div"
            sx={{
              display: { xs: "none", sm: "flex", fontWeight: 700 },
              flexGrow: 1,
              color: "white",
              ml: 3,
            }}
          >
            <TwoWheeler sx={{ fontSize: "30px", color: "#ffdb58", mr: 1 }} />
            Bike Ride
          </Typography>

          <Box sx={{ mr: 5, display: { xs: "none", sm: "block" } }}>
            <ul className="navbar">
              <li className="navbar_item">
                <Link to="/" sx={{display:'flex', justifyContent:'center'}}>Home</Link>
              </li>
              <li className="navbar_item">
                <Link to="/about">About</Link>
              </li>
              <li className="navbar_item">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="navbar_item">
                <Link to="/projects">Projects</Link>
              </li>
            </ul>
          </Box>

          <IconButton
            sx={{ color: "white", display: { xs: "block", sm: "none" } }}
            onClick={drawerHandler}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h5"
            component="div"
            sx={{
              display: { xs: "flex", sm: "none", fontWeight: 700 },
              flexGrow: 1,
              color: "white",
            }}
          >
            <TwoWheeler sx={{ fontSize: "30px", color: "#ffdb58", mr: 1 }} />
            Bike Ride
          </Typography>

          <Drawer open={openDrawer} sx={{ display: { sm: "none" } }}>
            <Typography
              variant="h4"
              component="div"
              sx={{
                display: { xs: "flex", sm: "none" },
                fontWeight: 500,
                padding: "8px",
                color: "white",
                justifyContent: "center",
                backgroundColor: "black",
              }}
            >
              <TwoWheeler sx={{ fontSize: "40px", color: "#ffdb58", mr: 1 }} />
              Bike Ride
            </Typography>

            <List
              sx={{ listStyle: "none", textDecoration: "none" }}
              className="drawer_list"
            >
              <ListItem className="drawer_list_item" disablePadding>
                <ListItemButton
                  className="list_menu_btn"
                  onClick={(e) => setOpenDrawer(false)}
                >
                  <ListItemText className="list_item_text">
                    <Link className="list_item_text_link" to="/">
                    
                      Home
                    </Link>
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem className="drawer_list_item">
                <ListItemButton
                  className="list_menu_btn"
                  onClick={(e) => setOpenDrawer(false)}
                >
                  <ListItemText>
                    <Link to={"/about"}>About</Link>
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem className="drawer_list_item">
                <ListItemButton
                  className="list_menu_btn"
                  onClick={(e) => setOpenDrawer(false)}
                >
                  <ListItemText>
                    <Link to={"/contact"}> Contact</Link>
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem className="drawer_list_item">
                <ListItemButton
                  className="list_menu_btn"
                  onClick={(e) => setOpenDrawer(false)}
                >
                  <ListItemText>
                    <Link to={"/projects"}>Projects</Link>
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              <Divider />
            </List>
          </Drawer>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Outlet />
    </div>
  );
};

export default Header;
