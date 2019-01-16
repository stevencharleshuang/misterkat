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

  // Stick Nav pattern adapted from https://mattgaskey.com/blog/sticky-nav-in-react/
  componentDidMount() {
    const nav = document.querySelector('nav');
    const main = document.querySelector('main');
    main.style.paddingTop = `${nav.offsetTop}`;
    this.setState({ top: nav.offsetTop, height: nav.offsetHeight, navInitialTop: nav.offsetTop  });
    window.addEventListener('scroll', this.handleScroll);
    // console.log('App', this.state);
  };
  
  componentDidUpdate() {
    const header = document.querySelector('.header');
    header.style.top = `-${this.state.scroll}px`;
    // this.state.scroll >= this.state.navInitialTop
    // ? document.body.style.paddingTop = `${this.state.height}px` 
    // : document.body.style.paddingTop = 0;
    // if (this.state.scroll >= this.state.navInitialTop) {
      // document.body.style.paddingTop = `${this.state.height}px`;
      // console.log('body style applied');
    // } else {
    //   document.body.style.paddingTop = 0;
    // }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };
  
  handleScroll = () => {
    this.setState({ 
      scroll: window.scrollY,
      top: `-${this.state.scroll}` 
    });
  };

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
    // console.log('App.js State: ', this.state);
    return (
      <div className="App">
        <Header 
          displayDropDown={this.state.displayDropDown}
          handleNavClick={this.handleNavClick}
          scroll={this.state.scroll}
          top={this.state.top}
          navInitialTop={this.state.navInitialTop}
        />
        <main onScroll={this.handleScroll}>
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
