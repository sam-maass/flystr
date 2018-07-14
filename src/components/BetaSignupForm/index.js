import React from 'react';
import { css } from 'emotion';
import { classes, styles } from '../../styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styled from 'react-emotion';
import { api } from '../../settings';
import CheckIcon from '@material-ui/icons/Check';

const containerStyle = css`
  margin: auto;
  max-width: 400px;
  text-align: center;
`;

const Icon = styled(CheckIcon)`
  color: ${styles.colors.green3};
  font-size: 5em;
  margin-bottom: 8px;
`;

class BetaSignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', submitted: false };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    if (event.target) {
      const key = event.target.id;
      this.setState({ [key]: event.target.value });
    }
  };

  handleSubmit = () => {
    api().post('/launchSignup', this.state);
    this.setState({
      submitted: true
    });
  };

  render() {
    return (
      <div className={containerStyle}>
        {!this.state.submitted && (
          <div>
            <div className={classes.typography.base}>
              We&apos;re still in development, but you can be one of the first
              to get cheap flight notifications. Leave us an email and we will
              provide you with a beta login soon.
            </div>
            <TextField
              fullWidth
              id="email"
              label="Email"
              value={this.state.email}
              onChange={this.handleChange}
              margin="normal"
            />
            <Button
              color="secondary"
              fullWidth
              variant="contained"
              onClick={this.handleSubmit}
            >
              Try Flystr
            </Button>
          </div>
        )}
        {this.state.submitted && (
          <div className="thanks">
            <Icon />
            <br />
            <span className={classes.typography.title}>
              awesome <br /> thanks for signing up
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default BetaSignupForm;
