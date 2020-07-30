import React, { FunctionComponent } from 'react';
import { ReactMic } from 'react-mic';
import { Timer } from '../Timer/timer-alt';
import styles from './recorder.module.css';

interface RecorderProps {
  isRecording: boolean;
}

export const Recorder: FunctionComponent<RecorderProps> = ({
  isRecording,
}: RecorderProps) => {
  function onData(recordedBlob: any) {
    console.log('chunk of real-time data is: ', recordedBlob);
  }

  function onStop(recordedBlob: any) {
    console.log('recordedBlob is: ', recordedBlob);
  }

  return (
    <div className={styles.container}>
      <ReactMic
        record={isRecording}
        className={styles.sineWave}
        onStop={onStop}
        onData={onData}
        strokeColor="#0A9E74"
        backgroundColor="#000"
      />
      <Timer isRecording={isRecording} />
    </div>
  );
};
