import React, { useState } from "react";
import { Header } from "../Header/header";
import { Recorder } from "../Recorder/recorder";
import { RecordingButton } from "../RecordingButton/recordingButton";
import { SendButton } from "../SendButton/sendButton";
import styles from "./App.module.css";

export type RecordingStatus = "ready" | "recording" | "recorded";

export const App = () => {
  const [isRecording, setIsRecording] = useState<RecordingStatus>("ready");

  function toggleRecording() {
    if (isRecording === "recording") return setIsRecording("recorded");
    return setIsRecording("recording");
  }

  return (
    <div className={styles.app}>
      <Header isRecording={isRecording} />
      <div className={styles.container}>
        <RecordingButton
          isRecording={isRecording}
          onClickRecord={() => toggleRecording()}
        />
        <SendButton isRecording={isRecording} />
      </div>
      <Recorder isRecording={isRecording} />
    </div>
  );
};
