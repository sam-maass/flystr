import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { PropTypes } from 'prop-types';
import Card from '@material-ui/core/Card/Card';
import CardContent from '@material-ui/core/CardContent';
import { InnerSignupPage } from './InnerSignupPage';

const SignupPage = ({ classes }) => (
  <div className={classes.page}>
    <Card className={classes.card}>
      <CardContent>
        <InnerSignupPage />
      </CardContent>
    </Card>
  </div>
);

SignupPage.propTypes = {
  classes: PropTypes.object
};

const style = {
  page: {
    display: 'grid',
    height: '100%',
    gridTemplateColumns: '1fr 300px 1fr'
  },
  card: {
    gridRow: '2',
    gridColumn: '2',
    width: '100%',
    height: 'min-content'
  }
};

export default withStyles(style)(SignupPage);
