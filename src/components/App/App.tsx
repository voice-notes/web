import * as React from 'react';
import { Header } from '../Header/header';
import { Recorder } from '../Recorder/recorder';
import styles from './App.module.css';

export const App = () => {
  return (
    <div className={styles.app}>
      <Header>Taped It</Header>
      <Recorder />
    </div>
  );
};
