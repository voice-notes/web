import React, { useState, FunctionComponent } from 'react';
import { Header } from '../Header/header';
import { Recorder } from '../Recorder/recorder';
import styles from './App.module.css';
import { RecordingIcon } from '../RecordingIcon/recordingIcon';

interface RecordingProps {
  isRecording: boolean
}

const ButtonText: FunctionComponent<RecordingProps> = ({isRecording}:RecordingProps) => {
  if(isRecording) return <span className={styles.btnText}>Stop Recording</span>
  return <span className={styles.btnText}>Start Recording</span>
}

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
        <RecordingIcon isRecording={isRecording} />
        <ButtonText isRecording={isRecording} />
      </button>
      <Recorder isRecording={isRecording} />
    </div>
  );
};
