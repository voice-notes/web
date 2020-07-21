import * as React from 'react';

interface StatusProps {
  isRecording: boolean
}

export const RecordingStatus: React.FunctionComponent<StatusProps> = (
  props: StatusProps
) => {
  return (
    <div className='status'>Ready to record..</div>
  )
}