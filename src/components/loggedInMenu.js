import React from 'react'
import { connect } from 'react-redux'
import { signOut } from '../data/actions/authActions'
import { Link } from 'react-router-dom'

const LoggedInMenu = (props) => {
  const { signOut } = props
  return (
    <React.Fragment>
      <li><Link to="#!" onClick={signOut}>Log Out</Link></li>
    </React.Fragment>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(LoggedInMenu)
