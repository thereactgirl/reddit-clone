import React from 'react';
import Nav from './components/nav';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
    </ThemeProvider>
  );
}

export default App;
