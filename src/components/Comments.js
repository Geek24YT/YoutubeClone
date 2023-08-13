import {
  Avatar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { Box, maxWidth } from "@mui/system";
import React, { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import DoneIcon from "@mui/icons-material/Done";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import SortIcon from "@mui/icons-material/Sort";

function Comments({ comments }) {
  console.log(comments);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [selectedSortingType, setSelectedSortingType] = React.useState("top");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const timeAgo = (dateString) => {
    return formatDistanceToNow(new Date(dateString)) + " ago";
  };

  const formatCount = (viewCount) => {
    viewCount = Number(viewCount);
    if (viewCount >= 1000000) {
      return (viewCount / 1000000).toFixed(1) + "M";
    } else if (viewCount >= 1000) {
      return (viewCount / 1000).toFixed(1) + "K";
    } else {
      return viewCount;
    }
  };

  // Add a function to sort comments
  const sortComments = () => {
    if (selectedSortingType === "top") {
      // Sort by like count in descending order
      return [...comments].sort(
        (a, b) =>
          b.snippet.topLevelComment.snippet.likeCount -
          a.snippet.topLevelComment.snippet.likeCount
      );
    } else {
      // Sort by date in descending order (newest first)
      return [...comments].sort(
        (a, b) =>
          new Date(b.snippet.topLevelComment.snippet.updatedAt) -
          new Date(a.snippet.topLevelComment.snippet.updatedAt)
      );
    }
  };

  // Get sorted comments
  const sortedComments = sortComments();

  return (
    <Box sx={{ backgroundColor: "#0F0F0F", m: 4 }}>
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <Typography sx={{ color: "white", fontSize: "17px" }}>
          10 Comments
        </Typography>
        <Button
          startIcon={<SortIcon />}
          aria-controls="simple-menu"
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            ml: 2,
            fontSize: "15px",
            textTransform: "none",
            color: "white",
            backgroundColor: "transparent",
            borderRadius: 2,
            ":hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          Sort by
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          PaperProps={{
            style: {
              backgroundColor: "#212121", // Setting the background color
            },
          }}
        >
          <MenuItem
            onClick={() => {
              setSelectedSortingType("top");
              handleClose();
            }}
            sx={{
              backgroundColor: selectedSortingType === "top" ? "gray" : "",
              ":hover": { backgroundColor: "lightgray" },
            }}
          >
            <Typography sx={{ fontSize: "15px" }}> Top Comments</Typography>
          </MenuItem>
          <MenuItem
            onClick={() => {
              setSelectedSortingType("new");
              handleClose();
            }}
            sx={{
              backgroundColor: selectedSortingType === "new" ? "gray" : "",
              ":hover": { backgroundColor: "lightgray" },
            }}
          >
            <Typography sx={{ fontSize: "15px" }}> Newest first</Typography>
          </MenuItem>
        </Menu>
      </Box>
      {sortedComments.map((comment, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            justifyConent: "start",
            alignItems: "start",
            mb: 2,
          }}
        >
          <Box sx={{ marginRight: 2 }}>
            <a
              href={
                comment?.snippet?.topLevelComment?.snippet?.authorChannelUrl
              }
            >
              <Avatar
                alt="Image"
                src={
                  comment?.snippet?.topLevelComment?.snippet
                    ?.authorProfileImageUrl
                }
              />
            </a>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              overflowWrap: "break-word",
              wordWrap: "break-word",
              wordBreak: "break-all",
            }}
          >
            <Box>
              <span
                style={{ fontWeight: 500, fontSize: "14px", color: "white" }}
              >
                @{comment?.snippet?.topLevelComment?.snippet?.authorDisplayName}{" "}
                {/* <DoneIcon style={{ fontSize: 12, color: "gray" }} /> */}
              </span>
              <span
                style={{
                  marginLeft: "5px",
                  color: "gray",
                  fontSize: "12px",
                  fontWeight: 500,
                }}
              >
                {timeAgo(comment?.snippet?.topLevelComment?.snippet?.updatedAt)}
              </span>
            </Box>
            <Box sx={{ color: "white", p: 0, mt: -2 }}>
              <p>{comment?.snippet?.topLevelComment?.snippet?.textOriginal}</p>
              <Box
                sx={{
                  display: "flex",
                  justifyConent: "start",
                  alignItems: "center",
                  mt: -2,
                }}
              >
                <Box>
                  <IconButton
                    sx={{
                      color: "white",
                      ml: -1,
                      ":hover": { backgroundColor: "#3C3C3C" },
                    }}
                  >
                    <ThumbUpOffAltIcon />
                  </IconButton>{" "}
                  {comment?.snippet?.topLevelComment?.snippet?.likeCount > 0 ? (
                    <span
                      style={{
                        fontSize: "12px",
                        color: "gray",
                        marginLeft: "-4px",
                      }}
                    >
                      {formatCount(
                        comment?.snippet?.topLevelComment?.snippet?.likeCount
                      )}
                    </span>
                  ) : (
                    ""
                  )}{" "}
                </Box>
                <Box>
                  <IconButton
                    sx={{
                      color: "white",
                      ":hover": { backgroundColor: "#3C3C3C" },
                    }}
                  >
                    <ThumbDownOffAltIcon />
                  </IconButton>
                </Box>
                <Box sx={{ color: "white", fontSize: "12px", fontWeight: 500 }}>
                  <Button
                    disableRipple
                    sx={{
                      fontSize: "12px",
                      textTransform: "none",
                      borderRadius: 20,
                      color: "white",
                      backgroundColor: "transparent",
                      ":hover": {
                        backgroundColor: "#3C3C3C",
                      },
                    }}
                  >
                    Reply
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default Comments;
