
import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import { 
  Typography
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    avatar: {
        height: '90%',
        width: '90%',
        borderRadius: '50%'
    },
    postHeader: {
      display: 'flex',
      alignItems: 'center',
      margin: '5px 0'

    },
    avatarWrapper: {
      height: '40px',
      width: '40px',
    },
    username: {
      marginRight: 15,
    },
    timestamp: {
      fontSize: 14,
      color: theme.palette.primary.dark
    }
  }))
  

const PostHeader = ({ post }) => {
    const classes = useStyles();

  return (
    <div className={classes.postHeader}>
      <div className={classes.avatarWrapper}>
        <img
          alt="post header"
          className={classes.avatar}
          src={post.thumbnailUrl}
        />
      </div>
      <Typography className={classes.username}>{post.username}</Typography>
      <Typography className={classes.timestamp}>{post.timestamp}</Typography>
    </div>
  );
};

export default PostHeader;
