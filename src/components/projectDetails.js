import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import Navbar from '../components/navbar'

const ProjectDetails = (props) => {
	const project = props.project

	if (project) {
		return (
			<React.Fragment>
				<Navbar />
				<div className="container section project-details valign-wrapper">
					<div className="card z-depth-1 valign project-details">
						<div className="card-image">
							<img src={project.imageURL} alt={project.project} width="100%" />
						</div>
						<div className="card-content">
							<span className="card-title">{project.project}</span>
							<p>{project.description}</p>
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	} else {
		return (
			<React.Fragment>
				<Navbar />
				<div className="container center">
					<div className="row valign-wrapper">
						<div className="col s12 valign">
							<div className="preloader-wrapper big active">
								<div className="spinner-layer spinner-blue-only">
									<div className="circle-clipper left">
										<div className="circle"></div>
									</div><div className="gap-patch">
										<div className="circle"></div>
									</div><div className="circle-clipper right">
										<div className="circle"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	const id = ownProps.match.params.id
	const projects = state.firestore.data.projects
	const project = projects ? projects[id] : null
	return {
		project: project
	}
}

export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{ 'collection': 'projects' }
	])
)(ProjectDetails)
