import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav(props) {
  return(
    <nav>
      <Link to="/misterkat-adventures">
        <div 
          className="nav-btn" 
          id="misterkat-adventures" 
          onClick={props.handleNavClick}>
          MisterKat Adventures
        </div>
      </Link>
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