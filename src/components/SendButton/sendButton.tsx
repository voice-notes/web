import React from 'react';
import styles from './sendButton.module.css';
import { IconContext } from 'react-icons';
import { FiArrowRight } from 'react-icons/fi';

interface Props {
  status: string;
}

export const SendButton = ({ status }: Props) => {
  if (status === 'recorded') {
    return (
      <button className={styles.btn} id="send">
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
