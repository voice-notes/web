import React from 'react';
import styles from './sendButton.module.css';
import { IconContext } from 'react-icons';
import { FiArrowRight } from 'react-icons/fi';

type RecordingStatus = 'ready' | 'recording' | 'recorded';
interface Props {
  isRecording: RecordingStatus;
}

export const SendButton = ({ isRecording }: Props) => {
  if (isRecording === 'recorded') {
    return (
      <button className={styles.button} id="send">
        <IconContext.Provider value={{ className: styles.icons }}>
          <FiArrowRight />
        </IconContext.Provider>
        <span className={styles.text}>send</span>
      </button>
    );
  } else {
    return null;
  }
};
