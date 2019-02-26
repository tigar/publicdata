import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Testing out React</h1> 
          <p>
            Starting point.
          </p>
        </header>
        <graphList />
      </div>
    );
  }
}

export default App;
