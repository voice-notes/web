import React, { useState } from 'react';
import { Header } from '../Header/header';
import { Recorder } from '../Recorder/recorder';
import { RecordingButton } from '../RecordingButton/recordingButton';
import styles from './App.module.css';

export const App = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [status, setRecordingStatus] = useState('not recorded');

  function toggleRecording() {
    setIsRecording(!isRecording);
  }

  function changeRecordingStatus() {
    setRecordingStatus('recorded');
  }

  return (
    <div className={styles.app}>
      <Header isRecording={isRecording} />
      <RecordingButton
        isRecording={isRecording}
        onClickRecord={() => toggleRecording()}
      />
      <Recorder
        isRecording={isRecording}
        status={status}
        onClickStatus={() => changeRecordingStatus()}
      />
    </div>
  );
};
