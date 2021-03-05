import React from 'react';
import { ReactMic } from 'react-mic';

import { Timer } from '../Timer/timer';
import styles from './recorder.module.css';
import { RecordingStatus } from '../App/App';
interface Props {
  currentRecordingStatus: RecordingStatus;
}

export const Recorder = ({ currentRecordingStatus }: Props) => {
  function onData(recordedBlob: any) {
    console.log('chunk of real-time data is: ', recordedBlob);
  }

  function onStop(recordedBlob: any) {
    console.log('recordedBlob is: ', recordedBlob);
  }

  function currentRecordingStatusToggle() {
    return currentRecordingStatus === 'recording';
  }

  return (
    <div className={styles.container}>
      <ReactMic
        record={currentRecordingStatusToggle()}
        onStop={onStop}
        onData={onData}
        strokeColor="#0A9E74"
        backgroundColor="#000"
      />
      <Timer currentRecordingStatus={currentRecordingStatus} />
    </div>
  );
};
