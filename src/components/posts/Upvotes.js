import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';

//redux
import actions from '../../redux/actions';
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

const Upvotes = ({posts, postId, updateVoteCount, post}) => {
  const classes = useStyles();
  const [userVoted, setUserVoted] = useState([]);
  const [voteCount, setVoteCount] = useState([]);

  useEffect(() => {
    // return fetchData;
    const postVotes = posts.map(post => post.votes);
    const userLiked = postVotes.map(like => false);
    setUserVoted(userLiked);
    setVoteCount(postVotes)
  }, [posts])


  const upvotePost = postId => {
    const indexClicked = postId -  1; 
    const newLikedArr = userVoted && userVoted.map((like, index) => {
      if (index === indexClicked) {
        return like ? false : true;
      } else {
        return like;
      }
    });
    setUserVoted(newLikedArr)
    addUpvote(indexClicked);
  };


  const addUpvote = indexClicked => {
    const newLikesNumArr = voteCount.map((likeNums, numIndex) => {
      if (numIndex === indexClicked) {
        return !userVoted[numIndex]
          ? (likeNums += 1)
          : (likeNums -1);
      } else {
        return likeNums;
      }
    });
    setVoteCount(newLikesNumArr)
    updateVoteCount(postId, newLikesNumArr[indexClicked])
  };

  const downvotePost = postId => {
    const indexClicked = postId -  1;
    const newLikedArr = userVoted && userVoted.map((like, index) => {
      if (index === indexClicked) {
        return like ? false : true;
      } else {
        return like;
      }
    });
    setUserVoted(newLikedArr);
    addDownvote(indexClicked);
  };


  const addDownvote = indexClicked => {
    const newLikesNumArr = voteCount.map((likeNums, numIndex) => {
      if (numIndex === indexClicked) {
        return userVoted[numIndex]
          ? (likeNums -= 1)
          : (likeNums += 1);
      } else {
        return likeNums;
      }
    });
    setVoteCount(newLikesNumArr);
    let postId = indexClicked +1
    updateVoteCount(postId, newLikesNumArr[indexClicked])
  };

  return (
    <div className={classes.voteSectionWrapper}>
      <div
        className={classes.voteSection}
      >
        <div>
          <img className={classes.vote} src={upvote} alt='upvote' onClick={() => upvotePost(postId)}/>
          <p className={classes.voteNumber}>{post && post.votes}</p>
          <img className={classes.vote} src={downvote} alt='downvote' onClick={() => downvotePost(postId)}/>
        </div>
      </div>
    </div>
  )
};


const mapStateToProps = state => {
  return {
      posts: state.posts
  }
}

const mapDispatchToProps =  {
  updateVoteCount: actions.updateVoteCount
}
export default connect(mapStateToProps, mapDispatchToProps)(Upvotes);
