import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

//material ui
import {
    Container,
    InputBase,
    IconButton
} from '@material-ui/core';

import redditAvatar from '../../assets/redditAvatar.svg';
import ImageIcon from '@material-ui/icons/Image';
import AddBoxIcon from '@material-ui/icons/AddBox';

const useStyles = makeStyles((theme) => ({
  container: {
      marginTop: '15px',
    //   textAlign: 'center',
  },
  createPostContainer: {
      background: '#fff',
      width: '50%',
      display: 'flex',
      padding: 10,
      alignItems: 'center'
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
    margin: '0 5px'
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

const Posts = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
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

export default Posts;
