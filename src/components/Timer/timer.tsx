import * as React from 'react';
import Timer from 'react-compound-timer';

interface TimerProps {
  isRecording: boolean
}

export const RecordingTimer: React.FunctionComponent<TimerProps> = (
    props: TimerProps
  ) => {
  return (
    <Timer>
      <Timer.Minutes />:
      <Timer.Seconds />
    </Timer>
  )
} 
