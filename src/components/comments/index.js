import React, { useState } from "react";
import CreateComment from "./CreateComment";
import Comment from "./Comment";
import { makeStyles } from '@material-ui/core/styles';

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

const Comments = ({ postId, postComments }) => {
  const classes = useStyles();

  const [comments, setComments] = useState([postComments]);
    
  return (
    <div className={classes.commentContainer}>
      {/* {
      postComments.map((comment) => <Comment key={comment.postId} comment={comment} />)
      }  */}
      <div className={classes.commentsInfo}>
        <CommentIcon /> 
        <Typography>
          {postComments.length} comments
        </Typography>
      </div>
      <CreateComment />
    </div>
  );
};

export default Comments;
