import React, { useState, FunctionComponent, useEffect } from 'react';
import styles from './timer.module.css';

interface Props {
  isRecording: boolean;
}

export const Timer: FunctionComponent<Props> = ({ isRecording }: Props) => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const formatValue = (value: number) => `${value < 10 ? `0${value}` : value}`;

  useEffect(() => {
    let interval: any;
    if (isRecording) {
      interval = setInterval(() => {
        setTime();
      }, 1000);
    } else if (!isRecording && seconds !== 0) {
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
  }, [isRecording, seconds]);

  return (
    <div className={styles.timer}>
      {formatValue(minutes)}:{formatValue(seconds)}
    </div>
  );
};
