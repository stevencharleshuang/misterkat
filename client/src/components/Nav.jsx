import React from 'react';
import DropDown from './DropDown';
import { Link } from 'react-router-dom';

export default function Nav(props) {
  return(
    <nav>
      <DropDown handleNavClick={props.handleNavClick} />
      <Link to="/meet-misterkat">
        <div 
          className="nav-btn" 
          id="meet-misterkat"  
          onClick={props.handleNavClick}>
          Meet MisterKat
        </div>
      </Link>
      <Link to="/katatatouille">
        <div 
          className="nav-btn" 
          id="katatatouille"  
          onClick={props.handleNavClick}>
          Katatatouille
        </div>
      </Link>
    </nav>
  );
}