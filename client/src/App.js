import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Blogs from './components/Blogs';
import Recipes from './components/Recipes';

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
        <Switch>
          <Route path="/misterkat-adventures" component={Blogs} />
          <Route path="/meet-misterkat" component={About} />
          <Route path="/katatatouille" component={Recipes} />
        </Switch>
      </div>
    );
  }
}

export default App;
