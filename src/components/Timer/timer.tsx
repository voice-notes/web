import React, { useState, useEffect } from 'react';

import styles from './timer.module.css';
import { RecordingStatus } from '../App/App';
interface Props {
  currentRecordingStatus: RecordingStatus;
  recordingExists: boolean;
}

export const Timer = ({ currentRecordingStatus, recordingExists }: Props) => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const formatValue = (value: number) => `${value < 10 ? `0${value}` : value}`;

  // useEffect(() => {
  //   const resetTime = () => {
  //     setSeconds(0);
  //     setMinutes(0);
  //   };
  //   if (currentRecordingStatus === 'recording' && recordingExists === true) {
  //     resetTime();
  //   }
  // }, [recordingExists]);

  useEffect(() => {
    let interval: any;
    if (currentRecordingStatus === 'recording') {
      setSeconds(0);
      setMinutes(0);
      interval = setInterval(() => {
        setTime();
      }, 1000);
    } else if (currentRecordingStatus === 'recorded' && seconds !== 0) {
      clearInterval(interval);
    }
    const setTime = () => {
      setSeconds((seconds) => seconds + 1);
      if (seconds === 59) {
        setMinutes((minutes) => minutes + 1);
        setSeconds(0);
      }
    };

    return () => clearInterval(interval);
  }, [currentRecordingStatus, seconds]);

  return (
    <div data-testid="timeDisplay" className={styles.timer}>
      {formatValue(minutes)}:{formatValue(seconds)}
    </div>
  );
};
