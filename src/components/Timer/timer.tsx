import * as React from 'react';
import Timer from 'react-compound-timer';

interface TimerProps {
  isRecording: boolean;
}

interface TimerMethods {
  start: () => void;
  stop: () => void;
  reset: () => void;
}

export class RecordingTimer extends React.Component<TimerProps> {
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
      <Timer
        startImmediately={false}
        formatValue={(value) => `${value < 10 ? `0${value}` : value}`}
      >
        {({ start, stop, reset }: TimerMethods) => (
          <React.Fragment>
            <Timer.Minutes />:
            <Timer.Seconds />
            {this.timerController({ start, stop, reset })}
          </React.Fragment>
        )}
      </Timer>
    );
  }
}
