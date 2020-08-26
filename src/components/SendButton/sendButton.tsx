import React from 'react';
import styles from './sendButton.module.css';
import { IconContext } from 'react-icons';
import { AiOutlineArrowRight } from 'react-icons/ai';

interface Props {
  status: string;
}

export const SendButton = ({ status }: Props) => {
  if (status === 'recorded') {
    return (
      <button className={styles.btn} id="send">
        <IconContext.Provider value={{ className: styles.icons }}>
          <AiOutlineArrowRight />
        </IconContext.Provider>
        <span className={styles.text}>send</span>
      </button>
    );
  } else {
    return null;
  }
};
