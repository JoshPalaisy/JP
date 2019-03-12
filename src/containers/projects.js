import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import ProjectList from '../components/projectList'
import { compose } from 'redux'
import Navbar from '../components/navbar'

class ProjectsPage extends Component {
  render() {
    const { projects } = this.props
    return (
      <React.Fragment>
        <Navbar />
        <div className="container">
          <div className="row white-text">
            <h2>Web Development Portfolio</h2>
            <h5>From Web Components and Server Side Applications to React.JS, Redux, WordPress and Node.JS. Checkout my latest web software development portfolio.</h5>
            <br />
            <br />
            <ProjectList projects={projects} />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.firestore.ordered.projects
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(ProjectsPage)