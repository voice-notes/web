import React, { useState, useEffect } from 'react';
import queryString from 'query-string';

import { Header } from '../Header/header';
import { Recorder } from '../Recorder/recorder';
import { RecordingButton } from '../RecordingButton/recordingButton';
import { SendButton } from '../SendButton/sendButton';
import styles from './App.module.css';

const baseResponseUrl = process.env.REACT_APP_BASE_RES_URL;

export type RecordingStatus = 'ready' | 'recording' | 'recorded';

export const App = () => {
  const [currentRecordingStatus, setCurrentRecordingStatus] = useState<
    RecordingStatus
  >('ready');

  const [responseUrl, setResponseUrl] = useState<string>('');
  const [slackId, setSlackId] = useState<string>('');
  const [recordedBlob, setRecordedBlob] = useState<any>();

  useEffect(() => {
    const params = window.location.search;
    const parsedParams = queryString.parse(params);
    const { sender, p1, p2, p3 } = parsedParams;
    const responseUrl = `${baseResponseUrl}/${p1}/${p2}/${p3}`;
    setResponseUrl(responseUrl);
    if (typeof sender === 'string') {
      setSlackId(sender);
    }
  }, []);

  function toggleRecording() {
    if (currentRecordingStatus === 'recording')
      return setCurrentRecordingStatus('recorded');
    return setCurrentRecordingStatus('recording');
  }

  function saveRecordedBlob(blob: any) {
    setRecordedBlob(blob);
  }

  return (
    <div className={styles.app}>
      <Header currentRecordingStatus={currentRecordingStatus} />
      <div className={styles.container}>
        <RecordingButton
          currentRecordingStatus={currentRecordingStatus}
          onClickRecord={() => toggleRecording()}
        />
        <SendButton
          currentRecordingStatus={currentRecordingStatus}
          slackId={slackId}
          responseUrl={responseUrl}
          recordedBlob={recordedBlob}
        />
      </div>
      <Recorder
        currentRecordingStatus={currentRecordingStatus}
        saveBlob={saveRecordedBlob}
      />
    </div>
  );
};
