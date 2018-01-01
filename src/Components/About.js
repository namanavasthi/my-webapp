import React, { Component } from 'react';

import '../CSS/HomePage.css';

import '../CSS/About.css';


class About extends Component {
  render() {
    return (
      <div className="About">
        <div className="container">
          <div className="col-lg-8 col-md-8 col-sm-10 col-xs-10 col-lg-offset-2 col-md-offset-2 col-sm-offset-1 col-xs-offset-1">
            <div className="content">
              <div className="row">
                <h2 className="about-text">ABOUT</h2>
                <h4 className="about-text">This is the about us page. Add in whtever data you want here!This is the about us page. Add in whtever data you want here!This is the about us page. Add in whtever data you want here!</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
