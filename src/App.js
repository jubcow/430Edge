import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './containers/Homepage/HomePage.js';
import LoginPage from './containers/Login Page/LoginPage';
import Logout from './containers/Logout Page/logout';
import StudentPage from './containers/StudentContainer/Student Page/StudentPage';
import hp from './containers/Homepage/hp.js';


// redirects to different pages
class App extends Component {

  render () {
    let routes = (
      <Switch>
        <Route path="/" exact component={hp} />
        <Route path="/student" component={StudentPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/logout" component={Logout} />
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
