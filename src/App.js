import React, { useState } from 'react';
import Nav from './components/nav';
import Posts from './components/posts';

import { BrowserRouter as Router, Route } from 'react-router-dom';

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
      main: '#4392DB'
    }

  },
  status: {
    danger: 'orange',
  },
  
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
          <Nav />
          {/* <Posts /> */}
          <Route exact path='/' component={Posts} />
          <Route path='/post/:id' component={Post} />
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
