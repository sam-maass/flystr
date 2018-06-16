import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { api } from '../../settings';

export default class LaunchSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      checkbox: false,
      submitted: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    if (event.target) {
      const key = event.target.id;
      this.setState({ [key]: event.target.value || event.target.checked });
    }
  };

  handleSubmit = () => {
    if (this.state.checkbox) {
      api.post('/launchSignup', this.state);
      this.setState({
        submitted: true
      });
    }
  };

  render() {
    if (!this.state.submitted) {
      return (
        <div>
          {' '}
          <FormGroup column style={{ maxWidth: 400, margin: 'auto' }}>
            <TextField
              id="email"
              label="Email"
              value={this.state.email}
              onChange={this.handleChange}
              margin="normal"
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="checkbox"
                  checked={this.state.checkbox}
                  onChange={this.handleChange}
                />
              }
              label="I want to receive an email invitation when flystr is ready"
            />
            <Button
              variant="outlined"
              color="primary"
              disabled={!this.state.checkbox}
              onClick={this.handleSubmit}
            >
              Notify me when flystr is ready
            </Button>
          </FormGroup>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <Typography
            component="p"
            variant="button"
            style={{ textAlign: 'center' }}
          >
            <span role="img" label="check">
              ✔️
            </span>{' '}
            Thanks for your interest. You&#39;ll receive your invitation shortly
          </Typography>
        </div>
      );
    }
  }
}
