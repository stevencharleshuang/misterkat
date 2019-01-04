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
      // navSelection: '',
      // displayDropDown: false,
    };
  }

  handleNavClick = (e) => {
    console.log('Nav button clicked!', e.target.id);
    // this.setState(({
    //   navSelection: e.target.id
    // }));
    // if (e.target.id !== 'misterkat-adventures') {
    //   this.setState({
    //     displayDropDown: false,
    //   });
    // }
  }
  render() {
    console.log('App.js State: ', this.state);
    return (
      <div className="App">
        <Header 
          displayDropDown={this.state.displayDropDown}
          handleNavClick={this.handleNavClick}
        />
        <main>
          <Switch>
            <Route path="/meet-misterkat" component={About} />
            <Route path="/misterkat-adventures" component={Blogs} />
            <Route path="/katatatouille" component={Recipes} />
            <Route path="/" component={Hero} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
