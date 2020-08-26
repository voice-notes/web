import React from 'react';
import styles from './sendButton.module.css';

interface Props {
  status: string;
}

export const SendButton = ({ status }: Props) => {
  if (status === 'recorded') {
    return (
      <button className={styles.btn} id="send">
        <span className={styles.text}>send</span>
      </button>
    );
  } else {
    return null;
  }
};
