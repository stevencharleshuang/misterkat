import React from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import LogoPic from '../img/mk-sketch.png';

export default function Header(props) {
  return(
    <div className="header">
      {props.scroll > props.navInitialTop ?
        null : 
        <div className="header-logo"><h1>MisterKat</h1><Link to="/"><img src={LogoPic} alt="Logo" /></Link></div>}
      <Nav 
        displayDropDown={props.displayDropDown}
        handleNavClick={props.handleNavClick}
        scroll={props.scroll}
        top={props.top}
        navInitialTop={props.navInitialTop}
      />
    </div>
  );
}

