import React from 'react';
import PropTypes from 'prop-types';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import FlightIcon from 'material-ui-icons/Flight';
import PinDropIcon from 'material-ui-icons/PinDrop';
import SignOutIcon from 'material-ui-icons/PowerSettingsNew';
import UserIcon from 'material-ui-icons/PermIdentity';
import DealIcon from 'material-ui-icons/MonetizationOn';
import Divider from 'material-ui/Divider';
import withStyles from 'material-ui/styles/withStyles';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../actions/userActions';
import { connect } from 'react-redux';

const SideListComponent = ({ classes, logoutUser }) => {
  const logoutWithJWT = () => {
    const jwt = window.localStorage.getItem('currentJWT');
    logoutUser(jwt);
  };
  return (
    <div className={classes.list}>
      <List>
        <Link to={'/'}>
          <ListItem button>
            <div className={classes.logo} />
          </ListItem>
        </Link>
        <Divider />
        <Link to={'/flights'}>
          <ListItem button>
            <ListItemIcon>
              <FlightIcon />
            </ListItemIcon>
            <ListItemText primary="Price Alarms" />
          </ListItem>
        </Link>
        <Link to={'/destinations'}>
          <ListItem button>
            <ListItemIcon>
              <PinDropIcon />
            </ListItemIcon>
            <ListItemText primary="Watchlist" />
          </ListItem>
        </Link>
        <Link to={'/profile'}>
          <ListItem button>
            <ListItemIcon>
              <UserIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
        </Link>
        <Link to={'/new-deal'}>
          <ListItem button>
            <ListItemIcon>
              <DealIcon />
            </ListItemIcon>
            <ListItemText primary="Report a Deal" />
          </ListItem>
        </Link>
        <Divider />
        <ListItem button onClick={logoutWithJWT}>
          <ListItemIcon>
            <SignOutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </div>
  );
};

SideListComponent.propTypes = {
  classes: PropTypes.object,
  logoutUser: PropTypes.func
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
    backgroundImage: 'url("/logo-dark.png")',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50%'
  },
  list: {
    width: 250
  }
};

export const SideList = connect(null, { logoutUser })(
  withStyles(styles)(SideListComponent)
);
