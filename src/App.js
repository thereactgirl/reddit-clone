import React, { useState } from 'react';
import Nav from './components/nav';
import Posts from './components/posts';
import Login from './screens/Login';
import Post from './components/posts/Post';

// authenticate
import WithAuth from './authentication/WithAuth';
import PrivateRoute from './authentication/PrivateRoute';
//redux
import { connect } from 'react-redux';


import { Router, Route, Switch } from 'react-router-dom';
import history from "./history";




const App = ({auth}) => {
  return (
        <Router history={history}>
          <Switch>
            <Route exact path='/' component={Login} auth={auth} />
            <Nav />
          </Switch>
          <PrivateRoute path='/post/:id' component={Post} />
          {/* <Posts /> */}
          <PrivateRoute path='/home' component={Posts} />
        </Router>
  );
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  {}
)(App);
// export default WithAuth();
// export default App;
