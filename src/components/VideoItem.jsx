import React from "react";

const VideoItem = ({ video, onSelectVideo }) => {
  return (
    <div
      className="video-item item"
      onClick={() => {
        onSelectVideo(video);
      }}
      style={{ cursor: "pointer" }}
    >
      <img
        alt={video.snippet.title}
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
