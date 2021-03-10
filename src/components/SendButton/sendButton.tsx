import React, { useEffect, useState } from 'react';
import styles from './sendButton.module.css';
import { IconContext } from 'react-icons';
import { FiArrowRight } from 'react-icons/fi';
import axios from 'axios';

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
    try {
      sendToAWS();
      sendToBackEnd();
    } catch (error) {
      console.error(error);
    }
  };

  const sendToAWS = async () => {
    try {
      const response = await axios.post('AWS url', { blob: recordedBlob });
      const { url } = response.data;
      setAudioUrl(url);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (audioUrl !== '') {
      sendToBackEnd();
    }
  }, [audioUrl]);

  const sendToBackEnd = async () => {
    await axios.post('backend url', {
      slackId: slackId,
      responseUrl: responseUrl,
      audioUrl: audioUrl,
    });
  };

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
