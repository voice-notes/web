import React, { useEffect, useState } from 'react';
import styles from './sendButton.module.css';
import { IconContext } from 'react-icons';
import { FiArrowRight } from 'react-icons/fi';
import axios from 'axios';

import { REACT_APP_BACKEND_GRAPHQL_ENDPOINT, REACT_APP_AWS_ENDPOINT } from '../../envVarConfig';
import { sendFile } from '../../utils/sendFile';
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
    } catch (error) {
      console.error(error);
    }
  };

  const sendToAWS = async () => {
    const keyName = `${slackId}@${Date.now()}.wav`
    const s3ObjectUrl = `${REACT_APP_AWS_ENDPOINT + "/" + keyName}`
    try {
      await sendFile(recordedBlob, slackId, keyName);
      setAudioUrl(s3ObjectUrl)
      
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log(audioUrl)
    const sendToBackEnd = async () => {
      await axios.post(`${REACT_APP_BACKEND_GRAPHQL_ENDPOINT}`, {
       query: `mutation {
        createNote(slackID: "${slackId}", responseUrl: "${responseUrl}", audioUrl: "${audioUrl}"){responseUrl}
      }`
    })
  }
    if (audioUrl !== '') {
      sendToBackEnd();
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
