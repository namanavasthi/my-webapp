"use strict";

import logo from './images/main_large.png';
import my_face from './images/myface2.png'
import './App.css';
import { DATA } from './ugdata.js'
import { PropTypes , Component } from 'react';
import ReactExpandableListView from '../node_modules/react-expandable-listview';
import $ from '../node_modules/jquery';

var React     = require('react');
var ReactDOM  = require('react-dom');
var Scroll    = require('react-scroll');

var Link       = Scroll.Link;
var DirectLink = Scroll.DirectLink;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

var durationFn = function(deltaTop) {
    return deltaTop;
};

var HomeData = React.createClass({
  render: function() {
    return <section className="home-container" id="Home">

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
                  <li className="social-media-li"><a href="https://github.com/namanavasthi" target="_blank"><i className="fa fa-github fa-5x"></i></a></li>
                  <li className="social-media-li"><a href="https://www.linkedin.com/in/namanavasthi/" target="_blank"><i className="fa fa-linkedin fa-5x"></i></a></li>
                  <li className="social-media-li"><a href="https://www.facebook.com/naman.avasthi" target="_blank"><i className="fa fa-facebook fa-5x"></i></a></li>
                  <li className="social-media-li"><a href="https://twitter.com/NamanAvasthi11" target="_blank"><i className="fa fa-twitter fa-5x"></i></a></li>
                </ul>
              </div>
            </section>
  }
});

var AboutData = React.createClass({
  render: function() {
    return <section className="about-container parallax__layer--base" id="About">
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
                        <h1 className="about-text-h1">Contact Me</h1>
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
  }
});

class CourseDropDown extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired
  }

  render () {
    const { data } = this.props
    return (
      <ReactExpandableListView className="education-lis"
        data={data}
        headerAttName="headerName"
        itemsAttName="items"/>
    )
  }
}

var EducationData = React.createClass({
  render: function() {
    return  <section className="education-container" id="Education">
              <div className="education-wrapper">

                <div className="education-column-left">
                  <div className="education-title">
                    <span>Education</span>
                  </div>
                  <hr className="education-hr-style" />
                </div>
            
                <div className="education-column-right">
                  <span className="education-university-name">University of Southern California</span><br />
                  <span className="education-university-degree"><a className="education-degree-link" href="https://www.cs.usc.edu/academics/masters" target="_blank">Master&#39;s in Computer Science</a></span><br />
                  <span className="education-university-courses">Course Work : Analysis of Algorithms <a href="http://www-scf.usc.edu/~haofeng/csci570.htm" className="education-course-link" target="_blank">[CSCI 570]</a>, Web Technologies <a href="http://cs-server.usc.edu:45678" className="education-course-link" target="_blank">[CSCI 571]</a>, Operating Systems <a href="http://merlot.usc.edu/cs402-m16/" className="education-course-link" target="_blank">[CSCI 402]</a>, Systems Security <a href="http://ccss.usc.edu/530/fall16/" className="education-course-link" target="_blank">[CSCI 530]</a>, Information Retrieval <a href="http://www-scf.usc.edu/~csci572/" className="education-course-link" target="_blank">[CSCI 572]</a>, Applied Cryptography <a href="http://merlot.usc.edu/cs531-s17/" className="education-course-link" target="_blank">[CSCI 531]</a> </span>
                  <br /><br /><br />
                  <span className="education-university-name">Fr. C. Rodrigues Institute of Technology</span><br />
                  <span className="education-university-degree"><a className="education-degree-link" href="http://www.ce.fcrit.ac.in" target="_blank">Bachelor&#39;s in Computer Engineering</a></span><br />
                  <span className="education-university-courses">
                  Course Work : <br />
                    <CourseDropDown data={DATA} />
                  </span>
                </div>
              </div>
              <hr className="endof-education" />
            </section>
  }
});

