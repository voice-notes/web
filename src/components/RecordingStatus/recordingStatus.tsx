import React, { FunctionComponent } from 'react';
import './recordingStatus.css';

interface StatusProps {
  isRecording: boolean;
}

export const RecordingStatus: FunctionComponent<StatusProps> = (
  props: StatusProps
) => {
  if (props.isRecording) {
    return <div className="status">Recording...</div>;
  }
  return <div className="status">Ready to record...</div>;
};
