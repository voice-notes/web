import * as React from 'react';
import { RecordingStatus } from '../RecordingStatus/recordingStatus';
import { ReactMic } from 'react-mic';
import { RecordingTimer } from '../Timer/timer';
import './recorder.css';

type recorderState = {
  isRecording: boolean;
  buttonText: string;
};

interface emptyProps {}

export class Recorder extends React.Component<emptyProps, recorderState> {
  constructor(props: emptyProps, state: recorderState) {
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
    return (
      <div className="container">
        <RecordingStatus isRecording={this.state.isRecording} />
        <ReactMic
          record={this.state.isRecording}
          className="sound-wave"
          onStop={this.onStop}
          onData={this.onData}
          strokeColor="#000000"
          backgroundColor="#FF4081"
        />
        <button id="record" onClick={() => this.toggleRecording()}>
          {this.state.buttonText} recording
        </button>
        <RecordingTimer isRecording={this.state.isRecording} />
      </div>
    );
  }
}
