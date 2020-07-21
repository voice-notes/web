import * as React from 'react';
import { Header } from '../Header/header';
import { OptionBar } from '../OptionBar/optionBar';
import './App.css';

export const App = () => {
  return (
    <div className="App">
      <Header img="../../assets/cassette.png">Taped It</Header>
      <OptionBar />
    </div>
  );
};
