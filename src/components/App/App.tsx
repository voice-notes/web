import React, { useState } from 'react';
import { RecordingButtonText, RecordingButtonIcon } from '../Buttons/buttons';
import { Header } from '../Header/header';
import { Recorder } from '../Recorder/recorder';
import styles from './App.module.css';

export const App = () => {
  const [isRecording, setIsRecording] = useState(false);

  function toggleRecording() {
    setIsRecording(!isRecording);
  }

  return (
    <div className={styles.app}>
      <Header isRecording={isRecording} />
      <button
        className={styles.btn}
        id="record"
        onClick={() => toggleRecording()}
      >
        <RecordingButtonIcon isRecording={isRecording} />
        <RecordingButtonText isRecording={isRecording} />
      </button>
      <Recorder isRecording={isRecording} />
    </div>
  );
};
