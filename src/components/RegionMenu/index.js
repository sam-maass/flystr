import React from 'react';
import { Button, Menu, MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { css } from 'emotion';
import ExpandMoreIcon from '@material-ui/icons/ExpandMoreOutlined';
import slugify from 'slugify';
import { api } from '../../settings';
import PropTypes from 'prop-types';

const style = css`
  display: grid;
  grid-column-start: 1;
  grid-column-end: -1;
  justify-content: center;
`;

class RegionMenu extends React.Component {
  static propTypes = {
    region: PropTypes.string
  };

  state = {
    anchorEl: null,
    regions: []
  };

  componentDidMount() {
    this.getRegions();
  }

  getRegions = async () => {
    const {
      data: { countries: regions }
    } = await api().get('/deals/countries');
    this.setState({ regions });
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl, regions } = this.state;
    const { region } = this.props;
    const buttonText = region
      ? `Flights from ${region.replace('-', ' ')}`
      : `Select Region`;
    return (
      <div className={style}>
        <Button
          variant="outlined"
          color="primary"
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          {buttonText}
          <ExpandMoreIcon>more</ExpandMoreIcon>
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {region && (
            <Link to={`/deals`} key={region}>
              <MenuItem onClick={this.handleClose}>All Regions</MenuItem>
            </Link>
          )}
          {regions.map(region => (
            <Link
              to={`/deals/from-${slugify(region || '', { lower: true })}`}
              key={region}
            >
              <MenuItem onClick={this.handleClose}>{region}</MenuItem>
            </Link>
          ))}
        </Menu>
      </div>
    );
  }
}

export { RegionMenu };
