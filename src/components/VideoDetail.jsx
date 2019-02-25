import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) return <div>Loading...</div>;

  const src = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div className="video-detail">
      <div className="ui embed">
        <iframe title="video player" src={src} />
      </div>
      <div className="ui segment">
        <h4>{video.snippet.title}</h4>
        <p className="ui header">{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
