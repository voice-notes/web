import React, { FunctionComponent } from 'react';
import { RecordingStatus } from '../RecordingStatus/recordingStatus';
import { ReactMic } from 'react-mic';
import { RecordingTimer } from '../Timer/timer';
import styles from './recorder.module.css';

interface RecorderProps {
  isRecording: boolean;
}

export const Recorder:FunctionComponent<RecorderProps> = ({isRecording}:RecorderProps) => {

  function onData(recordedBlob: any) {
    console.log('chunk of real-time data is: ', recordedBlob);
  }

  function onStop(recordedBlob: any) {
    console.log('recordedBlob is: ', recordedBlob);
  }
  
  return (
    <div className={styles.container}>
      <RecordingStatus isRecording={isRecording} />
      <ReactMic
        record={isRecording}
          className="sound-wave"
          onStop={onStop}
          onData={onData}
          strokeColor="#000000"
          backgroundColor="#0A9E74"
      />
      <RecordingTimer isRecording={isRecording} />
    </div> 
  );
}
