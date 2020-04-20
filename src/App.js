import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './containers/Homepage/HomePage.js';
import LoginPage from './containers/Login Page/LoginPage';
import Logout from './containers/Logout Page/logout';
import StudentPage from './containers/StudentContainer/Student Page/StudentPage';
import AdminPage from './containers/Admin Page/AdminPage';
import CreatePage from './containers/Admin Page/CreatePage';
import ViewPage from './containers/Admin Page/ViewPage';
import ReportPage from './containers/Admin Page/ReportPage';

// redirects to different pages
class App extends Component {

  render () {
    let routes = (
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/student" component={StudentPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/logout" component={Logout} />
	<Route path="/admin" component={AdminPage} />
        <Route path="/create" component={CreatePage} />
	<Route path="/view" component={ViewPage} />
	<Route path="/report" component={ReportPage} />
      </Switch>
    );

    return (
      <div>
          {routes}
      </div>
    );
    
  }
}

export default App;
