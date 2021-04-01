import React from 'react';

import styles from './title.module.css';
import { RecordingStatus } from '../App/App';
interface Props {
  recordingStatus: RecordingStatus;
}

export const Title = ({ recordingStatus }: Props) => {
  const text = recordingStatus === 'recording' ? 'Taping It' : 'Tape It';
  return <h1 className={styles.title}>{text}</h1>;
};
