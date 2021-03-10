import React from 'react';

import styles from './recordingButtonText.module.css';
import { RecordingStatus } from '../App/App';

interface Props {
    currentRecordingStatus: RecordingStatus;
  }

export const RecordingButtonText = ({ currentRecordingStatus }: Props) => {
    const mediaAction = currentRecordingStatus === 'recording' ? 'Stop' : 'Start';
    if (currentRecordingStatus === 'recorded') {
      return <span className={styles.text}>Re-record</span>;
    }
    return <span className={styles.text}>{mediaAction} recording</span>;
};