var ProjectData = React.createClass({
  render: function() {
      return  <section className="project-container" id="Projects">
                <div className="education-wrapper">
                  <div className="education-column-left">
                    <div className="education-title">
                      <span>Projects</span>
                    </div>
                    <hr className="education-hr-style" />
                  </div>

                  <div className="education-column-right">
                    <span className="education-university-name">University of Southern California</span><br />
                    <span className="education-university-degree"><a className="education-degree-link" href="https://www.cs.usc.edu/academics/masters" target="_blank">Master&#39;s in Computer Science</a></span><br />
                    <span className="education-university-courses">Course Work : Analysis of Algorithms <a href="http://www-scf.usc.edu/~haofeng/csci570.htm" className="education-course-link" target="_blank">[CSCI 570]</a>, Web Technologies <a href="http://cs-server.usc.edu:45678" className="education-course-link" target="_blank">[CSCI 571]</a>, Operating Systems <a href="http://merlot.usc.edu/cs402-m16/" className="education-course-link" target="_blank">[CSCI 402]</a>, Systems Security <a href="http://ccss.usc.edu/530/fall16/" className="education-course-link" target="_blank">[CSCI 530]</a>, Information Retrieval <a href="http://www-scf.usc.edu/~csci572/" className="education-course-link" target="_blank">[CSCI 572]</a>, Applied Cryptography <a href="http://merlot.usc.edu/cs531-s17/" className="education-course-link" target="_blank">[CSCI 531]</a> </span>
                    <br /><br /><br />
                    <span className="education-university-name">Fr. C. Rodrigues Institute of Technology</span><br />
                    <span className="education-university-degree"><a className="education-degree-link" href="http://www.ce.fcrit.ac.in" target="_blank">Bachelor&#39;s in Computer Engineering</a></span><br />
                    <span className="education-university-courses">
                    Course Work : <br />
                    <CourseDropDown data={DATA} />
                    </span>
                  </div>
                </div>
            </section>
  }
});

var ContactData = React.createClass({
  render: function() {
      return  <section className="contact-container" id="Contact">
                <div className="education-wrapper">

                  <div className="contact-title-div">
                      <span>Where Can You Find Me?</span>
                  </div>

                  <div className="contact-details-container">
                    <span>738 W 27th St. Apartment No. 9</span><br />
                    <span>Los Angeles, CA 90007</span><br />
                    <span>United States of America</span><br />
                    <span><span className="glyphicon glyphicon-earphone"  aria-hidden="true"> </span> (213)-616 8654</span><br />
                    <span><span className="glyphicon glyphicon-envelope"  aria-hidden="true"> </span> navasthi@usc.edu</span><br />
                    <span><span className="glyphicon glyphicon-envelope"  aria-hidden="true"> </span> naman.avasthi@gmail.com</span>
                  </div>

                  <div className="contact-title-div">
                      <hr className="contact-hr" />
                  </div>

                  <div className="contact-form">
                    <ContactFormVar />
                  </div>
                  
                </div>
            </section>
  }
});

var ContactFormLoading = React.createClass({
  render: function () {
    if(!this.props.loading) {
      return <span></span>;
    }
    return <span className='fa-spinner fa-spin'></span>
  }
});

