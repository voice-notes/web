import React, { Fragment, Component } from 'react';
import Timer from 'react-compound-timer';
import styles from './timer.module.css';

interface TimerProps {
  isRecording: boolean;
}

interface TimerMethods {
  start: () => void;
  stop: () => void;
  reset: () => void;
}

export class RecordingTimer extends Component<TimerProps> {
  timerController({ start, stop, reset }: TimerMethods) {
    if (this.props.isRecording) {
      start();
    }
    if (!this.props.isRecording) {
      stop();
    }
  }

  render() {
    return (
      <div className={styles.timer}>
      <Timer 
        startImmediately={false}
        formatValue={(value) => `${value < 10 ? `0${value}` : value}`}
      >
        {({ start, stop, reset }: TimerMethods) => (
          <Fragment>
            <Timer.Minutes />:
            <Timer.Seconds />
            {this.timerController({ start, stop, reset })}
          </Fragment>
        )}
      </Timer>
      </div>
    );
  }
}
