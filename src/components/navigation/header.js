import React from 'react';

import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  offset: theme.mixins.toolbar,
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar styles={{ flex: '1' }}>
          <Typography variant="h5" styles={{ flex: '1' }}>
            Pratasaba Resort
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
    </div>
  );
};

export default Header;
