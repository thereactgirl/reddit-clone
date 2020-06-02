import React, { useState } from "react";
import CreateComment from "./CreateComment";
import Comment from "./Comment";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

// icons
import CommentIcon from '@material-ui/icons/Comment';
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    commentContainer: {
      // display: 'flex'
    },
    container: {
      marginTop: 15
    },
    avatar: {
        width: 50,
        borderRadius: '50%'
    }, 
    commentsInfo: {
      display: 'flex',
      color: theme.palette.primary.dark,
    }
  }))

const Comments = ({ postId, postComments, match, index }) => {
  const classes = useStyles();

  const [comments, setComments] = useState([postComments]);
    
  return (
    <div className={classes.commentContainer}>
      {
      !match ? 
      (<Link 
        to= {{ pathname: `/post/${postId}`, state: {index: index} }} className={classes.commentsInfo}>
        <CommentIcon /> 
        <Typography>
          {postComments.length} comments
        </Typography>
      </Link>)
    : (
      <div className={classes.commentsInfo}>
        <CommentIcon /> 
        <Typography>
          {postComments.length} comments
        </Typography>
      </div>
    )}

    {
      match && postComments.map((comment) => <Comment key={comment.id} comment={comment} parentId={comment.id} />)
    } 
   {match && <CreateComment parentId={postId} /> }
    </div>
  );
};

export default Comments;
