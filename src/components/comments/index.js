import React, { useState, useEffect } from "react";
import CreateComment from "./CreateComment";
import Comment from "./Comment";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
//redux
import actions from '../../redux/main/actions';
import { connect } from 'react-redux';
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

const Comments = ({ postId, postComments, match, index, selectedPost }) => {
  const classes = useStyles();
console.log('posfcc', postComments)
  const [comments, setComments] = useState([postComments]);

  useEffect(() => {
    console.log('render')
  }, [postComments])

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
      match && postComments.length &&  postComments.map((comment) => <Comment key={`${comment.postId}-${comment.parentId}-${comment.id}`} comment={comment} parentId={comment.id} postId={postId}  />)
    } 
   {match && <CreateComment parentId={postId} postId={postId} /> }
    </div>
  );
};


const mapStateToProps = state => {
  return {
      selectedPost: state.main.selectedPost
  }
}

const mapDispatchToProps =  {
  createComment: actions.createComment
}
export default connect(mapStateToProps, mapDispatchToProps)(Comments);
