import React from "react";
import { makeStyles } from '@material-ui/core/styles';

//icons
import upvote from '../../assets/upvote.svg';
import downvote from '../../assets/downvote.svg';
import CommentIcon from '@material-ui/icons/Comment';

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

const Upvotes = ({votes}) => {
  const classes = useStyles();
  return (
    <div className={classes.voteSectionWrapper}>
      <div
        className={classes.voteSection}
      >
        <div>
          <img className={classes.vote} src={upvote} alt='upvote' />
          <p className={classes.voteNumber}>{votes}</p>
          <img className={classes.vote} src={downvote} alt='downvote' />
        </div>
      </div>
    </div>
  )
};

export default Upvotes;
