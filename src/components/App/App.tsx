import * as React from "react";
import { Hello } from "../Hello/Hello";
import "./App.css";

export const App = () => {
  var testCommas = { hello: 1, test: 2, };
  return (
    <div className="App">
      <Hello appName="Taped it" />
    </div>
  );
};
