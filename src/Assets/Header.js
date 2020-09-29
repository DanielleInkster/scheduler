import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { AppBar } from '@material-ui/core';
import 'fontsource-roboto';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Typography className={classes.title} variant="h5" noWrap>
          MyFakeBusiness
        </Typography>
      </AppBar>
    </div>
  );
}
