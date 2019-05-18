import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Square from './Square';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to La pagina de Valentina</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
        <Square square={1}/>
        <Square square={2}/>
        <Square square={3}/>
        <Square square={4}/>
        <Square square={5}/>
        </div>
        <div>
          <Square square={6}/>
        </div>
      </div>
    );
  }
}




export default App;
