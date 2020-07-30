import React, { FunctionComponent } from 'react';
import { RecordingStatus } from '../RecordingStatus/recordingStatus';
import styles from './header.module.css';
import { ReactComponent as TapeLogo } from '../../assets/tape.svg';
import { RecordingProps } from '../interface';

export const Header: FunctionComponent<RecordingProps> = ({
  isRecording,
}: RecordingProps) => {
  const title = 'Taped It';
  return (
    <div className={styles.header}>
      <TapeLogo className={styles.logo} title="Tape It logo" />
      <div className={styles.title}>
        <h1>{title}</h1>
        <RecordingStatus isRecording={isRecording} />
      </div>
    </div>
  );
};
