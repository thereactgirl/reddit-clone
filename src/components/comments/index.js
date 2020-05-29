import React, { useState } from "react";
import CreateComment from "./CreateComment";
import Comment from "./Comment";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 1020,
    },
    container: {
      marginTop: 15
    },
    avatar: {
        width: 50,
        borderRadius: '50%'
    }
  }))

const Comments = ({ postId, postComments }) => {
  const classes = useStyles();

  const [comments, setComments] = useState([postComments]);
    
  return (
    <div>
        {
        postComments.map((comment) => <Comment key={comment.postId} comment={comment} />)
        }
      <CreateComment />
    </div>
  );
};

export default Comments;
