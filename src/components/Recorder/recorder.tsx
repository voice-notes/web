import React, { Component } from 'react';
import { RecordingStatus } from '../RecordingStatus/recordingStatus';
import { ReactMic } from 'react-mic';
import { RecordingTimer } from '../Timer/timer';
import styles from './recorder.module.css';

interface RecorderProps {
  isRecording: boolean;
}

export class Recorder extends Component<RecorderProps> {

  onData(recordedBlob: any) {
    console.log('chunk of real-time data is: ', recordedBlob);
  }

  onStop(recordedBlob: any) {
    console.log('recordedBlob is: ', recordedBlob);
  }

  render() {
    const { isRecording } = this.props;
    return (
      <div className={styles.container}>
        <RecordingStatus isRecording={isRecording} />
        <ReactMic
          record={isRecording}
            className="sound-wave"
            onStop={this.onStop}
            onData={this.onData}
            strokeColor="#000000"
            backgroundColor="#0A9E74"
        />
        <RecordingTimer isRecording={isRecording} />
      </div> 
    );
  }
}
