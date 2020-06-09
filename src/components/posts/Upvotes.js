import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom';

//redux
import actions from '../../redux/main/actions';
import {connect} from 'react-redux';

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

const Upvotes = ({posts, postId, updateVoteCount, post, userVotedState, index}) => {
  const classes = useStyles();
  const [userVoted, setUserVoted] = useState(userVotedState);
  const [voteCount, setVoteCount] = useState([]);

  let location = useLocation();

  index = (typeof index === undefined) ?  location.state.index : index

  useEffect(() => {
  }, [post])


  const upvotePost = () => {
    if (!post.userVoted) {
      post.votes += 1;
      post.userVoted = !post.userVoted;
      addUpvote(post.votes);
    } else {
      // return
      post.votes -= 1;
      post.userVoted = !post.userVoted;

      addUpvote(post.votes)
    }
  };


  const addUpvote = (votes) => {
    updateVoteCount(postId, votes)
  };

  const downvotePost = () => {
    console.log(post)
    if (post.votes === 0 ) {
      return
    }
    if (!post.userVoted) {
      post.votes -= 1;
      post.userVoted = !post.userVoted;
      addDownvote(post.votes);
    } else {
      // return
      
      post.votes += 1;
      post.userVoted = !post.userVoted;

      addDownvote(post.votes)
    }
  };


  const addDownvote = (votes) => {
  
    updateVoteCount(postId, votes)
  };

  return (
    <div className={classes.voteSectionWrapper}>
      <div
        className={classes.voteSection}
      >
        <div>
          <img className={classes.vote} src={upvote} alt='upvote' onClick={() => upvotePost()}/>
          <p className={classes.voteNumber}>{post && post.votes}</p>
          <img className={classes.vote} src={downvote} alt='downvote' onClick={() => downvotePost()} />
        </div>
      </div>
    </div>
  )
};


const mapStateToProps = state => {
  return {
      userVotedState: state.main.userVoted,
      posts: state.main.posts,
  }
}

const mapDispatchToProps =  {
  updateVoteCount: actions.updateVoteCount
}
export default connect(mapStateToProps, mapDispatchToProps)(Upvotes);
