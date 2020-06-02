import React, { useState, useEffect } from "react";
//redux
import { connect } from 'react-redux';
import actions from "../../redux/actions";
import upvote from '../../redux/actions';
import selectPost from '../../redux/actions';

import {useParams} from 'react-router-dom';

//Material ui
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

//components
import Comments from "../../components/comments";
import Upvotes from "../../components/posts/Upvotes";
import PostHeader from "../../components/posts/PostHeader";


const useStyles = makeStyles((theme) => ({
    avatar: {
        width: 50,
        borderRadius: '50%'
    },
    imgBorder: {
      // position: "relative"
    },
    postImage: {
      // width: 590,
      width: '100%'
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


const Post = ({ post, index, selectPost, selectedPost, match }) => {
  const classes = useStyles();

  let params = useParams();
  post = selectedPost ? selectedPost : post;

  useEffect(() => {
    console.log(params.id)
    selectPost(params.id)
  }, [])

  return (
    <Container>
    {post ?
    <div className={classes.postBorder}>
      <Upvotes voteCount={post.votes} post={post} postId={post.id} index={index} />
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
          postId={post.id}
          postComments={post.comments}
          match={match}
        />
      </div>
    </div>
    : null}
    </Container>
  );
};

const mapStateToProps = state => {
  return {
      selectedPost: state.selectedPost
  }
}

const mapDispatchToProps =  {
  selectPost: actions.selectPost
}
export default connect(mapStateToProps, mapDispatchToProps)(Post);
