import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signIn } from './../data/actions/authActions'
import Navbar from '../components/navbar'

class SignIn extends Component {
	state = {
		email: '',
		password: ''
	}
	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}
	handleSubmit = (e) => {
		e.preventDefault()
		this.props.signIn(this.state)
		this.props.history.push('/')
	}
	render() {
		const { authError, auth } = this.props
		if (auth.uid) return <Redirect to='/' />
		return (
			<React.Fragment>
				<Navbar />
				<div className="container white-text">
					<div className="row">
						<div className="s12 m4 l8"></div>
						<div className="col s12 m4 l8">
							<form onSubmit={this.handleSubmit} className="white">
								<h5 className="grey-text text-darken-3">Sign In</h5>
								<div className="input-field">
									<label htmlFor="email">Email</label>
									<input type="email" id="email" onChange={this.handleChange} />
								</div>
								<div className="input-field">
									<label htmlFor="password">Password</label>
									<input type="password" id="password" onChange={this.handleChange} />
								</div>
								<div className="input-field">
									<button className="btn teal lighten-1">Login</button>
								</div>
								<p className="red-text center">
									{authError ? { authError } : null}
								</p>
							</form>
						</div>
						<div className="s12 m4 l8"></div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		authError: state.auth.authError,
		auth: state.firebase.auth
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		signIn: (creds) => dispatch(signIn(creds))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)

