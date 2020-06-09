import React, {useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

//material ui
import {
    InputBase,
    IconButton,
    Container
} from '@material-ui/core';

import redditAvatar from '../../assets/redditAvatar.svg';
import ImageIcon from '@material-ui/icons/Image';
import AddBoxIcon from '@material-ui/icons/AddBox';
import postUrl from '../../assets/postUrl.jpg';

//redux
import mainActions from '../../redux/main/actions';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  createPostContainer: {
    boxSizing: 'border-box',
    background: '#fff',
    width: '60%',
    display: 'flex',
    margin: 10,
    alignItems: 'center',
    border: '1px solid lightgrey',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    },
  },
  avatar: {
      borderRadius: '50%',
      margin: '10px',
  },
  inputRoot: {
    color: 'inherit',
    background: '#F6F7F8',
    height: '40px',
    width: '70%',
    margin: '0 5px',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    },
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  icon: {
      color: 'grey',
    //   margin: '0 15px'
  }
}))

const CreatePost = ({ username, createNewPost }) => {
  const classes = useStyles();

  const [postText, setPostText] = useState();

  const handleChange =  (e) => {
    setPostText(e.target.value)
  }


  const submitPost = (e) => {
    e.preventDefault();
    
    let newPost = {};
    newPost.id = Date.now();
    newPost.username = username;
    newPost.description = postText;
    newPost.comments = [];
    newPost.votes = 0;
    newPost.timestame = new Date().toLocaleString();
    newPost.imageUrl = postUrl;
    newPost.thumbnailUrl = redditAvatar;

    console.log('new post', newPost)
    return createNewPost(newPost)
  }

    return (
      <Container>
        <form className={classes.createPostContainer} onSubmit={submitPost}> 
          <img className={classes.avatar} src={redditAvatar} alt='reddit user avatar' />
          {/* <form> */}
            <InputBase
              placeholder="Create new post"
              value={postText}
              classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'create-post' }}
              onChange={handleChange}
            />
            <IconButton>
                <ImageIcon fontSize={'large'} className={classes.icon} />
            </IconButton>
            <IconButton type="submit">
                <AddBoxIcon fontSize={'large'} className={classes.icon} />
            </IconButton>
          {/* </form> */}
        </form>

      </Container>
           
    
    );
}

const mapStateToProps = state => {
  return {
     username: state.auth.username
  }
}

const mapDispatchToProps =  {
  createNewPost: mainActions.createNewPost
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);