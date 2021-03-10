import React from 'react';
import styles from './recordingButton.module.css';

import { RecordingStatus } from '../App/App';
import { RecordingButtonText } from '../RecordingButtonText/recordingButtonText';
import { RecordingButtonIcon } from '../RecordingButtonIcon/recordingButtonIcon';

interface ButtonProps {
  onClickRecord: () => void;
  currentRecordingStatus: RecordingStatus;
}

export const RecordingButton = ({
  onClickRecord,
  currentRecordingStatus,
}: ButtonProps) => {
  return (
    <button
      className={styles.button}
      id="record"
      onClick={() => onClickRecord()}
    >
      <RecordingButtonIcon currentRecordingStatus={currentRecordingStatus} />
      <RecordingButtonText currentRecordingStatus={currentRecordingStatus} />
    </button>
  );
};
