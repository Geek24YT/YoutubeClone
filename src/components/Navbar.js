import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import MenuIcon from "@mui/icons-material/Menu";
import navlogo from "../images/nav-logo.png";

import { IconButton, InputBase, Paper } from "@mui/material";
import { Search } from "@mui/icons-material";
import MicIcon from "@mui/icons-material/Mic";
import { display, styled } from "@mui/system";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Avatar from "@mui/material/Avatar";
function Navbar() {
  //   const theme = useTheme();

  const BorderDiv = styled("div")({
    borderTop: "0",
    borderLeft: "0",
    borderBottom: "0",
    borderRight: "1px solid gray",
    height: "40px",
    marginRight: "4px",
  });

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <nav
        className="nav-bar"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ flex: 1, display: "flex" }}>
          <Button
            onClick={toggleDrawer("left", true)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "15px 2px 15px 15px", // Less padding to the right
            }}
          >
            <MenuIcon fontSize="medium" style={{ color: "#fff" }} />
          </Button>
          <img
            src={navlogo}
            style={{
              width: "125px",
              height: "70px",
              marginLeft: "-5px",
            }}
          />
        </div>
        <div style={{ display: "flex", flex: 2 }}>
          <Paper
            component="form"
            sx={{
              p: "0px 2px",
              display: "flex",
              flex: 1,
              alignItems: "center",
              width: "100%",
              height: "40px",
              borderRadius: 50,
              border: "1px solid gray",
              background: "black",
            }}
          >
            <InputBase
              className="nav-search"
              sx={{ ml: 2, flex: 1, color: "white", fontWeight: 500 }}
              placeholder="Search"
              inputProps={{ "aria-label": "search google maps" }}
            />
            <BorderDiv />
            <IconButton sx={{ p: "10px" }} aria-label="search">
              <Search style={{ color: "white" }} />
            </IconButton>
          </Paper>
          <IconButton sx={{ backgroundColor: "#2b2b2b", ml: 2 }}>
            <MicIcon style={{ color: "white" }} />
          </IconButton>
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <IconButton>
            <VideoCallOutlinedIcon
              sx={{ mr: "10px" }}
              style={{ color: "white" }}
            />
          </IconButton>
          <IconButton>
            <NotificationsNoneOutlinedIcon
              sx={{ mr: "10px" }}
              style={{ color: "white" }}
            />
          </IconButton>

          <Avatar sx={{ mr: "10px" }} alt="Remy Sharp" />
        </div>
        <Drawer
          anchor="left"
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </nav>
    </div>
  );
}

export default Navbar;
