import React from 'react';

import styles from './title.module.css';
import { RecordingStatus } from "../App/App";
interface Props {
  currentRecordingStatus: RecordingStatus;
}

export const Title = ({ currentRecordingStatus }: Props) => {
  const text = currentRecordingStatus === 'recording' ? 'Taping It' : 'Tape It';
  return <h1 className={styles.title}>{text}</h1>;
};
