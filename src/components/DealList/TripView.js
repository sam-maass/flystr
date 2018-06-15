import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const TripView = ({ children, trip }) => {
  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="headline">{trip.name}</Typography>
          <Typography variant="subheading">
            for max. {trip.budget} EUR
          </Typography>
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
