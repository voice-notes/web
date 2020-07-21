import * as React from 'react';
import { runInThisContext } from 'vm';

type recordingState = {
  isRecording: boolean;
  buttonText: string;
};

interface emptyProps {}

export class OptionBar extends React.Component<emptyProps, recordingState> {
  constructor(props: emptyProps, state: recordingState) {
    super(props, state);
    this.state = {
      isRecording: false,
      buttonText: "Start",
    };
  }

  toggleRecording() {
    if(this.state.isRecording) {
      this.setState({isRecording: false });
      this.setState({buttonText: "Start"});
    } else {
      this.setState({ isRecording: true });
      this.setState({ buttonText: "Stop"});
    }
  }

  render() {
    return (
      <div>
        <button id="record" onClick={() => this.toggleRecording()}>
          {this.state.buttonText} recording
        </button>
      </div>
    );
  }
}
