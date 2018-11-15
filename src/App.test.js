import React, { Component } from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';




class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            
            <h1 className="App-title">Welcome to React</h1>
            <MainMenu />
          </header>
          <div>
            <Route exact path="/" component={AppViews.Home} />
            <Route exact path="/about" component={AppViews.About} />
            <Route exact path="/code" component={AppViews.Code} />
            <Route exact path="/contact" component={AppViews.Contact} />
            <Route exact path="/presence" component={AppViews.Presence} />
          </div>
        </div>
      </Router>
    );
  }
}

const Home = () => (
  <div>
    Home
  </div>
)

const About = () => (
  <div>
    About
  </div>
)

const Code = () => (
  <div>
    Code
  </div>
)

const Contact = () => (
  <div>
    Contact
  </div>
)

const info = () => (
  <div>
    info
  </div>
)

const MainMenu = () => {
return (
<div>
  <Link to="/">
    <button>home</button>
  </Link>
  <Link to="/about">
    <button>About</button>
  </Link>
  <Link to="/code">
    <button>code</button>
  </Link>
  <Link to="/contact">
    <button>contact</button>
  </Link>
  <Link to="/info">
    <button>info</button>
  </Link>
</div>
);
};

export default App;