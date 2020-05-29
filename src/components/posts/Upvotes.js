import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';

//icons
import upvote from '../../assets/upvote.svg';
import downvote from '../../assets/downvote.svg';

const useStyles = makeStyles((theme) => ({
    voteSectionWrapper: {
      display: 'block',
      width: 40,
      backgroundColor: "#F6F7F8",
    },
    voteSection: {
      // border: '1px solid red'
    },
    vote: {
      width: 15,
      margin: '20px 15px'
    },
    voteNumber: {
      fontSize: '12px',
      fontWeight: 700,
      textAlign: 'center'
    }
  }))

const Upvotes = ({voteCount, upvotePost, downvotePost, postId}) => {
  const classes = useStyles();
  return (
    <div className={classes.voteSectionWrapper}>
      <div
        className={classes.voteSection}
      >
        <div>
          <img className={classes.vote} src={upvote} alt='upvote' onClick={() => upvotePost(postId)}/>
          <p className={classes.voteNumber}>{voteCount}</p>
          <img className={classes.vote} src={downvote} alt='downvote' onClick={() => downvotePost(postId)}/>
        </div>
      </div>
    </div>
  )
};

export default Upvotes;
