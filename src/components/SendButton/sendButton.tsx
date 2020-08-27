import React from 'react';
import styles from './sendButton.module.css';
import { IconContext } from 'react-icons';
import { FiArrowRight } from 'react-icons/fi';

interface Props {
  recordingStatus: string;
}

export const SendButton = ({ recordingStatus }: Props) => {
  if (recordingStatus === 'recorded') {
    return (
      <button className={styles.btn} id="send">
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
