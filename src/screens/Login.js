import React, { useState } from "react";

//redux
import { connect } from "react-redux";
import actions from '../redux/auth/actions';


//material ui
import { Button, Typography, TextField } from "@material-ui/core";

//icons
import RedditIcon from "@material-ui/icons/Reddit";

//other
import clsx from "clsx";
import { useStyles, useStylesReddit } from './Styles';
import splash from '../assets/splash.jpg';

// custom styled input 
function RedditTextField(props) {
  const classes = useStylesReddit();

  return (
    <TextField
      InputProps={{ classes, disableUnderline: true }}
      InputLabelProps={{ className: classes.input }}
      {...props}
    />
  );
}

const Login = ({ doLogin }) => {
  const classes = useStyles();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

 const handleChange = event => {
    if (event.target.name === "username") {
        setUsername(event.target.value)
    } else if (event.target.name === "password") {
        setPassword(event.target.value)
    }
  };

  const onLogin = e => {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    e.preventDefault();
    doLogin(username, password);
  };

  return (
    <div className={classes.pageColumns}>
      <div className={clsx(classes.column, classes.leftColumn)}>
        <img className={classes.splash} src={splash} />
      </div>
      <div className={clsx(classes.column, classes.rightColumn)}>
        <div className={classes.formContainer}>
          <form className={classes.form} onSubmit={onLogin}>
            <div className={classes.redditCircle}>
              <RedditIcon fontSize="large" style={{ color: "#fff" }} />
            </div>
            <Typography className={classes.typography} variant="h6">
              Sign in
            </Typography>
            <RedditTextField
              name='username'
              value={username}
              label="USERNAME"
              className={classes.margin}
              variant="filled"
              color="secondary"
              id="username-input"
              onChange={handleChange}
            />
            <RedditTextField
              name='password'
              value={password}
              type='password'
              label="PASSWORD"
              className={classes.margin}
              variant="filled"
              color="secondary"
              id="password-input"
              onChange={handleChange}

            />
            <div className={classes.btnContainer}>
              <Button
                variant="contained"
                type="submit"
                color="secondary"
                className={classes.btn}
              >
                SIGN IN
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  auth: state.auth,
});
const mapDispatchToProps =  {
  doLogin: actions.doLogin, 
  doLogout: actions.doLogout 
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
