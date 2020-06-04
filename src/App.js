import React, { useState } from 'react';
import Nav from './components/nav';
import Posts from './components/posts';
import Login from './screens/Login';
import Post from './components/posts/Post';

// authenticate
import WithAuth from './authentication/WithAuth';
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
          <Route path='/post/:id' component={Post} />
          {/* <Posts /> */}
          <Route path='/home' component={Posts} />
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
