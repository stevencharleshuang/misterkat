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
    // console.log('DropDown State', this.state);
    return(
      <div 
          className="nav-btn dropdown" 
          id="misterkat-adventures" 
          onClick={this.showDropDown}
          // onClick={this.props.handleNavClick}
          >
          MisterKat Adventures
          {
            this.state.displayDropDown
            ? <ul className="dropdown-list">
              <li 
                className="dropdown-list-item" 
                id="local"
              >
              <Link to="/misterkat-adventures">
                Local
              </Link>
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