import React from 'react';

import styles from './recordingStatusText.module.css';
import { RecordingStatus } from "../App/App";

interface Props {
  currentRecordingStatus: RecordingStatus;
}

export const RecordingStatusText = ({ currentRecordingStatus }: Props) => {
  if (currentRecordingStatus === 'recording') {
    return <div className={styles.status}>Recording...</div>;
  }
  return <div className={styles.status}>Ready to record...</div>;
};
