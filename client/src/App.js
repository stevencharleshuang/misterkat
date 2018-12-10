import React from 'react';
import MKSketch from './img/mk-sketch.png';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hi Dave!</h1>
        <img src={MKSketch} />
      </div>
    );
  }
}

export default App;
