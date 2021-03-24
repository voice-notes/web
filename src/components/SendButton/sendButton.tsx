import React, { useEffect, useState } from 'react';
import styles from './sendButton.module.css';
import { IconContext } from 'react-icons';
import { FiArrowRight } from 'react-icons/fi';
import axios from 'axios';

import { REACT_APP_BACKEND_GRAPHQL_ENDPOINT } from '../../envVarConfig';
import { sendFile } from '../../utils/sendFile';
import { RecordingStatus } from '../App/App';

interface Props {
  currentRecordingStatus: RecordingStatus;
  slackId: string;
  responseUrl: string;
  recordedBlob: Blob;
}

export const SendButton = ({
  currentRecordingStatus,
  slackId,
  responseUrl,
  recordedBlob,
}: Props) => {
  // const [audioUrl, setAudioUrl] = useState<string>('');

  const handleSend = async () => {
    try {
      sendToAWS();
    } catch (error) {
      console.error(error);
    }
  };

  const sendToAWS = async () => {
    try {
      sendFile(recordedBlob, slackId);
      // const { url } = response.data;
      // setAudioUrl(url);
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect(() => {
  //   const sendToBackEnd = async () => {
  //     await axios.post(`${REACT_APP_BACKEND_GRAPHQL_ENDPOINT}`, {
  //       slackId: slackId,
  //       responseUrl: responseUrl,
  //       audioUrl: audioUrl,
  //     });
  //   };
  //   if (audioUrl !== '') {
  //     sendToBackEnd();
  //   }
  // }, [audioUrl, slackId, responseUrl]);

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
