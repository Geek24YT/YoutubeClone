import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "./fetchFromAPI";
import ReactPlayer from "react-player";
import ChannelDetail from "./ChannelDetail";
import Comments from "./Comments";
import DescriptionBox from "./DescriptionBox";
import { Typography } from "@mui/material";
import RelatedVideos from "./RelatedVideos";

function VideoPlayer() {
  const { id } = useParams();
  const [videoComments, setVideoComments] = useState([]);
  const [videoDetail, setVideoDetail] = useState({});
  const [relatedVideos, setRelatedVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setRelatedVideos(data.items)
    );
    fetchFromAPI(`commentThreads?part=snippet&videoId=${videoDetail.id}`).then(
      (data) => setVideoComments(data)
    );
  }, [id]);

  if (!videoDetail?.snippet) return "Loading....";
  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box minHeight="95vh">
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${id}`}
        className="react-player"
        controls
      />
      <Box sx={{ display: "flex" }}>
        <Box sx={{ width: "65%", backgroundColor: "#0F0F0F" }}>
          <Typography variant="h6" sx={{ color: "white", ml: 4, mt: 2 }}>
            {videoDetail?.snippet?.title}
          </Typography>
          <ChannelDetail
            style={{ marginLeft: "2px" }}
            channelLogo={videoDetail?.snippet?.thumbnails?.high?.url}
            channelTitle={videoDetail?.snippet?.channelTitle}
            videoViewCount={videoDetail?.statistics?.viewCount}
            videoLikeCount={videoDetail?.statistics?.likeCount}
          />
          <DescriptionBox
            description={videoDetail.snippet.description}
            channelLogo={videoDetail?.snippet?.thumbnails?.high?.url}
            channelTitle={videoDetail?.snippet?.channelTitle}
            videoViewCount={videoDetail?.statistics?.viewCount}
          />
          {/* <Comments comments={videoComments} /> */}
        </Box>
        <Box sx={{ width: "35%", backgroundColor: "#0F0F0F" }}>
          <RelatedVideos videos={relatedVideos} />
        </Box>
      </Box>
    </Box>
  );
}

export default VideoPlayer;
