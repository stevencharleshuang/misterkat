import React from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import LogoPic from '../img/mk-sketch.png';

export default function Header(props) {
  return(
    <div className="header">
      {props.scroll > props.top 
        ? null : <Link to="/"><img src={LogoPic} alt="Logo" /></Link>}
      <Nav 
        displayDropDown={props.displayDropDown}
        handleNavClick={props.handleNavClick}
        scroll={props.scroll}
        top={props.top}
      />
    </div>
  );
}

