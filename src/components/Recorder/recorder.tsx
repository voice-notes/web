import React, { Component } from 'react';
import { RecordingStatus } from '../RecordingStatus/recordingStatus';
import { ReactMic } from 'react-mic';
import { RecordingTimer } from '../Timer/timer';
import styles from './recorder.module.css';

type recorderState = {
  isRecording: boolean;
  buttonText: string;
};

export class Recorder extends Component<{}, recorderState> {
  constructor(props: {}, state: recorderState) {
    super(props, state);
    this.state = {
      isRecording: false,
      buttonText: 'Start',
    };
  }
  toggleRecording() {
    if (this.state.isRecording) {
      this.setState({ isRecording: false, buttonText: 'Start' });
      return;
    }
    this.setState({ isRecording: true, buttonText: 'Stop' });
  }

  onData(recordedBlob: any) {
    console.log('chunk of real-time data is: ', recordedBlob);
  }

  onStop(recordedBlob: any) {
    console.log('recordedBlob is: ', recordedBlob);
  }

  render() {
    const { buttonText, isRecording } = this.state

    return (
      <div>
        <button className={styles.btn} id="record" onClick={() => this.toggleRecording()}>
          {buttonText} recording
        </button>
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
      </div>
    );
  }
}
