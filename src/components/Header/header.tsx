import React from 'react';
import { Title } from '../Title/title';
import { RecordingStatus } from '../RecordingStatus/recordingStatus';
import styles from './header.module.css';
import { ReactComponent as TapeLogo } from '../../assets/tape.svg';

type RecordingStatus = 'ready' | 'recording' | 'recorded';
interface Props {
  isRecording: RecordingStatus;
}

export const Header = ({ isRecording }: Props) => {
  return (
    <div className={styles.header}>
      <TapeLogo className={styles.logo} title="Tape It logo" />
      <div className={styles.title}>
        <Title isRecording={isRecording} />
        <RecordingStatus isRecording={isRecording} />
      </div>
    </div>
  );
};
