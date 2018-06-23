import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import LogoContainer from '../LogoContainer';

const linkStyle = {
  color: 'white',
  textDecoration: 'none'
};

const LoggedOutAppBar = () => {
  return (
    <AppBar>
      <Toolbar>
        <Link style={linkStyle} to="/">
          <LogoContainer />
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default LoggedOutAppBar;
