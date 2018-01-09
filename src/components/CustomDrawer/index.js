import React from 'react';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import FlightIcon from 'material-ui-icons/Flight';
import PinDropIcon from 'material-ui-icons/PinDrop';
import SignOutIcon from 'material-ui-icons/PowerSettingsNew';
import UserIcon from 'material-ui-icons/PermIdentity';
import DealIcon from 'material-ui-icons/MonetizationOn';
import Divider from 'material-ui/Divider';

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
  },
  listFull: {
    width: 'auto'
  }
};

class TemporaryDrawer extends React.Component {
  state = {
    left: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          <ListItem button>
            <div className={classes.logo} />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemIcon>
              <FlightIcon />
            </ListItemIcon>
            <ListItemText primary="Price Alarms" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <PinDropIcon />
            </ListItemIcon>
            <ListItemText primary="Watchlist" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <UserIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DealIcon />
            </ListItemIcon>
            <ListItemText primary="Report a Deal" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemIcon>
              <SignOutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </div>
    );
    return (
      <div>
        <IconButton
          className={classes.menuButton}
          color="contrast"
          aria-label="Menu"
          onClick={this.toggleDrawer('left', true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          open={this.state.left}
          onClose={this.toggleDrawer('left', false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export const CustomDrawer = withStyles(styles)(TemporaryDrawer);
