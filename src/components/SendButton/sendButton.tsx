import React from 'react';

interface Props {
  status: string;
}

export const SendButton = ({ status }: Props) => {
  if (status === 'recorded') {
    return <span>send</span>;
  } else {
    return null;
  }
};
