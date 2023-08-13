import { Box, Stack } from "@mui/system";
import React from "react";

import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

function Feed({ videos, direction }) {
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="center"
      gap={2}
      sx={{
        overflowY: "auto",
        height: "80vh",
        backgroundColor: "black",
      }}
    >
      {videos.map((item, idx) => (
        <Box key={idx} sx={{}}>
          {item.id.videoId && <VideoCard video={item} />}
          {/* {item.id.channelId && <ChannelCard channelDetail={item} />} */}
        </Box>
      ))}
    </Stack>
  );
}

export default Feed;
