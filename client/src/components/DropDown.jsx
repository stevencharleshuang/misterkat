import React from 'react';
import { Link } from 'react-router-dom';

export default class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDropDown: false,
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
      // <Link to="/misterkat-adventures">
        <div 
          className="nav-btn" 
          id="misterkat-adventures" 
          // onClick={this.props.handleNavClick}
          onClick={this.showDropDown}
        >
          MisterKat Adventures
          {
            this.state.displayDropDown
            ? <ul className="dropdown">
              <li className="dropdown-item" id="local">
                Local
              </li>
              <li className="dropdown-item" id="east-coast">
                East Coast
              </li>
              <li className="dropdown-item" id="usa">
                USA
              </li>
              <li className="dropdown-item" id="international">
                International
              </li>
            </ul>
            : null
          }
        </div>
      // </Link>
    );
  }
}