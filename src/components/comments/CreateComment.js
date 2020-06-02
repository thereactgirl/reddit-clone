import React, { useState, useRef } from 'react';

import {
  Portal,
  TextareaAutosize,
  Button,
  } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

//redux
import { connect } from 'react-redux';
import actions from "../../redux/actions";


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

const CreateComment = (props, createComment) => {
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
    newComment.parentId = parentId;
    newComment.username = '';
    newComment.text = commentText;

    return createComment(newComment)
  }
  const changeComment =  (e) => {
    setCommentText(e.target.value)
  }

  return (
    <div>
        {show ? (
          <Portal container={container.current}>
            <form className={classes.root} onSubmit={(e) =>submitComment(e, props.parentId)}>
              <TextareaAutosize
                type="text"
                value={props.comment}
                placeholder="Add comment... "
                rowsMin='5'
                onChange={changeComment}
                className={classes.input}
              />
            </form>
            <Button onClick={(e) => submitComment(e, props.parentId)}>Submit</Button>
          </Portal>
        ) : null}
      <div className={classes.alert} ref={container} />

      <Button type="button" className={classes.button} onClick={handleClick}>
        <CommentIcon fontSize='12px'/>
        {show ? 'Cancel' : 'Reply'}
      </Button>
    </div>
  );
}


const mapStateToProps = state => {
  return {
      selectedPost: state.selectedPost
  }
}

const mapDispatchToProps =  {
  createComment: actions.createComment
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateComment);
