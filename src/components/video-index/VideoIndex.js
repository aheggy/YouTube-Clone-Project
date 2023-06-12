import React from "react";
import { Link } from "react-router-dom";
import "./VideoIndex.css";

export default function VideoIndex({ videos }) {
  return (
    <div className="video-index">
      {videos.length > 0 ? (
        <div className="video-list">
          {videos.map((video) => {
            const videoId = video.id.videoId;
            const thumbnail = video.snippet.thumbnails.high.url;
            const title = video.snippet.title;

            return (
              <div key={videoId} className="video-item">
                <Link to={`/videos/${videoId}`}>
                  <img src={thumbnail} alt={title} className="thumbnail-image" />
                </Link>
                <div className="video-title">{title}</div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="search-message">No Search Results Yet! Please submit a search above!</div>
      )}
    </div>
  );
}
