import React from 'react';
import { ReactMic } from 'react-mic';
import { Timer } from '../Timer/timer';
import styles from './recorder.module.css';

type RecordingStatus = 'ready' | 'recording' | 'recorded';
interface Props {
  isRecording: RecordingStatus;
  onClickRecord: (newStatus: RecordingStatus) => void;
}

export const Recorder = ({ isRecording, onClickRecord }: Props) => {
  function onData(recordedBlob: any) {
    console.log('chunk of real-time data is: ', recordedBlob);
    onClickRecord('recording');
  }

  function onStop(recordedBlob: any) {
    console.log('recordedBlob is: ', recordedBlob);
    onClickRecord('recorded');
  }

  // const currentlyRecording = function () {
  //   if (isRecording === 'recording') return true;
  // };

  return (
    <div className={styles.container}>
      <ReactMic
        record={isRecording}
        onStop={onStop}
        onData={onData}
        strokeColor="#0A9E74"
        backgroundColor="#000"
      />
      <Timer isRecording={isRecording} />
    </div>
  );
};
