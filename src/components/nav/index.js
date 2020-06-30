import React, { useState } from 'react';
import Search from './Search';

// react router
import { useHistory } from 'react-router-dom';

//redux
import actions from '../../redux/auth/actions';
import { connect } from 'react-redux';


//material ui 
import {
  AppBar,
  Container,
  Badge,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  Grid,
} from '@material-ui/core';

//styles 
import { useStyles } from './Styles';

//icons
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
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
import HomeIcon from '@material-ui/icons/Home';


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
      <AppBar className="not-scrolled" position="static" color='inherit'>
      <Container maxWidth="xlg">
        <Toolbar style={{ minHeight: '30px'}}>
            <Grid container className={classes.mainContainer}>
                 { history.location.pathname !== '/home' ?
              <Grid item sm={1} md={1} lg={4} className={classes.gridPost} onClick={goHome}>
                  <Grid className={classes.redditLogoWrapper} >
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
                          aria-label="home"
                          >
                          <HomeIcon color='secondary' />
                      </IconButton>
                  </Grid>
                  <Grid>
                      <Typography className={classes.createPost} variant="h6" noWrap>
                          Home
                      </Typography>
                  </Grid> 
                  </Grid>
                  : 
                  <Grid item sm={1} md={1} lg={4} className={classes.gridPost}>
                  <Grid className={classes.redditLogoWrapper} >
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
              }
          
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
          </Container>
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
