import React from 'react';
import styles from './recordingButton.module.css';
import { IconContext } from 'react-icons';
import { TiMediaRecordOutline, TiMediaStopOutline } from 'react-icons/ti';

interface Props {
  isRecording: boolean;
}

interface ButtonProps {
  onClickRecord: () => void;
  isRecording: boolean;
}

export const RecordingButton = ({
  onClickRecord,
  isRecording,
}: ButtonProps) => {
  return (
    <button className={styles.btn} id="record" onClick={() => onClickRecord()}>
      <RecordingButtonIcon isRecording={isRecording} />
      <RecordingButtonText isRecording={isRecording} />
    </button>
  );
};

export const RecordingButtonText = ({ isRecording }: Props) => {
  const mediaAction = isRecording ? 'Stop' : 'Start';
  return <span className={styles.text}>{mediaAction} recording</span>;
};

export const RecordingButtonIcon = ({ isRecording }: Props) => {
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
