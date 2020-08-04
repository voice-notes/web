import React from 'react';

interface Props {
  isRecording: boolean;
}

export const Title = (props: Props) => {
  if (props.isRecording) return <h1>Taping It</h1>;
  return <h1>Tape It</h1>;
};
