import React from 'react';
import styles from './recordingButtonIcon.module.css';
import { IconContext } from 'react-icons';
import { TiMediaRecordOutline, TiMediaStopOutline } from 'react-icons/ti';

import { RecordingStatus } from '../App/App';

interface Props {
    currentRecordingStatus: RecordingStatus;
  }

export const RecordingButtonIcon = ({ currentRecordingStatus }: Props) => {
    const iconComponent =
      currentRecordingStatus === 'recording' ? (
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