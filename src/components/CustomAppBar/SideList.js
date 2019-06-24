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
import { UnstyledLink } from '../UnstyledLink';
import { ListItemLink } from '../LinkListItem';

const SideListComponent = ({ classes, user, logoutUser }) => {
  if (!user._id) {
    return (
      <div className={classes.list}>
        <List>
          <UnstyledLink to={'/'}>
            <ListItem button>
              <div className={classes.logo} />
            </ListItem>
          </UnstyledLink>
        </List>
        <Divider />
        <ListItemLink to={'/deals'} primary="Deals" icon={<DealsIcon />} />
        <ListItemLink to={'/about'} primary="Advantages" icon={<AboutIcon />} />
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
          <ListItemLink to={'/deals'} primary="Deals" icon={<DealsIcon />} />
          <ListItemLink to={'/trips'} primary="Watchlist" icon={<TripIcon />} />
          <ListItemLink
            to={'/settings'}
            primary="Settings"
            icon={<UserIcon />}
          />

          {user.isAdmin && (
            <Fragment>
              <Divider />
              <ListItem disabled button>
                <ListItemText primary="Admin Panel" />
              </ListItem>
              <ListItemLink
                to={'/admin/all-trips'}
                primary="All Trips"
                icon={<AllTripsIcon />}
              />
              <ListItemLink
                to={'/admin/users'}
                primary="Admin Users"
                icon={<AllTripsIcon />}
              />
              <ListItemLink
                to={'/admin/routes'}
                primary="Admin Routes"
                icon={<AllTripsIcon />}
              />
              <ListItemLink
                to={'/new-flight'}
                primary="Report a Deal"
                icon={<DealIcon />}
              />
              <Divider />
            </Fragment>
          )}
          <UnstyledLink to={'/deals'}>
            <ListItem button onClick={logoutUser}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </UnstyledLink>
        </List>
        <div className={classes.bottomItems}>
          {!isPremium(user) && (
            <Link to="/settings#premium">
              <ListItem>
                <Button fullWidth variant="contained" color="primary">
                  <span>
                    Try Premium <br />
                    <small>14 days free</small>{' '}
                  </span>
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
