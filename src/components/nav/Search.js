import React, { useState, useEffect } from "react";
import { makeStyles, fade } from "@material-ui/core/styles";

//redux
import { connect } from "react-redux";
import actions from '../../redux/main/actions';

//material ui
import { InputBase } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

import { useStyles } from './Styles';

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
  };
};

const mapDispatchToProps = {
  searchPosts: actions.searchPosts,
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);
