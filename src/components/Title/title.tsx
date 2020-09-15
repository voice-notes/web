import React from 'react';
import styles from './title.module.css';

type RecordingStatus = 'ready' | 'recording' | 'recorded';
interface Props {
  isRecording: RecordingStatus;
}

export const Title = ({ isRecording }: Props) => {
  const text = isRecording === 'recording' ? 'Taping It' : 'Tape It';
  return <h1 className={styles.title}>{text}</h1>;
};
