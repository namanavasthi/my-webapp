import React, { Component } from 'react';

import Jumbotron from './Jumbotron.js';
import About from './About.js';



import '../CSS/HomePage.css';


class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <div className="row">
          <Jumbotron />
          <About />
        </div>
      </div>
    );
  }
}

export default HomePage;
