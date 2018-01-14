import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Card, { CardContent } from 'material-ui/Card';
import withStyles from 'material-ui/styles/withStyles';
import Typography from 'material-ui/Typography/Typography';
import hash from 'string-hash';
import IconButton from 'material-ui/IconButton/IconButton';
import FavoriteIcon from 'material-ui-icons/FlightTakeoff';
import SettingsIcon from 'material-ui-icons/Settings';
const TripRow = ({
  classes,
  origins = [],
  startDate,
  endDate,
  matchingDeals,
  budget,
  destinations = []
}) => {
  const formattedStartDate = moment(startDate).format('DD.MM.YYYY');
  const formattedEndDate = moment(endDate).format('DD.MM.YYYY');
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
        <div className={classes.titleBar}>
          <Typography style={{ color: bg }} type="headline">
            <span>{destinations.join(',')}</span>
          </Typography>
          <div>
            <IconButton aria-label="See deals">
              {matchingDeals.length}
              <FavoriteIcon />
            </IconButton>

            <IconButton aria-label="See deals">
              <SettingsIcon />
            </IconButton>
          </div>
        </div>
        <Typography type="subheading">From {origins.join(',')}</Typography>
        <div className={classes.details}>
          <div>
            {formattedStartDate} - {formattedEndDate}
          </div>
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
  origins: PropTypes.arrayOf(PropTypes.string),
  matchingDeals: PropTypes.array
};

const styles = {
  titleBar: {
    display: 'grid',
    alignItems: 'center',
    gridTemplateColumns: '1fr max-content'
  },
  details: {
    marginTop: 16,
    display: 'grid',
    gridTemplateColumns: 'repeat(1,1fr)',
    color: '#888'
  }
};

export default withStyles(styles)(TripRow);
