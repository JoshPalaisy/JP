import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class LoggedOutMenu extends Component {
  render() {
    return (
      <li><NavLink to='/signin'>Log In</NavLink></li>
    )
  }
}

export default LoggedOutMenu
