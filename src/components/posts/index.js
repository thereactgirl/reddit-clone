import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';

//material ui
import {
    Container,
    InputBase,
    IconButton
} from '@material-ui/core';

//components
import Post from "./Post";
import CreatePost from './CreatePost';

// import data 
import dummyData from '../../dummy-data.js';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 15,
    maxWidth: '1120px',
  }
}))

const Posts = () => {
  const classes = useStyles();
  const [posts, setPosts] = useState(dummyData);
  
  console.log('posts', posts)
  return (
    <Container 
      classes={{
        root: classes.container
      }}
    >
    <CreatePost />
      {
        posts.map((post) => <Post key={post.timestamp} post={post} />)
      }
    </Container>
  );
};

export default Posts;
