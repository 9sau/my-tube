import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onSelectVideo }) => {
  const list = videos.map(video => {
    return (
      <VideoItem
        onSelectVideo={onSelectVideo}
        key={video.id.videoId}
        video={video}
      />
    );
  });
  return (
    <div className="video-list ui middle aligned divided list"> {list} </div>
  );
};

export default VideoList;
