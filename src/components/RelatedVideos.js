import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import { demoVideoTitle, demoVideoUrl } from "../utils/constants";
import { formatDistanceToNow } from "date-fns";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

function RelatedVideos({ videos }) {
  const timeAgo = (dateString) => {
    return formatDistanceToNow(new Date(dateString)) + " ago";
  };

  console.log(videos);
  return (
    <Stack direction={"column"}>
      <Divider sx={{ margin: "20px 0", backgroundColor: "gray" }} />
      {videos.map((video, index) => (
        <Link
          to={
            video?.id?.videoId ? `/video/${video?.id?.videoId}` : demoVideoUrl
          }
          style={{ textDecoration: "none" }}
        >
          <Card
            key={index}
            sx={{
              backgroundColor: "#0F0F0F",
              ml: 2,
              mb: 2,
              p: 2,
              pr: 3,

              maxWidth: "80%",
              height: "90px",
              width: {
                sm: "100%",
                md: "100%",
                boxShadow: "none",
              },
              display: "flex",
              alignItems: "center",
            }}
          >
            <CardMedia
              image={video?.snippet?.thumbnails?.high?.url}
              alt={video?.snippet?.title}
              sx={{
                borderRadius: "15px",
                width: { sm: "120px", md: "180px" }, // Specify a width for the CardMedia
                height: { sm: "108px", md: "120px" }, // Specify a height for the CardMedia
                objectFit: "cover", // Use "cover" for proper image display
                flex: "0 0 auto", // Make sure CardMedia doesn't grow or shrink
              }}
            ></CardMedia>
            <Box
              sx={{ display: "flex", flexDirection: "column", ml: 2, flex: 1 }}
            >
              <Box sx={{ width: "90%" }}>
                <span style={{ fontWeight: "bold", color: "white" }}>
                  {video.snippet.title.slice(0, 60) ||
                    demoVideoTitle.slice(0, 60)}
                  ...
                </span>
              </Box>
              <Box
                sx={{
                  flex: 1,
                  fontSize: "15px",
                  fontWeight: 500,
                  color: "gray",
                }}
              >
                <span>{video.snippet.channelTitle.slice(0, 60)} </span>
                <CheckCircle sx={{ fontSize: "15px", color: "gray" }} />
              </Box>
              <Box>
                <span
                  style={{ fontSize: "12px", fontWeight: 500, color: "gray" }}
                >
                  &#8226; {timeAgo(video.snippet.publishedAt)}
                </span>
              </Box>
            </Box>
          </Card>
        </Link>
      ))}
    </Stack>
  );
}

export default RelatedVideos;
