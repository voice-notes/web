import * as React from 'react';
import { Hello } from '../Hello/Hello';
import styles from './App.module.css';

export const App = () => {
  return (
    <div className={styles.app}>
      <Hello appName="Taped it" />
    </div>
  );
};
