import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { PropTypes } from 'prop-types';
import Card from '@material-ui/core/Card/Card';
import CardContent from '@material-ui/core/CardContent';
import { GoogleButton } from '../components/GoogleButton';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import EmailForm from '../components/EmailForm';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { styles } from '../styles';

class SignupPage extends React.Component {
  state = { tocAccepted: false };
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  render() {
    const { classes } = this.props;
    const { tocAccepted } = this.state;
    return (
      <div className={classes.page}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="title"> Signup with Email</Typography>
            <EmailForm action="signup" tocAccepted={tocAccepted} />

            <br />
            <Typography color="textSecondary" variant="body1">
              or
            </Typography>
            <br />
            <GoogleButton
              action="signup"
              text="Signup with Google"
              tocAccepted={tocAccepted}
            />
            <p>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={tocAccepted}
                    onChange={this.handleChange('tocAccepted')}
                    value="tocAccepted"
                  />
                }
                label={
                  <p className={classes.tocSpan}>
                    I have read and accept the
                    <Link to="/terms">Terms and Conditions</Link> and{' '}
                    <Link to="/legal">Privacy Policy</Link> of Flystr
                  </p>
                }
              />
            </p>
          </CardContent>
          <CardActions className={classes.actions}>
            <div>
              <Typography className={classes.buttonText}>
                already a user
              </Typography>
              <Link className={classes.noLink} to="/login">
                <Button size="small" color="primary">
                  Login
                </Button>
              </Link>
            </div>
          </CardActions>
        </Card>
      </div>
    );
  }
}

SignupPage.propTypes = {
  classes: PropTypes.object
};

const style = {
  tocSpan: {
    textAlign: 'left',
    color: styles.colors.midGray
  },
  noLink: { textDecoration: 'none' },
  page: {
    display: 'grid',
    height: '100%',
    justifyItems: 'center',
    gridTemplateRows: '1fr 300px 1fr',
    gridTemplateColumns: '1fr 300px 1fr'
  },
  card: {
    gridRow: '2',
    gridColumn: '2',
    textAlign: 'center',
    width: '100%',
    height: 'min-content'
  },
  actions: {
    display: 'grid',
    justifyItems: 'end'
  },
  buttonText: {
    display: 'inline',
    color: styles.colors.midGray
  }
};

export default withStyles(style)(SignupPage);
