import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { CustomDrawer } from '../CustomDrawer';

const styles = {
  flex: {
    flex: 1
  },
  appBar: {
    position: 'sticky'
  }
};

function ButtonAppBar(props) {
  const { classes, title } = props;
  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <CustomDrawer />
        <Typography type="title" color="inherit" className={classes.flex}>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string
};

export const CustomAppBar = withStyles(styles)(ButtonAppBar);
