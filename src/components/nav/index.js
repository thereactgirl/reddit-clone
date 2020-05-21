import React, { useState } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';

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

//icons
import SearchIcon from '@material-ui/icons/Search';
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

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  iconButton: {
    marginRight: theme.spacing(2),
    background: '#F24506',
    padding: 3
  },
  createPost: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    display: 'flex',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
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
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
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
  },
  coinIcon: {
      color: '#ddbd37',
      marginRight: 10,
  },
  gridContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
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
    alignItems: 'center'
  }
}));

const  Nav = () => {
  const classes = useStyles();
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

  const menuId = 'primary-search-account-menu';
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
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
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
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" color='light'>
        <Toolbar style={{ minHeight: '30px'}}>
            <Grid container className={classes.mainContainer}>
              <Grid item md={2} className={classes.gridPost}>
                  <Grid className={classes.gridItem}>
                      <IconButton
                      edge="start"
                      className={classes.iconButton}
                      aria-label="reddit logo"
                      >
                      <RedditIcon fontSize='large' color='primary' />
                      </IconButton>
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
          
              <Grid item md={5} className={classes.search}>
                  <div className={classes.searchIcon}>
                  <SearchIcon />
                  </div>
                  <InputBase
                  placeholder="Search…"
                  classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                  />
              </Grid>

              <Grid item md={1} className={classes.gridContainer}>
                  {/* <Grid item md={4} className={classes.gridItem}> */}
                      <IconButton>
                          <TrendingUpIcon />
                      </IconButton>
                  {/* </Grid> */}
                  {/* <Grid item md={4} className={classes.gridItem}> */}
                      <IconButton>
                          <EqualizerIcon />
                      </IconButton>
                  {/* </Grid> */}
                  {/* <Grid item md={4} className={classes.gridItem}> */}
                      <IconButton>
                          <FiberPinIcon />
                      </IconButton>
                  {/* </Grid> */}
              </Grid>

              <Divider orientation="vertical" flexItem />

              <Grid item md={1} className={classes.gridContainer}>
                  {/* <Grid item md={4} className={classes.gridItem}> */}
                      <IconButton>
                          <SmsRoundedIcon />
                      </IconButton>
                  {/* </Grid> */}
                  {/* <Grid item md={4} className={classes.gridItem}> */}
                      <IconButton aria-label="show 4 new mails" color="inherit">
                          <Badge badgeContent={4} color="secondary">
                              <MailIcon />
                          </Badge>
                      </IconButton>
                  {/* </Grid> */}
                  {/* <Grid item md={4} className={classes.gridItem}> */}
                      <IconButton>
                          <BorderColorIcon />
                      </IconButton>
                  {/* </Grid> */}
              </Grid>


              <Grid item md={1}>
                <div className={classes.getCoins}>
                  <CopyrightRoundedIcon fontSize="small" className={classes.coinIcon}/> 
                  <Typography>
                      Get Coins
                  </Typography>
                </div>
              </Grid>

              <Grid item md={1}>
                <IconButton
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
              </Grid>

              <div className={classes.sectionMobile}>
                <IconButton
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
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

export default Nav;