import React, { useState } from 'react';
import Nav from './components/nav';
import Posts from './components/posts';
import Login from './screens/Login';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import reducer from './redux/reducer';
import thunkMiddleware from 'redux-thunk';

import { createStore, applyMiddleware, compose } from 'redux';
import Post from './components/posts/Post';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#DAE0E6',
      light: '#FFFFFF',
    },
    secondary: {
      main: '#4392DB',
      light: '#E8F0FE'
    }

  },
  status: {
    danger: 'orange',
  },
  typography: {
    fontFamily: 'IBMPlexSans,sans-serif',
    
  }
});
const store = createStore(
  reducer, /* preloadedState, */
  compose(applyMiddleware(thunkMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/post/:id' component={Post} />
          </Switch>
          <Nav />
          {/* <Posts /> */}
          <Route exact path='/home' component={Posts} />
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
