import React, { FunctionComponent } from 'react';
import styles from './recordingStatus.module.css';
import { RecordingProps } from '../interface';

export const RecordingStatus: FunctionComponent<RecordingProps> = (
  props: RecordingProps
) => {
  if (props.isRecording) {
    return <div className={styles.status}>Recording...</div>;
  }
  return <div className={styles.status}>Ready to record...</div>;
};
