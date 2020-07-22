import React from 'react';
import './header.css';

interface HeaderProps {
  img: string;
  children: React.ReactNode;
}

export const Header: React.FunctionComponent<HeaderProps> = (
  props: HeaderProps
) => {
  return (
    <div className="header" style={{ backgroundImage: `url(${props.img})` }}>
      <h1>{props.children}</h1>
    </div>
  );
};
