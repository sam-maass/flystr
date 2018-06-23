import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const linkStyle = {
  color: 'white',
  textDecoration: 'none'
};

const LoggedOutAppBar = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="title">
          <Link style={linkStyle} to="/">
            Flystr
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default LoggedOutAppBar;
