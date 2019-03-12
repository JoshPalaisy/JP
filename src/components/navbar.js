import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import LoggedInMenu from './loggedInMenu'
import LoggedOutMenu from './loggedOutMenu'
import { connect } from 'react-redux'

const Navbar = (props) => {
  const { auth, profile } = props
  const links = auth.uid ? <LoggedInMenu profile={profile} /> : <LoggedOutMenu />
  return (
    <React.Fragment>
      <nav className="">
        <div className="nav-wrapper container">
          <Link to='/' className="brand-logo">JP</Link>
          <Link to='#!' data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
          <ul className="right hide-on-med-and-down">
            <li><NavLink exact to='/projects'>Projects</NavLink></li>
            <li><a href='/download/joshuaDevResume2018.pdf' target="_blank" rel="noopener noreferrer">Resume</a></li>
            <li><a href='https://github.com/JoshPalaisy' target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href='mailto:joshpalaisy@gmail.com'>Contact</a></li>
            {links}
          </ul>
        </div>
      </nav>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar)