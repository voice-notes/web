import React, { FunctionComponent } from 'react';
import { RecordingStatus } from '../RecordingStatus/recordingStatus'
import styles from './header.module.css';
import { ReactComponent as TapeLogo } from '../../assets/tape.svg'

interface HeaderProps {
  isRecording: boolean;
}

export const Header: FunctionComponent<HeaderProps> = ({isRecording}: HeaderProps) => {
  const title = 'Taped It';
  return (
    <div className={styles.header}>
      <TapeLogo />
      <h1>{title}</h1>
      <RecordingStatus isRecording={isRecording} />
    </div>
  );
};
