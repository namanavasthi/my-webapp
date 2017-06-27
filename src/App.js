import React, { Component } from 'react';
import logo from './main_large.PNG';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="header-wrapper">
            <span className="header-span">Home</span>
            <span className="header-span">About</span>
            <span className="header-span">Projects</span>
            <span className="header-span">Contact</span>
          </div>
        </div>
        <div className="home-wrapper">
          <div className="home-image">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="home-content">
            <span className="home-heading">Naman Avasthi</span>
            <br />
            <span className="home-content-text">Here is a page about an awesome guy named, Naman Avasthi who is currently studying his Masters in Computer Science at University of Southern California. </span>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
