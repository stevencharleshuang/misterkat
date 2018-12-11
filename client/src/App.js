import React from 'react';
import './App.css';
import Header from './components/Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navSelection: ''
    };
  }
  handleNavClick = (e) => {
    // console.log('Nav button clicked!', e.target.id);
    this.setState(({
      navSelection: e.target.id
    }));
  }
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Header handleNavClick={this.handleNavClick}/>
      </div>
    );
  }
}

export default App;
