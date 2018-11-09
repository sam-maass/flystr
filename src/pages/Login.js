import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { PropTypes } from 'prop-types';
import Card from '@material-ui/core/Card/Card';
import CardContent from '@material-ui/core/CardContent';
import { GoogleButton } from '../components/GoogleButton';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import colors from '../colors.js';
import { Link } from 'react-router-dom';
import EmailForm from '../components/EmailForm';

const LoginPage = ({ classes }) => {
  return (
    <div className={classes.page}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="title"> Login with Email</Typography>
          <EmailForm action="login" />
          <br />
          <Typography color="textSecondary" variant="body1">
            or
          </Typography>
          <br />
          <GoogleButton action="login" text="Login with Google" />
        </CardContent>
        <CardActions className={classes.actions}>
          <div>
            <Typography className={classes.buttonText}>
              new to flystr?
            </Typography>
            <Link className={classes.noLink} to="/signup">
              <Button size="small" color="primary">
                Sign up
              </Button>
            </Link>
          </div>
        </CardActions>
      </Card>
    </div>
  );
};

LoginPage.propTypes = {
  classes: PropTypes.object
};

const styles = {
  noLink: { textDecoration: 'none' },
  page: {
    display: 'grid',
    height: '100%',
    justifyItems: 'center',
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
    color: colors.grey.a200
  }
};

export default withStyles(styles)(LoginPage);
