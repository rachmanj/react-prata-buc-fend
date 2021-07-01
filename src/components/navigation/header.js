import React from 'react';
import { Link } from 'react-router-dom';

import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  offset: theme.mixins.toolbar,
}));

const Header = ({ users, signOutUser }) => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar styles={{ flex: '1' }}>
          <Typography variant="h5" color="inherit" style={{ flex: 1 }}>
            Pratasaba Resort
          </Typography>
          <Link to="/transactions" style={{ marginRight: '50px' }}>
            <Button variant="primary" style={{ color: 'white' }}>
              Maintenance
            </Button>
          </Link>
          <Link to="/assets" style={{ marginRight: '50px' }}>
            <Button variant="primary" style={{ color: 'white' }}>
              Assets
            </Button>
          </Link>
          <Link to="/materials" style={{ marginRight: '50px' }}>
            <Button variant="primary" style={{ color: 'white' }}>
              Materials
            </Button>
          </Link>
          <Link to="/categories" style={{ marginRight: '50px' }}>
            <Button variant="primary" style={{ color: 'white' }}>
              Categories
            </Button>
          </Link>
          <Button variant="primary" style={{ color: 'white' }}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
    </div>
  );
};

export default Header;
