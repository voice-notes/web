import React from 'react';
import ReactPlayer from 'react-player';

interface Props {
  url: string;
  setIsPlaying: (arg: boolean) => void;
  isPlaying: boolean;
}

export const Player = ({ isPlaying, url, setIsPlaying }: Props) => {
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
