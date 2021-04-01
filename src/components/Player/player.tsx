import React from 'react';
import ReactPlayer from 'react-player';

interface Props {
  url: string;
  setIsPlaying: (arg: boolean) => void;
  isPlaying: boolean;
}

export const Player = (props: Props) => {
  const { isPlaying, url, setIsPlaying } = props;

  return (
    <div>
      <ReactPlayer
        url={url}
        playing={isPlaying}
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  );
};
