import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Card, { CardContent } from 'material-ui/Card';
import withStyles from 'material-ui/styles/withStyles';
import Typography from 'material-ui/Typography/Typography';
import hash from 'string-hash';

const TripRow = ({
  classes,
  origins = [],
  startDate,
  endDate,
  budget,
  destinations = []
}) => {
  const formattedStartDate = moment(startDate).format('DD.MM.YYYY');
  const dest = destinations.join();
  const colors = [
    '#F44336',
    '#E91E63',
    '#9C27B0',
    '#673AB7',
    '#3F51B5',
    '#2196F3',
    '#03A9F4',
    '#00BCD4',
    '#009688',
    '#4CAF50',
    '#8BC34A',
    '#CDDC39',
    '#FFEB3B',
    '#FFC107',
    '#FF9800',
    '#FF5722'
  ];
  const bghash = hash(dest) % colors.length;
  const bg = colors[bghash];
  const days = moment(endDate).diff(moment(startDate), 'days');
  return (
    <Card>
      <CardContent>
        <Typography style={{ color: bg }} type="headline">
          {destinations.join(',')}
        </Typography>
        <Typography type="subheading">From {origins.join(',')}</Typography>
        <div className={classes.details}>
          <div>{formattedStartDate}</div>
          <div>max {days} days</div>
          <div>max {budget} €</div>
        </div>
      </CardContent>
    </Card>
  );
};

TripRow.propTypes = {
  classes: PropTypes.object,
  status: PropTypes.string,
  startDate: PropTypes.string,
  budget: PropTypes.string,
  destinations: PropTypes.arrayOf(PropTypes.string),
  origins: PropTypes.arrayOf(PropTypes.string)
};

const styles = {
  details: {
    marginTop: 16,
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    color: '#888'
  }
};

export default withStyles(styles)(TripRow);
