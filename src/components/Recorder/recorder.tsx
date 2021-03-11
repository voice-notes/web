import React, { useState } from 'react';
import { ReactMic } from 'react-mic';

import { Timer } from '../Timer/timer';
import styles from './recorder.module.css';
import { RecordingStatus } from '../App/App';

interface Props {
  currentRecordingStatus: RecordingStatus;
  saveBlob: (blob: any) => void;
}

export const Recorder = ({ currentRecordingStatus, saveBlob }: Props) => {
  const [recordingExists, setRecordingExists] = useState<boolean>(false);

  const onData = (recordedBlob: any) => {
    console.log('chunk of real-time data is: ', recordedBlob);
  };

  const onStop = (recordedBlob: any) => {
    saveBlob(recordedBlob);
    setRecordingExists(true);
    console.log('recordedBlob is: ', recordedBlob);
  };

  const isRecording = () => {
    return currentRecordingStatus === 'recording';
  };

  return (
    <div className={styles.container}>
      <ReactMic
        record={isRecording()}
        onStop={onStop}
        onData={onData}
        strokeColor="#0A9E74"
        backgroundColor="#000"
      />
      <Timer
        currentRecordingStatus={currentRecordingStatus}
        recordingExists={recordingExists}
      />
    </div>
  );
};
