import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PinDropIcon from '@material-ui/icons/PersonPinCircleOutlined';
import SignOutIcon from '@material-ui/icons/PowerSettingsNew';
import LoginIcon from '@material-ui/icons/Input';
import UserIcon from '@material-ui/icons/PermIdentity';
import DealIcon from '@material-ui/icons/MonetizationOnOutlined';
import TakeOffIcon from '@material-ui/icons/FlightTakeoffOutlined';
import AllTripsIcon from '@material-ui/icons/List';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../actions/userActions';
import { connect } from 'react-redux';

const SideListComponent = ({ classes, user, logoutUser }) => {
  if (!user._id) {
    return (
      <div className={classes.list}>
        <List>
          <Link to={'/'}>
            <ListItem button>
              <div className={classes.logo} />
            </ListItem>
          </Link>
        </List>
        <Link to={'/deals'}>
          <ListItem button>
            <ListItemIcon>
              <TakeOffIcon />
            </ListItemIcon>
            <ListItemText primary="All Deals" />
          </ListItem>
        </Link>
        <Divider />
        <Link to={'/login'}>
          <ListItem button>
            <ListItemIcon>
              <LoginIcon />
            </ListItemIcon>
            <ListItemText primary="Login" />
          </ListItem>
        </Link>
      </div>
    );
  } else {
    return (
      <div className={classes.list}>
        <List>
          <Link to={'/'}>
            <ListItem button>
              <div className={classes.logo} />
            </ListItem>
          </Link>
          <Divider />
          <Link to={'/deals'}>
            <ListItem button>
              <ListItemIcon>
                <TakeOffIcon />
              </ListItemIcon>
              <ListItemText primary="All Deals" />
            </ListItem>
          </Link>
          <Link to={'/trips'}>
            <ListItem button>
              <ListItemIcon>
                <PinDropIcon />
              </ListItemIcon>
              <ListItemText primary="My Trips" />
            </ListItem>
          </Link>
          {user.isAdmin && (
            <Fragment>
              <Link to={'/admin/all-trips'}>
                <ListItem button>
                  <ListItemIcon>
                    <AllTripsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Triplist" />
                </ListItem>
              </Link>{' '}
              <Link to={'/settings'}>
                <ListItem button>
                  <ListItemIcon>
                    <UserIcon />
                  </ListItemIcon>
                  <ListItemText primary="Settings" />
                </ListItem>
              </Link>
              <Link to={'/new-flight'}>
                <ListItem button>
                  <ListItemIcon>
                    <DealIcon />
                  </ListItemIcon>
                  <ListItemText primary="Report a Deal" />
                </ListItem>
              </Link>
            </Fragment>
          )}
          <Divider />
          <ListItem button onClick={logoutUser}>
            <ListItemIcon>
              <SignOutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </div>
    );
  }
};

SideListComponent.propTypes = {
  classes: PropTypes.object,
  logoutUser: PropTypes.func,
  user: PropTypes.object
};

const styles = {
  logo: {
    marginLeft: 10,
    width: '80%',
    height: 30,
    maxWidth: 400,
    justifySelf: 'center',
    gridColumn: 2,
    gridRow: 1,
    backgroundImage: 'url("/logo-dark.svg")',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50%'
  },
  list: {
    width: 250
  }
};

const mapStateToProps = (store, props) => {
  return {
    ...props,
    user: store.user
  };
};

export const SideList = connect(
  mapStateToProps,
  { logoutUser }
)(withStyles(styles)(SideListComponent));
