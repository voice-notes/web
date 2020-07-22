import * as React from 'react';
import Timer from 'react-compound-timer';
import { start } from 'repl';

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
    timerController(start: () => void, stop: void, reset: void) {
      if (this.props.isRecording) { start() } 
    }
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
  )
} 


