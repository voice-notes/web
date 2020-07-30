import React, { useState, useEffect } from 'react';
import { Header } from '../Header/header';
import { Recorder } from '../Recorder/recorder';
import styles from './App.module.css';
import { RecordingIcon } from '../RecordingIcon/recordingIcon';

export const App = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [buttonText, setButtonText] = useState('Start');

  function toggleRecording() {
    setIsRecording(!isRecording);
  }

  function handleButtonStatus(isRecording: boolean) {
    if (isRecording) {
      setButtonText('Stop');
      return;
    }
    setButtonText('Start');
  }

  useEffect(() => {
    handleButtonStatus(isRecording);
  });

  return (
    <div className={styles.app}>
      <Header isRecording={isRecording} />
      <button
        className={styles.btn}
        id="record"
        onClick={() => toggleRecording()}
      >
        <RecordingIcon isRecording={isRecording} />
        <span className={styles.btnText}>{buttonText} recording</span>
      </button>
      <Recorder isRecording={isRecording} />
    </div>
  );
};
