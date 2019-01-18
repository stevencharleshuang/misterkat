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
          onMouseEnter={this.showDropDown}
          onMouseLeave={this.hideDropDown}
          // onClick={this.props.handleNavClick}
          >
          MisterKat Adventures
          {
            this.state.displayDropDown
            ? <ul className="dropdown-list">
              <Link to="/misterkat-adventures/local">
              <li 
                className="dropdown-list-item" 
                id="local"
              >
                Local
              </li>
              </Link>
              <Link to="/misterkat-adventures/east-coast">
                <li 
                  className="dropdown-list-item" 
                  id="east-coast"
                  >
                  East Coast
                </li>
              </Link>
              <Link to="/misterkat-adventures/usa">
                <li 
                  className="dropdown-list-item" 
                  id="usa"
                  >
                  USA
                </li>
              </Link>
              <Link to="/misterkat-adventures/international" >
                <li 
                  className="dropdown-list-item" 
                  id="international"
                  >
                  International
                </li>
              </Link>
            </ul>
            : null
          }
        </div>
    );
  }
}