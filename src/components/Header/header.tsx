import React, { FunctionComponent } from 'react';
import './header.css'

interface HeaderProps { 
  img: string 
  children: React.ReactNode
}

export const Header: FunctionComponent<HeaderProps> = (props) => {
  return(
    <div className="header" style={ {backgroundImage: `${props.img}`} } >
      <h1>
        { props.children }
      </h1>
    </div>
  );
};

