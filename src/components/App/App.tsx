import React, { useState } from 'react';
import { Header } from '../Header/header';
import { Recorder } from '../Recorder/recorder';
import { RecordingButton } from '../RecordingButton/recordingButton';
import { SendButton } from '../SendButton/sendButton';
import styles from './App.module.css';

export const App = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingStatus, setRecordingStatus] = useState('ready');

  function toggleRecording() {
    setIsRecording(!isRecording);
  }

  function changeRecordingStatus(newStatus: string) {
    setRecordingStatus(newStatus);
  }

  return (
    <div className={styles.app}>
      <Header isRecording={isRecording} />
      <div className={styles.container}>
        <RecordingButton
          isRecording={isRecording}
          recordingStatus={recordingStatus}
          onClickRecord={() => toggleRecording()}
        />
        <SendButton recordingStatus={recordingStatus} />
      </div>
      <Recorder
        isRecording={isRecording}
        recordingStatus={recordingStatus}
        onClickStatus={changeRecordingStatus}
      />
    </div>
  );
};
