import React from "react";

function VideoList({ videos }) {
  return (
    <div>
      {videos.map((video, index) => (
        <img
          key={index}
          src={video.snippet.thumbnails.default.url}
          alt={video.snippet.title}
        />
      ))}
    </div>
  );
}

export default VideoList;
