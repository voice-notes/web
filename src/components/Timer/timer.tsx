import * as React from 'react';
import Timer from 'react-compound-timer';
import { start } from 'repl';
import { render } from '@testing-library/react';

interface TimerProps {
  isRecording: boolean;
}

interface TimerMethods {
  start: () => void;
  stop: () => void; 
  reset: () => void; 
}

export const RecordingTimer: React.FunctionComponent<TimerProps> = (
    props: TimerProps
  ) => {
    const timerController = ({ start, stop, reset }: TimerMethods) => {
      if (this.props.isRecording) { start() } 
    }
    render() {
  return (
    <Timer
      startImmediately={false} >
        {({ start, stop, reset }: TimerMethods) => (
        <React.Fragment>  
          <Timer.Minutes />:
          <Timer.Seconds />   
          <button onClick={start}>Start</button>
          <button onClick={stop}>Stop</button>
          <button onClick={reset}>Reset</button>
        </React.Fragment>  
      )}  
    </Timer>
  )}
} 


