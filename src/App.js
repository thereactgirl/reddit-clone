import React, { useState } from 'react';
import Nav from './components/nav';
import Posts from './components/posts';
import Login from './screens/Login';
import Post from './components/posts/Post';

// authenticate
import PrivateRoute from './authentication/PrivateRoute';
import Authenticate from './authentication/Authenticate';


import { Router, Route, Switch } from 'react-router-dom';
import history from "./history";




const App = () => {
  
  return (
        <Router history={history}>
          <Switch>
            <Route exact path='/' component={Login}  />
            <Nav />
          </Switch>
          {/* <PrivateRoute path='/post/:id' component={Post} /> */}
          {/* <Posts /> */}
          {/* <PrivateRoute path='/home' component={Posts} /> */}
        </Router>
  );
}


export default Authenticate(App);
