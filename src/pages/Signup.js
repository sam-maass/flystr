import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { PropTypes } from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { GoogleButton } from '../components/GoogleButton';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { colors } from '@material-ui/core';
import { Link } from 'react-router-dom';

const SignupPage = ({ classes }) => {
  return (
    <div className={classes.page}>
      <Card className={classes.card}>
        <CardHeader title="Sign up" subheader="Sign up with Google" />
        <CardContent>
          <GoogleButton action="signup" text="Sign up" />
        </CardContent>
        <CardActions className={classes.actions}>
          <div>
            <Typography className={classes.buttonText}>
              already a member?
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
};

SignupPage.propTypes = {
  classes: PropTypes.object
};

const styles = {
  noLink: { textDecoration: 'none' },
  page: {
    display: 'grid',
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
    color: colors.grey.A200
  }
};

export default withStyles(styles)(SignupPage);
