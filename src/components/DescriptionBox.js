import { CheckCircle } from "@mui/icons-material";
import { Avatar, Button, Collapse, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

function DescriptionBox({
  description,
  channelLogo,
  videoViewCount,
  channelTitle,
}) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const formatCount = (viewCount) => {
    viewCount = Number(viewCount);
    if (viewCount >= 1000000) {
      return (viewCount / 1000000).toFixed(1) + " M";
    } else if (viewCount >= 1000) {
      return (viewCount / 1000).toFixed(1) + " K";
    } else {
      return viewCount;
    }
  };

  return (
    <Box sx={{ m: 4 }}>
      <Collapse
        in={expanded}
        collapsedSize={80}
        sx={{
          borderRadius: "10px 10px 0px 0px",
          backgroundColor: "#272727",
          "&:hover": {
            background: "#3C3C3C",
          },
          p: 2,
          pt: 1,
        }}
      >
        <Typography variant="body2" sx={{ color: "white" }}>
          {description.split("\n").map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </Typography>
        <Divider sx={{ margin: "20px 0", backgroundColor: "gray" }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <Box>
            <Avatar
              alt="channel-image"
              src={channelLogo}
              sx={{
                width: "75px",
                height: "75px",
              }}
            />
          </Box>
          <Box
            sx={{
              color: "white",
              display: "flex",
              flexDirection: "column",
              marginRight: "10px",
              marginLeft: "10px",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {channelTitle}{" "}
              <CheckCircle sx={{ fontSize: 16, color: "gray", ml: "2px" }} />
            </Typography>

            <Typography variant="subtitle2" sx={{ fontWeight: 400 }}>
              {formatCount(videoViewCount)} views
            </Typography>
          </Box>
        </Box>
      </Collapse>
      <Button
        sx={{
          borderRadius: "0px 0px 10px 10px",
          backgroundColor: "#272727",
          color: "white",
          textTransform: "none",
          width: "100%",
          "&:hover": {
            background: "#3C3C3C",
          },
        }}
        onClick={handleExpandClick}
      >
        {expanded ? "Show Less" : "Show More"}
      </Button>
    </Box>
  );
}

export default DescriptionBox;
