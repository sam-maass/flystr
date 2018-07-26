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
import { connect } from 'react-redux';
import { setAppbar } from '../../actions/appbarActions';

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
  const {
    setAppbar,
    classes,
    title,
    _title,
    withDrawer = true,
    _withDrawer,
    _withReturn,
    withReturn,
    history
  } = props;

  const nextAppbar = {};
  nextAppbar.title = title || _title;
  nextAppbar.withDrawer = withDrawer;
  nextAppbar.withReturn = withReturn;

  setAppbar(nextAppbar);
  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        {_withDrawer && !_withReturn && <CustomDrawer />}
        {_withReturn && (
          <IconButton onClick={() => history.goBack()}>
            <BackIcon color="inherit" />
          </IconButton>
        )}
        <Typography variant="title" color="inherit" className={classes.flex}>
          {_title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

ButtonAppBar.propTypes = {
  setAppbar: PropTypes.func,
  history: PropTypes.object,
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
  _title: PropTypes.string,
  withDrawer: PropTypes.bool,
  _withDrawer: PropTypes.bool,
  withReturn: PropTypes.bool,
  _withReturn: PropTypes.bool
};

const RouterWrapper = withRouter(ButtonAppBar);

const CustomAppBarStyled = withStyles(style)(RouterWrapper);
const mapStateToProps = (store, props) => {
  return {
    ...props,
    _title: store.appBar.title,
    _withDrawer: store.appBar.withDrawer,
    _withReturn: store.appBar.withReturn
  };
};

export const CustomAppBar = connect(
  mapStateToProps,
  { setAppbar }
)(CustomAppBarStyled);
