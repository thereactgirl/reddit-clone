import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';


const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth.isLoggedIn ? (
        <Component auth={auth} {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/"
          }}
        />
      )
    }
  />
);


const mapStateToProps = state => {
  return {
      auth: state.auth
  }
}

export default connect(mapStateToProps, {})(PrivateRoute);
