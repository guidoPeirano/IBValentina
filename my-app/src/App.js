import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import { Redirect } from 'react-router';
import logo from './logo.svg';
import Home from './pages/home';
import About from './pages/about';
import Top from './pages/top';
import './App.css';
import Square from './Square';

class App extends Component {

  componentDidMount(){
    document.title = "Tus viajes"
  }

  render() {
    return (
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Top Trips</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Top} />
      </div>
    </Router>
    );
  }
}




export default App;
