import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import HomePage from './containers/Homepage/HomePage.js';
import StudentPage from './containers/Student Page/StudentPage';
import LoginPage from './containers/Login Page/LoginPage';


// redirects to different pages
class App extends Component {

  render () {
    let routes = (
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/student" component={StudentPage} />
        <Route path="/login" component={LoginPage} />
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
