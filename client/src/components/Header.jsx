import React from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import LogoPic from '../img/mk-sketch.png';

export default function Header(props) {
  return(
    <div className="header">
      <Link to="/"><img src={LogoPic} alt="Logo Picture" /></Link>
      <Nav handleNavClick={props.handleNavClick}/>
    </div>
  );
}

