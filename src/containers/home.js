import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/navbar'
import AnimBg from '../components/animBg'

class HomePage extends Component {
  render() {    
    return (
      <React.Fragment>
        <AnimBg   />
        <Navbar />
        <div className="container">
          <div className="row">
            <br />
            <br />
            <div className="col s12 l6 homeApp white-text">
              <h1>I'm Joshua Palaisy,</h1>
              <h2>a full-stack web developer &amp; marketing specialist.</h2>
              <Link to="/projects" className="btn-large grey darken-2 waves-effect homeBtn">See Projects</Link>
              <a href='/download/joshuaDevResume2018.pdf' target="_blank" rel="noopener noreferrer" className="btn-large grey darken-2 waves-effect homeBtn">View Resume</a>
            </div>
          </div>
        </div>
      </React.Fragment>
      )
  }
}

export default HomePage