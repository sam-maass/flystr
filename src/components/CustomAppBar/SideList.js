import React from 'react';
import PropTypes from 'prop-types';
import List, {
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core/List';
import PinDropIcon from '@material-ui/icons/PinDrop';
import SignOutIcon from '@material-ui/icons/PowerSettingsNew';
import UserIcon from '@material-ui/icons/PermIdentity';
import DealIcon from '@material-ui/icons/MonetizationOn';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../actions/userActions';
import { connect } from 'react-redux';

const SideListComponent = ({ classes, logoutUser }) => {
  return (
    <div className={classes.list}>
      <List>
        <Link to={'/'}>
          <ListItem button>
            <div className={classes.logo} />
          </ListItem>
        </Link>
        <Divider />
        <Link to={'/trips'}>
          <ListItem button>
            <ListItemIcon>
              <PinDropIcon />
            </ListItemIcon>
            <ListItemText primary="My Trips" />
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
        <Link to={'/new-deal'}>
          <ListItem button>
            <ListItemIcon>
              <DealIcon />
            </ListItemIcon>
            <ListItemText primary="Report a Deal" />
          </ListItem>
        </Link>
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

export const SideList = connect(
  null,
  { logoutUser }
)(withStyles(styles)(SideListComponent));
