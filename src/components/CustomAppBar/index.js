import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { LoginLogoutButton } from '../LoginLogutButton';
import { CustomDrawer } from '../CustomDrawer';

const styles = {
  root: {
    width: '100%'
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

function ButtonAppBar(props) {
  const { classes, title } = props;
  return (
    <div className={classes.root}>
      <AppBar positionFixed>
        <Toolbar>
          <CustomDrawer />
          <Typography type="title" color="inherit" className={classes.flex}>
            {title}
          </Typography>
          <LoginLogoutButton />
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string
};

export const CustomAppBar = withStyles(styles)(ButtonAppBar);
