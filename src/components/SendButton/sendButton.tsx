import React, { useEffect, useState } from 'react';
import styles from './sendButton.module.css';
import { IconContext } from 'react-icons';
import { FiArrowRight } from 'react-icons/fi';

import { REACT_APP_AWS_ENDPOINT } from '../../envVarConfig';
import { sendFileToCloud, sendToBackEnd } from '../../utils/index';
import { RecordingStatus } from '../App/App';

interface Props {
  recordingStatus: RecordingStatus;
  slackId: string;
  responseUrl: string;
  recordedBlob: any;
}

export const SendButton = (props: Props) => {
  const { recordingStatus, slackId, responseUrl, recordedBlob } = props;

  const [audioUrl, setAudioUrl] = useState<string>('');

  const handleSend = async () => {
    const keyName = `${slackId}@${Date.now()}.wav`;
    const s3ObjectUrl = `${REACT_APP_AWS_ENDPOINT}/${keyName}`;
    try {
      sendFileToCloud(recordedBlob, keyName);
      setAudioUrl(s3ObjectUrl);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (audioUrl !== '') {
      sendToBackEnd(slackId, responseUrl, audioUrl);
    }
  }, [audioUrl, slackId, responseUrl]);

  if (recordingStatus === 'recorded') {
    return (
      <div className="buttonContainer">
        <span className="buttonLabelText">send</span>
        <button
          className="button"
          id="send"
          data-testid="sendButton"
          onClick={handleSend}
        >
          <IconContext.Provider value={{ className: styles.icon }}>
            <FiArrowRight />
          </IconContext.Provider>
        </button>
      </div>
    );
  } else {
    return null;
  }
};
