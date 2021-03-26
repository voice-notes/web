import React, { useState, useEffect } from 'react';

import { Player } from '../Player/player';
import { Header } from '../Header/header';
import { Recorder } from '../Recorder/recorder';
import { RecordingButton } from '../RecordingButton/recordingButton';
import { SendButton } from '../SendButton/sendButton';
import { PlayButton } from '../PlayButton/playButton';
import { returnParsedParams } from '../../utils/returnParsedParams';
import styles from './App.module.css';
import { REACT_APP_BASE_RES_URL } from '../../envVarConfig';

export type RecordingStatus = 'ready' | 'recording' | 'recorded';

export const App = () => {
  const [currentRecordingStatus, setCurrentRecordingStatus] = useState<
    RecordingStatus
  >('ready');

  const [responseUrl, setResponseUrl] = useState<string>('');
  const [slackId, setSlackId] = useState<string>('');
  const [recordedBlob, setRecordedBlob] = useState<any>();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const { sender, p1, p2, p3 } = returnParsedParams();
    const responseUrl = `${REACT_APP_BASE_RES_URL}/${p1}/${p2}/${p3}`;
    setResponseUrl(responseUrl);
    if (typeof sender === 'string') {
      setSlackId(sender);
    }
  }, []);

  const toggleRecording = () => {
    return currentRecordingStatus === 'recording'
      ? setCurrentRecordingStatus('recorded')
      : setCurrentRecordingStatus('recording');
  };

  const saveRecordedBlob = (blob: any) => {
    setRecordedBlob(blob);
  };

  const returnBlobURL = () => {
    // eslint-disable-next-line no-prototype-builtins
    if (recordedBlob && recordedBlob.hasOwnProperty('blobURL')) {
      return recordedBlob.blobURL;
    }
  };

  return (
    <div className={styles.app}>
      <Header currentRecordingStatus={currentRecordingStatus} />
      <div className={styles.container}>
        <PlayButton
          currentRecordingStatus={currentRecordingStatus}
          setIsPlaying={setIsPlaying}
        />
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
      <Player
        url={returnBlobURL()}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </div>
  );
};
