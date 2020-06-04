import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
//icons
import upvote from '../../assets/upvote.svg';
import downvote from '../../assets/downvote.svg';
import CommentIcon from '@material-ui/icons/Comment';

//components 
import Reply from './Reply';
import CreateComment from './CreateComment';

const useStyles = makeStyles((theme) => ({
  commentWrapper: {
    // borderLeft: '1px solid grey',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    margin: 5
  },
  username: {
    fontWeight: 700,
    marginBottom: 5
  },
  voteSectionWrapper: {
    width: 20,
    backgroundColor: "#F6F7F8",
  },
  voteSection: {
    // border: '1px solid red'
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: 0
  },
  vote: {
    width: 12,
    margin: '5px 0'
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
    marginTop: 5,
  },
  threadLine: {
    borderRight: '2px solid grey',
    display: 'block',
    height: '100%',
    width: '50%',
  },
  threadlineDiv: {
    bottom: 5,
    height: 'calc(100% - 56px)',
    position: 'absolute',
    marginLeft: 2.5,
  },
  commentThreadWrapper: {
    margin: '0  0 10px 0',
  },
  commentText: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0  0 5px 0'
  }
  }))

const Comment = ({ comment, postId }) => {
  const classes = useStyles();

  return (
    <div className={classes.commentWrapper}>

      <div className={classes.threadlineDiv}>
        <i className={classes.threadLine}></i>
      </div>
       <div className={classes.voteSectionWrapper}>
        <div> 
          <div className={classes.voteSection}>
            <img className={classes.vote} src={upvote} alt='upvote'/>
            {/* <p className={classes.voteNumber}>{comment && comment.votes}</p> */}
            <img className={classes.vote} src={downvote} alt='downvote'/>
            
          </div> 
     </div>
      </div> 
      <div className={classes.commentThreadWrapper} >
        <div className={classes.commentText}>    
          <span className={classes.username}>{comment.username}</span>
          {' '}
          <span className={classes.comment}>{comment.text}</span>
        </div>
        <div className={classes.reply}>
          <CreateComment parentId={comment.id} postId={postId} />
        </div>

        {/* <div> */}
        {comment && comment.comments && comment.comments.length > 0 && comment.comments.map((comment) => <Comment key={`${comment.postId}-${comment.parentId}-${comment.id}`}  comment={comment} postId={postId} />)}
        {/* </div> */}
        
      </div>
    </div>
  );
};


export default Comment;
