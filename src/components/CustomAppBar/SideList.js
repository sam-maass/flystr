import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TripIcon from '@material-ui/icons/MapOutlined';
import LogoutIcon from '@material-ui/icons/LockOutlined';
import LoginIcon from '@material-ui/icons/LockOpenOutlined';
import UserIcon from '@material-ui/icons/PermIdentity';
import DealIcon from '@material-ui/icons/MonetizationOnOutlined';
import DealsIcon from '@material-ui/icons/LocalAirportOutlined';
import AllTripsIcon from '@material-ui/icons/List';
import AboutIcon from '@material-ui/icons/DescriptionOutlined';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../actions/userActions';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { ModalLink } from '../ModalLink';

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
        <Divider />
        <Link to={'/deals'}>
          <ListItem button>
            <ListItemIcon>
              <DealsIcon />
            </ListItemIcon>
            <ListItemText primary="All Deals" />
          </ListItem>
        </Link>
        <Link to={'/about'}>
          <ListItem button>
            <ListItemIcon>
              <AboutIcon />
            </ListItemIcon>
            <ListItemText primary="About Flystr" />
          </ListItem>
        </Link>
        <ModalLink modal="signup">
          <ListItem button>
            <ListItemIcon>
              <LoginIcon />
            </ListItemIcon>
            <ListItemText primary="Login / Signup" />
          </ListItem>
        </ModalLink>
        <div className={classes.bottomItems}>
          <Divider />
          <Link to="/terms">
            <ListItem button>
              <ListItemText secondary="Terms & Conditions" />
            </ListItem>
          </Link>
          <Link to="/legal">
            <ListItem button>
              <ListItemText secondary="Privacy" />
            </ListItem>
          </Link>
        </div>
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
                <DealsIcon />
              </ListItemIcon>
              <ListItemText primary="Deals" />
            </ListItem>
          </Link>
          <Link to={'/trips'}>
            <ListItem button>
              <ListItemIcon>
                <TripIcon />
              </ListItemIcon>
              <ListItemText primary="Watchlist" />
            </ListItem>
          </Link>
          <Link to={'/settings'}>
            <ListItem button>
              <ListItemIcon>
                <UserIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
          </Link>
          {user.isAdmin && (
            <Fragment>
              <Divider />
              <ListItem disabled button>
                <ListItemText primary="Admin Panel" />
              </ListItem>
              <Link to={'/admin/all-trips'}>
                <ListItem button>
                  <ListItemIcon>
                    <AllTripsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Triplist" />
                </ListItem>
              </Link>{' '}
              <Link to={'/admin/users'}>
                <ListItem button>
                  <ListItemIcon>
                    <UserIcon />
                  </ListItemIcon>
                  <ListItemText primary="Admin Users" />
                </ListItem>
              </Link>{' '}
              <Link to={'/new-flight'}>
                <ListItem button>
                  <ListItemIcon>
                    <DealIcon />
                  </ListItemIcon>
                  <ListItemText primary="Report a Deal" />
                </ListItem>
              </Link>
              <Divider />
            </Fragment>
          )}
          <Link to={'/deals'}>
            <ListItem button onClick={logoutUser}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </Link>
        </List>
        <div className={classes.bottomItems}>
          {!isPremium(user) && (
            <Link to="/settings#premium">
              <ListItem>
                <Button fullWidth variant="contained" color="primary">
                  Upgrade to Premium
                </Button>
              </ListItem>
            </Link>
          )}
          <Divider />
          <Link to="/terms">
            <ListItem button>
              <ListItemText secondary="Terms & Conditions" />
            </ListItem>
          </Link>
          <Link to="/legal">
            <ListItem button>
              <ListItemText secondary="Privacy" />
            </ListItem>
          </Link>
        </div>
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
  },
  bottomItems: {
    position: 'absolute',
    bottom: 0,
    width: '100%'
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

function isPremium(user) {
  return (user.stripeSubscription || {}).id;
}
