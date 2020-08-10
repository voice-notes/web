import React, { FunctionComponent } from 'react';
import styles from './buttons.module.css';
import { IconContext } from 'react-icons';
import { TiMediaRecordOutline, TiMediaStopOutline } from 'react-icons/ti';

interface Props {
  isRecording: boolean;
}

export const RecordingButtonText: FunctionComponent<Props> = ({
  isRecording,
}: Props) => {
  const mediaAction = isRecording ? 'Stop' : 'Start';
  return <span className={styles.text}>{mediaAction} recording</span>;
};

export const RecordingButtonIcon: FunctionComponent<Props> = ({
  isRecording,
}: Props) => {
  const iconComponent = isRecording ? (
    <TiMediaStopOutline />
  ) : (
    <TiMediaRecordOutline />
  );
  return (
    <IconContext.Provider value={{ className: styles.icons }}>
      {iconComponent}
    </IconContext.Provider>
  );
};
