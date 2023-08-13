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

import { IconButton, InputBase, Paper, Tooltip } from "@mui/material";
import { Search } from "@mui/icons-material";
import MicIcon from "@mui/icons-material/Mic";
import { display, styled } from "@mui/system";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
function TempNav() {
  //   const theme = useTheme();

  const BorderDiv = styled("div")({
    borderTop: "0",
    borderLeft: "0",
    borderBottom: "0",
    borderRight: "1px solid #222222",
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
          <ListItem key={text} disablePadding sx={{ width: "200px", ml: 2 }}>
            <ListItemButton
              sx={{
                "&:hover": { backgroundColor: "#272727" },
                borderRadius: "10px",
              }}
            >
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <InboxIcon sx={{ color: "white" }} />
                ) : (
                  <MailIcon sx={{ color: "white" }} />
                )}
              </ListItemIcon>
              <ListItemText
                primary={text}
                primaryTypographyProps={{ style: { color: "white" } }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />{" "}
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
          <Link to="/">
            <img
              src={navlogo}
              style={{
                width: "125px",
                height: "70px",
                marginLeft: "-5px",
              }}
            />
          </Link>
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
              border: "1.5px solid #222222",
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
          <IconButton
            sx={{
              backgroundColor: "#272727",
              ml: 2,
              "&:hover": { backgroundColor: "#3C3C3C" },
            }}
          >
            <Tooltip title="Search with your audio">
              <MicIcon style={{ color: "white" }} />
            </Tooltip>
          </IconButton>
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Tooltip title="Create">
            <IconButton
              sx={{
                backgroundColor: "back",
                mr: "10px",
                "&:hover": { backgroundColor: "#272727" },
              }}
            >
              <VideoCallOutlinedIcon style={{ color: "white" }} />
            </IconButton>
          </Tooltip>

          <Tooltip title="Notifications">
            <IconButton
              sx={{
                backgroundColor: "back",
                mr: "20px",
                "&:hover": { backgroundColor: "#272727" },
              }}
            >
              <NotificationsNoneOutlinedIcon style={{ color: "white" }} />
            </IconButton>
          </Tooltip>
          <Avatar sx={{ mr: "10px" }} alt="Remy Sharp" />
        </div>
        <Drawer
          anchor="left"
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          PaperProps={{
            style: {
              backgroundColor: "#0F0F0F", // set color here
            },
          }}
        >
          {list("left")}
        </Drawer>
      </nav>
    </div>
  );
}

export default TempNav;
