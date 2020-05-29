import React, { useState } from 'react';
import Nav from './components/nav';
import Posts from './components/posts';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import reducer from './redux/reducer';

import { createStore } from 'redux';

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
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Nav />
        <Posts />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
