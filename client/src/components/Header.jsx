import React from 'react';
import Nav from './Nav';
import MKSketch from '../img/mk-sketch.png';

export default function Header(props) {
  return(
    <div className="header">
      <img src={MKSketch} />
      <Nav handleNavClick={props.handleNavClick}/>
    </div>
  );
}

