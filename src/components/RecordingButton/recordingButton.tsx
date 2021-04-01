import React from 'react';
import { IconContext } from 'react-icons';
import { FiCircle, FiSquare } from 'react-icons/fi';

import styles from './recordingButton.module.css';

import { RecordingStatus } from '../App/App';

interface Props {
  onClickRecord: () => void;
  recordingStatus: RecordingStatus;
}

export const RecordingButton = (props: Props) => {
  const returnButtonIcon = () => {
    const iconComponent =
      recordingStatus === 'recording' ? (
        <FiSquare />
      ) : (
        <FiCircle />
      );
    return (
      <IconContext.Provider value={{ className: styles.icon }}>
        {iconComponent}
      </IconContext.Provider>
    );
  };

  const returnButtonText = () => {
    const mediaAction = recordingStatus === 'recording' ? 'Stop' : 'Record';
    if (recordingStatus === 'recorded') {
      return <span className='text'>Re-record</span>;
    }
    return <span className='text'>{mediaAction}</span>;
  };

  const { onClickRecord, recordingStatus } = props;
  return (
    <div className='buttonContainer'>
      {returnButtonText()}
      <button
        className='button'
        id="record"
        onClick={() => onClickRecord()}
      >
        {returnButtonIcon()}
      </button>
    </div>
  );
};
