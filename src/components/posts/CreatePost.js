import React from 'react';
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

const CreatePost = () => {
    const classes = useStyles();

    return (
      <Container>
        <div className={classes.createPostContainer}> 
          <img className={classes.avatar} src={redditAvatar} alt='reddit user avatar' />
          <InputBase
            placeholder="Create new post"
            classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
          <IconButton>
              <ImageIcon fontSize={'large'} className={classes.icon} />
          </IconButton>
          <IconButton>
              <AddBoxIcon fontSize={'large'} className={classes.icon} />
          </IconButton>
        </div>

      </Container>
           
    
    );
}

export default CreatePost;