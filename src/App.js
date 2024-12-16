import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
           Hello From Bangladesh
        </p>
        <h1>I'm a Professional Software Engineer</h1>
        <h1>I'm a full stack engineer</h1>
        <h2>I have two years experience</h2>
        <h3>Language</h3>
        <ul>
          <li>Java</li>
          <li>Javascript</li>
          <li>PHP</li>
        </ul>
        <h4>Framwork</h4>
        <ul>
          <li>React.js</li>
          <li>Next.js</li>
        </ul>
      </div>
    );
  }
}

export default App;
