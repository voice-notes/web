import React, { useState } from 'react';
import { Header } from '../Header/header';
import { Recorder } from '../Recorder/recorder';
import { RecordingButton } from '../RecordingButton/recordingButton';
import { SendButton } from '../SendButton/sendButton';
import styles from './App.module.css';

export type RecordingStatus = 'ready' | 'recording' | 'recorded';

export const App = () => {
  const [currentRecordingStatus, setCurrentRecordingStatus] = useState<
    RecordingStatus
  >('ready');

  function toggleRecording() {
    if (currentRecordingStatus === 'recording')
      return setCurrentRecordingStatus('recorded');
    return setCurrentRecordingStatus('recording');
  }

  return (
    <div className={styles.app}>
      <Header currentRecordingStatus={currentRecordingStatus} />
      <div className={styles.container}>
        <RecordingButton
          currentRecordingStatus={currentRecordingStatus}
          onClickRecord={() => toggleRecording()}
        />
        <SendButton currentRecordingStatus={currentRecordingStatus} />
      </div>
      <Recorder currentRecordingStatus={currentRecordingStatus} />
    </div>
  );
};
