import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Link } from 'react-router-dom';
import { getDurationString, getTimeframeString } from '../../utils';

const TripView = ({ children, trip }) => {
  const subheaderData = getSubheaderString(trip);
  return (
    <div>
      <Card>
        <CardHeader
          action={
            <Link to={`/trip/${trip._id}/edit`}>
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            </Link>
          }
          title={trip.name}
          subheader={subheaderData.join(' • ')}
        />
        <CardContent>
          <Typography>Departure Airports: {trip.origins.join(' ,')}</Typography>
          <Typography>
            Destination Airports: {trip.destinations.join(' ,')}
          </Typography>
          {trip.matchingDeals[0] ? (
            <div>
              <Typography>
                Found flights starting from:{' '}
                {Math.min(...trip.matchingDeals.map(deal => deal.price))} €
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
