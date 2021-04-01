import React from 'react';
import styles from './playButton.module.css';
import { IconContext } from 'react-icons';
import { FiPlay } from 'react-icons/fi';

import { RecordingStatus } from '../App/App';

interface Props {
  recordingStatus: RecordingStatus;
  setIsPlaying: (arg: boolean) => void;
}

export const PlayButton = (props: Props) => {
  const { recordingStatus, setIsPlaying } = props;

  const handlePlay = () => {
    setIsPlaying(true);
  };

  if (recordingStatus === 'recorded') {
    return (
      <button className={styles.button} id="play" onClick={handlePlay}>
        <IconContext.Provider value={{ className: styles.icons }}>
          <FiPlay />
        </IconContext.Provider>
        <span className={styles.text}>play</span>
      </button>
    );
  } else {
    return null;
  }
};
