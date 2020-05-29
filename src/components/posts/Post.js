import React, { useState } from "react";

//components
import Comments from "../comments";
import Upvotes from "./Upvotes";
import PostHeader from "./PostHeader";

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    avatar: {
        width: 50,
        borderRadius: '50%'
    },
    imgBorder: {
      // position: "relative"
    },
    postImage: {
      width: 590,
    },
    postBorder: {
      display: 'flex',
      border: '1px solid lightgrey',
      background: '#fff',
      width: '60%', 
      minHeight: 500,
      margin: 10,
    },
    header: {
      position: 'absolute',
      right: 0,
    },
    post: {
      padding: 5,
    }
  }))


const Post = ({ post }) => {
  const classes = useStyles();
  const [votes, setVotes] = useState(post.votes);

  return (
    <div className={classes.postBorder}>
      <Upvotes votes={votes} />
      <div className={classes.post}>
        <PostHeader
          className={classes.header}
          username={post.username}
          thumbnailUrl={
            post.thumbnailUrl
          }
          post={post}
        />
        <div>{post.description}</div>
        <div className={classes.imgBorder}>
          <img
            alt="post thumbnail"
            className={classes.postImage}
            src={post.imageUrl}
          />
        </div>

        <Comments
          postId={post.imageUrl}
          postComments={post.comments}
        />
      </div>
    </div>
  );
};

export default Post;