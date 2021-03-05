import React from 'react';
import styles from './sendButton.module.css';
import { IconContext } from 'react-icons';
import { FiArrowRight } from 'react-icons/fi';

import { RecordingStatus } from '../App/App';
interface Props {
  currentRecordingStatus: RecordingStatus;
  slackId: string;
  responseUrl: string;
}

export const SendButton = ({ currentRecordingStatus }: Props) => {
  if (currentRecordingStatus === 'recorded') {
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
