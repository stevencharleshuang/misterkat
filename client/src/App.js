import React from 'react';
import { Switch, Route, } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Blogs from './components/Blogs';
import Header from './components/Header';
import Hero from './components/Hero';
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
    // console.log(this.state);
    return (
      <div className="App">
        <Header handleNavClick={this.handleNavClick}/>
        <Switch>
          <Route path="/meet-misterkat" component={About} />
          <Route path="/misterkat-adventures" component={Blogs} />
          <Route path="/katatatouille" component={Recipes} />
          <Route path="/" component={Hero} />
        </Switch>
      </div>
    );
  }
}

export default App;
