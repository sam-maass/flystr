import React from 'react';
import withStyles from 'material-ui/styles/withStyles';
import { PropTypes } from 'prop-types';
import Card from 'material-ui/Card/Card';
import CardContent from 'material-ui/Card/CardContent';
import CardHeader from 'material-ui/Card/CardHeader';
import { LoginLogoutButton } from '../components/LoginLogutButton/index';
import CardActions from 'material-ui/Card/CardActions';
import Button from 'material-ui/Button/Button';
import Typography from 'material-ui/Typography/Typography';
import { colors } from 'material-ui';

const Login = ({ classes }) => {
  return (
    <div className={classes.page}>
      <Card className={classes.card}>
        <CardHeader title="Login" subheader="Login with Google" />
        <CardContent>
          <LoginLogoutButton />
        </CardContent>
        <CardActions className={classes.actions}>
          <div>
            <Typography className={classes.buttonText}>
              new to flystr?
            </Typography>
            <Button dense color="primary">
              Register
            </Button>
          </div>
        </CardActions>
      </Card>
    </div>
  );
};

Login.propTypes = {
  classes: PropTypes.object
};

const styles = {
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

export default withStyles(styles)(Login);
