import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { AppBar } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import HomeIcon from '@material-ui/icons/Home';
import { IconButton } from '@material-ui/core';
import 'fontsource-roboto';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minHeight: 36,
    paddingBottom: theme.spacing(2),
  },
  toolbar: {
    minHeight: 50,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
    paddingBottom: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  icon: {
    alignSelf: 'flex-end',
    color: '#FFFFFF',
  },
}));

export default function Header() {
  const history = useHistory();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" height={'15%'}>
        <Toolbar className={classes.toolbar}></Toolbar>
        <Typography className={classes.title} variant="h4" noWrap>
          MyFakeBusiness
        </Typography>
        <IconButton
          aria-label="home"
          className={classes.icon}
          onClick={() => {
            history.push('/');
          }}
        >
          <HomeIcon fontSize="small" />
        </IconButton>
      </AppBar>
    </div>
  );
}
