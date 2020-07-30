import React, { FunctionComponent } from 'react';
import styles from './recordingIcon.module.css';
import { IconContext } from 'react-icons';
import { TiMediaRecordOutline, TiMediaStopOutline } from 'react-icons/ti';
import { RecordingProps } from '../interface';

export const RecordingIcon: FunctionComponent<RecordingProps> = ({
  isRecording,
}: RecordingProps) => {
  if (isRecording) {
    return (
      <IconContext.Provider value={{ className: styles.icons }}>
        <TiMediaStopOutline />
      </IconContext.Provider>
    );
  }
  return (
    <IconContext.Provider value={{ className: styles.icons }}>
      <TiMediaRecordOutline />
    </IconContext.Provider>
  );
};
