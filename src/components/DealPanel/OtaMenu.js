import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreIcon from '@material-ui/icons/MoreHorizRounded';
import OutIcon from '@material-ui/icons/ExitToAppOutlined';
import { Divider, ListItemIcon, ListItemText } from '@material-ui/core';
import { createOtaLinks } from '../FlightTemplate/createOtaLinks';
import PropTypes from 'prop-types';

class OtaMenu extends React.Component {
  state = {
    anchorEl: null,
    links: []
  };

  componentDidMount() {
    const links = createOtaLinks(
      this.props.flight,
      this.props.flight.link,
      false
    );
    this.setState({ links });
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <>
        <MoreIcon
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        />
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem disabled>Compare Prices</MenuItem>
          <Divider />
          {this.state.links.map(link => (
            <a
              key={link.displayName}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MenuItem onClick={this.handleClose}>
                <ListItemIcon>
                  <OutIcon />
                </ListItemIcon>
                <ListItemText primary={link.displayName} />
              </MenuItem>
            </a>
          ))}
        </Menu>
      </>
    );
  }
}

OtaMenu.propTypes = {
  flight: PropTypes.object
};

export default OtaMenu;
