import React, { Component } from 'react'
import M from 'materialize-css'
import { NavLink, Link } from 'react-router-dom'
import SidenavUser from './sidenavUser'
import LoggedOutMenu from './loggedOutMenu'
import { connect } from 'react-redux'
import LoggedInMenu from './loggedInMenu'

class SideNav extends Component {

  componentDidMount(){
    M.AutoInit()
  }
  
  render() {
    const { auth, profile, git } = this.props
    const prof = auth.uid ? <SidenavUser profile={profile} auth={auth} /> : <p></p>
    const links = auth.uid ? <LoggedInMenu profile={profile} auth={auth} git={git} /> : <LoggedOutMenu />

    return (
      <ul className="sidenav" id="slide-out">
        {prof}
        <li><NavLink exact to='/projects'>Projects</NavLink></li>
        <li><Link to='https://github.com/JoshPalaisy'>GitHub</Link></li>
        <li><a href='mailto:joshpalaisy@gmail.com'>Contact</a></li>
        {links}
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  }
}

export default connect(mapStateToProps)(SideNav)