import React, { useState, useEffect } from "react";
import { makeStyles, fade } from "@material-ui/core/styles";

//redux
import { connect } from "react-redux";
import actions from '../../redux/main/actions';

//material ui
import { InputBase } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    search: {
        position: 'relative',
        display: 'flex',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: "#F6F7F8",
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        // width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '20ch',
        },
      },
}));

const Search = ({searchPosts}) => {
  const classes = useStyles();
  const [searchValue, setSearchValue] = useState();

  const handleChange = (e) => {
      let value = e.target.value;
      value.toLowerCase();
      setSearchValue(value);
      console.log(searchValue)
  }
  const filterPosts = () => {
    console.log('search ', searchValue)
    searchPosts(searchValue)
  }
  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
        onChange={handleChange}
        onKeyDown={filterPosts}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.main.posts,
    // userLiked: state.userVoted
  };
};

const mapDispatchToProps = {
  searchPosts: actions.searchPosts,
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);
