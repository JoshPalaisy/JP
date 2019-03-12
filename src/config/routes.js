import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from '../containers/home'
import ProjectsPage from '../containers/projects'
import SignIn from '../containers/signIn'
import SignUp from '../containers/signUp'
import CreateProject from '../containers/createProject'
import ProjectDetails from '../components/projectDetails'
import SideNav from '../components/sidenav'

class Routes extends Component {
  render() {
    return (
        <Router>
          <React.Fragment>
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/projects' component={ProjectsPage} />
              <Route path='/project/:id' component={ProjectDetails} />
              <Route path='/createproject' component={CreateProject} />
              <Route path='/signin' component={SignIn} />
              <Route path='/signup' component={SignUp} />
            </Switch>
            <SideNav />
          </React.Fragment>
        </Router>
      )
  }
}

export default Routes