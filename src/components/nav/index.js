import React, { useState } from 'react';
import Search from './Search';

// react router
import { Link, useHistory } from 'react-router-dom';

//redux
import actions from '../../redux/auth/actions';
import { connect } from 'react-redux';


//material ui 
import {
  AppBar,
  Badge,
  Divider,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  Grid,
} from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';

//icons
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import RedditIcon from '@material-ui/icons/Reddit';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import FiberPinIcon from '@material-ui/icons/FiberPin';
import SmsRoundedIcon from '@material-ui/icons/SmsRounded';
import CopyrightRoundedIcon from '@material-ui/icons/CopyrightRounded';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SettingsIcon from '@material-ui/icons/Settings';
import RedditLogo from '../../assets/Reddit_logo.png';
import redditAvatar from '../../assets/redditAvatar.svg';
import karma from '../../assets/karma.svg';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  iconButton: {
    marginRight: theme.spacing(2),
    background: '#F24506',
    padding: 3
  },
  hide: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    borderRadius: '4px 4px 0 0',
    border: '1px solid ghostwhite',
    padding: '4px 4px',
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  getCoins: {
    display:'-ms-flexbox',
    display: 'flex',
    '-ms-flex-align': 'center',
    alignItems: 'center',
    padding: '7px 16px 7px 12px',
    borderRadius: '9999px',
    color: 'var(--newRedditTheme-bodyText)',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    border: '1px solid #ddbd37',
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '16px',
    fontSize: '13px',
    width: 'max-content',
    margin: '0 auto',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  coinIcon: {
      color: '#ddbd37',
      marginRight: 10,
  },
  getCoinsText: {
    [theme.breakpoints.down('md')]: {
      // display: 'none',
    },
  },
  gridContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
  },
  mdScreen: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
},
  gridPost: {
    display: 'flex',
    alignItems: 'center',
  },
  gridItem: {
      margin: '0 10px',
  },
  mainContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'nowrap'
  },
  redditLogoWrapper: {
    margin: '0 10% 0 0',
    display: 'flex',
    alignItems: 'center'
  },
  redditLogo: {
    display: 'none',
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
    },
  },
  createPost: {
    display: 'none',
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
    },
  },
  userMenu : {
    width: 'max-content',
    borderRadius: '5px',
    height: '41px',
    display: 'flex',
    justifyContent: 'space-between',
    padding: 0,
    marginLeft: '-5px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
      border: '1px solid gainsboro',
    },
  },
  tiny: {
    fontSize: '.75rem',
    fontWeight: 500,
    margin: 0,
   },
  tiny2: {
    color: '#a8aaab',
    fontSize: '.75rem',
    margin: 0,
  },
  tinyWrapper: {
    display: 'flex',
    flexDirection: 'column'
  },
  karma: {
    width: 12,
    margin: 2,
    verticalAlign: 'bottom'
  }
}));

const  Nav = ({doLogout, username}) => {
  const classes = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const goHome = () => {
    history.push('/home')
  }
  const menuId = 'menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={doLogout}>
        <IconButton
          aria-label="sign out"
          aria-controls="menu"
          aria-haspopup="true"
          color="inherit"
          // onClick={doLogout}
        >
          <AccountCircle />
        </IconButton>
        <p>Sign Out</p>
      </MenuItem>      
      <MenuItem>
        <IconButton
           aria-label="account settings of current user"
           aria-controls="menu"
           aria-haspopup="true"
           color="inherit"
        >
          <SettingsIcon />
        </IconButton>
        <p>User Settings</p>
      </MenuItem> 
    </Menu>
  );

  const mobileMenuId = 'menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounteddo
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem>
        <IconButton
           aria-label="account settings of current user"
           aria-controls="menu"
           aria-haspopup="true"
           color="inherit"
        >
          <SettingsIcon />
        </IconButton>
        <p>User Settings</p>
      </MenuItem> 
       <MenuItem onClick={doLogout}>
        <IconButton
          aria-label="sign out"
          aria-controls="menu"
          aria-haspopup="true"
          color="inherit"
          // onClick={doLogout}
        >
          <AccountCircle />
        </IconButton>
        <p>Sign Out</p>
      </MenuItem>      
  
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" color='inherit'>
        <Toolbar style={{ minHeight: '30px'}}>
            <Grid container className={classes.mainContainer}>
              <Grid item sm={1} md={1} lg={4} className={classes.gridPost}>
                  <Grid className={classes.redditLogoWrapper} onClick={goHome}>
                      <IconButton
                        edge="start"
                        className={classes.iconButton}
                        aria-label="reddit logo"
                      >
                      <RedditIcon fontSize='large' color='primary' />
                      </IconButton>
                      <img className={classes.redditLogo} src={RedditLogo} alt='spelled out reddit logo' />
                  </Grid>
                  <Grid>
                      <IconButton
                          edge="start"
                          className={classes.createPostIcon}
                          aria-label="create post icon"
                          >
                          <BorderColorIcon color='secondary' />
                      </IconButton>
                  </Grid>
                  <Grid>
                      <Typography className={classes.createPost} variant="h6" noWrap>
                          Create Post
                      </Typography>
                  </Grid>
              </Grid>
          
              <Grid item xs={8} sm={5} md={4} lg={6}>
                <Search />
              </Grid>

              <Grid item sm={2} md={2} lg={2} className={classes.gridContainer} onClick={goHome}>
                      <IconButton>
                          <TrendingUpIcon />
                      </IconButton>
                      <IconButton>
                          <EqualizerIcon />
                      </IconButton>
                      <IconButton>
                          <FiberPinIcon />
                      </IconButton>
              </Grid>

              <Divider orientation="vertical" flexItem className={classes.hide} />

              <Grid item md={2} lg={1} className={classes.mdScreen}>
                      <IconButton onClick={goHome}>
                          <SmsRoundedIcon />
                      </IconButton>
                      <IconButton aria-label="show 4 new mails" color="inherit" onClick={goHome}>
                          <Badge badgeContent={4} color="secondary">
                              <MailIcon />
                          </Badge>
                      </IconButton>
                      <IconButton>
                          <BorderColorIcon />
                      </IconButton>
              </Grid>


              <Grid item md={2} lg={3}>
                <div className={classes.getCoins} onClick={goHome}>
                  <CopyrightRoundedIcon fontSize="small" className={classes.coinIcon}/> 
                  <Typography className={classes.getCoinsText}>
                      Get Coins
                  </Typography>
                </div>
              </Grid>

              <Grid item md={1} lg={2}>
                <IconButton
                    className={classes.userMenu}
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit"
                >
                    <img src={redditAvatar} alt='reddit user avatar' />
                    <div className={classes.tinyWrapper}>
                      <p className={classes.tiny}>{username}</p>
                      <p className={classes.tiny2}>
                        <img src={karma} className={classes.karma} />
                        1 karma
                      </p>
                    </div>

                    <ArrowDropDownIcon />
                </IconButton>
              </Grid>

              <div className={classes.sectionMobile}>
                <IconButton
                      // className={classes.userMenu}
                      edge="end"
                      aria-label="account of current user"
                      aria-controls={menuId}
                      aria-haspopup="true"
                      onClick={handleMobileMenuOpen}
                      color="inherit"
                  >
                      <img src={redditAvatar} alt='reddit user avatar' />
                    
                      <ArrowDropDownIcon />
                  </IconButton>
              </div>

            </Grid>
          </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}


const mapStateToProps = state => {
  return {
     username: state.auth.username
  }
}

const mapDispatchToProps =  {
  doLogout: actions.doLogout
}
export default connect(mapStateToProps, mapDispatchToProps)(Nav);
