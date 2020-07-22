import * as React from 'react';
import { Header } from '../Header/header';
import { Recorder } from '../Recorder/recorder';
import './App.css';

export const App = () => {
  return (
    <div className="App">
      <Header img="/assets/tape.svg">Taped It</Header>
      <Recorder />
    </div>
  );
};
