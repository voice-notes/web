import React, { FunctionComponent } from 'react';

type recordingState = {
  isRecording: boolean
}

interface emptyProps {}

export class OptionBar extends React.Component<emptyProps, recordingState> {
  constructor(props: emptyProps, state: recordingState) {
    super(props, state)
    this.state = {
      isRecording: false
    }
  }

  startRecording() {
    this.setState({isRecording: true})
  }

  render() {
    return(
      <div>
        <button 
        id='record'
        onClick={() => this.startRecording()}>
          Start recording
        </button>
      </div>
    )
  }
}
