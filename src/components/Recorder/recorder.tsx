import React from 'react';
import { ReactMic } from 'react-mic';
import { Timer } from '../Timer/timer';
import styles from './recorder.module.css';

type RecordingStatus = 'ready' | 'recording' | 'recorded';
interface Props {
  isRecording: RecordingStatus;
}

export const Recorder = ({ isRecording }: Props) => {
  function onData(recordedBlob: any) {
    console.log('chunk of real-time data is: ', recordedBlob);
  }

  function onStop(recordedBlob: any) {
    console.log('recordedBlob is: ', recordedBlob);
  }

  function isRecordingToggle() {
    return isRecording === 'recording';
  }

  return (
    <div className={styles.container}>
      <ReactMic
        record={isRecordingToggle()}
        onStop={onStop}
        onData={onData}
        strokeColor="#0A9E74"
        backgroundColor="#000"
      />
      <Timer isRecording={isRecording} />
    </div>
  );
};
