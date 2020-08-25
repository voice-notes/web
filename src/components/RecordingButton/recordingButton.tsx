import React from 'react';
import styles from './recordingButton.module.css';
import { IconContext } from 'react-icons';
import { TiMediaRecordOutline, TiMediaStopOutline } from 'react-icons/ti';

interface Props {
  isRecording: boolean;
  status: string;
}

interface ButtonProps {
  onClickRecord: () => void;
  isRecording: boolean;
  status: string;
}

export const RecordingButton = ({
  onClickRecord,
  isRecording,
  status,
}: ButtonProps) => {
  return (
    <button className={styles.btn} id="record" onClick={onClickRecord}>
      <RecordingButtonIcon isRecording={isRecording} status={status} />
      <RecordingButtonText isRecording={isRecording} status={status} />
    </button>
  );
};

export const RecordingButtonText = ({ isRecording, status }: Props) => {
  const mediaAction = isRecording ? 'Stop' : 'Start';
  if (status === 'recorded' && isRecording === false) {
    return <span className={styles.text}>Re-record</span>;
  }
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
