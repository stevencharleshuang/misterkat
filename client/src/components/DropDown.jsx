import React from 'react';
import { Link } from 'react-router-dom';

export default class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDropDown: this.props.displayDropDown,
    }
  }
  
  showDropDown = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      displayDropDown: !prevState.displayDropDown,
    }));
  }

  hideDropDown = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      // displayDropDown: false,
      displayDropDown: !prevState.displayDropDown,
    }));
  }

  render() {
    console.log('DropDown State', this.state);
    return(
      <div 
          className="nav-btn dropdown" 
          id="misterkat-adventures" 
          // onClick={this.props.handleNavClick}
          >
          <Link to="/misterkat-adventures" onClick={this.showDropDown}>
          MisterKat Adventures
          </Link>
          {
            this.state.displayDropDown
            ? <ul className="dropdown-list">
              <li 
                className="dropdown-list-item" 
                id="local"
              >
                Local
              </li>
              <li 
                className="dropdown-list-item" 
                id="east-coast"
              >
                East Coast
              </li>
              <li 
                className="dropdown-list-item" 
                id="usa"
              >
                USA
              </li>
              <li 
                className="dropdown-list-item" 
                id="international"
              >
                International
              </li>
            </ul>
            : null
          }
        </div>
    );
  }
}