import React, { FunctionComponent } from 'react';
import styles from './recordingStatus.module.css';

interface StatusProps {
  isRecording: boolean;
}

export const RecordingStatus: FunctionComponent<StatusProps> = (
  props: StatusProps
) => {
  if (props.isRecording) {
    return <div className={styles.status}>Recording...</div>;
  }
  return <div className={styles.status}>Ready to record...</div>;
};
