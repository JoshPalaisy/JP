import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Pic from '../img/blank-profile.png'
import BG from '../img/sidenav-user-bg.png'

const SidenavUser = (props) => {
  const { profile, auth } = props
  return (
    <React.Fragment>
      <li>
        <div className="user-view">
          <div className="background">
            <img src={BG} className="responsive-img" alt='title4' />
          </div>
          <a href="#user"><img className="circle" src={Pic} alt='title3' /></a>
          <a href="#name"><span className="white-text name">{profile.firstName}</span></a>
          <a href="#email"><span className="white-text email">{auth.email}</span></a>
        </div>
      </li>
    </React.Fragment>
  )
}

export default SidenavUser
