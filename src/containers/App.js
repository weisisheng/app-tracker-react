import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { logout } from '../redux/modules/Auth/actions'

import Home from '../views/Home'
import Signup from '../views/Signup'
import Login from '../views/Login'
import NotFound from '../views/NotFound'
import Applications from '../views/Applications'
import Navbar from '../views/Navbar'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar isAuthenticated={this.props.isAuthenticated} logout={this.props.logout} currentUser={this.props.currentUser.username}/>
          <Switch>
            <Route exact path="/" component={this.props.isAuthenticated ? Applications : Home} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/applications" component={Applications} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    currentUser: state.auth.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    logout: logout
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
