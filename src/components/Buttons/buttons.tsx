import React, { FunctionComponent } from 'react';
import styles from './buttons.module.css'
import { IconContext } from 'react-icons';
import { TiMediaRecordOutline, TiMediaStopOutline } from 'react-icons/ti';

interface RecordingProps {
  isRecording: boolean
}

export const RecordingButtonText: FunctionComponent<RecordingProps> = ({isRecording}:RecordingProps) => {
  const mediaAction = isRecording ? 'Stop' : 'Start'
  return <span className={styles.text}>{mediaAction} recording</span>
}

export const RecordingButtonIcon: FunctionComponent<RecordingProps> = ({
  isRecording,
}: RecordingProps) => {
  const iconComponent = isRecording ? <TiMediaStopOutline /> : <TiMediaRecordOutline />
  return (
    <IconContext.Provider value={{ className: styles.icons }}>
      {iconComponent}
    </IconContext.Provider>
  );
};