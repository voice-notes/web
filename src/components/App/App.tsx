import React, { useState, useEffect } from 'react';

import {
  Header,
  Player,
  PlayButton,
  Recorder,
  RecordingButton,
  SendButton,
} from '../index';
import { returnParsedParams } from '../../utils/index';
import styles from './App.module.css';
import { REACT_APP_BASE_RES_URL } from '../../envVarConfig';

export type RecordingStatus = 'ready' | 'recording' | 'recorded';

export const App = () => {
  const [recordingStatus, setRecordingStatus] = useState<RecordingStatus>(
    'ready'
  );

  const [responseUrl, setResponseUrl] = useState<string>('');
  const [slackId, setSlackId] = useState<string>('');
  const [recordedBlob, setRecordedBlob] = useState<any>({});
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    const { sender, p1, p2, p3 } = returnParsedParams();
    const responseUrl = `${REACT_APP_BASE_RES_URL}/${p1}/${p2}/${p3}`;
    setResponseUrl(responseUrl);
    if (typeof sender === 'string') {
      setSlackId(sender);
    }
  }, []);

  const toggleRecording = () => {
    if (recordingStatus === 'recording') return setRecordingStatus('recorded');
    return setRecordingStatus('recording');
  };

  const saveRecordedBlob = (blob: any) => {
    setRecordedBlob(blob);
  };

  const returnBlobURL = () => {
    if (recordedBlob.blobURL !== undefined) {
      return recordedBlob.blobURL;
    }
  };

  return (
    <div className={styles.app}>
      <Header recordingStatus={recordingStatus} />
      <div className={styles.container}>
        <PlayButton
          recordingStatus={recordingStatus}
          setIsPlaying={setIsPlaying}
        />
        <RecordingButton
          recordingStatus={recordingStatus}
          onClickRecord={() => toggleRecording()}
        />
        <SendButton
          recordingStatus={recordingStatus}
          slackId={slackId}
          responseUrl={responseUrl}
          recordedBlob={recordedBlob}
        />
      </div>
      <Recorder recordingStatus={recordingStatus} saveBlob={saveRecordedBlob} />
      <Player
        url={returnBlobURL()}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </div>
  );
};
