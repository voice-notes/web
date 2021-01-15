import React, { useState, useEffect } from "react";
import { Header } from "../Header/header";
import { Recorder } from "../Recorder/recorder";
import { RecordingButton } from "../RecordingButton/recordingButton";
import styles from "./App.module.css";
import queryString from "query-string";

export const App = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [queryParams, setQueryParams] = useState({});

  useEffect(() => {
    const params = window.location.search;
    const parsedParams = queryString.parse(params);
    setQueryParams(parsedParams);
  }, []);

  function toggleRecording() {
    setIsRecording(!isRecording);
  }

  return (
    <div className={styles.app}>
      <Header isRecording={isRecording} />
      <RecordingButton
        isRecording={isRecording}
        onClickRecord={() => toggleRecording()}
      />
      <Recorder isRecording={isRecording} />
    </div>
  );
};
