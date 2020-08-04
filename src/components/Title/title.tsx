import React from 'react';
import styles from './title.module.css';

interface Props {
  isRecording: boolean;
}

export const Title = ({ isRecording }: Props) => {
  const text = isRecording ? 'Taping It' : 'Tape It';
  return <h1 className={styles.title}>{text}</h1>;
};