var ContactFormVar = React.createClass({

  getInitialState: function () {
    return {username: "", email: "", password: "", loading: false, errors: {}}
  },
  _create: function () {
    return  $.ajax({
      url: 'sendform.php',
      type: 'POST',
      data: $(this).serialize(),
      beforeSend: function () {
        this.setState({loading: true});
      }.bind(this)
    });
    
  },
  _onSubmit: function (e) {
    e.preventDefault();
    var errors = this._validate();
    if(Object.keys(errors).length != 0) {
      this.setState({
        errors: errors
      });
      return;
    }
    var xhr = this._create();
    xhr.done(this._onSuccess)
    .fail(this._onError)
    .always(this.hideLoading)
  },
  hideLoading: function () {
    this.setState({loading: false});
  },
  _onSuccess: function (data) {
    this.refs.user_form.getDOMNode().reset();
    this.setState(this.getInitialState());
    // show success message
  },
  _onError: function (data) {
    var message = "Failed to create the user";
    var res = data.responseJSON;
    console.log(data);
  },
  _onChange: function (e) {
    var state = {};
    state[e.target.name] =  $.trim(e.target.value);
    this.setState(state);
  },
  _validate: function () {
    var errors = {}
    if(this.state.username == "") {
      errors.username = "Username is required";
    }
    if(this.state.email == "") {
      errors.email = "Email is required";
    }
    if(this.state.message == "") {
      errors.message = "Password is required";
    }
    return errors;
  },
  _formGroupClass: function (field) {
    var className = "form-group ";
    if(field) {
      className += " has-error"
    }
    return className;
  },
  render: function() {
    return (
      <div className="form-container">
        <form id="contact-form" method="post" action="sendform.php" role="form">

          <div className="form-row">
            <div className={this._formGroupClass(this.state.errors.username)}>
              <label className="control-label" for="username">Please Tell Me Your Name</label>
              <input name="username" ref="username" type="text" className="form-control" id="username" placeholder="What should I call you?" onChange={this._onChange} />
              <span className="help-block">{this.state.errors.username}</span>
            </div>
            <div className={this._formGroupClass(this.state.errors.email)}>
              <label className="control-label" for="email">Your Email Address</label>
              <input name="email" ref="email" type="email" className="form-control" id="email" placeholder="Email address" onChange={this._onChange} />
              <span className="help-block">{this.state.errors.email}</span>
            </div>
          </div>

          <div className={this._formGroupClass(this.state.errors.message)}>
            <label className="control-label" for="message">Lets Talk</label>
            <input name="message" ref="message" type="message" className="form-control" id="message" placeholder="What do you want to talk about?" onChange={this._onChange} />
            <span className="help-block">{this.state.errors.message}</span>
          </div>
          <button type="submit" className="btn btn-default" disabled={this.state.loading}>
            Hit Me Up!
            <ContactFormLoading loading={this.state.loading} />
          </button>


        </form>
      </div>
    );
  }
});





class Section extends React.Component{

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
  render () {
    return (
      <div className="App">
          
        <nav className="navbar navbar-default navbar-fixed-top ">
          <div className="container-fluid">
            <div className="navbar-center">
              <ul className="nav navbar-nav ">
                <li className="header-span"><Link activeClass="active" className="Home" to="Home" spy={true} smooth={true} duration={500} ><a className="a-link">Home</a></Link></li>
                <li className="header-span"><Link activeClass="active" className="About" to="About" spy={true} smooth={true} duration={500}><a className="a-link">About</a></Link></li>
                <li className="header-span"><Link activeClass="active" className="Education" to="Education" spy={true} smooth={true} duration={500} ><a className="a-link">Education</a></Link></li>
                <li className="header-span"><Link activeClass="active" className="Projects" to="Projects" spy={true} smooth={true} duration={500}><a className="a-link">Projects</a></Link></li>
                <li className="header-span"><Link activeClass="active" className="Contact" to="Contact" spy={true} smooth={true} duration={500}><a className="a-link">Contact</a></Link></li>
              </ul>
            </div>
          </div>
        </nav>
      
      

        <div className="parallax">
        
          <Element name="Home" className="element">
            <HomeData />
          </Element>

          <Element name="About" className="element">
            <AboutData />
          </Element>
          
          <Element name="Education" className="element-edu">
            <EducationData />
          </Element>

          <Element name="Projects" className="element-proj">
            <ProjectData />
          </Element>

          <Element name="Contact" className="element-cont">
            <ContactData />
          </Element>


        </div>


      </div>
    );
  }
};


ReactDOM.render(
  <Section />,
  document.getElementById('root')
);

export default Section;