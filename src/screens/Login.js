import React, { useState, useEffect } from "react";
import { makeStyles, fade } from "@material-ui/core/styles";

//redux
import { connect } from "react-redux";
import actions from '../redux/auth/actions';


//material ui
import { Grid, Button, Typography, TextField } from "@material-ui/core";

//icons
import RedditIcon from "@material-ui/icons/Reddit";

//other
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  pageColumns: {
    display: "-webkit-box",
    display: "-ms-flexbox",
    display: "flex",
    "-webkit-box-align": "center",
    "-ms-flex-align": "center",
    alignItems: "center",
    overflowX: "hidden",
    minHeight: "100vh",
    overflowY: "hidden",
    background: "#fff",
  },
  leftColumn: {
    width: "200px",
  },
  splash: {
    backgroundImage:
      "url(https://i.ibb.co/fF2yYy4/jr-korpa-EE1a0-KJa-Jj-E-unsplash.jpg)",
    height: "100vh",
    minHeight: "450px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  formContainer: {
    padding: "24px",
    minWidth: "440px",
    marginBottom: "10px",
    display: "block",
  },
  redditCircle: {
    background: "#F24506",
    borderRadius: "50%",
    padding: 7,
    width: "2em",
    height: "2em",
    display: "inline-block",
    fontSize: "1.5rem",
    marginBottom: "10px",
    margin: theme.spacing(1),
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  typography: {
    marginBottom: 10,
    margin: theme.spacing(1),
  },
  margin: {
    margin: theme.spacing(1),
  },
  btnContainer: {
    marginTop: 24,
    margin: theme.spacing(1),
  },
  btn: {
    fontFamily: "IBMPlexSans,sans-serif",
    fontWeight: "600",
    letterSpacing: ".5px",
    borderRadius: "4px",
    background: "#0079d3",
    cursor: "pointer",
    width: "155px",
  },
}));

const useStylesReddit = makeStyles((theme) => ({
  root: {
    border: "1px solid #e2e2e1",
    overflow: "hidden",
    borderRadius: 4,
    backgroundColor: "#fcfcfb",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
      borderColor: theme.palette.secondary.main,
    },
    "&$focused": {
      backgroundColor: theme.palette.secondary.light,
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.secondary.main,
    },
  },
  focused: {},
  input: {
    fontSize: "12px",
    fontWeight: "600",
    display: "inline-block",
    "&$focused": {
      backgroundColor: theme.palette.secondary.light,
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.secondary.main,
      transform: "translate(12px, 12px) scale(1)",
    },
  },
}));

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

const Login = ({ doLogin, doLogout }) => {
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
    // const { username } = this.state;
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    e.preventDefault();
    doLogin(username, password);
    // this.setState({ username: "" });
  };

  // const onLogout = () => this.props.doLogout();

  return (
    <div className={classes.pageColumns}>
      <div className={clsx(classes.column, classes.leftColumn)}>
        <div className={classes.splash} />
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
