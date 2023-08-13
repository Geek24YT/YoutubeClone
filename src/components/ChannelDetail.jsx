import {
  Avatar,
  Button,
  ButtonGroup,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import ContentCutOutlinedIcon from "@mui/icons-material/ContentCutOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { CheckCircle } from "@mui/icons-material";
function ChannelDetail({
  channelLogo,
  channelTitle,
  videoViewCount,
  videoLikeCount,
}) {
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

  return (
    <Box sx={{ backgroundColor: "#0F0F0F", mt: 1, ml: 4 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <div>
            <Avatar
              alt="channel-image"
              src={channelLogo}
              sx={{
                width: "45px",
                height: "45px",
              }}
            />
          </div>
          <div
            style={{
              color: "white",
              display: "flex",
              flexDirection: "column",
              marginRight: "10px",
              marginLeft: "10px",
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              {channelTitle}{" "}
              <CheckCircle sx={{ fontSize: 14, color: "gray", ml: "2px" }} />
            </Typography>

            <Typography variant="caption" sx={{ fontWeight: 400 }}>
              {formatCount(videoViewCount)} views
            </Typography>
          </div>
          <div>
            <Button
              sx={{
                ml: 4,
                borderRadius: 20,
                fontWeight: "bold",
                color: "black",
                backgroundColor: "white",
                "&:hover": {
                  backgroundColor: "#ededed",
                },
                textTransform: "none",
              }}
            >
              Subscribe
            </Button>
          </div>
        </div>
        <div style={{ justifyContent: "flex-end" }}>
          <Tooltip title="I like this ">
            <Button
              sx={{
                pl: 1,
                height: 35,
                borderRadius: "20px 0px 0px 20px",
                backgroundColor: "#272727",
                color: "white",
                "&:hover": {
                  background: "#3C3C3C",
                },
              }}
              startIcon={<ThumbUpOutlinedIcon sx={{ ml: 1 }} />}
            >
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: 700, textTransform: "none" }}
              >
                {formatCount(videoLikeCount)}
              </Typography>
            </Button>
          </Tooltip>

          <Tooltip title="I dislike this">
            <Button
              sx={{
                height: 35,
                borderRadius: "0px 20px 20px 0px",
                color: "white",
                backgroundColor: "#272727",
                "&::before": {
                  // Add this block
                  content: '""',
                  position: "absolute",
                  left: 0,
                  top: "50%",
                  height: "20px", // Or whatever height you desire
                  width: "1px", // This is your border width
                  backgroundColor: "gray",
                  transform: "translateY(-50%)",
                },
                "&:hover": {
                  background: "#3C3C3C",
                },
              }}
              startIcon={<ThumbDownOutlinedIcon />}
            />
          </Tooltip>

          <Tooltip title="Share">
            <Button
              sx={{
                ml: 1,
                pl: 1,
                height: 35,
                borderRadius: "20px",
                backgroundColor: "#272727",
                color: "white",
                "&:hover": {
                  background: "#3C3C3C",
                },
              }}
              startIcon={
                <ReplyOutlinedIcon
                  sx={{
                    marginLeft: "5px",
                    transform: "scaleX(-1)", //to flip horizontally
                  }}
                />
              }
            >
              <Typography
                variant="subtitle2"
                sx={{
                  ml: "-4px",
                  mt: "2px",
                  mr: "5px",
                  fontWeight: 600,
                  textTransform: "none",
                }}
              >
                Share
              </Typography>
            </Button>
          </Tooltip>

          <Tooltip title="Clip">
            <Button
              sx={{
                ml: 1,
                pl: 1,
                height: 35,
                borderRadius: "20px",
                backgroundColor: "#272727",
                color: "white",
                "&:hover": {
                  background: "#3C3C3C",
                },
              }}
              startIcon={
                <ContentCutOutlinedIcon
                  sx={{
                    marginLeft: "5px",
                  }}
                />
              }
            >
              <Typography
                variant="subtitle2"
                sx={{
                  ml: "-4px",
                  mt: "2px",
                  mr: "5px",
                  fontWeight: 600,
                  textTransform: "none",
                }}
              >
                Clip
              </Typography>
            </Button>
          </Tooltip>

          <IconButton
            sx={{
              ml: 1,
              pl: 1,
              height: 35,
              borderRadius: 50,
              backgroundColor: "#272727",
              color: "white",
              "&:hover": {
                background: "#3C3C3C",
              },
            }}
          >
            <MoreHorizOutlinedIcon sx={{ color: "white" }} />
          </IconButton>
        </div>
      </div>
    </Box>
  );
}

export default ChannelDetail;
