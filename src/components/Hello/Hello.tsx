import * as React from 'react';
import styles from './Hello.module.css';

interface HelloProps {
  appName: string;
}

export const Hello = (props: HelloProps) => {
  return <h1 className={styles.header}>Say Hello to {props.appName}!</h1>;
};
