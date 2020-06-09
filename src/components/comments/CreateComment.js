import React, { useState, useRef } from 'react';

import {
  Portal,
  TextareaAutosize,
  Button,
  } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

//redux
//redux
import actions from '../../redux/main/actions';
import { connect } from 'react-redux';


//icons
import CommentIcon from '@material-ui/icons/Comment';

const useStyles = makeStyles((theme) => ({
  input: {
    width: '100%'
  },
  alert: {
    // padding: theme.spacing(1),
    // margin: theme.spacing(1, 0),
    // border: '1px solid',
  },
  button: {
    color: theme.palette.primary.dark,

  }

}));

const CreateComment = ({createComment, parentId, postId, comment, username, createSubComment}) => {
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const container = useRef(null);
  const [commentText, setCommentText] = useState('');
 
  const handleClick = () => {
    setShow(!show);
  };

  const submitComment = (e, parentId) => {
    e.stopPropagation();
    console.log(parentId)
    let newComment = {};
    newComment.id = Date.now();
    newComment.postId = postId; 
    newComment.parentId = parentId;
    newComment.username = username;
    newComment.text = commentText;
    newComment.comments = [];
    if (parentId !== postId) {
      setCommentText('');
      setShow(false);
      return createSubComment(postId, parentId, newComment)
    }

    return createComment(parentId, newComment)
  }
  const changeComment =  (e) => {
    setCommentText(e.target.value)
  }

  return (
    <div>
        {show ? (
          <Portal container={container.current}>
            <form className={classes.root} onSubmit={(e) =>submitComment(e, parentId)}>
              <TextareaAutosize
                type="text"
                value={comment}
                placeholder="Add comment... "
                rowsMin='5'
                onChange={changeComment}
                className={classes.input}
              />
            </form>
            <Button onClick={(e) => submitComment(e, parentId)}>Submit</Button>
          </Portal>
        ) : null}
      <div className={classes.alert} ref={container} />

      <Button type="button" className={classes.button} onClick={handleClick}>
        <CommentIcon fontSize='small'/>
        {show ? 'Cancel' : 'Reply'}
      </Button>
    </div>
  );
}


const mapStateToProps = state => {
  return {
      selectedPost: state.main.selectedPost,
      username: state.auth.username
  }
}

const mapDispatchToProps =  {
  createComment: actions.createComment,
  createSubComment: actions.createSubComment
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateComment);
