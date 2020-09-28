import React, { useState, useEffect } from 'react';
import styles from './timer.module.css';

type RecordingStatus = 'ready' | 'recording' | 'recorded';
interface Props {
  isRecording: RecordingStatus;
}

export const Timer = ({ isRecording }: Props) => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const formatValue = (value: number) => `${value < 10 ? `0${value}` : value}`;

  useEffect(() => {
    let interval: any;
    if (isRecording === 'recording') {
      interval = setInterval(() => {
        setTime();
      }, 1000);
    } else if (isRecording === 'recorded' && seconds !== 0) {
      clearInterval(interval);
    }
    const setTime = () => {
      setSeconds((seconds) => seconds + 1);
      if (seconds === 59) {
        setMinutes((minutes) => minutes + 1);
        setSeconds(0);
      }
    };

    const resetTimer = () => {
      setMinutes(0);
      setSeconds(0);
    };

    if (isRecording === 'recorded') {
      resetTimer();
    }

    return () => clearInterval(interval);
  }, [isRecording, seconds]);

  return (
    <div className={styles.timer}>
      {formatValue(minutes)}:{formatValue(seconds)}
    </div>
  );
};
