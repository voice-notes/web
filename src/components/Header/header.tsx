import React from 'react';
import styles from './header.module.css';

interface HeaderProps {
  children: React.ReactNode;
}

export const Header: React.FunctionComponent<HeaderProps> = (
  props: HeaderProps
) => {
  return (
    <div className={styles.header}>
      <h1>{props.children}</h1>
    </div>
  );
};
