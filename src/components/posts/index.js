import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';

//redux 
import { connect } from 'react-redux';
import upvote from '../../redux/actions';

//material ui
import {
    Container,
    InputBase,
    IconButton
} from '@material-ui/core';

//components
import Post from "./Post";
import CreatePost from './CreatePost';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 15,
    maxWidth: '1120px',
  }
}))

const Posts = ({posts}) => {
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
    console.log(setTimeout);
    const indexClicked = postId -  1; // Used parseInt to convert from string
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
  };

  const downvotePost = postId => {
    console.log(setTimeout);
    const indexClicked = postId -  1;
    const newLikedArr = userVoted && userVoted.map((like, index) => {
      if (index === indexClicked) {
        return like ? false : true;
      } else {
        return like;
      }
    });
    setUserVoted(newLikedArr)
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
    setVoteCount(newLikesNumArr)
  };
  // const upvotePost = (postId) => {
  //   let post = posts.find((p) => p.id == postId);
  //   if (postId === post.id) {
  //     console.log(post)
  //     let newVotes = post.votes++;
  //     // setVotes(newVotes);
  //     return post.votes ++
  //     // return upvote(newVotes);
  //   }
  // }  

  return (
    <Container 
      classes={{
        root: classes.container
      }}
    >
    <CreatePost />
      {
        posts && posts.map((post, index) => <Post key={post.id} post={post} upvotePost={upvotePost} downvotePost={downvotePost} voteCount={voteCount[index]} />)
      }
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    posts: state.posts,
    // userLiked: state.userVoted
  }
}

const mapDispatchToProps =  {
  upvote
}
export default connect(mapStateToProps, mapDispatchToProps)(Posts);
