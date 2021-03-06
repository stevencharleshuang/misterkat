import React from 'react';
import { Switch, Route, } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Blogs from './components/Blogs';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Recipes from './components/Recipes';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navSelection: '',
    };
  }

  // Stick Nav pattern adapted from https://mattgaskey.com/blog/sticky-nav-in-react/
  componentDidMount() {
    const nav = document.querySelector('nav');
    const main = document.querySelector('main');
    const header = document.querySelector('.header');

    main.style.top = `${header.offsetHeight}px`;
    this.setState({ 
      top: nav.offsetTop, 
      height: nav.offsetHeight, 
      navInitialTop: nav.offsetTop  
    });
    window.addEventListener('scroll', this.handleScroll);
  };
  
  componentDidUpdate() {
    const header = document.querySelector('.header');
    const main = document.querySelector('main');
    const mainHeight = main.offsetTop;
    const footer = document.querySelector('footer');

    header.style.top = `-${this.state.scroll}px`;
    footer.style.bottom = `-${mainHeight}px`;
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
    this.setState(({
      navSelection: e.target.id
    }));

    if (e.target.id !== 'misterkat-adventures') {
      this.setState({
        displayDropDown: false,
      });
    }
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
            <Route 
              path="/misterkat-adventures" 
              render={props => <Blogs {...props} navSelection={this.state.navSelection} />}
            />
            <Route path="/meet-misterkat" component={About} />
            <Route path="/katatatouille" component={Recipes} />
            <Route path="/" component={Hero} />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
