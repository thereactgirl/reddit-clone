import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  
  }))

const Comment = ({ comment }) => {
  const classes = useStyles();

  return (
    <div className={classes.commentText}>
      <span className={classes.username}>{comment.username}</span>
      {' '}
      <span className={classes.comment}>{comment.text}</span>
    </div>
  );
};


export default Comment;
