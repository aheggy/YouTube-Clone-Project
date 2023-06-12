import React, { useState } from "react";
import { useParams } from "react-router-dom";
import VideoPlayer from "./VideoPlayer";
import "./VideoShow.css";

export default function VideoShow() {
  const { id } = useParams();
  const [isCopied, setIsCopied] = useState(false);

  const handleShareClick = () => {
    const videoUrl = `https://www.youtube.com/watch?v=${id}`;
    copyToClipboard(videoUrl);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        console.log("URL copied to clipboard");
        setIsCopied(true);
      })
  };

  return (
    <div className="video-show">
      <div className="video-player">
        <VideoPlayer videoId={id} />
      </div>
      <div className="share-button">
        <button onClick={handleShareClick}>Share</button>
        {isCopied && (
          <p className="copied-message">URL copied to clipboard!</p>
        )}
      </div>
    </div>
  );
}
