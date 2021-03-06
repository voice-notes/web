import React, { useState, useEffect } from 'react';

import styles from './timer.module.css';
import { RecordingStatus } from '../App/App';
interface Props {
  recordingStatus: RecordingStatus;
  recordingExists: boolean;
}

export const Timer = (props: Props) => {
  const { recordingStatus, recordingExists } = props;

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hasReset, setHasReset] = useState<boolean>(false);

  const formatValue = (value: number) => `${value < 10 ? `0${value}` : value}`;

  const resetTimer = () => {
    setSeconds(0);
    setMinutes(0);
  };

  useEffect(() => {
    let interval: any;
    if (recordingStatus === 'recording') {
      if (recordingExists && !hasReset) {
        resetTimer();
        setHasReset(true);
      }
      interval = setInterval(() => {
        setTime();
      }, 1000);
    } else if (recordingStatus === 'recorded' && seconds !== 0) {
      clearInterval(interval);
      setHasReset(false);
    }
    const setTime = () => {
      setSeconds((seconds) => seconds + 1);
      if (seconds === 59) {
        setMinutes((minutes) => minutes + 1);
        setSeconds(0);
      }
    };

    return () => clearInterval(interval);
  }, [recordingStatus, seconds, hasReset, recordingExists]);

  return (
    <div data-testid="timeDisplay" className={styles.timer}>
      {formatValue(minutes)}:{formatValue(seconds)}
    </div>
  );
};
