import React from 'react';
import Nav from './Nav';
import LogoPic from '../img/mk-sketch.png';

export default function Header(props) {
  return(
    <div className="header">
      <img src={LogoPic} alt="Logo Picture" />
      <Nav handleNavClick={props.handleNavClick}/>
    </div>
  );
}

