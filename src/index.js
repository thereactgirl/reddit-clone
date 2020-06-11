import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//theme
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";


//redux
import { Provider } from 'react-redux';
import { combineReducers } from "redux";
import reducer from './redux/main/reducer';
import authReducer from './redux/auth/reducer';

import thunkMiddleware from 'redux-thunk';

import { createStore, applyMiddleware, compose } from 'redux';
const rootReducer = combineReducers({
  auth: authReducer,
  main: reducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunkMiddleware)
));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#DAE0E6",
      light: "#FFFFFF",
    },
    secondary: {
      main: "#4392DB",
      light: "#E8F0FE",
    },
  },
  status: {
    danger: "orange",
  },
  typography: {
    fontFamily: "IBMPlexSans,sans-serif",
  },
});

ReactDOM.render(
  <React.StrictMode>
        <Provider store={store}>

    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
