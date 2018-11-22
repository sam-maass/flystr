import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { CustomDrawer } from './CustomDrawer';
import BackIcon from '@material-ui/icons/ArrowBack';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router';
import { styles } from '../../styles';
import { logClick } from '../../utils/logClick';
import { StyledNotificationDrawer } from './NotificationDrawer';
import { ModalLink } from '../ModalLink';

const InnerAppBar = ({
  classes,
  withDrawer,
  withReturn,
  title,
  button,
  history,
  routing,
  user = {}
}) => {
  const goBack = () => {
    if (routing.previousRoute) {
      history.push(routing.previousRoute);
    } else {
      switch (true) {
        case /deal\//.test(routing.currentRoute):
          history.push('/deals');
          break;
        default:
          history.push('/');
          break;
      }
    }
  };
  const logSignup = () => {
    logClick('/signup', {
      category: `Header | Login/Signup Button`
    });
  };
  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        {withDrawer && !withReturn && <CustomDrawer />}
        {withReturn && (
          <IconButton onClick={() => goBack()}>
            <BackIcon color="inherit" />
          </IconButton>
        )}
        <Typography variant="title" color="inherit" className={classes.flex}>
          {title}
        </Typography>
        {button && button.name === 'loginButton' && (
          <ModalLink modal="signup" onClick={logSignup}>
            <Button variant="text" color="primary">
              Login / Signup
            </Button>
          </ModalLink>
        )}{' '}
        {button && button.name === 'editButton' && (
          <Link to={button.link}>
            <Button variant="text" color="primary">
              Edit
            </Button>
          </Link>
        )}
        {user._id && <StyledNotificationDrawer />}
      </Toolbar>
    </AppBar>
  );
};

InnerAppBar.propTypes = {};

InnerAppBar.propTypes = {
  setAppbar: PropTypes.func,
  history: PropTypes.object,
  user: PropTypes.object,
  button: PropTypes.object,
  routing: PropTypes.object,
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
  withDrawer: PropTypes.bool,
  withReturn: PropTypes.bool
};

const style = {
  flex: {
    flex: 1
  },
  appBar: {
    position: 'sticky',
    backgroundColor: styles.colors.white,
    color: styles.colors.darkGray
  },
  noLink: {
    textDecoration: 'none'
  }
};

const RouterWrapper = withRouter(InnerAppBar);

const styledAppbar = withStyles(style)(RouterWrapper);

const mapStateToProps = (store, props) => {
  return {
    ...props,
    user: store.user,
    title: store.appBar.title,
    withDrawer: store.appBar.withDrawer,
    withReturn: store.appBar.withReturn,
    button: store.appBar.button,
    routing: store.routing
  };
};

export default connect(mapStateToProps)(styledAppbar);
