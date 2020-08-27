import React from 'react';
import { ReactMic } from 'react-mic';
import { Timer } from '../Timer/timer';
import styles from './recorder.module.css';

interface Props {
  isRecording: boolean;
  recordingStatus: string;
  onClickStatus: (newStatus: string) => void;
}

export const Recorder = ({
  isRecording,
  onClickStatus,
  recordingStatus,
}: Props) => {
  function onData(recordedBlob: any) {
    console.log('chunk of real-time data is: ', recordedBlob);
    onClickStatus('recording');
  }

  function onStop(recordedBlob: any) {
    console.log('recordedBlob is: ', recordedBlob);
    onClickStatus('recorded');
  }

  return (
    <div className={styles.container}>
      <ReactMic
        record={isRecording}
        onStop={onStop}
        onData={onData}
        strokeColor="#0A9E74"
        backgroundColor="#000"
      />
      <Timer isRecording={isRecording} recordingStatus={recordingStatus} />
    </div>
  );
};
