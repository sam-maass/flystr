import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

class AddRoutePanel extends Component {
  state = { value: '', helperText: '', error: false };
  handleChange = event => {
    this.setState({ value: event.target.value, error: false, helperText: '' });
  };
  addRoutes = () => {
    const [originsStr, destinationsStr] = this.state.value.split('-');
    if (!originsStr) {
      this.setState({ error: true, helperText: 'no origins found' });
      return;
    }
    if (!destinationsStr) {
      this.setState({ error: true, helperText: 'no destinations found' });
      return;
    }
    const origins = originsStr.split(',');
    const destinations = destinationsStr.split(',');
    if (origins.some(o => o.length !== 3)) {
      this.setState({ error: true, helperText: 'origins invalid' });
      return;
    }
    if (destinations.some(d => d.length !== 3)) {
      this.setState({ error: true, helperText: 'destinations invalid' });
      return;
    }
    const routes = [];
    origins.forEach(origin =>
      destinations.forEach(destination => routes.push({ origin, destination }))
    );
    this.props.addRoutes(routes);
  };
  render() {
    return (
      <div>
        <TextField
          label="New Routes"
          placeholder=""
          onChange={this.handleChange}
          helperText={this.state.helperText}
          error={this.state.error}
        />
        <Button variant="contained" color="primary" onClick={this.addRoutes}>
          Add Routes
        </Button>
      </div>
    );
  }
}

AddRoutePanel.propTypes = { addRoutes: PropTypes.func };

export default AddRoutePanel;
