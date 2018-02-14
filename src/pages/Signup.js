import React from 'react';
import withStyles from 'material-ui/styles/withStyles';
import { PropTypes } from 'prop-types';
import Card from 'material-ui/Card/Card';
import CardContent from 'material-ui/Card/CardContent';
import CardHeader from 'material-ui/Card/CardHeader';
import { GoogleButton } from '../components/GoogleButton';
import CardActions from 'material-ui/Card/CardActions';
import Button from 'material-ui/Button/Button';
import Typography from 'material-ui/Typography/Typography';
import { colors } from 'material-ui';
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
