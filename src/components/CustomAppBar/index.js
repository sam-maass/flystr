import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { CustomDrawer } from './CustomDrawer';
import BackIcon from '@material-ui/icons/ArrowBack';
import { withRouter } from 'react-router';
import IconButton from '@material-ui/core/IconButton';
import { styles } from '../../styles';

const style = {
  flex: {
    flex: 1
  },
  appBar: {
    position: 'sticky',
    backgroundColor: styles.colors.white,
    color: styles.colors.darkGray
  }
};

function ButtonAppBar(props) {
  const { classes, title, withDrawer = true, withReturn, history } = props;
  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        {withDrawer && !withReturn && <CustomDrawer />}
        {withReturn && (
          <IconButton onClick={() => history.goBack()}>
            <BackIcon color="inherit" />
          </IconButton>
        )}
        <Typography variant="title" color="inherit" className={classes.flex}>
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
  withReturn: PropTypes.bool
};

const RouterWrapper = withRouter(ButtonAppBar);

export const CustomAppBar = withStyles(style)(RouterWrapper);
