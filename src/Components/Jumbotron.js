import React, { Component } from 'react';

import logo from '../Assets/Images/png-8/logo1.png';
import rick from '../Assets/Images/naman/rick.jpg';

import '../CSS/Jumbotron.css';

import Social from './SubComponents/Social.js';


/*
  -- add this below portrait
  <div className="box">
    <img src={logo} className="bg-img" />
  </div>
*/

class Jumbotron extends Component {
  render() {
    return (
      <div className="Jumbotron">
        <div className="container">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <img src={logo} className="logo" />
            <div className="text">
              <h1>Naman Avasthi.</h1>
              <h1>Computer Science</h1>
              <h1>Masters, Based In</h1>
              <h1>Los Angeles.</h1>
              <h3>
                <span className="social-media">
                  <Social />
                </span>
              </h3>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <img src={rick} className="portrait pull-right"/>

          </div>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
