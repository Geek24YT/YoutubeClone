import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoChannelTitle,
  demoVideoTitle,
  demoChannelUrl,
  defaultChannelAvatar,
} from "../utils/constants";
import { CheckCircle } from "@mui/icons-material";

function VideoCard({ video }) {
  const formatDateDiff = (publishedAt) => {
    const currentDate = new Date();
    const publishedDate = new Date(publishedAt);

    const monthsDiff =
      (currentDate.getFullYear() - publishedDate.getFullYear()) * 12 +
      (currentDate.getMonth() - publishedDate.getMonth());
    const daysDiff = Math.floor(
      (currentDate - publishedDate) / (1000 * 60 * 60 * 24)
    );

    if (monthsDiff >= 1) {
      return monthsDiff + (monthsDiff === 1 ? " month ago" : " months ago");
    } else {
      return daysDiff + (daysDiff === 1 ? " day ago" : " days ago");
    }
  };
  console.log(video);
  return (
    <div>
      <Link
        to={video?.id?.videoId ? `/video/${video?.id?.videoId}` : demoVideoUrl}
      >
        <Card
          sx={{
            width: {
              xs: "100%",
              sm: "358px",
              md: "358px",
              boxShadow: "none",
              borderRadius: 10,
            },
          }}
        >
          <CardMedia
            image={video.snippet?.thumbnails?.high?.url}
            alt={video.snippet?.title}
            sx={{
              maxWidth: { xs: "100%", sm: "358px", md: "500px" },
              height: 180,
            }}
          />
        </Card>
      </Link>
      <Box
        sx={{
          display: "flex",
          p: 0,
          backgroundColor: "black",
          mt: 1,
          width: {
            xs: "100%",
            sm: "358px",
            md: "358px",
          },
          height: 100,
          mb: 3,
        }}
      >
        <div style={{}}>
          <Avatar
            alt="Remy Sharp"
            sx={{
              objectFit: "cover",
            }}
            src={video?.snippet?.thumbnails?.high?.url || defaultChannelAvatar}
          />
        </div>
        <div style={{ flex: 2 }}>
          <div>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{
                textDecoration: "none",
                fontWeight: "bold",
                ml: 1,
                color: "white",
              }}
            >
              {video.snippet.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
              ...
            </Typography>
            <Typography variant="p" sx={{ color: "gray", ml: 1 }}>
              {video.snippet.channelTitle}
              <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
            </Typography>
            <br />
            <Typography variant="p" sx={{ color: "gray", ml: 1 }}>
              {formatDateDiff(video.snippet.publishedAt)}
            </Typography>
          </div>
        </div>
      </Box>
    </div>
  );
}

export default VideoCard;
