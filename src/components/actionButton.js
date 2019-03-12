import React, { Component } from 'react'
import { Link, NavLink} from 'react-router-dom'

class ActionButton extends Component {
  render() {
    return (
        <div className="fixed-action-btn toolbar hide-on-med-and-down">
            <a className="btn-floating btn-large red">
                <i className="large material-icons grey darken-3">menu</i>
            </a>
            <ul>
                <li><NavLink to="/" className="btn-lg grey darken-3"><i className="material-icons">insert_chart</i></NavLink></li>
                <li><Link to="/about" className="btn-lg grey darken-3"><i className="material-icons">format_quote</i></Link></li>
                <li><a className="btn-lg grey darken-3"><i className="material-icons">publish</i></a></li>
                <li><a className="btn-lg grey darken-3"><i className="material-icons">attach_file</i></a></li>
            </ul>
        </div>
    )
  }
}

export default ActionButton