import React, { FunctionComponent } from 'react';
import { Title } from '../Title/title';
import { RecordingStatus } from '../RecordingStatus/recordingStatus';
import styles from './header.module.css';
import { ReactComponent as TapeLogo } from '../../assets/tape.svg';

interface Props {
  isRecording: boolean;
}

export const Header: FunctionComponent<Props> = ({ isRecording }: Props) => {
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
