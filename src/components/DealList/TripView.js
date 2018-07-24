import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import moment from 'moment';

const TripView = ({ children, trip }) => {
  const subheaderData = getSubheaderString(trip);
  return (
    <div>
      <Card>
        <CardHeader
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={trip.name}
          subheader={subheaderData.join(' • ')}
        />
        <CardContent>
          <Typography>From: {trip.origins.join(' ,')}</Typography>
          <Typography>To: {trip.destinations.join(' ,')}</Typography>
          <Divider />
          <Typography />
          {trip.matchingDeals[0] ? (
            <div>
              <Typography>Found {trip.matchingDeals.length} trips</Typography>
              <Typography>
                From {Math.min(...trip.matchingDeals.map(deal => deal.price))} €
              </Typography>
            </div>
          ) : (
            <Typography>No Trips found, yet</Typography>
          )}
        </CardContent>
      </Card>
      {children}
    </div>
  );
};

TripView.propTypes = {
  children: PropTypes.array,
  trip: PropTypes.object
};

export default TripView;

function getSubheaderString(trip) {
  const budget = `max. ${trip.budget} EUR`;
  const subheaderData = [];
  if (trip.fromDuration) {
    subheaderData.push(getDurationString(trip));
  }
  subheaderData.push(getTimeframeString(trip));
  subheaderData.push(budget);
  return subheaderData;
}

function getDurationString(trip) {
  return trip.toDuration
    ? `${trip.fromDuration} - ${trip.toDuration} days`
    : `${trip.fromDuration} days`;
}

function getTimeframeString(trip) {
  const startMoment = moment(trip.endDate);
  const endMoment = moment(trip.startDate);
  const endsInSameYear = startMoment.isSame(endMoment, 'year');
  const defaultFormat = 'MMM YYYY';
  const startDateFormat = endsInSameYear ? 'MMM' : defaultFormat;
  const formattedStart = startMoment.format(startDateFormat);
  const formattedEnd = endMoment.format(defaultFormat);
  const dates = `${formattedStart}-${formattedEnd}`;
  return dates;
}
