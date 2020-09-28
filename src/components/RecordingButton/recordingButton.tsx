import React from 'react';
import styles from './recordingButton.module.css';
import { IconContext } from 'react-icons';
import { TiMediaRecordOutline, TiMediaStopOutline } from 'react-icons/ti';

type RecordingStatus = 'ready' | 'recording' | 'recorded';
interface Props {
  isRecording: RecordingStatus;
}

interface ButtonProps {
  onClickRecord: () => void;
  isRecording: RecordingStatus;
}

export const RecordingButton = ({
  onClickRecord,
  isRecording,
}: ButtonProps) => {
  return (
    <button
      className={styles.button}
      id="record"
      onClick={() => onClickRecord()}
    >
      <RecordingButtonIcon isRecording={isRecording} />
      <RecordingButtonText isRecording={isRecording} />
    </button>
  );
};

export const RecordingButtonText = ({ isRecording }: Props) => {
  const mediaAction = isRecording === 'recording' ? 'Stop' : 'Start';
  if (isRecording === 'recorded') {
    return <span className={styles.text}>Re-record</span>;
  }
  return <span className={styles.text}>{mediaAction} recording</span>;
};

export const RecordingButtonIcon = ({ isRecording }: Props) => {
  const iconComponent =
    isRecording === 'recording' ? (
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
