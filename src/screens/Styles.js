import React from 'react';
import { makeStyles, fade } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
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
      [theme.breakpoints.down('xs')]: {
        width: "50px",
      },
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
      marginBottom: "10px",
      display: "block",
      [theme.breakpoints.up('sm')]: {
        minWidth: "440px",
      },
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


export const useStylesReddit = makeStyles((theme) => ({
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