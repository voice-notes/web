import React from 'react';

import { Title } from '../Title/title';
import { RecordingStatusText } from '../RecordingStatusText/recordingStatusText';
import styles from './header.module.css';
import { ReactComponent as TapeLogo } from '../../assets/tape.svg';
import { RecordingStatus } from "../App/App";
interface Props {
  currentRecordingStatus: RecordingStatus;
}

export const Header = ({ currentRecordingStatus }: Props) => {
  return (
    <div className={styles.header}>
      <TapeLogo className={styles.logo} title="Tape It logo" />
      <div className={styles.title}>
        <Title currentRecordingStatus={currentRecordingStatus} />
        <RecordingStatusText currentRecordingStatus={currentRecordingStatus} />
      </div>
    </div>
  );
};
