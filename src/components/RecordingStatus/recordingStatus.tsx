import React from 'react';
import styles from './recordingStatus.module.css';

type RecordingStatus = 'ready' | 'recording' | 'recorded';
interface Props {
  isRecording: RecordingStatus;
}

export const RecordingStatus = ({ isRecording }: Props) => {
  if (isRecording === 'recording') {
    return <div className={styles.status}>Recording...</div>;
  }
  return <div className={styles.status}>Ready to record...</div>;
};
