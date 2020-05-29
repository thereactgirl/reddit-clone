import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        // 
    },
    text: {
      marginTop: 15
    },
  }))

const CommentInput = props => {
  const classes = useStyles();
  return (
    <form className={classes.root} onSubmit={props.submitComment}>
      <input
        type="text"
        value={props.comment}
        placeholder="Add comment... "
        onChange={props.changeComment}
      />
    </form>
  );
};

export default CommentInput;
