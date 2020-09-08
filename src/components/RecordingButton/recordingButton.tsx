import React from 'react';
import styles from './recordingButton.module.css';
import { IconContext } from 'react-icons';
import { TiMediaRecordOutline, TiMediaStopOutline } from 'react-icons/ti';

interface Props {
  isRecording: boolean;
  recordingStatus: string;
}

interface ButtonProps {
  onClickRecord: () => void;
  isRecording: boolean;
  recordingStatus: string;
}

export const RecordingButton = ({
  onClickRecord,
  isRecording,
  recordingStatus,
}: ButtonProps) => {
  return (
    <button className={styles.button} id="record" onClick={onClickRecord}>
      <RecordingButtonIcon
        isRecording={isRecording}
        recordingStatus={recordingStatus}
      />
      <RecordingButtonText
        isRecording={isRecording}
        recordingStatus={recordingStatus}
      />
    </button>
  );
};

export const RecordingButtonText = ({
  isRecording,
  recordingStatus,
}: Props) => {
  const mediaAction = isRecording ? 'Stop' : 'Start';
  if (recordingStatus === 'recorded' && isRecording === false) {
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
