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

const InnerAppBar = ({
  classes,
  withDrawer,
  withReturn,
  title,
  button,
  history,
  routing
}) => {
  const trackClick = () => {
    window.gtag('event', `${button.text} in AppBar clicked`);
  };
  const goBack = () => {
    if (routing.previousRoute) {
      history.push(routing.previousRoute);
    } else {
      switch (true) {
        case /deal\/s/.test(routing.currentRoute):
          history.push('/deals');
          break;
        default:
          history.push('/');
          break;
      }
    }
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
        {button && (
          <Link
            className={classes.noLink}
            to={button.link}
            onClick={trackClick}
          >
            <Button>{button.text}</Button>
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
};

InnerAppBar.propTypes = {};

InnerAppBar.propTypes = {
  setAppbar: PropTypes.func,
  history: PropTypes.object,
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
    title: store.appBar.title,
    withDrawer: store.appBar.withDrawer,
    withReturn: store.appBar.withReturn,
    button: store.appBar.button,
    routing: store.routing
  };
};

export default connect(mapStateToProps)(styledAppbar);
