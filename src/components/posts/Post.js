import React, { useState } from "react";
import {connect } from 'react-redux';
import upvote from '../../redux/actions';

//components
import Comments from "../comments";
import Upvotes from "./Upvotes";
import PostHeader from "./PostHeader";

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    avatar: {
        width: 50,
        borderRadius: '50%'
    },
    imgBorder: {
      // position: "relative"
    },
    postImage: {
      width: 590,
    },
    postBorder: {
      display: 'flex',
      border: '1px solid lightgrey',
      background: '#fff',
      width: '60%', 
      minHeight: 500,
      margin: 10,
    },
    header: {
      position: 'absolute',
      right: 0,
    },
    post: {
      padding: 5,
    },
    description: {
      margin: '10px 0'
    }
  }))


const Post = ({ post, upvotePost, downvotePost, voteCount }) => {
  const classes = useStyles();
  


  return (
    <div className={classes.postBorder}>
      <Upvotes voteCount={voteCount} downvotePost={downvotePost} upvotePost={upvotePost} postId={post.id} />
      <div className={classes.post}>
        <PostHeader
          className={classes.header}
          username={post.username}
          thumbnailUrl={
            post.thumbnailUrl
          }
          post={post}
        />
        <Typography variant={'body1'} className={classes.description}>{post.description}</Typography>
        <div className={classes.imgBorder}>
          <img
            alt="post thumbnail"
            className={classes.postImage}
            src={post.imageUrl}
          />
        </div>

        <Comments
          postId={post.imageUrl}
          postComments={post.comments}
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    // userVoted: state.userVoted,
  }
}

const mapDispatchToProps =  {
  upvote
}
export default connect(mapStateToProps, mapDispatchToProps)(Post);
