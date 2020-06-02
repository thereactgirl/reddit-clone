import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
//icons
import upvote from '../../assets/upvote.svg';
import downvote from '../../assets/downvote.svg';
import CommentIcon from '@material-ui/icons/Comment';

//components 

const useStyles = makeStyles((theme) => ({
  commentWrapper: {
    display: 'flex',
    alignItems: 'center',
    // position: 'relative'
  },
  username: {
    fontWeight: 700,
  },
  voteSectionWrapper: {
    display: 'block',
    width: 40,
    backgroundColor: "#F6F7F8",
  },
  voteSection: {
    // border: '1px solid red'
    // position: 'absolute',
    top: 0
  },
  vote: {
    width: 15,
    // margin: '20px 15px'
  },
  voteNumber: {
    fontSize: '12px',
    fontWeight: 700,
    textAlign: 'center'
  },
  reply: {
    fontSize: '12px',
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.primary.dark,
  }
  }))

const Reply = ({ comment }) => {
  const classes = useStyles();

  return (
    <div className={classes.commentWrapper}>
      {/* <div className={classes.voteSectionWrapper}>
        <div>
          <div className={classes.voteSection}>
            <img className={classes.vote} src={upvote} alt='upvote'/>
            <p className={classes.voteNumber}>{comment && comment.votes}</p>
            <img className={classes.vote} src={downvote} alt='downvote'/>
          </div>
        </div>
      </div> */}
      <div className={classes.commentText} >
        <span className={classes.username}>{comment.username}</span>
        {' '}
        <span className={classes.comment}>{comment.text}</span>
        {/* {comment && comment.comments && comment.comments.length && comment.comments.map((comment) => <Reply key={comment.postId} comment={comment} />)} */}
        <div className={classes.reply}>
          <CommentIcon fontSize='12px'/>
          <span>Reply</span>
        </div>
      </div>
    </div>
  );
};


export default Reply;
