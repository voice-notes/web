import React from "react";
import styles from "./recordingButton.module.css";
import { IconContext } from "react-icons";
import { TiMediaRecordOutline, TiMediaStopOutline } from "react-icons/ti";

import { RecordingStatus } from "../App/App";
interface Props {
  currentRecordingStatus: RecordingStatus;
}

interface ButtonProps {
  onClickRecord: () => void;
  currentRecordingStatus: RecordingStatus;
}

export const RecordingButton = ({
  onClickRecord,
  currentRecordingStatus,
}: ButtonProps) => {
  return (
    <button
      className={styles.button}
      id="record"
      onClick={() => onClickRecord()}
    >
      <RecordingButtonIcon currentRecordingStatus={currentRecordingStatus} />
      <RecordingButtonText currentRecordingStatus={currentRecordingStatus} />
    </button>
  );
};

export const RecordingButtonText = ({ currentRecordingStatus }: Props) => {
  const mediaAction = currentRecordingStatus === "recording" ? "Stop" : "Start";
  if (currentRecordingStatus === "recorded") {
    return <span className={styles.text}>Re-record</span>;
  }
  return <span className={styles.text}>{mediaAction} recording</span>;
};

export const RecordingButtonIcon = ({ currentRecordingStatus }: Props) => {
  const iconComponent =
    currentRecordingStatus === "recording" ? (
      <TiMediaStopOutline />
    ) : (
        <TiMediaRecordOutline />
      );
  return (
    <IconContext.Provider value={{ className: styles.icons }}>
      {iconComponent}
    </IconContext.Provider>
  );
};
