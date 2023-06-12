import ReactPlayer from 'react-player';

export default function VideoPlayer({ videoId }) {
  return (
    <div>
      <ReactPlayer url={`https://www.youtube.com/watch?v=${videoId}`} controls={true} />
    </div>
  );
}
