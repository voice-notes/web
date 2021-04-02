import React from 'react';

import { RecordingStatusText, Title } from '../index';
import styles from './header.module.css';
import { ReactComponent as TapeLogo } from '../../assets/tape.svg';
import { RecordingStatus } from '../App/App';
interface Props {
  recordingStatus: RecordingStatus;
}

export const Header = ({ recordingStatus }: Props) => {
  return (
    <div className={styles.header}>
      <TapeLogo className={styles.logo} title="Tape It logo" />
      <div className={styles.title}>
        <Title recordingStatus={recordingStatus} />
        <RecordingStatusText recordingStatus={recordingStatus} />
      </div>
    </div>
  );
};
