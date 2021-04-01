import React from 'react';
import { IconContext } from 'react-icons';
import { TiMediaRecordOutline, TiMediaStopOutline } from 'react-icons/ti';

import styles from './recordingButton.module.css';

import { RecordingStatus } from '../App/App';

interface Props {
  onClickRecord: () => void;
  recordingStatus: RecordingStatus;
}

export const RecordingButton = (props: Props) => {
  const returnButtonIcon = () => {
    const iconComponent =
      recordingStatus === 'recording' ? (
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

  const returnButtonText = () => {
    const mediaAction = recordingStatus === 'recording' ? 'Stop' : 'Start';
    if (recordingStatus === 'recorded') {
      return <span className={styles.text}>Re-record</span>;
    }
    return <span className={styles.text}>{mediaAction} recording</span>;
  };

  const { onClickRecord, recordingStatus } = props;
  return (
    <button
      className={styles.button}
      id="record"
      onClick={() => onClickRecord()}
    >
      {returnButtonIcon()}
      {returnButtonText()}
    </button>
  );
};
