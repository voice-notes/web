import React from 'react';

import styles from './recordingStatusText.module.css';
import { RecordingStatus } from '../App/App';

interface Props {
  recordingStatus: RecordingStatus;
}

export const RecordingStatusText = ({ recordingStatus }: Props) => {
  if (recordingStatus === 'recording') {
    return <div className={styles.status}>Recording...</div>;
  }
  return <div className={styles.status}>Ready to record...</div>;
};
