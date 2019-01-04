import React from 'react';
import { Link } from 'react-router-dom';

export default class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return(
      <Link to="/misterkat-adventures">
        <div 
          className="nav-btn" 
          id="misterkat-adventures" 
          onClick={this.props.handleNavClick}>
          MisterKat Adventures
        </div>
      </Link>
    );
  }
}