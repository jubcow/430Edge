import React, { Component } from 'react';
import {BrowserRouter, Route, Link, Switch, Redirect} from 'react-router-dom';
import './App.css';
import HomePage from './containers/Homepage/HomePage.js';
import StudentPage from './containers/Student Page/StudentPage';

// redirects to different pages
class App extends Component {

  render () {
    let routes = (
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/student" component={StudentPage} />
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
