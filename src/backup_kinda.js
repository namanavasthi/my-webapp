import React, { Component } from 'react';
import logo from './images/main_large.png';
import my_face from './images/myface2.png'
import './App.css';

// var ReactDOM  = require('react-dom');
var Scroll    = require('../node_modules/react-scroll');

var Link       = Scroll.Link;
// var DirectLink = Scroll.DirectLink;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

class App extends Component {

  constructor (props){
      super(props);
      this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {

    Events.scrollEvent.register('begin', function() {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function() {
      console.log("end", arguments);
    });

    scrollSpy.update();

  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  componentWillUnmount() {
    

    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">

          <a className="header-links active" href="#Home"><span className="header-span">Home</span></a>
          <a className="header-links" href="#About"><span className="header-span">About</span></a>
          <a className="header-links" href="#Projects"><span className="header-span">Projects</span></a>
          <a className="header-links" href="#Contact"><span className="header-span">Contact</span></a>
          
          
          
        </div>

        <div className="parallax">
          
          <Element name="Home">
            <section className="home-tableFileName parallax__layer--back" id="Home">

              <div className="home-image">
                <img src={logo} className="App-logo" alt="logo" />
              </div>

              <div className="home-content">
                <span className="home-heading">Naman Avasthi</span>
                <br />
                <span className="home-content-text">I&#39;m a Computer science Master Student at University of Southern California, Los Angeles.<br /></span>
              </div>  

              <div className="home-social-container">
                <ul className="home-social-icons">
                  <li><a href="https://github.com/namanavasthi" target="_blank"><i className="fa fa-github fa-5x"></i></a></li>
                  <li><a href="https://www.linkedin.com/in/namanavasthi/" target="_blank"><i className="fa fa-linkedin fa-5x"></i></a></li>
                  <li><a href="https://www.facebook.com/naman.avasthi" target="_blank"><i className="fa fa-facebook fa-5x"></i></a></li>
                  <li><a href="https://twitter.com/NamanAvasthi11" target="_blank"><i className="fa fa-twitter fa-5x"></i></a></li>
                </ul>
              </div>
            </section>
          </Element>
        
          <Element name="About">
            <section className="about-container parallax__layer--base" id="About">
                <div className="about-content-wrapper">
                  <div className="about-image">
                    <img src={my_face} className="my-face-image" alt="Naman Avasthi" />
                  </div>
                  <div className="about-text-content">
                    <h1 className="about-text-h1">Who Am I?</h1>
                    <span className="home-content-text about-text">My name is Naman Avasthi and I&#39;m a graduate student at University of Southern California currently working as Wordpress Developer At USC Provost. Prior to graduate school, I did my under graduate from Fr.C.R.I.T. Institute of Technology, Mumbai University in India.</span>
                  </div>
                  <div className="about-contact-me-container">
                    <div className="about-contact-wrapper">

                      <div className="about-contact-address">
                        <h1>Contact Me</h1>
                        <span className="home-content-text about-text">
                          Naman Avasthi<br />
                          738 W 27th St.<br />
                          Apartment No. 9<br />
                          Los Angeles, CA 90007<br />
                          United States of America<br />
                          (213)-616 8654
                        </span>
                      </div>

                      <div className="about-contact-download">
                        <a className="download-resume" href="https://drive.google.com/open?id=0B6fOAAS3sHzFdF9UMFBGTjdBbEE">
                          <i className="fa fa-download"> Download Resume</i></a>
                      </div>
                    </div>
                  </div>
                </div>
            </section>
          </Element>


          <Element name="Projects" className="element">
            
          </Element>

          <Element name="Contact" className="element">
            
          </Element>


        </div>
      </div>
    );
  }
}

export default App;
