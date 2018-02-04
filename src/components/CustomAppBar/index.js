import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { CustomDrawer } from './CustomDrawer';
import BackIcon from 'material-ui-icons/ArrowBack';
import { withRouter } from 'react-router';
import IconButton from 'material-ui/IconButton/IconButton';

const styles = {
  flex: {
    flex: 1
  },
  appBar: {
    position: 'sticky'
  }
};

function ButtonAppBar(props) {
  const { classes, title, withDrawer = true, withReturn, history } = props;
  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        {withDrawer && !withReturn && <CustomDrawer />}
        {withReturn &&
          <IconButton onClick={() => history.goBack()}>
            <BackIcon color="contrast"></BackIcon>
          </IconButton>
        }
        <Typography type="title" color="inherit" className={classes.flex}>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

ButtonAppBar.propTypes = {
  history: PropTypes.object,
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
  withDrawer: PropTypes.bool,
  withReturn: PropTypes.bool,
};

const RouterWrapper = withRouter(ButtonAppBar);

export const CustomAppBar = withStyles(styles)(RouterWrapper);
