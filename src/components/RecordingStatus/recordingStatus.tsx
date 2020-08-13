import React from 'react';
import styles from './recordingStatus.module.css';

interface Props {
  isRecording: boolean;
}

export const RecordingStatus = ({ isRecording }: Props) => {
  if (isRecording) {
    return <div className={styles.status}>Recording...</div>;
  }
  return <div className={styles.status}>Ready to record...</div>;
};
