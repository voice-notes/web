import React, { useEffect, useState } from 'react';
import styles from './sendButton.module.css';
import { IconContext } from 'react-icons';
import { FiArrowRight } from 'react-icons/fi';

import { REACT_APP_AWS_ENDPOINT } from '../../envVarConfig';
import { sendFileToCloud } from '../../utils/sendFileToCloud';
import { sendToBackEnd } from '../../utils/sendToBackEnd';
import { RecordingStatus } from '../App/App';

interface Props {
  currentRecordingStatus: RecordingStatus;
  slackId: string;
  responseUrl: string;
  recordedBlob: any;
}

export const SendButton = ({
  currentRecordingStatus,
  slackId,
  responseUrl,
  recordedBlob,
}: Props) => {
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

  if (currentRecordingStatus === 'recorded') {
    return (
      <button className={styles.button} id="send" onClick={handleSend}>
        <IconContext.Provider value={{ className: styles.icons }}>
          <FiArrowRight />
        </IconContext.Provider>
        <span className={styles.text}>send</span>
      </button>
    );
  } else {
    return null;
  }
};
